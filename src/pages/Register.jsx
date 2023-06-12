import React, { useState } from "react";
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore"; 
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL
} from "firebase/storage";
import { useNavigate } from "react-router-dom";



const Register = () => {
    const [err, setError] = useState(false)
    const navigate=useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];


        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);



            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on(

                (error) => {
                  setError(true)
                },

                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                        await updateProfile(res.user,{
                            displayName,
                            photoURL:downloadURL,
                        
                        });
                        await setDoc(doc(db,"users",res.user.uid),{
                            displayName,
                            email,
                            photoURL: downloadURL,
                            
                        });
                        await setDoc(doc(db, "userChats",res.user.uid),{});
                        
                        


                    });
                }
            );
          
        }
        
        catch (err) {
            setError(true);

        }




    }
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo"> Chat-App</span>

                <span className="tittle">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="e-mail" />
                    <input type="password" placeholder="password" />
                    <input style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file" id="file">
                        <img src={Add}></img>
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                    {
                        err && <span>Something Went Wrong</span>
                    }
                </form>
                <p>Do you have an account Login</p>
            </div>
        </div>

    )
}
export default Register;