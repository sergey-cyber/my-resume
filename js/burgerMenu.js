document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.menu').classList.toggle("animate");
    /* setTimeout(()=>{
        document.querySelector('.menuWrapper').classList.toggle("active");
    },700) */  
});
//For touch devices
document.querySelector('.burger').addEventListener('touchstart', function(){
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.menu').classList.toggle("animate"); 
});
