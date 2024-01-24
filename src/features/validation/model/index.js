export default class validation {
    static Selectors = {
        submitBtnSelector: "submit",
        fullNameSelector: "fullName",
        emailSelector: "email",
        messageSelector: "message",
        modalFormSelector: ".modalForm",
        modalSuccessSelector: ".modalSuccess",
    };

    constructor() {
        this.submitBtn = document.getElementById(validation.Selectors.submitBtnSelector)
        this.fullName = document.getElementById(validation.Selectors.fullNameSelector)
        this.email = document.getElementById(validation.Selectors.emailSelector)
        this.message = document.getElementById(validation.Selectors.messageSelector)
        this.modalForm = document.querySelector(validation.Selectors.modalFormSelector)
        this.modalSuccess = document.querySelector(validation.Selectors.modalSuccessSelector)
        this.emailPattern = /([a-zA-Z0-9]+?[a-zA-Z0-9.]*[a-zA-Z0-9]+@[a-z]+\.[a-z]+)/;
        this.init();
    }

    fullNameBlurHandler(event) {
        const inputValue = event.target.value;
        if (inputValue !== "" && document.getElementById("emptyNameError") !== null) {
            document.getElementById("emptyNameError").remove();
        }
    }

    emailBlurHandler(event) {
        const inputValue = event.target.value;
        if ((this.emailPattern.test(inputValue) && document.getElementById("incorrectEmailError") !== null) || inputValue === "") {
            document.getElementById("incorrectEmailError") ? document.getElementById("incorrectEmailError").remove() : "";
            document.getElementById("emptyEmailError") ? document.getElementById("emptyEmailError").remove() : "";
        } else if (document.getElementById("incorrectEmailError") === null && !this.emailPattern.test(inputValue)) {
            const incorrectEmailError = `<p style="color: red;" id="incorrectEmailError">Введите корректный email!</p>`
            document.getElementById("emptyEmailError") ? document.getElementById("emptyEmailError").remove() : "";
            this.email.insertAdjacentHTML("beforebegin", incorrectEmailError)
        }
    }

    checkEmptyInputs() {
        const emptyNameError = `<p style="color: red;" id="emptyNameError">Заполните обязательное поле!</p>`
        const emptyEmailError = `<p style="color: red;" id="emptyEmailError">Заполните обязательное поле!</p>`
        let result = true

        if (this.fullName.value === "" && document.getElementById("emptyNameError") === null) {
            this.fullName.insertAdjacentHTML("beforebegin", emptyNameError)
            result = false
        } else if (this.fullName.value === "" && document.getElementById("emptyNameError") !== null) {
            result = false
        }

        if (this.email.value === "" && document.getElementById("incorrectEmailError") === null && document.getElementById("emptyEmailError") === null) {
            this.email.insertAdjacentHTML("beforebegin", emptyEmailError)
            result = false
        } else if (this.email.value === "" && document.getElementById("incorrectEmailError") !== null) {
            document.getElementById("incorrectEmailError").remove();
            this.email.insertAdjacentHTML("beforebegin", emptyEmailError)
            result = false
        } else if (this.email.value === "" && document.getElementById("emptyEmailError") !== null) {
            result = false
        }

        if (document.getElementById("incorrectEmailError") !== null) {
            result = false
        }

        return result
    }

    submitEventHandler() {
        if (this.checkEmptyInputs()) {
            this.modalForm.classList.remove("active")
            this.modalSuccess.classList.add("active")
            this.fullName.value = ""
            this.email.value = ""
            this.message.value = ""
        }
    }

    init() {
        this.fullNameBlurHandler = this.fullNameBlurHandler.bind(this)
        this.emailBlurHandler = this.emailBlurHandler.bind(this)
        this.submitEventHandler = this.submitEventHandler.bind(this)
        this.checkEmptyInputs = this.checkEmptyInputs.bind(this)
        this.fullName.addEventListener("blur", this.fullNameBlurHandler)
        this.email.addEventListener("blur", this.emailBlurHandler)
        this.submitBtn.addEventListener("click", this.submitEventHandler)
    }
}