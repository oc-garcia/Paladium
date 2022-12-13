window.addEventListener('scroll', () =>{
    const navBar = document.querySelector('.nav-bar');
    console.log(window.screenY);
    navBar.classList.toggle('active-scroll', window.scrollY > 100);
})