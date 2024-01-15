let contentList = document.querySelector('.content');
let socials = document.querySelector('.socials')
let bgImgMountains = document.querySelector('.body-bg__item--mountains')
let bgBottomShading = document.querySelector('.body-bg__item--bottom-shading')


window.onload = function() {
    calculateContentMarginRight();
}

window.addEventListener('resize', function() {
    calculateContentMarginRight();
    calculateBgBottomShadingEdgeBottom();
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
    let windowScreenWidth = window.innerWidth;
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

function calculateBgBottomShadingEdgeBottom() {
    let coords = getCoords(bgImgMountains);
    bgBottomShading.style.bottom = coords.bottom;
    console.log(`Box Bottom ${coords.bottom}`);
}

function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    console.log(`scrollTop: ${document.documentElement.scrollTop}`);
    console.log(`Mount Top: ${box.top}`);
    console.log(`Mount Bottom: ${box.bottom}`);

    return {
        top: box.top + document.documentElement.scrollTop,
        right: box.right + document.documentElement.scrollLeft,
        bottom: box.bottom + document.documentElement.scrollTop,
        left: box.left + document.documentElement.scrollLeft
    };
}