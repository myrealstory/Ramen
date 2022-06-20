const html = document.documentElement;
const canvas = document.querySelector('.fcontainer');
const context = canvas.getContext('2d');

const currentFrame = index => { 
    `./assets/img/flame${index.toString().padStart(1,'0')}.png`
}

const frameCount = 59;
canvas.height = 480;
canvas.width = 854;
const img = new Image();
img.src = currentFrame(1);

// console.log(img);

img.onload = function () { 
    context.drawImage(img,0,0)
}

const updateImage = index => { 
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => { 
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));

    // console.log(maxScrollTop);

    requestAnimationFrame(() => { 
        updateImage(frameIndex +1);
    })
})