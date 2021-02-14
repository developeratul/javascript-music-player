const mainCard = document.querySelector('#ContentWarpper')
const songImg = document.querySelector('#SongImg')
const controlButtons = document.querySelector('.control')

const playPauseButton = document.querySelector('#PausePlay')
const audio = document.querySelector('audio')
let isPlaying = false

const play = () => {
  isPlaying = true
  audio.play()
  playPauseButton.classList.replace('fa-play', 'fa-pause')
  songImg.classList.add('anime')
}
const pause = () => {
  isPlaying = false
  audio.pause()
  playPauseButton.classList.replace('fa-pause', 'fa-play')
  songImg.classList.remove('anime')
}

playPauseButton.addEventListener('click', () => {
  if (isPlaying) {
    pause()
  } else {
    play()
  }
})

mainCard.addEventListener('mouseover', (event) => {
  const xAxis = (window.innerWidth / 2 - event.pageX) / 15
  const yAxis = (window.innerHeight / 2 - event.pageY) / 15
  mainCard.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
  songImg.style.transform = `rotate(${xAxis}deg)`
  controlButtons.style.transform = `rotate(${xAxis}deg)`
})
mainCard.addEventListener('mouseleave', () => {
  mainCard.style.transform = 'rotateX(0deg) rotateY(0deg)'
  songImg.style.transform = 'rotate(0deg)'
  controlButtons.style.transform = 'rotate(0deg)'
})
