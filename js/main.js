const inputEl = document.getElementById("pass");
const btnEl = document.getElementById("btn");
const msgEl = document.getElementById("msg");

// Паролі
const DISPATCHER_PASS = "123";
const ADMIN_PASS = "12";

function checkPassword() {
  const entered = inputEl.value.trim();

  if (entered === DISPATCHER_PASS) {
    window.location.href = "./html/3.html"; // диспетчер
  } else if (entered === ADMIN_PASS) {
    window.location.href = "./html/4.html"; // адмін
  } else {
    msgEl.textContent = "Невірний пароль!";
    msgEl.classList.add("text-red-600");
  }
}

btnEl.addEventListener("click", checkPassword);
inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkPassword();
});
