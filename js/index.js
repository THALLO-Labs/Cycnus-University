document.addEventListener('DOMContentLoaded', () => {
    const switchHeaders = document.querySelectorAll('.switch-header');
    const fixedImage = document.getElementById('fixedImage');
    const imagePaths = ['/images/matrix.png', '/images/paiStar.jpg', '/images/matrix.png'];

    switchHeaders.forEach((header, index) => {
        header.addEventListener('click', () => {
            console.log('Click event triggered');
            
            // Remove 'active' class from all headers
            switchHeaders.forEach(h => h.classList.remove('active'));
            
            // Add 'active' class to the clicked header
            header.classList.add('active');
            
            // Change the image source based on the clicked header
            fixedImage.src = imagePaths[index];
        });
    });
});
