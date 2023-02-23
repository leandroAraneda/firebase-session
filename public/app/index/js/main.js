$(function () {
    $("#logoutButton").click(function () {
        firebase.auth().signOut().then(function () {
            window.location.href = 'http://localhost:8888/sistema_calificaciones/pages/login.html';
        }).catch(function (error) {
            return;
        });
    });
});