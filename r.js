document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию
  
  var inputName = document.getElementById('inputName').value;
  var inputFio = document.getElementById('inputFio').value;
  var inputEmail = document.getElementById('inputEmail4').value;
  var inputPassword = document.getElementById('inputPassword4').value;
  var inputAddress = document.getElementById('inputAddress').value;
  var inputCity = document.getElementById('inputCity').value;
  
  if (inputName && inputFio && inputEmail && inputPassword && inputAddress && inputCity) {
    window.location.href = 'index.html'; // Перенаправляем пользователя на index.html
  } else {
    alert('Пожалуйста, заполните все поля формы.'); // Выводим сообщение об ошибке, если поля не заполнены
  }
});

