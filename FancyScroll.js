const html = document.documentElement;
const canvas = document.querySelector('.fcontainer');
const context = canvas.getContext("2d");

 // do some drawing


  // do some more drawing
//   context.setTransform(-1, 0, 0, 1, 200, 200);
  // do some drawing with the new transform

  // draw more, still using the preserved transform
const currentFrame = index => { 
    return `../assets/img/flame${index.toString().padStart(2, '0')}.png`;
    
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

const cleanCanvas = index => { 
    img.src = currentFrame(index);
    context.clearRect(0, 0,canvas.width,canvas.height);
}

window.addEventListener('scroll', () => { 
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
    // context.clearRect(0, 0, canvas.width, canvas.height);
    cleanCanvas(frameIndex);

    // console.log(maxScrollTop);

    requestAnimationFrame(() => {
       
        updateImage(frameIndex + 1);
        
    })
    
    
})

