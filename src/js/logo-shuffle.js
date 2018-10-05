const logos = [
  require('../assets/logos/byhaveskolen.jpg'),
  require('../assets/logos/faaborg-gym.png'),
  require('../assets/logos/kaffe.png'),
  require('../assets/logos/fynbo.jpg'),
  require('../assets/logos/haahrs.png'),
  require('../assets/logos/hk-midt.jpg'),
  require('../assets/logos/htx-odense.png'),
  require('../assets/logos/intersport.png'),
  require('../assets/logos/coolshop.jpg'),
  require('../assets/logos/kims.jpg'),
  require('../assets/logos/elgiganten.png'),
  require('../assets/logos/nymarkskolen.png'),
  require('../assets/logos/rantzausminde.png'),
  require('../assets/logos/sdu.png'),
  require('../assets/logos/sef.png'),
  require('../assets/logos/sesg.png'),
  require('../assets/logos/svend.jpg'),
  require('../assets/logos/orsted.png'),
]
let nextLogo = 0

let imageElm = document.getElementById('logo-shuffle')

setInterval(() => {
  imageElm.src = logos[nextLogo]
  if (nextLogo >= logos.length - 1) {
    nextLogo = 0
  } else {
    nextLogo += 1
  }
}, 4000)
