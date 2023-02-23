const firebaseConfig = {
    apiKey: "AIzaSyDHaJNZPpv0K22GiLS76H0akY56XDHFdCc",
    authDomain: "sistema-calificaciones-697b1.firebaseapp.com",
    projectId: "sistema-calificaciones-697b1",
    storageBucket: "sistema-calificaciones-697b1.appspot.com",
    messagingSenderId: "756724163496",
    appId: "1:756724163496:web:098ffca59ae5b64372739d"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.OAuthProvider('microsoft.com');

provider.setCustomParameters({
    tenant: "cc51b468-d99f-41ff-8add-7a6a41c32a99",
});