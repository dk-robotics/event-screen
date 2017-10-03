import Peer from 'peerjs'

let peer = new Peer({key: 'p06e3v120tz9f6r'})

let conn = peer.connect('sitcomp17-host')

peer.on('call', function(call) {
  console.log('call started')
  call.answer(null)
  call.on('stream', function(remoteStream) {
    console.log('got stream')
    let video = document.getElementById('livefeed')
    video.srcObject = remoteStream
  })
});