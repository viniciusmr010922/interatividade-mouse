var num = 0
document.getElementById("number").innerText = num


var Btn = document.getElementById("btn")
    // quando clica uma vez
Btn.addEventListener('click', somaUm)

var BtMinus = document.getElementById("minus")
BtMinus.addEventListener('click', subUm)
    //     // quando clica
    // Btn.addEventListener('mousedown', somaUm)
    //     // quando desclica
    // Btn.addEventListener('mouseup', somaUm)
    //     // quando movimenta o mouse 
    // Btn.addEventListener('mousemove', somaUm)
    // 
function somaUm() {
    num++;
    document.getElementById("number").innerText = num

}

function subUm() {
    num--;
    document.getElementById("number").innerText = num
}