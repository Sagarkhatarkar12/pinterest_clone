let heading_change = document.querySelector(".hero-inner-heading");
let image_box = document.querySelectorAll(".image-box");
let img_Container = document.querySelector(".hero-image-box-container");

let contai_Image = [["download (1).jpeg", "download (2).jpeg", "download (3).jpeg", "download (4).jpeg", "download (5).jpeg", "download (6).jpeg", "download (7).jpeg",], ["download (8).jpeg", "download (9).jpeg", "download (10).jpeg", "download (11).jpeg", "download (12).jpeg", "download (13).jpeg", "download (14).jpeg",], ["images (1).jpeg", "images (2).jpeg", "images (3).jpeg", "images (4).jpeg", "images (5).jpeg", "images (6).jpeg", "images (7).jpeg"]];
let heading_image = ['chai time snacks idea', 'home decor idea', 'outfit idea'];
let rgb = ["red", "blue", "green"]
let i = 0;
function buton_change(current_slide) {
    let btn = document.querySelectorAll(".btn-image");
    btn.forEach((element, index) => {
        if (index == current_slide) {
            element.classList.add("active");
            element.style.backgroundColor = `${rgb[current_slide]}`;
        }
        else {
            element.classList.remove("active");
            element.style.backgroundColor = "gray";
        }
    })
}

function change_img() {
    buton_change(i);
    heading_change.innerText = heading_image[i];
    heading_change.style.color = `${rgb[i]}`;
    heading_change.style.animation = "none"
    heading_change.offsetWidth; // trigger reflow
    heading_change.style.animation = `fade-on 0.6s ease forwards`;

    for (let index = 0; index < image_box.length; index++) {
        const element = image_box[index];
        element.style.animation = 'none';
        element.offsetWidth; // 

        element.querySelector("img").src = contai_Image[i][index];
        if (index >= 4) {
            let dumy = 6;
            element.style.transform = `translateY(${(dumy - index) * 10}rem)`;

        } else {
            element.style.transform = `translateY(${index * 10}rem)`;
        }
        element.style.animation = `fade-on 0.6s ease forwards`;
        element.style.animationDelay = `${index * 0.3}s`;
    }


}




document.addEventListener("DOMContentLoaded", () => {
    change_img();
    console.log("i" + i);
    setInterval(async () => {
        i = (i + 1) % 3;
        change_img();
    }, 5000)
});