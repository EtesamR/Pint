var ghalamo="black"
var inc="#ffffff"
function yes1() {
    inc=document.getElementById("inpc").value
    ghalamo=inc
}
function no1() {

}
console.log(inc)
function scl(t) {
    onscl()
    document.getElementById(t.id).style.outline="solid gold"
    ghalamo=t.id
}

function onscl() {
    inc=ghalamo
    document.getElementById("blue").style.outline="none"
    document.getElementById("red").style.outline="none"
    document.getElementById("green").style.outline="none"
    document.getElementById("yellow").style.outline="none"
    document.getElementById("white").style.outline="none"
    document.getElementById("black").style.outline="none"
    document.getElementById("brown").style.outline="none"
    document.getElementById("orange").style.outline="none"
    document.getElementById("purple").style.outline="none"
    document.getElementById("pink").style.outline="none"
}
function c(t) {
    document.getElementById(t.id).style.backgroundColor=ghalamo
    localStorage.setItem(t.id,ghalamo)
}
function load() {
    htmlsaz()
    for (let i = 1; i < 901; i++) {
        document.getElementById("k"+i).style.backgroundColor=localStorage.getItem("k"+i)  
    }
}
function clrp() {
    localStorage.clear()
    for (let i = 1; i < 901; i++) {
        document.getElementById("k"+i).style.backgroundColor="white"
    }
}
function htmlsaz() {
    for (let i = 1; i < 901; i++) {
       document.getElementById("papar").innerHTML+='<div onmousedown="c(this)" class="kaghaz" id="k'+i+'"></div>'
    }
}