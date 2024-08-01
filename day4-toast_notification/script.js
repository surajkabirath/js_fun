function showToast(message, type) {
  const toastContainer = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.classList.add("toast", type);

  toast.innerHTML = `
        <span>${message}</span>
        <button class="close-btn" onclick="closeToast(this)">✖</button>
    `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    closeToast(toast);
  }, 3000);
}

function closeToast(element) {
  element.classList.remove("show");
  setTimeout(() => {
    element.remove();
  }, 300);
}
