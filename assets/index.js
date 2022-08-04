const element_h1 = document.createElement('h1')
const element_p = document.createElement('p')
const header = document.querySelector('.header')
// const body = 
const texts = ["H","a","i ","S","a","y","a ","A","d","a","l","a","h ","S","e","o","r","a","n","g ","W","e","b ","D","e","v","e","l","o","p","e","r ","&#128075"]
let texts2 = ["Saya ","sangat ","suka ","dengan ","teknologi ","terutama ","di ","bidang ","pengembangan ","website..."]
let kondisi = false
let ade = "dimana";
let a = `ade ${ade.split('')}`

console.log(a)

let i = 0
setInterval(() =>{
    element_h1.classList.toggle("display")
},500)

do {   
    kondisi = true
    //
    setInterval(() => {
        if(i < texts.length){
            element_h1.style.borderRightStyle = "solid"
            element_h1.style.userSelect = "none"
            element_h1.style.paddingRight = "5px"
            element_h1.innerHTML += texts[i];
            header.appendChild(element_h1);
            i++
            kondisi = falseww
        }else {
            return kondisi = true
        }
        header.appendChild(element_p)
    },100)

} while (i <= texts.length && kondisi === false);

// const countText = (start) => {
//     setTimeout(() => {
//         if()
//         element_h1.style.borderRightStyle = "solid"
//         element_h1.style.userSelect = "none"
//         element_h1.style.paddingRight = "5px"
//         element_h1.innerHTML += texts[start-1];
//         header.appendChild(element_h1);
//         console.log(start)
//         return countText()
//     },5000)
// } 

countText(texts.length)


