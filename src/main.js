import firebaseConfig from '../firebase-config'

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()
const database = firebase.database()

window.uploadImage = function (e) {

    const file = document.getElementById('image-input').files[0]
    console.log(file)

    if (file) {
        const imageRef = storage.ref().child('images/' + file.name)
        imageRef.put(file).then(snapshot => {
            console.log('Uploaded image')
            const imageRef = database.ref('images/').push()

            imageRef.set({
                name: file.name,
                type: file.type,
                size: file.size
            })

        })
    }
}
