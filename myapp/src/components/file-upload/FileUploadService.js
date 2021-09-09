import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { doc, getFirestore, arrayUnion } from 'firebase/firestore';
import { collection, getDocs, addDoc, updateDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD_4E40jr3bl1PcwQ8bZpCLnyNxbVXbmsA",
    authDomain: "purplehomeassignment.firebaseapp.com",
    projectId: "purplehomeassignment",
    storageBucket: "purplehomeassignment.appspot.com",
    messagingSenderId: "269773040173",
    appId: "1:269773040173:web:d6db7745e8ec00f8ae66a4",
    measurementId: "G-PREC538L8V"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);
const db = getFirestore(app);


const isExist = () => {
    let uid = auth.lastNotifiedUid
    let authenticated = false;
    const querySnapshot = getDocs(collection(db, "files")).then((results) => {
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

const addDocumentToFirebase = async () => {
    let uid = auth.lastNotifiedUid
    try {
        const docRef = await addDoc(collection(db, "files"), {
            userId: uid,
            files: []
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const upload = (file, onUploadProgress) => {
    let uid = auth.lastNotifiedUid
    const querySnapshot = getDocs(collection(db, "files")).then((results) => {
        results.forEach(async (_doc) => {
            if (_doc.data()['userId'] === uid) {
                const userRef = doc(db, "files", _doc._key.path.segments[6])
                await updateDoc(userRef, {
                    files: arrayUnion(file.name)
                });
            }
        });
    });

    const storage = getStorage();
    const storageRef = ref(storage, file.name);

    uploadBytes(storageRef, file).then((snapshot) => {
        return onUploadProgress
    });
};

const getFiles = () => {
    let filesUrlsArr = []
    let filesArr = []
    let uid = auth.lastNotifiedUid
    const querySnapshot = getDocs(collection(db, "files")).then((results) => {
        results.forEach((_doc) => {
            if (_doc.data()['userId'] === uid) {
                filesUrlsArr = _doc.data()['files']
                const storage = getStorage();
                filesUrlsArr.map(url => {
                    getDownloadURL(ref(storage, url))
                        .then((url) => {
                            const xhr = new XMLHttpRequest();
                            xhr.responseType = 'blob';
                            xhr.onload = (event) => {
                                const blob = xhr.response;
                            };
                            xhr.open('GET', url);
                            xhr.send();
                            filesArr.push(url)
                        })
                        .catch((error) => {
                            // Handle any errors
                        });

                })
            }
        });
    });
    return filesArr
};



export default {
    upload,
    getFiles,
    isExist
};