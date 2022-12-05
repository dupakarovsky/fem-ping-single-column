import "./index.scss";

const form = document.querySelector("form");
const emailInput = document.getElementById("email");

let validated = false;

const emailValidator =
   /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

const validateFormElement = ({ input, isValid }) => {
   if (isValid) {
      input.classList.remove("invalid");
      input.classList.add("valid");
   } else {
      input.classList.remove("valid");
      input.classList.add("invalid");
   }
};

const validateByRegEx = ({ input, regex }) => {
   let isInputValid = Array.isArray(input.value.match(regex));
   return isInputValid;
};

const resetValidation = () => {
   emailInput.classList.remove("valid", "invalid");
};

form.addEventListener("submit", (e) => {
   e.preventDefault();

   validated = validateByRegEx({ input: emailInput, regex: emailValidator });
   if (validated) validateFormElement({ input: emailInput, isValid: validated });
   else validateFormElement({ input: emailInput, isValid: validated });
});

email.addEventListener("input", (e) => {
   if (e) resetValidation();
});
