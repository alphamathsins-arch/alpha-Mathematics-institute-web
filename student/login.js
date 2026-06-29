import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBxlG1fUx5GAO7uAOXS4c2kQoM8gDRRfRk",
    authDomain: "alpha-maths-institute.firebaseapp.com",
    projectId: "alpha-maths-institute",
    storageBucket: "alpha-maths-institute.firebasestorage.app",
    messagingSenderId: "481339508435",
    appId: "1:481339508435:web:4f889cda5a907d57d1b626"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// IMPORTANT: prevent crash
window.addEventListener("DOMContentLoaded", () => {

    window.login = function () {

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert(error.message);
            console.log(error);
        });
    };

});
