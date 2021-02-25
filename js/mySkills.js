//Neon Text
const signs = document.querySelectorAll('x-sign')
const randomIn = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
)

const mixupInterval = el => {
  const ms = randomIn(2000, 4000)
  el.style.setProperty('--interval', `${ms}ms`)
}

signs.forEach(el => {
  mixupInterval(el)
  el.addEventListener('webkitAnimationIteration', () => {
    mixupInterval(el)
  })
});

//Auto Print Text
new TypeIt(".mySkills__autoPrintText", {
    strings: [
        "Мои навыки:",
        "HTML, CSS, JavaScript, React, Redux, material UI.",
        "Имеется опыт работы с Figma, NODE js, mongoDB, gitHub, Git."
    ],
    speed: 20,
    waitUntilVisible: true
  }).go();