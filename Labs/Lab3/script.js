let images = [];
let currentIndex = 0;
const breedOption = document.getElementById("breedOption");
const dogImgBtn = document.getElementById("getImg");
const dogImage = document.getElementById("dogImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

dogImgBtn.addEventListener("click", () => {
    const breed = breedOption.value;
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/10`)
        .then(response => response.json())
        .then(data => {
            images = data.message;
            currentIndex = 0;
            updateImage();
        });
});

function updateImage() {
    if (images.length > 0) {
        dogImage.src = images[currentIndex];
        dogImage.style.display = "block";
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});