function checkCode() {
    const code = document.getElementById("code").value;
    const validCode = "S5jLoE";
  
    if (code === validCode) {
      localStorage.setItem("loggedIn", true);
      window.location = "./playground-S5jLoE";
    } else {
      alert("Incorrect code. Try again.");
    }
  }
