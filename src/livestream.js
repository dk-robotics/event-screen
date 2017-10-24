import Peer from 'peerjs'

let peer = new Peer({key: process.env.PEERJS_API_KEY})

let conn = peer.connect(process.env.PEERJS_ID)
let reconnectIntervalId

function attemptReconnect () {
  reconnectIntervalId = setInterval(() => {
    peer.on('call', function(call) {
      console.log('call started')
      call.answer(null)
      call.on('stream', function(remoteStream) {
        clearInterval(reconnectIntervalId)
        console.log('got stream')
        let video = document.getElementById('livefeed')
        video.srcObject = remoteStream
      })
    });
  }, 10000)
}

peer.on('close', function () {
  attemptReconnect();
})


