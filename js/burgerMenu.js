document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.menu').classList.toggle("animate");
    /* setTimeout(()=>{
        document.querySelector('.menuWrapper').classList.toggle("active");
    },700) */  
});
//For touch devices
let schetchik = 1;
document.querySelector('.burger').addEventListener('touchstart', function(){
    if(schetchik%2 === 0) {
		document.querySelector('.burger span').classList.add('active');
		document.querySelector('.menu').classList.add("animate");
	} else {
		document.querySelector('.burger span').classList.remove('active');
		document.querySelector('.menu').classList.remove("animate");
	} 
	schetchik++;
});
