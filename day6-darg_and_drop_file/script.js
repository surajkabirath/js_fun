const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("file-input");
const fileList = document.getElementById("file-list");

dropZone.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", (event) => {
    handleFiles(event.target.files);
});

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

function handleFiles(files) {
    for (const file of files) {
        const listItem = document.createElement("div");
        listItem.classList.add("file-list__item");

        const fileIcon = document.createElement("div");
        fileIcon.classList.add("file-icon");

        if (file.type.startsWith("image/")) {
            const img = document.createElement("img");
            img.src = URL.createObjectURL(file);
            fileIcon.appendChild(img);
        } else if (file.type === "application/pdf") {
            const pdfIcon = document.createElement("span");
            pdfIcon.textContent = "📄";
            fileIcon.appendChild(pdfIcon);
        } else {
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

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            listItem.remove();
        });

        listItem.appendChild(fileIcon);
        listItem.appendChild(fileName);
        listItem.appendChild(fileSize);
        listItem.appendChild(removeButton);
        fileList.appendChild(listItem);
    }
}

function formatFileSize(size) {
    if (size >= 1000000) {
        return (size / 1000000).toFixed(2) + " MB";
    } else if (size >= 1000) {
        return (size / 1000).toFixed(2) + " KB";
    } else {
        return size + " B";
    }
}
