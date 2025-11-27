const boxes = document.querySelectorAll(".image");

let draggedElement = null;

boxes.forEach(box => {
  // Start dragging
  box.addEventListener("dragstart", (e) => {
    draggedElement = e.target;
  });

  // Allow drop
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  // Swap background or content on drop
  box.addEventListener("drop", (e) => {
    e.preventDefault();
    const target = e.target;

    if (target !== draggedElement) {
      // Swap inner text (optional: you can swap background images)
      const temp = draggedElement.innerHTML;
      draggedElement.innerHTML = target.innerHTML;
      target.innerHTML = temp;

      // If using background images instead of text:
      // const tempBG = draggedElement.style.backgroundImage;
      // draggedElement.style.backgroundImage = target.style.backgroundImage;
      // target.style.backgroundImage = tempBG;
    }
  });
});
