const mainCard = document.querySelector('#ContentWarpper')
const songImg = document.querySelector('#SongImg')
const controlButtons = document.querySelector('.control')

const playPauseButton = document.querySelector('#PausePlay')
const audio = document.querySelector('audio')
const artist = document.querySelector('#Artist')
const songName = document.querySelector('#SongName')
const previousButton = document.querySelector('#Previous')
const nextButton = document.querySelector('#Next')
const songImgAtTheTop = document.querySelector('img')

let isPlaying = false
let index = 0

const songDataBase = [
  {
    songSrc: './music/music1.mp3',
    title: 'A Different Way',
    artist: 'Lauv',
    imgSrc: './img/music1.jpg',
  },
  {
    songSrc: './music/music2.mp3',
    title: 'Butterfly Effect',
    artist: 'Dj Snake',
    imgSrc: './img/music2.jpg',
  },
  {
    songSrc: './music/music3.mp3',
    title: 'Ghashi',
    artist: 'Carte Blanche',
    imgSrc: './img/music3.jpg',
  },
  {
    songSrc: './music/music4.mp3',
    title: 'Mohammad Nabina',
    artist: 'Unknown',
    imgSrc: './img/music4.jpg',
  },
]

const loadMusic = () => {
  audio.src = songDataBase[index].songSrc
  artist.textContent = songDataBase[index].artist
  songName.textContent = songDataBase[index].title
  songImgAtTheTop.src = songDataBase[index].imgSrc
}

loadMusic()

nextButton.addEventListener('click', () => {
  if (index <= songDataBase.length) {
    loadMusic(index++)
    play()
  } else {
    pause()
  }
})
previousButton.addEventListener('click', () => {
  if (index >= 0) {
    loadMusic(index--)
    play()
  }
})

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
