$(function () {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            window.location.href = 'http://localhost:8888/sistema_calificaciones/pages/index.html';
        } else {
            return;
        }
    });

    $("#login-button").click(function () {
        auth.signInWithPopup(provider)
            .then(function (result) {
                result.user ? window.location.href = 'http://localhost:8888/sistema_calificaciones/pages/index.html' : window.location.href = 'http://localhost:8888/sistema_calificaciones/pages/login.html';
            }).catch(function (error) {
                console.log("error: ", error);
            });
    });

    $("#logoutButton").click(function () {
        console.log("logout");
        firebase.auth().signOut().then(function () {
            window.location.href = 'http://localhost:8888/sistema_calificaciones/pages/login.html';
        }).catch(function (error) {
            return;
        });
    });

    // code for look user data
    // firebase.auth().onAuthStateChanged(function (user) {
    //     if (user) {
    //         console.log('El usuario inició sesión:', user.displayName);
    //         console.log('Correo electrónico:', user.email);
    //         console.log('UID:', user.uid);
    //     } else {
    //         console.log('El usuario cerró sesión.');
    //     }
    // });
});