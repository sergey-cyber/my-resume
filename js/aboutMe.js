let norwegianVScode = document.getElementById('norwegianVScode');
//Выезжает visual studio code
window.addEventListener('hashchange', (e) => {  
    console.log(window.location.hash)
    if(window.location.hash === '#norwegian') {
        norwegianVScode.style.left = '0%'
    } else {norwegianVScode.style.left = '100%'}
});

//Auto Print Text

new TypeIt(".vscodePrintText", {
    strings: [
        "/*","Привет!!!!", "Меня зовут Сергей!", 
        "В течение года я занимаюсь самообучением Front-end разработке. За это время освоил такие технологии как:",
        "<font color='#1E50B3'>HTML, CSS, JavaScript, React, Redux, material UI, Figma, NODE js, mongoDB, gitHub, Git.</font>",
        "При обучении мной сделан упор на React js. На 100% были пройдены курсы, состоящие из 100 уроков на канале 'it-kamasutra'. Курс полностью посвещен созданию социальной сети с использованием React+Redux.",
        "Также имеется опыт в разработке небольших проектов для собственного пользования, браузерных игр и небольшой опыт на фрилансе по адаптивной верстке с применением javaScript. Все мои работы можете посмотреть в разделе My projects.",
        "Хочу присоединиться к команде разработчиков и создавать полезные продукты, которые будут использоваться по всему миру. Для меня это интересно и увлекательно.",
        "*/"
    ],
    speed: 30,
    waitUntilVisible: true
  }).go();
