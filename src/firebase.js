import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/Auth";
const firebaseConfig = {
  apiKey: "AIzaSyBG2dnTGVexRtDkh0aXQ-G7h9LLf_c_yY0",
  authDomain: "chat-c1578.firebaseapp.com",
  projectId: "chat-c1578",
  storageBucket: "chat-c1578.appspot.com",
  messagingSenderId: "216790991069",
  appId: "1:216790991069:web:9739a5ba453a48cf5f9b34"
};


 export const app = initializeApp(firebaseConfig);
 export const auth=getAuth()