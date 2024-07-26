const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const checkbox = document.querySelector("#checkbox");
const btnSubmit = document.querySelector(".btn-submit");
const usernameMsgInput = document.querySelector(".input-element-msg-username");
const passwordMsgInput = document.querySelector(".input-element-msg-password");
const emailMsgInput = document.querySelector(".input-element-msg-email");

function addErrorMsg() {
  usernameMsgInput.textContent = "Please fill up the username";
  emailMsgInput.textContent = "Please fill up the email";
  passwordMsgInput.textContent = "Please fill up the password";
}

function addErrorColors() {
  username.classList.add("input-element-error");
  email.classList.add("input-element-error");
  password.classList.add("input-element-error");
  checkbox.classList.add("input-element-error");
}

function removeErrorColors() {
  username.classList.remove("input-element-error");
  email.classList.remove("input-element-error");
  password.classList.remove("input-element-error");
  checkbox.classList.remove("input-element-error");
}

function specificErrorPrompt(el, inputMsgEl, msg) {
  el.classList.add("input-element-error");
  inputMsgEl.textContent = msg;
}

function removeSpecificErrorPrompt(el, inputMsgEl) {
  el.classList.remove("input-element-error");
  inputMsgEl.textContent = " ";
}

function signUpSuccessful(el, inputMsgEl) {
  removeSpecificErrorPrompt(el, inputMsgEl);
}

function fillUpInputSuccessful(el, inputMsgEl) {
  signUpSuccessful(el, inputMsgEl);
  return true;
}

function checkedInputSuccessful() {
  checkbox.classList.remove("input-element-error");
  return true;
}

//* Sign Up Event
btnSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  if (!username.value && !email.value && !password.value && !checkbox.checked) {
    addErrorColors();
    addErrorMsg();
  } else {
    //* All error highlighter
    removeErrorColors();

    //? Check again individuals input element

    //? Check username
    const isUsernameInputFilledOut = !username.value
      ? specificErrorPrompt(
          username,
          usernameMsgInput,
          "Please fill up the username input!"
        )
      : fillUpInputSuccessful(username, usernameMsgInput);

    //? Check email
    const isEmailInputFilledOut = !email.value
      ? specificErrorPrompt(
          email,
          emailMsgInput,
          "Please fill up the email input"
        )
      : fillUpInputSuccessful(email, emailMsgInput);

    //? Check password
    const isPasswordInputFilledOut = !password.value
      ? specificErrorPrompt(
          password,
          passwordMsgInput,
          "Please fill up the password input"
        )
      : fillUpInputSuccessful(password, passwordMsgInput);

    //? Check checkbox
    const isCheckedInputChecked = !checkbox.checked
      ? checkbox.classList.add("input-element-error")
      : checkedInputSuccessful();

    //! If all fill up
    if (
      isUsernameInputFilledOut &&
      isEmailInputFilledOut &&
      isPasswordInputFilledOut &&
      isCheckedInputChecked
    ) {
      document.body.innerHTML = `<h1 class="heading-1 text-center">You are successfully sign up! 🥳🍾</h1>`;
    }
  }
});
