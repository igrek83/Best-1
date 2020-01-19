//класс, открытие-закрытие блока с соцсетями в шапке
export class Social {
    constructor(element) {
      this.element = element;
      this.element.addEventListener("click", this.openSocial);
      document.querySelector(".main").addEventListener("click", this.closeSocial);
    }
    openSocial() {
      document.querySelector(".header__vector").classList.add("header__vector_is_opened");
      document.querySelector(".header__social-block").classList.add("header__social-block_is_opened");
    }
    closeSocial() {
      document.querySelector(".header__vector").classList.remove("header__vector_is_opened");
      document.querySelector(".header__social-block").classList.remove("header__social-block_is_opened");
    }
}
const socialBlock = new Social(document.querySelector(".header__vector"));