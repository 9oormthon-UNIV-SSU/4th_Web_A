function showAlert() {
    alert("안녕하세요! 😀");
  }
  
  function showName() {
    const name = document.getElementById("nameInput").value;
    const output = document.getElementById("outputText");
    output.textContent = `반가워요, ${name}님!`;
  }
  
  function changeBackgroundColor() {
    const colors = ["#f1c40f", "#e74c3c", "#8e44ad", "#2ecc71", "#1abc9c"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }
  