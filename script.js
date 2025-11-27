   const drag1=document.querySelectorAll(".image");
   
   let store;
   for(let index=1;index<=6;index++){
    drag${index}.addEventListener("dragstart",(e)=>{
      store=e.target;
      e.target.classList.add("dragging!")
    })

    drag${index}.addEventListener("dragned",(e)=>{
      e.target.clasList.remove("dragging!")
    })
    drag${index}.addEventListener("dragover",(e)=>{
      e.preventDefault();

    })
    drag${index}.addEventListener("drop",(e)=>{
      e.preventDefault();
      const target=e.target
      if(target!==store){
        const dragClone=store.cloneNode(true);
        const targetClone=target.cloneNode(true);
        store.replaceWith(targetClone)
        e.target.replaceWith(dragClone)
      }

    })
   }
   
   
    