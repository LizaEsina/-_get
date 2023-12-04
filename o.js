// Получение формы
const form = document.querySelector('#addAdForm');

// Обработчик отправки формы
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Отменяем отправку формы

  // Получение значений полей формы
  const nameInput = document.querySelector('#name');
  const phoneInput = document.querySelector('#phone');
  const emailInput = document.querySelector('#email');
  const registerInput = document.querySelector('#register');
  const passwordInput = document.querySelector('#password');
  const confirmPasswordInput = document.querySelector('#password_confirmation');
  const photo1Input = document.querySelector('#photo1');
  const photo2Input = document.querySelector('#photo2');
  const photo3Input = document.querySelector('#photo3');
  const markInput = document.querySelector('#mark');
  const descriptionInput = document.querySelector('#description');
  const confirmInput = document.querySelector('#confirm');

  // Проверка и валидация значений полей
  const errors = [];

  if (nameInput.value.trim().length === 0) {
    errors.push('Имя пользователя обязательное поле');
  }

  if (phoneInput.value.trim().length === 0) {
    errors.push('Телефон обязательное поле');
  } else if (!/^\+?\d+$/.test(phoneInput.value.trim())) {
    errors.push('Телефон должен содержать только цифры и знак "+"');
  }

  if (emailInput.value.trim().length === 0) {
    errors.push('Email обязательное поле');
  } else if (!/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
    errors.push('Некорректный формат email');
  }

  if (registerInput.checked) {
    if (passwordInput.value.trim().length === 0) {
      errors.push('Пароль обязательное поле');
    } else if (passwordInput.value.trim().length < 7 || !/\d/.test(passwordInput.value.trim()) ||
        !/[a-z]/.test(passwordInput.value.trim()) || !/[A-Z]/.test(passwordInput.value.trim())) {
      errors.push('Пароль должен быть не менее 7 символов и содержать минимум 1 цифру, ' +
        '1 строчную и 1 заглавную буквы');
    }

    if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
      errors.push('Подтверждение пароля не совпадает с паролем');
    }
  }

  if (!photo1Input.files || photo1Input.files.length === 0) {
    errors.push('Изображение 1 обязательное поле');
  }

  if (confirmInput.value !== '1') {
    errors.push('Необходимо согласиться на обработку персональных данных');
  }

  // Если есть ошибки, выводим их
  if (errors.length > 0) {
    const errorList = document.querySelector('#errors');
    errorList.innerHTML = ''; // Очищаем список ошибок

    errors.forEach(function(error) {
      const li = document.createElement('li');
      li.textContent = error;
      errorList.appendChild(li);
    });

    return; // Прекращаем выполнение дальнейшего кода
  }

  // Создание объекта с данными объявления
  const adData = {
    name: nameInput.value.trim(),
    phone: phoneInput.value.trim(),
    email: emailInput.value.trim(),
    register: registerInput.checked ? 1 : 0,
    password: passwordInput.value.trim(),
    password_confirmation: confirmPasswordInput.value.trim(),
    mark: markInput.value.trim(),
    description: descriptionInput.value.trim(),
    confirm: parseInt(confirmInput.value)
  };

  // Отправка запроса с данными объявления
  // ...
});
