/**
 * This file uses a script I (Viktor Strate) have written,
 * to get the latest images for a specified hashtag from Instagram
 */

import classnames from 'classnames'

const HASHTAG = 'robots'
const SLIDESHOW_SPEED = 10 * 1000

let imageElements = []
let currentImage = 0;
let slideshowInterval = null

window.fetch(`https://qpqp.dk/instagram_hashtag_images.php?hashtag=${HASHTAG}`)
  .then(res => res.json())
  .then(json => {
    loadImages(json)
  })

function loadImages (images) {
  console.log('Loading instagram images', images)

  const livescore = document.getElementById('images')
  livescore.innerHTML = ''
  imageElements = []

  for (let img of images) {
    if (img === null) continue

    const imgElm = document.createElement('img')
    imgElm.src = img.display_src
    imgElm.className = classnames('image')

    imageElements.push(imgElm)

    livescore.appendChild(imgElm)
  }

  imageElements[currentImage].className = classnames('image', 'shown')

  startSlideshow();
}

function startSlideshow () {
  window.clearInterval(slideshowInterval)
  slideshowInterval = window.setInterval(() => {
    currentImage = currentImage >= imageElements.length - 1 ? 0 : currentImage + 1

    for (let i = 0; i < imageElements.length; i++) {
      imageElements[i].className = classnames('image', { shown: i === currentImage })
    }

  }, SLIDESHOW_SPEED)
}
