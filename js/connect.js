async function initWeb3() {
  if (typeof window.ethereum !== "undefined") {
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.error("error", error);
    }
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.frax.com"));
    console.log("");
  }
  return web3;
}

let web3;
let CycnusConnect;
let CycnusVideo;

async function initContract() {
  CycnusConnect = new web3.eth.Contract(contractAbi, contractAddress);
  CycnusVideo = new web3.eth.Contract(upcontractAddress, upcontractAddress);
}

async function connectWallet() {
  await singleconnect();
  await swap();
  initContract();
  useimage();
  signMessage();
  imageUpChain();
}

async function singleconnect() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      console.log(accounts[0]);
    } catch (error) {
      console.error(error);
      console.log("Failed to connect to wallet.");
    }
  } else {
    console.log("No wallet detected.");
  }
}

async function swap() {
  const chainId = "0xfc";
  const rpcUrl = "https://rpc.frax.com";
  const chainName = "Fraxtal";
  const nativeCurrency = {
    name: "FrxETH",
    symbol: "frxETH",
    decimals: 18,
  };
  const blockExplorerUrl = "https://rpc.frax.com";
  const currentChainId = await ethereum.request({ method: "eth_chainId" });
  if (currentChainId !== chainId) {
    try {
      await ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: chainId,
            chainName: chainName,
            nativeCurrency: nativeCurrency,
            rpcUrls: [rpcUrl],
            blockExplorerUrls: [blockExplorerUrl],
          },
        ],
      });
      console.log(`Network added successfully: ${chainName}`);
    } catch (addError) {
      console.error("Error adding network:", addError);
    }
  }
}

async function useimage() {
  const accounts = await web3.eth.getAccounts();
  if (accounts.length > 0) {
    const walletAddressContainer =
      document.getElementById("WalletAddressImage");
    walletAddressContainer.src =
      "https://api.dicebear.com/9.x/pixel-art/svg?seed=" + accounts[0];
    const shortenedAddress = `${accounts[0].slice(0, 5)}...${accounts[0].slice(
      -5
    )}`;
    document.getElementById("walletAddress").textContent = shortenedAddress;
  }
}

async function signMessage() {
  try {
    const accounts = await web3.eth.getAccounts();
    const message = "Welcome to Cycnus. ";
    await web3.eth.personal.sign(message, accounts[0], "");
  } catch (error) {
    console.error("Error signing message:", error);
  }
}

async function imageUpChain() {
  let TF = await TorF();
  if (!TF) {
    try {
      const accounts = await web3.eth.getAccounts();
      const gasPrice = await web3.eth.getGasPrice();
      const uurl =
        "https://api.dicebear.com/9.x/pixel-art/svg?seed=" + accounts[0];
      await CycnusConnect.methods
        .connect(accounts[0], uurl)
        .send({ from: accounts[0], gas: 50000, gasPrice: gasPrice });
    } catch (error) {
      console.error("not up chain!", error);
    }
  }
}

async function TorF() {
  const accounts = await web3.eth.getAccounts();
  let result = await CycnusConnect.methods.isConnected(accounts[0]).call();
  return result;
}