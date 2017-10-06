// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import Peer from 'peerjs'

let stream
let peer

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
navigator.getUserMedia({video: true, audio: false}, function(s) {
  console.log('Local stream started')
  stream = s
  let preview = document.getElementById('preview')
  preview.srcObject = stream
  canStream(true)
}, function (err) {
  console.log('Failed to get local video', err)
  setError('Failed to get local video, is a video source available?')
  canStream(false)
})

window.startStream = function () {

  canStream(false, 'Stream running')
  setStatus('Stream is running')

  let peerId = process.env.PEERJS_ID
  console.log('Starting stream', peerId)

  peer = new Peer(peerId, {key: process.env.PEERJS_API_KEY})
  peer.on('connection', function(conn) {
    console.log('Peer connected', conn.peer)
    updateWatchCount()

    let call = peer.call(conn.peer, stream);
  })

  peer.on('disconnected', function (conn) {
    console.log('Peer disconnected', conn)
    updateWatchCount()
  })

  peer.on('close', function () {
    canStream(true)
    setStatus('Stream is not running: stream closed')
  })

  peer.on('error', function (err) {
    console.log('Peer error:', err)
    setError(`Network error:\n${err}`)
  })
}

function canStream (canStream, message) {
  let streamBtn = document.getElementById('stream-button')
  streamBtn.disabled = !canStream
  if (message) {
    streamBtn.innerHTML = message
  } else {
    streamBtn.innerHTML = 'Start stream'
  }
}

function setStatus (status) {
  let statusLabel = document.getElementById('status-label')
  statusLabel.innerHTML = `Status: ${status}`
}

function setError (error) {
  let errorLabel = document.getElementById('error-label')
  errorLabel.innerHTML = `Error: ${error}`
}

function updateWatchCount () {
  let watchCounter = document.getElementById('watch-count')
  watchCounter.innerHTML = `${Object.keys(peer.connections).length} watching`
}
