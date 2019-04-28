import * as firebase from "firebase/app";
import "firebase/messaging";

const initializedFirebaseApp = firebase.initializeApp({
    messagingSenderId: "id"
});

const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey(
    "BNL1Sl4J-SG1J_WbjBhkplCe13vdc3_tuJpYzlR9uBUMKaG6k8OEbmp0WifQeUPQ3SV_tZnUK5FDVj8YkTVKW9Q"
);

export { messaging };