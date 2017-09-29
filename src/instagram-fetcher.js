/**
 * This file uses a script I (Viktor Strate) have written,
 * to get the latest images for a specified hashtag from Instagram
 */

import


const HASHTAG = 'sitcomp'

window.fetch(`https://qpqp.dk/instagram_hashtag_images.php?hashtag=${HASHTAG}`)
  .then(res => res.json())
  .then(json => {
    loadImages(json)
  })

function loadImages (images) {
  console.log('Loading instagram images', images)

}
