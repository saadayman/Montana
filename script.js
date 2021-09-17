 /*Navbar script*/
 const toggle = document.querySelector('.toggler-container');
 
 const mobileNav = document.querySelector('.mobile-nav');
 const bookingBtn=document.querySelectorAll('#booking-btn');
 const modal=document.getElementById('modal');
 const closeModalBtn = document.getElementById('hide-modal')


bookingBtn.forEach(btn=>btn.addEventListener('click',()=>{
modal.classList.toggle('show-modal')
}))
closeModalBtn.addEventListener('click',()=>{
  modal.classList.remove('show-modal')
})
 toggle.addEventListener('click',()=>{
   toggle.classList.toggle('Xsign')
   mobileNav.classList.toggle('show')
 })
window.addEventListener('scroll',()=>{
  const scrollY = window.scrollY;
  if(scrollY>600){
    mobileNav.classList.add('fixed')
    mobileNav.classList.add('fixed-fade')
  }
  else{
    mobileNav.classList.remove('fixed')
  }
})
 /*Navbar Ends*/ 
 /*Video POP UP*/ 
 const video=document.getElementById('video');
 const closeBtn =document.getElementById('close-video')
 const openBtn = document.querySelector('.play-button')
 
 openBtn.addEventListener('click',()=>{
  video.classList.add('show-video')
})

 closeBtn.addEventListener('click',()=>{
   video.classList.remove('show-video')
 })

 /*VIDEO POP UP*/ 
 /* MAP HANDLING */
