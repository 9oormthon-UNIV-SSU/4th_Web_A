function sayHello() {
    const name = document.getElementById("username").value;
    const greeting = document.getElementById("greeting");
    if (name.trim() !== "") {
      greeting.textContent = `안녕하세요, ${name}님!`;
    } else {
      greeting.textContent = "이름을 입력해주세요!";
    }
  }
  
  function changeBackground() {
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
    document.body.style.backgroundColor = randomColor;
  }
  