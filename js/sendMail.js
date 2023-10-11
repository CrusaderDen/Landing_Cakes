const orderSendBtn = document.querySelector(".order-form__btn")

orderSendBtn.addEventListener("click", async function (e) {
  e.preventDefault()
  const form = document.getElementById("form") //получаем форму по айди
  let error = formValidate(form) // делаем валидацию
  let formData = new FormData(form)
  if (error === 0) {
    // отправщик в ПХП
    form.classList.add("_sending")
    let response = await fetch("sendmail.php", {
      method: "POST",
      body: formData,
    })
    if (response.ok) {
      // проверка ответа сервера
      let result = await response.json()
      //alert(result.message)
      form.reset()
      form.classList.remove("_sending")
      const infoForm = document.querySelector('.order-form__popup')
      infoForm.classList.add('order-form__popup_active')
    } else {
      alert("Ошибка")
    }
  } else {
    form.classList.remove("_sending")
  }

  function formValidate(form) {
    // функция для валидации
    let error = 0
    // let formReq = document.querySelectorAll('._req')
    // for (let i = 0; i < formReq.length; i++) {
    //    const input = formReq[i]
    //    formRemoveError(input)
    //    if (input.classList.contains('_email')) {
    //       if (emailTest(input)) {
    //          formAddError(input)
    //          error++
    //       }
    //    } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
    //       formAddError(input)
    //       error++
    //    } else {
    //       if (input.value === '') {
    //          formAddError(input)
    //          error++
    //       }
    //    }
    // }
    return error
  }

  // function formAddError(input) { // вспомогательная функция для валидации
  //    input.parentElement.classList.add('_error')
  //    input.classList.add('_error')
  // }
  // function formRemoveError(input) { // вспомогательная функция для валидации
  //    input.parentElement.classList.remove('_error')
  //    input.classList.remove('_error')
  // }
  // function emailTest(input) {
  //    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
  // }
})

closeButton.addEventListener("click", function () {
  const infoForm = document.querySelector(".order-form__popup")
  infoForm.classList.remove("order-form__popup_active")
})
