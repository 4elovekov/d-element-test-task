export default class openModalForm {
    static Selectors = {
        btnSelector: "openModalForm",
        modalFormSelector: ".modalForm",
    };

    constructor() {
        this.btn = document.getElementById(`${openModalForm.Selectors.btnSelector}`)
        console.debug(this.btn)
        this.init();
    }

    openModalFormClickHandler() {
        document.querySelector(openModalForm.Selectors.modalFormSelector).classList.add("active")
        document.body.classList.add("modalOpen")
    }

    init() {
        this.btn.addEventListener("click", this.openModalFormClickHandler);
    }
}