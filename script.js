const images = document.querySelectorAll(".image");
let store = null;

images.forEach((img) => {
  img.addEventListener("dragstart", (e) => {
    store = e.target;
    e.target.classList.add("dragging");
  });

  img.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
  });

  img.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  img.addEventListener("drop", (e) => {
    e.preventDefault();
    const target = e.target;

    if (store !== target) {
      const storeNext = store.nextSibling;
      const targetNext = target.nextSibling;

      // Swap using actual nodes (keeps event listeners)
      store.parentNode.insertBefore(target, storeNext);
      target.parentNode.insertBefore(store, targetNext);
    }
  });
});
