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

function fetchImages () {
  return window.fetch(`https://qpqp.dk/instagram_hashtag_images.php?hashtag=${HASHTAG}`)
    .then(res => res.json())
}

function loadImages (json) {
  let imageList = []

  for (let img of json) {
    if (img === null) continue

    const imgElm = document.createElement('img')
    imgElm.src = img.display_src
    imgElm.className = classnames('image')

    imageList.push(imgElm)
  }

  return imageList
}

function updateSlideshow (images) {
  console.log('Loading instagram images into slideshow', images)

  const slideshow = document.getElementById('images')
  slideshow.innerHTML = ''

  for (let i = 0; i < images.length; i++) {
    let img = images[i]
    if (img === null) continue

    img.className = 'image'

    slideshow.appendChild(img)
  }
}

function startSlideshow () {
  console.log('Starting slideshow')

  function update() {
    if (currentImage >= imageElements.length - 1) {
      currentImage = 0;
      fetchImages()
        .then(json => {
          imageElements = loadImages(json)
          updateSlideshow(imageElements)

          for (let i = 0; i < imageElements.length; i++) {
            imageElements[i].className = classnames('image', { shown: i === currentImage })
          }
        })
    } else {
      currentImage++

      for (let i = 0; i < imageElements.length; i++) {
        imageElements[i].className = classnames('image', { shown: i === currentImage })
      }
    }
  }

  window.clearInterval(slideshowInterval)
  slideshowInterval = window.setInterval(update, SLIDESHOW_SPEED)
  update();
}

// Start everything

if (document.getElementById('images')) {
  fetchImages()
    .then(json => {
      imageElements = loadImages(json)
      updateSlideshow(imageElements)
      startSlideshow()
    })
}
