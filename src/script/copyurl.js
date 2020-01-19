//класс, копирующий ссылку в буфер обмена
export class Copyurl {
    constructor(element) {
      this.element = element;
      this.element.addEventListener("click", this.copy);
    }
    copy() {
      let copytext = document.createElement('input');
      copytext.value = window.location.href;
      document.body.appendChild(copytext);
      copytext.select();
      document.execCommand('copy');
      document.body.removeChild(copytext);
    }
}
const copyHeaderSubtract = new Copyurl(document.querySelector("#headerSubtract"));
const copySubtract = new Copyurl(document.querySelector("#subtract"));