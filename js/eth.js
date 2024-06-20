// 获取所有的 thirdPage2 元素
const thirdPage2Elements = document.querySelectorAll('.thirdPage2');
let xxbox1 = document.querySelectorAll('.ssbox');
	
// 为每个 thirdPage2 元素添加点击事件监听器
thirdPage2Elements.forEach((element, index) => {
    element.addEventListener('click', () => {
        // 查找当前 thirdPage2 元素后面的 .thirdPage2-1 元素
        let nextElement = element.nextElementSibling;
        console.log(element);
        console.log(nextElement);
        while (nextElement && !nextElement.classList.contains('thirdPage2')) {
            if (nextElement.classList.contains('thirdPage2-1')) {
                // 切换显示和隐藏
                if (nextElement.style.display === 'grid') {
                    if (element.classList.contains('no-margin')) {
                        element.classList.remove('no-margin');
                        element.classList.add('margin-bottom-5');
                    }
                    nextElement.style.display = 'none'
                    

                } else {
                    nextElement.style.display = 'grid'
                    if (element.classList.contains('margin-bottom-5')) {
                        element.classList.toggle('no-margin');
                    }
                }
                // nextElement.style.display = nextElement.style.display === 'grid' ? 'none' : 'grid';
                
            }
            nextElement = nextElement.nextElementSibling;
        }
    });
});

const sbox = document.querySelectorAll('.sbox');
sbox.forEach((element, index) => {
    element.addEventListener('click', () => {
        // 查找当前 thirdPage2 元素后面的 .thirdPage2-1 元素
        let nextElement1 = element.nextElementSibling;
        while (nextElement1 && !nextElement1.classList.contains('sbox')) {
            if (nextElement1.classList.contains('ssbox')) {
                // 切换显示和隐藏
                nextElement1.style.display = nextElement1.style.display === 'flex' ? 'none' : 'flex';
            }
            nextElement1 = nextElement1.nextElementSibling;
        }
    });
});




        