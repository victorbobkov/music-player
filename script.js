const image = document.querySelector('img')
const title = document.getElementById('title')
const artist = document.getElementById('artist')
const music = document.querySelector('audio')
const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')

// Music
const songs = [
   {
      name: 'Lascivious',
      displayName: 'Lascivious',
      artist: 'Soen'
   },
   {
      name: 'Lotus',
      displayName: 'Lotus',
      artist: 'Soen'
   },
   {
      name: 'Martyrs',
      displayName: 'Martyrs',
      artist: 'Soen'
   },
   {
      name: 'River',
      displayName: 'River',
      artist: 'Soen'
   },
]

// Check if Playing
let isPlaying = false

// Play
const playSong = () => {
   isPlaying = true
   playBtn.classList.replace('fa-play', 'fa-pause')
   playBtn.setAttribute('title', 'Pause')
   music.play()
}

// Pause
const pauseSong = () => {
   isPlaying = false
   playBtn.classList.replace('fa-pause', 'fa-play')
   playBtn.setAttribute('title', 'Play')
   music.pause()
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()))

// Update DOM
const loadSong = (song) => {
   title.textContent = song.displayName
   artist.textContent = song.artist
   music.src = `music/${song.name}.mp3`
   image.src = `img/${song.name}.jpg`
}

// Current Song
let songIndex = 0

// Previous Song
const prevSong = () => {
   songIndex--
   console.log(songIndex)
   loadSong(songs[songIndex])
   playSong()
}

// Next Song
const nextSong = () => {
   songIndex++
   console.log(songIndex)
   loadSong(songs[songIndex])
   playSong()
}

// On Load - Select First Song
loadSong(songs[songIndex])

// Event Listeners
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)