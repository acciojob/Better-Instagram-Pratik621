const images = document.querySelectorAll(".image");
let store = null;

images.forEach((img) => {
  img.addEventListener("dragstart", (e) => {
    store = e.target;
    
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

      
      store.parentNode.insertBefore(target, storeNext);
      target.parentNode.insertBefore(store, targetNext);
    }
  });
});
