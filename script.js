const boxes = document.querySelectorAll(".image");

let draggedElement = null;

boxes.forEach(box => {
  box.addEventListener("dragstart", (e) => {
    draggedElement = e.target;
  });

  box.addEventListener("dragover", (e) => {
    e.preventDefault(); // Allow drop
  });

  box.addEventListener("drop", (e) => {
    e.preventDefault();

    const target = e.target;

    if (target !== draggedElement) {
      // Swap background images
      let temp = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = target.style.backgroundImage;
      target.style.backgroundImage = temp;
    }
  });
});
