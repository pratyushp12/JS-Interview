const open=document.getElementById('open');
modal=document.getElementById('modal_container');
close=document.getElementById('close');

open.addEventListener('click',()=>modal.classList.add('show')
)

close.addEventListener('click',()=>modal.classList.remove('show')
)