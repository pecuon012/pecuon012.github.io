// like va dislike
var btlike = document.getElementById("like");
var btdislike = document.getElementById("dislike");
btlike.onclick = function () {
    document.getElementById("sothich").src = "./img/like.png"
    firebase.database().ref("status").update({
        "like": 1
    });
}
btdislike.onclick = function () {
    document.getElementById("sothich").src = "./img/dislike.png"
    firebase.database().ref("status").update({
        "like": 0
    });
}
// den
var bton = document.getElementById("mo");
var btoff = document.getElementById("tat");
bton.onclick = function () {
    document.getElementById("den").src = "./img/denon.png"
    firebase.database().ref("status").update({
        "led": 1
    });
}
btoff.onclick = function () {
    document.getElementById("den").src = "./img/denoff.png"
    firebase.database().ref("status").update({
        "led": 0
    });
}
// chuong
var btoff = document.getElementById("off");
var bton = document.getElementById("on");
btoff.onclick = function () {
    document.getElementById("chuong").src = "./img/chuongtat.png"
    firebase.database().ref("status").update({
        "buzzer": 0
    });
}
bton.onclick = function () {
    document.getElementById("chuong").src = "./img/chuongmo.png"
    firebase.database().ref("status").update({
        "buzzer": 1
    });
}

//FIREBASE--------------------------------------------------------------------------------------------------------

const firebaseConfig = {
    apiKey: "AIzaSyBZm4qyxKFkfcuDXTSUVX64mpXsxRdo0JY",
    authDomain: "fir-linkweb.firebaseapp.com",
    databaseURL: "https://fir-linkweb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-linkweb",
    storageBucket: "fir-linkweb.appspot.com",
    messagingSenderId: "480529505859",
    appId: "1:480529505859:web:bcbc406f626351580cfef6",
    measurementId: "G-00Y377REDN"
};
firebase.initializeApp(firebaseConfig);

firebase.database().ref("Nhietdo").on("value", function (snapshot) {
    var data = snapshot.val();
    document.getElementById("nhietdo1").innerHTML = "Temperature: " + data + "°C";
});
firebase.database().ref("Doam").on("value", function (snapshot) {
    var data = snapshot.val();
    document.getElementById("doam1").innerHTML = "Humidity: " + data + "%";
});
firebase.database().ref("DaNang").on("value", function (snapshot) {
    var data = snapshot.val();
    document.getElementById("nhietdo3").innerHTML = "Temperature: " + data.Nhietdo + "°C";
    document.getElementById("doam3").innerHTML = "Humidity: " + data.Doam + "%";
});
firebase.database().ref("HaNoi").on("value", function (snapshot) {
    var data = snapshot.val();
    document.getElementById("nhietdo2").innerHTML = "Temperature: " + data.Nhietdo + "°C";
    document.getElementById("doam2").innerHTML = "Humidity: " + data.Doam + "%";
});
firebase.database().ref("Digital").on("value", function (snapshot) {
    var data = snapshot.val();
    if (data == 0) {
        document.getElementById("khí1").innerHTML = "Có khí gas";
        document.getElementById("khí2").innerHTML = "Có khí gas";
        document.getElementById("khí3").innerHTML = "Có khí gas";
    }
    if (data == 1) {
        document.getElementById("khí1").innerHTML = "Không có khí gas";
        document.getElementById("khí2").innerHTML = "Không có khí gas";
        document.getElementById("khí3").innerHTML = "Không có khí gas";
    }
});