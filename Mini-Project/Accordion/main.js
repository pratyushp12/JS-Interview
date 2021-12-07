let accordionItemHeader = document.querySelectorAll('.accordion-item-header');

accordionItemHeader.forEach((accordionItem)=>{
    accordionItem.addEventListener('click', event=>{
        let curentlyActive=document.querySelector('.accordion-item-header.active');
        if(curentlyActive && curentlyActive!==accordionItem)
        curentlyActive.classList.toggle('active');
        accordionItem.classList.toggle('active');
    })
    
})