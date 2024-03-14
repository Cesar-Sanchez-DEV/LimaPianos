const leftArrow = document.getElementById('iconLeft');
const rightArrow = document.getElementById('iconRight');
const contentService = document.getElementById('serviceContent');

leftArrow.addEventListener('click',()=>{
    contentService.classList.remove('activeRight');
});

rightArrow.addEventListener('click',()=>{
    contentService.classList.add('activeRight');
});