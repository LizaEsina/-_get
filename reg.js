document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Отменяем стандартное поведение формы

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Проверяем введенные данные
  if (email === "user@user.ru" && password === "paSSword1") {
    window.location.href = "index.html"; // Перенаправляем на index.html
  } else {
    alert("Неверные данные!"); // Выводим сообщение об ошибке
  }
});
