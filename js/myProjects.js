let myProgectsGamesCard = document.querySelector('.myProgects__gamesCard');//карточка games
let myProgectsCard = document.querySelector('.myProgects__card');//карточка my projects
//Вылет карточек
window.addEventListener('hashchange', (e) => {  
    if(window.location.hash === '#spanish') {
        myProgectsGamesCard.classList.add('animationStart');
        setTimeout(()=>{
            console.log('ez')
            myProgectsCard.classList.add('animationStartForMyProjectCard');
        },400);
    } else {
        myProgectsGamesCard.classList.remove('animationStart');
        setTimeout(()=>{
            myProgectsCard.classList.remove('animationStartForMyProjectCard');
        },400);
        document.querySelector('.projsctsWindow__content').classList.remove('active');
        document.querySelector('.gamesWindow__navBar').classList.remove('active');
        document.querySelector('.projectsWindow__navBar').classList.remove('active');
    }
});

//Open My games window

const gamesButton = document.querySelector('#gamesButton');
const closeButtonForGamesWindow = document.querySelector('.closeBtn');

gamesButton.onclick = function() {
    document.querySelector('.gamesWindow__navBar').classList.add('active');
    setTimeout(()=> {
        document.querySelector('.projsctsWindow__content').classList.add('active');
    },300);
    //Делаем цвет открывающего ся окна цвета карточки игр
    document.querySelector('.gamesWindow__navBar').style.backgroundColor = '#1C3C51';
    document.querySelector('.projsctsWindow__content    ').style.backgroundColor = '#1C3C51';
    //Отображаем всегда первую игру при открывании списка игр
    document.querySelector('.projsctsWindow__content__wrapper').innerHTML = wrapperForGames[0];
    //Делаем 1-ю ссылку активной при открывании списка игр 
    for(i=0; i<itemsInGamesBar.length; i++) {
        itemsInGamesBar[i].classList.remove('active');   
    }
    itemsInGamesBar[0].classList.add('active');   
}
closeButtonForGamesWindow.onclick = function() {
    document.querySelector('.gamesWindow__navBar').classList.remove('active');
    document.querySelector('.projectsWindow__navBar').classList.remove('active');
    document.querySelector('.projsctsWindow__content').classList.remove('active');
}

//Chose game and show her content
const itemsInGamesBar = document.querySelectorAll('.gamesWindow__navBar__item');

const myGamesArray = [
    {
        name:'', content: 'При разработке были применены: <br> HTML, CSS, JavaScript, Canvas', index: '',
        href: 'https://sergey-cyber.github.io/destroy-balls-game/', img: 'images/myProjects/balls.jpg'
    },
    {
        name:'', content: 'При разработке были применены: <br> HTML, CSS, JavaScript, Canvas', index: '',
        href: 'https://sergey-cyber.github.io/tennis-game/', img: 'images/myProjects/tennis.jpg'
    },
    {
        name:'', content: 'При разработке были применены: <br>HTML, CSS, JavaScript', index: '',
        href: 'https://sergey-cyber.github.io/card-game/', img: 'images/myProjects/cards.jpg'
    },
    {
        name:'', content: 'При разработке были применены: <br> HTML, CSS, JavaScript, Canvas', index: '',
        href: 'https://sergey-cyber.github.io/sea-battle/', img: 'images/myProjects/seaBattle.jpg'
    }
];
//Каждому name присваиваем название кнопок в навбаре
for(i=0; i<itemsInGamesBar.length; i++) {
    myGamesArray[i].name = itemsInGamesBar[i].innerHTML;
    myGamesArray[i].index = i;
}

const projectsContentCreater = (projectsArray, nameButton) => {
    const items = projectsArray.map((project)=> {
        return `<h1>${project.name}</h1>
                <div class='content__inner'>
                    <div class='content__inner__Image'>
                        <img alt='' src=${project.img}>
                    </div>
                    <div class='content__inner__button'>
                        <a href=${project.href} target='_blank'>${nameButton}</a>
                    </div>    
                </div>
                <div>${project.content}</div>`
    });
    return items; 
}

