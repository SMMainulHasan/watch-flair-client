import React, { useContext } from 'react';
import './Login.css';
import Header from '../Header/Header';
import google from '../../icons/Group 573.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { userContext } from "../../App";
import { useHistory, useLocation } from 'react-router';

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [user, setUser] = useContext(userContext);

    const location = useLocation();
    const history = useHistory();

    let { from } = location.state || { from: { pathname: "/" } };


    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const googleLogin = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                // var credential = result.credential;
                // var token = credential.accessToken;
                const {photoURL, email, displayName} = result.user;
                setUser({name: displayName, email: email, displayPic: photoURL});
                history.replace(from);
            }).catch((error) => {
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // var email = error.email;
                // var credential = error.credential;
            });
    }
    return (
        <>
            <Header />
            <div className="google-login">
                <div onClick={googleLogin} className="google-btn">
                    <img src={google} alt="" /> &nbsp; &nbsp; &nbsp;
                    <h4>Login with Google</h4>
                </div>
            </div>
        </>
    );
};

export default Login;