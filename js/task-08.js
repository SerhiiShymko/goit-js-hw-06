const form = document.querySelector(".login-form");

const handleSuccess = () => {
  document.querySelector("form");
  // document
  //   .querySelector(".login-form")
  //   .insertAdjacentHTML("afterend", "<h2>Вхід успішний</h2>");
};

const handleError = () => {
  const errorText = document.createElement("p");
  errorText.style.color = "red";
  errorText.textContent = alert("Всі поля повинні бути заповнені");
  document.querySelector(".login-form").append(errorText);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    handleError();

    return;
  }
  handleSuccess();

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};

form.addEventListener("submit", handleSubmit);
