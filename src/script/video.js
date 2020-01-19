//видео
export class Video {
    constructor(element) {
      this.element = element;
      this.element.querySelector(".description__button").addEventListener("click", this.play);
      this.element.querySelector(".description__close").addEventListener("click", this.replay);
    }
    play() {
      document.querySelector(".description__button").classList.add("description__button_is_opened");
      document.querySelector(".description__close").classList.add("description__close_is_opened");
      document.querySelector("#video").muted = false;
      document.querySelector("#video").loop = false;
      document.querySelector("#video").play();
    }
    replay() {
      document.querySelector(".description__button").classList.remove("description__button_is_opened");
      document.querySelector(".description__close").classList.remove("description__close_is_opened");
      document.querySelector("#video").muted = true;
      document.querySelector("#video").loop = true;
      document.querySelector("#video").play();
    }
}
const video = new Video(document.querySelector(".description__header-video")); 