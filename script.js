const mainCard = document.querySelector('#ContentWarpper')
const songImg = document.querySelector('#SongImg')
const controlButtons = document.querySelector('.control')

mainCard.addEventListener('mouseover', (event) => {
  const xAxis = (window.innerWidth / 2 - event.pageX) / 15
  const yAxis = (window.innerHeight / 2 - event.pageY) / 15
  mainCard.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
  songImg.style.transform = `rotate(${xAxis}deg)`
  controlButtons.style.transform = `rotate(${yAxis}deg)`
})
mainCard.addEventListener('mouseleave', () => {
  mainCard.style.transform = 'rotateX(0deg) rotateY(0deg)'
  songImg.style.transform = 'rotate(0deg)'
})
