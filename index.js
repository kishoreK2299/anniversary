// Page 1

const btn1 = document.getElementById("btn1")
const input1 = document.getElementById("input1")
console.log(btn1)

btn1.onclick = () => {
    if(input1.value.toLowerCase() === "kokila"){
        window.open("page2.html","_self")
    }else{
        window.open("error.html","_self")
    }
}