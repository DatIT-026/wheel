function checkCode() {
    const code = document.getElementById("code").value;
    const validCode = "38AC2";
  
    if (code === validCode) {
      localStorage.setItem("loggedIn", true);
      window.location = "./playground-38AC2";
    } else {
      alert("Incorrect code. Try again.");
    }
  }
