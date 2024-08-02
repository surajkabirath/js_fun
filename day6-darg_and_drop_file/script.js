// Get references to DOM elements
const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("file-input");
const fileList = document.getElementById("file-list");

// Event listener for clicking the drop zone
dropZone.addEventListener("click", () => {
    fileInput.click();
});

// Event listener for file input change
fileInput.addEventListener("change", (event) => {
    handleFiles(event.target.files);
});

// Event listeners for drag events
dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZone.classList.add("drop-zone--over");
});

dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("drop-zone--over");
});

dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropZone.classList.remove("drop-zone--over");
    handleFiles(event.dataTransfer.files);
});

// Function to handle file processing
function handleFiles(files) {
    for (const file of files) {
        const listItem = document.createElement("div");
        listItem.classList.add("file-list__item");

        const fileIcon = document.createElement("div");
        fileIcon.classList.add("file-icon");

        // Display image preview if file is an image
        if (file.type.startsWith("image/")) {
            const img = document.createElement("img");
            img.src = URL.createObjectURL(file);
            fileIcon.appendChild(img);
        } else if (file.type === "application/pdf") {
            // Display PDF icon for PDF files
            const pdfIcon = document.createElement("span");
            pdfIcon.textContent = "📄";
            fileIcon.appendChild(pdfIcon);
        } else {
            // Display a generic file icon for other types
            const fileIconGeneric = document.createElement("span");
            fileIconGeneric.textContent = "📁";
            fileIcon.appendChild(fileIconGeneric);
        }

        const fileName = document.createElement("span");
        fileName.classList.add("file-name");
        fileName.textContent = file.name;

        const fileSize = document.createElement("span");
        fileSize.classList.add("file-size");
        fileSize.textContent = formatFileSize(file.size);

        listItem.appendChild(fileIcon);
        listItem.appendChild(fileName);
        listItem.appendChild(fileSize);
        fileList.appendChild(listItem);
    }
}

// Function to format file size
function formatFileSize(size) {
    if (size >= 1000000) {
        return (size / 1000000).toFixed(2) + " MB";
    } else if (size >= 1000) {
        return (size / 1000).toFixed(2) + " KB";
    } else {
        return size + " B";
    }
}
