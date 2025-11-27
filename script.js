   const drag=document.querySelectorAll(".image");
   
   let store;
   drag.forEach((box)=>{
    box.addEventListener("dragstart",(e)=>{
      store=e.target;
      e.target.classList.add("dragging!")
    })

    box.addEventListener("dragned",(e)=>{
      e.target.clasList.remove("dragging!")
    })
    box.addEventListener("dragover",(e)=>{
      e.preventDefault();

    })
    box.addEventListener("drop",(e)=>{
      e.preventDefault();
      const target=e.target
      if(target!==store){
        const dragClone=store.cloneNode(true);
        const targetClone=target.cloneNode(true);
        store.replaceWith(targetClone)
        e.target.replaceWith(dragClone)
      }

    })
   })
   
   
    