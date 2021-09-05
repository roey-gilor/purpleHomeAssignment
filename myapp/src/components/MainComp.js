import react, { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom';
import LoginComp from './LoginComp';
import SiteComp from './SiteComp';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import "firebase/firestore";

const MainComp = () => {
    let history = useHistory();
    useEffect(() => {
        history.push('/Login')
    }, [])

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

    return (<div>
        <Switch>
            <Route path="/Login" component={LoginComp} />
            <Route path="/Site" component={SiteComp} />
        </Switch>
    </div>)
}

export default MainComp