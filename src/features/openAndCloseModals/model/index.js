export default class openAndCloseModals {
    static Selectors = {
        btnSelector: "openModalForm",
        modalFormSelector: ".modalForm",
        modalSuccessSelector: ".modalSuccess",
        modalFormCrossSelector: ".modalForm__cross",
        modalSuccessCrossSelector: ".modalSuccess__cross",
    };

    constructor() {
        this.btn = document.getElementById(openAndCloseModals.Selectors.btnSelector)
        this.modalForm = document.querySelector(openAndCloseModals.Selectors.modalFormSelector)
        this.modalSuccess = document.querySelector(openAndCloseModals.Selectors.modalSuccessSelector)
        this.modalFormCross = document.querySelector(openAndCloseModals.Selectors.modalFormCrossSelector)
        this.modalSuccessCross = document.querySelector(openAndCloseModals.Selectors.modalSuccessCrossSelector)
        this.init();
    }

    closeModalWindow(event) {
        if (((!event.target.closest(openAndCloseModals.Selectors.modalFormSelector)) && (!event.target.closest(openAndCloseModals.Selectors.modalSuccessSelector)))
        || event.target === this.modalFormCross || event.target === this.modalSuccessCross) {
            document.body.classList.remove("modalOpen")
            this.modalForm.classList.remove("active")
            this.modalSuccess.classList.remove("active")
        }
    }

    openModalFormClickHandler(event) {
        event.stopPropagation();
        this.modalForm.classList.add("active")
        document.body.classList.add("modalOpen")
        document.body.addEventListener("click", this.closeModalWindow);
        this.modalFormCross.addEventListener("click", this.closeModalWindow);
    }

    init() {
        this.closeModalWindow = this.closeModalWindow.bind(this)
        this.openModalFormClickHandler = this.openModalFormClickHandler.bind(this)
        this.btn.addEventListener("click", this.openModalFormClickHandler);
    }
}