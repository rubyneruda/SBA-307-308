function changeImage() {
    const imageType = document.getElementById('imageType').value;
    const imageContainer = document.getElementById('imageContainer');

    // Fetch a random image URL based on the selected type
    const imageUrl = (imageType === 'guitar')
        ? 'https://source.unsplash.com/featured/?guitar'
        : 'https://source.unsplash.com/featured/?dog';

    // Update the image container with the new image
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="Random Image" style="max-width: 100%;">`;
}

window.onload = function () {
    changeImage();
}
