import react, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import ConvertorComp from './ConvertorComp';
import FilesComp from './file-upload/FilesComp'
import TableComp from './TableComp'

const SiteComp = () => {
    let history = useHistory();

    useEffect(() => {
        history.push("/Site/Convertor")
    }, [])

    const firebaseConfig = {
        apiKey: "AIzaSyD_4E40jr3bl1PcwQ8bZpCLnyNxbVXbmsA",
        authDomain: "purplehomeassignment.firebaseapp.com",
        projectId: "purplehomeassignment",
        storageBucket: "purplehomeassignment.appspot.com",
        messagingSenderId: "269773040173",
        appId: "1:269773040173:web:d6db7745e8ec00f8ae66a4",
        measurementId: "G-PREC538L8V"
    };

    const auth = getAuth();

    const logOut = () => {
        signOut(auth).then(() => {
            history.push("/Login")
        }).catch((error) => {
            // An error happened.
        });
    }

    return (<div>
        <br /> <br />
        <input type='button' value='Convertor' onClick={() => { history.push("/Site/Convertor") }} /> {' '}
        <input type='button' value='Upload Files' onClick={() => { history.push("/Site/Files") }} /> {' '}
        <input type='button' value='Table' onClick={() => { history.push("/Site/Table") }} /> {' '}
        <input type='button' value='Sign Out' onClick={logOut} />
        <Switch>
            <Route path="/Site/Convertor" component={ConvertorComp} />
            <Route path="/Site/Files" component={FilesComp} />
            <Route path="/Site/Table" component={TableComp} />
        </Switch>
    </div>)
}

export default SiteComp