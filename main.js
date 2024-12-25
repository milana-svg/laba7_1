let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset +=256;
    if(offset > 790){
        offset = 0;
    }
    sliderLine.style.left = -offset +'px';

});
document.querySelector('.slider-prev').addEventListener('click', function(){
    offset -=256;
    if(offset < 0){
        offset = 790;
    }
    sliderLine.style.left = -offset +'px';

});

let offset1 = 0;
const sliderLine1 = document.querySelector('.slider-line1');

document.querySelector('.slider-next1').addEventListener('click', function(){
    offset1 +=256;
    if(offset1 > 790){
        offset1 = 0;
    }
    sliderLine1.style.left = -offset1 +'px';

});
document.querySelector('.slider-prev1').addEventListener('click', function(){
    offset1 -=256;
    if(offset1 < 0){
        offset1 = 790;
    }
    sliderLine1.style.left = -offset1 +'px';

});

let offset2 = 0;
const sliderLine2 = document.querySelector('.slider-line2');

document.querySelector('.slider-next2').addEventListener('click', function(){
    offset2 +=256;
    if(offset2 > 790){
        offset2 = 0;
    }
    sliderLine2.style.left = -offset2 +'px';

});
document.querySelector('.slider-prev2').addEventListener('click', function(){
    offset2 -=256;
    if(offset2 < 0){
        offset2 = 790;
    }
    sliderLine2.style.left = -offset2 +'px';

});