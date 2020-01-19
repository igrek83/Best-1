//функция, дающая возможность "ретвитнуть" url сайта
export class Schare {
    constructor(url) {
        this.url = url;
        this.schare(this.url);
    }
    schare(url) {
        const vk = document.querySelector("#vk");
        const twitter = document.querySelector("#twitter");
        const fb = document.querySelector("#fb");
        const gratitudeVk = document.querySelector("#gratitudeVk");
        const gratitudeTwitter = document.querySelector("#gratitudeTwitter");
        const gratitudeFb = document.querySelector("#gratitudeFb");
        const headerVk = document.querySelector("#headerVk");
        const headerTwitter = document.querySelector("#headerTwitter");
        const headerFb = document.querySelector("#headerFb");
        const urlVk = "https://vk.com/share.php?url=" + url;
        const urlTwitter = "https://twitter.com/intent/tweet?url=" + url;
        const urlFb = "https://www.facebook.com/sharer/sharer.php?u=" + url;
        vk.href = urlVk;
        headerVk.href = urlVk;
        twitter.href = urlTwitter;
        headerTwitter.href = urlTwitter;
        fb.href = urlFb;
        headerFb.href = urlFb;
        gratitudeTwitter.href = urlTwitter;
        gratitudeVk.href = urlVk;
        gratitudeFb.href = urlFb; 
    }
}
const schare = new Schare(window.location.href);