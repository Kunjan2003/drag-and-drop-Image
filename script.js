const dropzone = document.getElementById('dropzone');
const previewSection = document.getElementById('preview-section');


['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => e.preventDefault());
});


['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, () => {
        dropzone.classList.add('dragover');
    });
});


['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, () => {
        dropzone.classList.remove('dragover');
    });
});


dropzone.addEventListener('drop', (e) => {
    const files = e.dataTransfer.files;

    if (files.length > 0) {
        const file = files[0];

  
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = (event) => {
                dropzone.innerHTML = `<p>Image uploaded!</p>`;

                previewSection.innerHTML = `
                    <h2>Uploaded Image:</h2>
                    <img src="${event.target.result}" alt="Uploaded Image">
                `;
            };

            reader.readAsDataURL(file);
        } else {
            alert('Please drop an image file.');
        }
    }
});
