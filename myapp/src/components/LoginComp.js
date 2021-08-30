import react, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import '../design.css'
import Swal from 'sweetalert2';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { doc, getFirestore } from 'firebase/firestore';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FacebookAuthProvider } from "firebase/auth";

// import { FirebaseAppProvider, FirestoreProvider, useFirestoreDocData, useFirestore, useFirebaseApp } from 'reactfire';

const LoginComp = () => {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyD_4E40jr3bl1PcwQ8bZpCLnyNxbVXbmsA",
        authDomain: "purplehomeassignment.firebaseapp.com",
        projectId: "purplehomeassignment",
        storageBucket: "purplehomeassignment.appspot.com",
        messagingSenderId: "269773040173",
        appId: "1:269773040173:web:d6db7745e8ec00f8ae66a4",
        measurementId: "G-PREC538L8V"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore(app);
    let history = useHistory();

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                IsRegistered(user)
                Swal.fire(
                    'Successfull login',
                    'Click Ok to enter',
                    'success'
                ).then(() => { history.push("/Site/site") })
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Could not login'
                })
            });
    }

    const facebookSignIn = () => {
        const provider = new FacebookAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                IsRegistered(user)
                Swal.fire(
                    'Successfull login',
                    'Click Ok to enter',
                    'success'
                ).then(() => { history.push("/Site/site") })
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Could not login'
                })
                // ...
            });
    }

    const IsRegistered = (user) => {
        let authenticated = false;
        const querySnapshot = getDocs(collection(db, "users")).then((results) => {
            results.forEach((doc) => {
                if (doc.data()['userId'] === user.uid) {
                    authenticated = true;
                }
            });
            if (!authenticated) {
                addUser(user)
            }
            return authenticated
        });
    }

    const addUser = async (user) => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                userId: user.uid
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (<div>
        <h1>Welcome!</h1>
        <div className="login-box">
            <h2>Social Login Button</h2>
            <a href="#" onClick={facebookSignIn} className="social-button" id="facebook-connect"> <span>Connect with Facebook</span></a>
            <a href="#" onClick={googleSignIn} className="social-button" id="google-connect"> <span>Connect with Google</span></a>
            <a href="#" className="social-button" id="twitter-connect"> <span>Connect with Twitter</span></a>
        </div>
    </div>)
}

export default LoginComp