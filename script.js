const individuo = document.querySelectorAll(".individuo");
const indImg = document.querySelectorAll(".img_individuo");
const indInfo = document.querySelectorAll(".info_individuo");
const indData = document.querySelectorAll(".data_individuo")

for (let i = 0; i < individuo.length; i++) {
    individuo[i].onmouseover = () => {
        individuo[i].style.height = "170px"
        indInfo[i].style.height = "110px"
        indImg[i].style.width = "50%";
        indData[i].style.opacity = "100%";
        indData[i].style.fontSize = "16px";

    }
    individuo[i].onmouseout = () => {
        individuo[i].style.height = "60px"
        indImg[i].style.width = "0%";
        indInfo[i].style.height = "0px"
        indData[i].style.fontSize = "0px";
        indData[i].style.opacity = "0%";
    }
}

const workSections = document.querySelectorAll(".work_section");
const workInfos = document.querySelectorAll(".work_info");
const entregas = document.querySelectorAll(".entrega");

for (let i = 0; i < workSections.length; i++) {
    workSections[i].onmouseover = () => {
        workInfos[i].style.padding = "10px 10px 25px 10px ";
        workInfos[i].style.fontSize = "15px";
        workInfos[i].style.boxShadow = "0px 0px 10px 2px rgba(255,255,255,0.75)";
        if (i == 0){
            showEntrega(entregas[i]);
        } else if (i == 1){
            showEntrega(entregas[i]);
            showEntrega(entregas[i+1]);
        } else if (i == 2) {
            showEntrega(entregas[i+1]);
            showEntrega(entregas[i+2]);
        } else {
            showEntrega(entregas[i+2]);
            showEntrega(entregas[i+3]);
        }
        // centerElement(workSections[i]);
    }
    workSections[i].onmouseout = () => {
        // workInfos[i].style.display = "none";
        // workInfos[i].style.height = "0px";
        workInfos[i].style.fontSize = "0px";
        workInfos[i].style.padding = "0px";
        workInfos[i].style.boxShadow = "0px 0px 0px 0px rgba(255,255,255,0)";
        if (i == 0){
            ocultarEntrega(entregas[i]);
            ocultarEntrega(entregas[i+1]);
        } else if (i == 1){
            ocultarEntrega(entregas[i]);
            ocultarEntrega(entregas[i+1]);
        } else if (i == 2) {
            ocultarEntrega(entregas[i+1]);
            ocultarEntrega(entregas[i+2]);
        } else {
            ocultarEntrega(entregas[i+2]);
            ocultarEntrega(entregas[i+3]);
        }
    }
}

function showEntrega(elemento){
    elemento.style.fontSize = "14px";
    elemento.style.height = "100px";
    elemento.style.padding = "5px";
    elemento.style.border = "1px solid rgba(256, 256, 256, 0.3)";
    elemento.style.boxShadow = "box-shadow: 0 0 16px 0 rgba(256, 256, 256, 0.4);"
}

function ocultarEntrega(elemento){
    elemento.style.fontSize = "0px";
    elemento.style.height = "0px";
    elemento.style.padding = "0px";
    elemento.style.border = "0px solid";
    elemento.style.boxShadow = "box-shadow: 0 0 0px 0 rgba(256, 256, 256, 0);"
}

// function centerElement(elemento) {
//     initialScrollTop = window.scrollY;
//     const elementRect = elemento.getBoundingClientRect();
//     const elementY = elementRect.top + elementRect.height / 2;
//     const screenHeight = window.innerHeight;
//     const scrollToCenter = elementY - screenHeight / 2;
//     setInterval(() => {window.scrollTo(0, initialScrollTop + scrollToCenter)}, 1);
    
//   };
  

function centerElement(elemento) {
    // console.log(elemento);
    // const elementRect = elemento.getBoundingClientRect();
    // console.log(elementRect);
    // const elementY = elementRect.top + elementRect.height / 2;
    // console.log(elementY)
    // const screenHeight = window.innerHeight;
    // console.log(screenHeight);
    // const scrollToCenter = elementY;
    console.log(elemento.offsetTop);
    window.scrollTo(0, elemento.offsetTop);
}

console.log("peteeee")