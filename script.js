// // 1. Change text content dynamically
// document.getElementById("change-text-btn").addEventListener("click", () => {
//   const title = document.getElementById("main-title");
//   title.textContent = "You changed the title!";
// });

document.getElementById("change-text-btn").addEventListener("click", () => {
  // Change the text
  const title = document.getElementById("main-title");
  title.textContent = "You changed the title!";

  // Change the background color
  document.body.style.backgroundColor = "#f0f8ff";
});


// 2. Modify CSS styles via JavaScript
document.getElementById("change-text-btn").addEventListener("click", () => {
  document.body.style.backgroundColor = "#f0f8ff";
});

// 3. Add or remove an element dynamically
let isBoxVisible = false;

document.getElementById("toggle-element-btn").addEventListener("click", () => {
  const container = document.getElementById("container");

  if (isBoxVisible) {
    const box = document.getElementById("dynamic-box");
    if (box) container.removeChild(box);
    isBoxVisible = false;
  } else {
    const box = document.createElement("div");
    box.id = "dynamic-box";
    box.textContent = "I'm a dynamically added box!";
    box.style.padding = "20px";
    box.style.marginTop = "10px";
    box.style.backgroundColor = "#d1e7dd";
    box.style.border = "1px solid #0f5132";
    container.appendChild(box);
    isBoxVisible = true;
  }
});
