let activeElement = 0;

const colorImgHtml = document.querySelector('.color');
const darkImgHtml = document.querySelector('.dark');
const h1Html = document.querySelector('.flower h1');
const h2Html = document.querySelector('.flower h2');

const colorImages = ['img/bez1.jpg', 'img/kaczence1.jpg', 'img/roza1.jpg'];
const darkImages = ['img/bez2.jpg', 'img/kaczence2.jpg', 'img/roza2.jpg'];
const flowers = ['bez', 'kaczeńce', 'róża'];
const colorNames = ['fioletowy', 'żółty', 'różowy'];

function changeElement() {
    activeElement++;
    if (activeElement == colorImages.length) {
        activeElement = 0;
    }
    colorImgHtml.src = colorImages[activeElement];
    darkImgHtml.src = darkImages[activeElement];
    h1Html.textContent = flowers[activeElement];
    h2Html.textContent = colorNames[activeElement];
}

setInterval(changeElement, 4000)