var imageData = [
    "assets/img/image-shift/apple_1.jpg",
    "assets/img/image-shift/apple_2.jpg",
    "assets/img/image-shift/apple_3.jpg"
];

function shiftImage() {
    // Get current image
    var imageElement = document.getElementById("shifted");
    var currentImage = imageElement.src;
    var currentIndex = imageData.indexOf(currentImage);

    // Set new image
    var nextIndex = (currentIndex + 1) % imageData.length;
    imageElement.src = imageData[nextIndex];
}

document.getElementById("thumbnailImage").addEventListener("click", shiftImage);
