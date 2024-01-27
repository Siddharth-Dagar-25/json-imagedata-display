console.log(imageData); 

function displayImages(imageData) {
    const imageContainer = document.getElementById('image-container');
    if (!imageContainer) {
        console.error('Image container not found');
        return;
    }

    imageData.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.file_paths;
        imgElement.alt = image.title;
        imgElement.title = image.title;

        const zipLink = document.createElement('a');
        zipLink.href = image.zip_file;
        zipLink.textContent = 'Download ZIP'; 
        zipLink.target = '_blank';

        imageContainer.appendChild(imgElement);
        imageContainer.appendChild(zipLink);

        const lineBreak = document.createElement('br');
        imageContainer.appendChild(lineBreak);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayImages(imageData);
});
