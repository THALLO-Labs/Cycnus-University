async function videoUpChain() {
  const connection = await pool.promise().getConnection();
  const query = "SELECT hex, url, price FROM videos ORDER BY id DESC LIMIT 1;";
  const [rows] = await connection.query(query);
  const videoData = rows[0];

  const hex256 = videoData.hex;
  const videoUrl = videoData.url;
  const price = videoData.price;

  const accounts = await web3.eth.getAccounts();
  const gasPrice = await web3.eth.getGasPrice();
  const eth = 10 ** 18;
  const eprice = price * eth;
  await CycnusVideo.methods.up(hex256, accounts[0], videoUrl, eprice).send({
    from: accounts[0],
    gas: 50000,
    gasPrice: gasPrice,
  });
}

async function buyVideoChain(hex256) {
  let VTF = await viewTF(hex256);
  if (!VTF) {
    const accounts = await web3.eth.getAccounts();
    const gasPrice = await web3.eth.getGasPrice();
    const eth = 10 ** 18;
    const allPrice = 2 * eth * (await CycnusVideo.methods.hashToVideo(hex256).call()).price;
    await CycnusVideo.methods.buy(hex256, accounts[0]).send({
      from: accounts[0],
      value: allPrice,
      gas: 50000,
      gasPrice: gasPrice,
    });
  } else {
    console("You have already access to this video!");
  }
}

async function viewTF(hex256) {
  const accounts = await web3.eth.getAccounts();
  let VTF = await CycnusVideo.methods.isViewShip(hex256, accounts[0]).call();
  return VTF;
}