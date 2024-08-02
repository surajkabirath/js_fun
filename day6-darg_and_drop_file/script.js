document.addEventListener("DOMContentLoaded", () => {
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

            const fileName = document.createElement("span");
            fileName.classList.add("file-name");
            fileName.textContent = file.name;

            const fileSize = document.createElement("span");
            fileSize.classList.add("file-size");
            fileSize.textContent = formatFileSize(file.size);

            listItem.appendChild(fileName);
            listItem.appendChild(fileSize);
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
});
