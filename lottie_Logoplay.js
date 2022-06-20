const svgContainer = document.getElementById('svg');
const animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets5.lottiefiles.com/private_files/lf30_dssw4som.json'
});
animItem.play();