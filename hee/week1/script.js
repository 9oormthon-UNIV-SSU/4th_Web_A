document.getElementById("hi").addEventListener("click", function(){
    alert("만나서 반갑습니다!😊");
});

document.getElementById("check").addEventListener("click", function(){
    const input=document.getElementById("input").value;
    document.getElementById("outputxt").textContent = input + "만나서 반갑습니다!";
});


function changeBackgroundColor() {
    const colors = ["#fcffb0", "#bee9b4", "#ffafb0", "#c4f4fe", "#dfd424"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
