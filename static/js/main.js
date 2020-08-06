let 呐呐呐 = document.querySelector("div.呐呐呐");
let 呐呐呐呐 = 1000;
let 呐呐呐呐呐 = {
    font: [20,100],
    transition: [5,10]
};
let 呐呐 = setInterval(()=>{
    if(呐呐呐.childElementCount >= 呐呐呐呐){
        return;
    }
    let 呐 = document.createElement("span");
    呐.innerText = '呐';
    呐.style.fontSize = (呐呐呐呐呐.font[0] + (呐呐呐呐呐.font[1] - 呐呐呐呐呐.font[0]) * Math.random()).toString() + "px";
    呐.style.transform = "scale(0)";
    呐.style.transitionProperty = "top,left,transform";
    呐.style.transitionDuration= "" + (呐呐呐呐呐.transition[0] + (呐呐呐呐呐.transition[1] - 呐呐呐呐呐.transition[0]) * Math.random()).toString() + "s";
    setTimeout(()=>{
        if(Math.random() > 0.5){ // Y
            呐.style.left =(-50 + Math.random() * 200).toString() + "%";
            if(Math.random() > 0.5){ // +
                呐.style.top = "-75%";
            } else { // -
                呐.style.top = "175%";
            }
        } else { // X
            呐.style.top = (-50 + Math.random() * 200).toString() + "%";
            if(Math.random() > 0.5){ // +
                呐.style.left = "-75%";
            } else { // -
                呐.style.left = "175%";
            }
        }
        呐.style.transform= "scale(2)";
        呐.addEventListener("transitionend",()=>{
            呐.remove();
        });
    },10);
    呐呐呐.appendChild(呐);
},10);