const wrapperForGames = projectsContentCreater(myGamesArray, 'Start game');   //Массив с разметкой итемов для игр

document.querySelector('.gamesWindow__navBar__wrapper').addEventListener('click', (e) => {
    if(e.target.className === 'gamesWindow__navBar__item') {
        for(i=0; i<itemsInGamesBar.length; i++) {
            itemsInGamesBar[i].classList.remove('active');
            if(e.target.innerHTML === myGamesArray[i].name) {
                e.target.classList.add('active');
                document.querySelector('.projsctsWindow__content__wrapper').innerHTML = wrapperForGames[i];
            }
        }
    }
});

//Chose project and show her content

const itemsInProjectsBar = document.querySelectorAll('.projectsWindow__navBar__item');

const myProjectsArray = [   //Data by my projects
    {
        name:'', content: 'При разработке были применены: JavaScript, React, Redux, Redux-form, Material UI.<br>Социальная сеть, созданная на основе курса по React+Redux на канале IT - Kamasutra.(Автор курса Дмитрий Кузюбердин). Для теста приложения воспользуйтесь тестовым логином: myfreezaccount@mail.ru и поролем: Fedra123456. ', index: '',
        href: 'https://sergey-cyber.github.io/social-network/', img: 'images/myProjects/social.jpg'
    },
    {
        name:'', content: 'При разработке были применены: JavaScript, React, Redux, Redux-form, Material UI, node js, mongoDB.<br> Адаптивный блокнот с возможностью создавать страницы на различные темы. Front реализован на react+redux. Backend на express + mongoDB + Heroku Hosting. Для теста воспользуйтесь логином test и паролем test или зарегистрируйте свой аккаунт.', index: '',
        href: 'https://sergey-cyber.github.io/my-notepad-react-app/', img: 'images/myProjects/notepad.jpg'
    },
    {
        name:'', content: 'При разработке были применены: <br>HTML, CSS, JavaScript, Swiper js. Freelanse заказ по созданию сайта для it-школы MegaCom. Сайт адоптирован под различные устройства. Для мобильной версии слайдеры выполнены с применением swiper js, для desktop версии на чистом javaScript.', index: '',
        href: 'https://itschool.megacom.kg/', img: 'images/myProjects/megacom.jpg'
    }
];
//Каждому name присваиваем название кнопок в навбаре
for(i=0; i<itemsInProjectsBar.length; i++) {
    myProjectsArray[i].name = itemsInProjectsBar[i].innerHTML;
    myProjectsArray[i].index = i;
}

const projectsButton = document.querySelector('#projectsButton');
const wrapperForMyProjects = projectsContentCreater(myProjectsArray, 'Open project');   //Массив с разметкой итемов для объектов
//Open window with my projects 
projectsButton.onclick = function() {
    document.querySelector('.projectsWindow__navBar').classList.add('active');
    setTimeout(()=> {
        document.querySelector('.projsctsWindow__content').classList.add('active');
    },300);
    //Делаем цвет открывающегося окна цвета карточки проектов
    document.querySelector('.projectsWindow__navBar').style.backgroundColor = '#1A8BAB';
    document.querySelector('.projsctsWindow__content').style.backgroundColor = '#1A8BAB';
    //Отображаем всегда первый проект при открывании списка проектов
    document.querySelector('.projsctsWindow__content__wrapper').innerHTML = wrapperForMyProjects[0];
    //Делаем 1-ю ссылку активной при открывании списка проектов 
    for(i=0; i<itemsInProjectsBar.length; i++) {
        itemsInProjectsBar[i].classList.remove('active');   
    }
    itemsInProjectsBar[0].classList.add('active');   
}

//Selecting project
document.querySelector('.projectsWindow__navBar__wrapper').addEventListener('click', (e) => {
    if(e.target.className === 'projectsWindow__navBar__item') {
        for(i=0; i<itemsInProjectsBar.length; i++) {
            itemsInProjectsBar[i].classList.remove('active');
            if(e.target.innerHTML === myProjectsArray[i].name) {
                e.target.classList.add('active');
                document.querySelector('.projsctsWindow__content__wrapper').innerHTML = wrapperForMyProjects[i];
            }
        }
    }
});