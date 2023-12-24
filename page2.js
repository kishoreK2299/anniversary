// Page 2

const btn2 = document.getElementById("btn2")
const input2 = document.getElementById("input2")

btn2.onclick = () => {
    if(input2.value.toLowerCase() === "kishore"){
        window.open("page3.html","_self")
    }else{
        window.open("error.html","_self")
    }
}