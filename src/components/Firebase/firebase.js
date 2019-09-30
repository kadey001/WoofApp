import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDLWmvzBX36a7U2hCeSC4JiX2E_cAi1C78",
    authDomain: "woof-238917.firebaseapp.com",
    databaseURL: "https://woof-238917.firebaseio.com",
    projectId: "woof-238917",
    storageBucket: "woof-238917.appspot.com",
    messagingSenderId: "581271476437"
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.fieldValue = app.firestore.FieldValue;
        this.db = app.firestore();
    }

    // *** Auth API ***

    // doCreateUserWithGoogle = (provider) => this.auth.signInWithPopup(provider).then(function(result) {
    //     var token = result.credential.accessToken;
    //     var user = result.user;
    // }).catch(function(error) {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     var email = error.email;
    //     var credential = error.credential;
    // });

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    //*** User API ***
    user = uid => this.db.doc(`users/${uid}`);

    users = () => this.db.collection('users');

    snapshotToArray(snapshot) {
        var returnArr = [];

        snapshot.forEach((childSnapshot) => {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;

            returnArr.push(item);
        });

        return returnArr;
    };

    async getUserList() {
        let users = [];

        // const snapshot = await this.db.collection('users').get()
        // .then(function(querySnapshot) {
        //     querySnapshot.forEach(function(doc) {
        //         console.log(doc.id, " => ", doc.data())
        //         //users.push(doc.id);
        //     });
        // });

        this.db.collection('users').get().then(querySnapshot => {
            querySnapshot.docs.forEach(doc => {
                users.push(doc.data());
            })
        })

        //console.log("Snapshot: " + snapshot.val());
        return await users;
    };
    
    getRandomUser() {
        let users = this.getUserList();

        //let users = this.snapshotToArray(snapshot);

        // snapshot.forEach(function(doc) {
        //     users.push(doc.id)
        // });
        // this.db.collection('users').get()
        // .then(function(querySnapshot) {
        //     querySnapshot.forEach(function(doc) {
        //         console.log(doc.id, " => ", doc.data())
        //         users.push(doc.id);
        //     });
        // });
        //console.log("Snapshot: " + snapshot.docs.map(doc => doc.data()));
        console.log(users[0]);

        //let user = users[Math.floor(Math.random()*users.length)];
        //let user = users[0];

        //console.log(users);
        return users[0];
    };

    getUserByID() {
        var docRef = this.db.collection('users').doc(firebase.auth().currentUser.uid);

        return docRef.get();
    };
}

export default Firebase;