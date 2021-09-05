import react, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { doc, getFirestore, arrayUnion } from 'firebase/firestore';
import { collection, getDocs, addDoc, updateDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import $ from "jquery";

const ConvertorComp = () => {
    const [before, setBefore] = useState(0)
    const [after, setAfter] = useState(0)
    const [from, setFrom] = useState('ILS')
    const [to, setTo] = useState('USD')

    const firebaseConfig = {
        apiKey: "AIzaSyD_4E40jr3bl1PcwQ8bZpCLnyNxbVXbmsA",
        authDomain: "purplehomeassignment.firebaseapp.com",
        projectId: "purplehomeassignment",
        storageBucket: "purplehomeassignment.appspot.com",
        messagingSenderId: "269773040173",
        appId: "1:269773040173:web:d6db7745e8ec00f8ae66a4",
        measurementId: "G-PREC538L8V"
    };
    let history = useHistory();
    const auth = getAuth();
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore(app);

    useEffect(() => {
        IsExist(auth.lastNotifiedUid)
    }, [])

    const IsExist = (uid) => {
        let authenticated = false;
        const querySnapshot = getDocs(collection(db, "convertors")).then((results) => {
            results.forEach((doc) => {
                if (doc.data()['userId'] === uid) {
                    authenticated = true;
                }
            });
            if (!authenticated) {
                addDocumentToFirebase(uid)
            }
            return authenticated
        });
    }

    const addDocumentToFirebase = async (uid) => {
        try {
            const docRef = await addDoc(collection(db, "convertors"), {
                userId: uid,
                convertors: []
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const convert = () => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
            .then(res => res.json())
            .then(res => {
                const rate = res.rates[to];
                setAfter((before * rate).toFixed(2));
            })
            .catch(() => {
                alert('Could not convert')
            })
    }

    const saveConvert = () => {
        let uid = auth.lastNotifiedUid
        let item = `${before}, ${from}, ${to}, ${after}`
        const querySnapshot = getDocs(collection(db, "convertors")).then((results) => {
            results.forEach(async (_doc) => {
                if (_doc.data()['userId'] === uid) {
                    const userRef = doc(db, "convertors", _doc._key.path.segments[6])
                    await updateDoc(userRef, {
                        convertors: arrayUnion(item)
                    });
                }
            });
        });
        alert('convertion was saved successfully!')
    }

    return (<div> <br />
        <h1>Currency convertor</h1> <br /> <br />
        <label htmlFor="from_currency">Enter value: </label>
        <input placeholder='Enter currency to convert' type='number' defaultValue={before} onChange={(e) => { setBefore(e.target.value) }} /> {' '}
        <label htmlFor="from_currency">From Currency: </label>
        <input defaultValue='ILS' type="text" placeholder="Search.." id="myInput" list='from_currency' onChange={(e) => setFrom(e.target.value)} ></input>
        <datalist style={{ display: 'none' }} id="from_currency">
            <option value="AED">AED</option>
            <option value="ARS">ARS</option>
            <option value="AUD">AUD</option>
            <option value="BGN">BGN</option>
            <option value="BRL">BRL</option>
            <option value="BSD">BSD</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="CLP">CLP</option>
            <option value="CNY">CNY</option>
            <option value="COP">COP</option>
            <option value="CZK">CZK</option>
            <option value="DKK">DKK</option>
            <option value="DOP">DOP</option>
            <option value="EGP">EGP</option>
            <option value="EUR">EUR</option>
            <option value="FJD">FJD</option>
            <option value="GBP">GBP</option>
            <option value="GTQ">GTQ</option>
            <option value="HKD">HKD</option>
            <option value="HRK">HRK</option>
            <option value="HUF">HUF</option>
            <option value="IDR">IDR</option>
            <option defaultValue value="ILS">ILS</option>
            <option value="INR">INR</option>
            <option value="ISK">ISK</option>
            <option value="JPY">JPY</option>
            <option value="KRW">KRW</option>
            <option value="KZT">KZT</option>
            <option value="MXN">MXN</option>
            <option value="MYR">MYR</option>
            <option value="NOK">NOK</option>
            <option value="NZD">NZD</option>
            <option value="PAB">PAB</option>
            <option value="PEN">PEN</option>
            <option value="PHP">PHP</option>
            <option value="PKR">PKR</option>
            <option value="PLN">PLN</option>
            <option value="PYG">PYG</option>
            <option value="RON">RON</option>
            <option value="RUB">RUB</option>
            <option value="SAR">SAR</option>
            <option value="SEK">SEK</option>
            <option value="SGD">SGD</option>
            <option value="THB">THB</option>
            <option value="TRY">TRY</option>
            <option value="TWD">TWD</option>
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="UYU">UYU</option>
            <option value="VND">VND</option>
            <option value="ZAR">ZAR</option>
        </datalist> <br /> <br />
        <label htmlFor="to_currency">To Currency: </label>
        <input defaultValue='USD' type="text" placeholder="Search.." id="input" list='from_currency' onChange={(e) => setTo(e.target.value)} ></input> {' '}
        <input type='button' value='Convert' onClick={convert} /> {' '}
        <input type='label' value={after} /> <br /> <br />
        <input type='button' value='Save' onClick={saveConvert} />
    </div>)
}

export default ConvertorComp