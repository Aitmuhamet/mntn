let contentList = document.querySelector('.content');
let socials = document.querySelector('.socials')
console.log(socials);

window.onload = function() {
    calculateContentMarginRight();
}

window.addEventListener('resize', function() {
    calculateContentMarginRight();
}, true)

function calculateContentMarginRight() {
    let contentListMarginRight = calculateElementMargin();
    contentList.style.right = `${contentListMarginRight}px`;
}
function calculateSocialsMarginLeft() {
    let socialsMarginLeft = calculateElementMargin();
    socials.style.left = `${socialsMarginLeft}px`;
}

function calculateElementMargin() {
    let windowScreenWidth = window.screen.width;
    let elementSideMargin;
    switch (true) {
        case windowScreenWidth > 1400:
            elementSideMargin = (windowScreenWidth - 1320)/2 + 12;
            break;
        case windowScreenWidth > 1200:
            elementSideMargin = (windowScreenWidth - 1140)/2 + 12;
            break;
        case windowScreenWidth > 992:
            elementSideMargin = (windowScreenWidth - 960)/2 + 12;
            break;
        case windowScreenWidth > 768:
            elementSideMargin = (windowScreenWidth - 720)/2 + 12;
            break;
        case windowScreenWidth > 576:
            elementSideMargin = (windowScreenWidth - 540)/2 + 12;
            break;
    
        default:
            break;
    }
    
    return elementSideMargin;
}