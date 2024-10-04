document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector(".inputs");

  const validateForm = () => {
    let isValid = true;
    document
    .querySelectorAll("div[id$='Error']")
    .forEach((div) => (div.textContent = ""));
    document.querySelectorAll("input").forEach((input) => {
        input.classList.remove("error");
        input.classList.remove("success");
        input.classList.remove("green");
        input.classList.remove("yellow");
    });

    const email = document.getElementById("email").value;
    const specialChars = /[@!?#._-]/;

    if (!email) {
      document.getElementById("emailError").textContent =
        "Email hissesini doldurun.";
      document.getElementById("email").classList.add("error");
      isValid = false;
    } else if (!specialChars.test(email)) {
      document.getElementById("emailError").textContent =
        "Email hissədə @ simvolu olmalıdır.";
      document.getElementById("email").classList.add("error");
      isValid = false;
    } else {
      document.getElementById("email").classList.add("success");
    }

    const password = document.getElementById("password").value;
    const hasUpperCase = /[A-Z]/;

    if (!password) {
      document.getElementById("passwordError").textContent =
        "Password hissəni doldurun.";
      document.getElementById("password").classList.add("error");
      isValid = false;
    } else if (password.length < 10) {
      document.getElementById("passwordError").textContent =
        "Password hissədə min 10 simvol olmalıdır.";
      document.getElementById("password").classList.add("error");
      isValid = false;
    } else if (!specialChars.test(password)) {
      document.getElementById("passwordError").textContent =
        "Password hissədə ( @!?#._- ) simvollarından biri istifadə olunmalıdır.";
      document.getElementById("password").classList.add("error");
      isValid = false;
    } else if (!hasUpperCase.test(password)) {
      document.getElementById("passwordError").textContent =
        "Password hissədə min 1 büyük harf olmalıdır.";
      document.getElementById("password").classList.add("error");
      isValid = false;
    }
    else if (email && password && email === password) {
          document
          .getElementById("email")
          .classList.remove("error", "success", "green");
          document
          .getElementById("password")
          .classList.remove("error", "success", "green");
          document.getElementById("email").classList.add("yellow");
          document.getElementById("password").classList.add("yellow");
        }
    else {
      document.getElementById("password").classList.add("success");
    }


    return isValid;
  };

  document.querySelector(".flower").addEventListener("click", function () {
    this.classList.toggle("tik");
  });
  document.getElementById("signInButton").addEventListener("click", (event) => {
    if (validateForm()) {
      console.log("Düzdürsə console çix");
    }
  });
});
