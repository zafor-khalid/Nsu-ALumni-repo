import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from '../SignUp/firebase.config';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { set } from '../../redux/actions/authActions'
import { getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

const auth = getAuth();

const Login = () => {
    const db = getFirestore();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [user, setUser] = useState('')
    const dispatch = useDispatch();
    const value = useSelector((state) => {
        console.log(state);
    })

    const onSubmit = data => {
        const { email, password, Name } = data;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                setUser(user.email)
                dispatch(set(user.email))
                console.log(value);

                const readData = async () => {

                    const querySnapshot = await getDocs(collection(db, "VXYiC4ZNP6Ck1CfDpLK1"));

                    console.log('aaa', querySnapshot);

                }
                readData();

                alert("Login successful!");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage)
            });
    };


    return (
        <div className='my-5 p-2'>
            <h2 className='text-light text-center fw-bold'>Sign In</h2>
            <form class=' mx-auto text-center' style={{ width: "300px" }} onSubmit={handleSubmit(onSubmit)} >

                <input className='text-dark form-control  mb-2' placeholder='email' {...register("email", { required: true })} />

                {/* errors will return when field validation fails  */}
                {errors.email && <span className='text-danger'>Email is required</span>}


                <input type="password" className='text-dark form-control  mb-2' placeholder='password' {...register("password", { required: true, minLength: 8 })} />

                {/* errors will return when field validation fails  */}
                {errors.password && <span className='text-danger'>password is required</span>}
                <br />
                <input type="submit" className='btn btn-success mx-2' style={{ borderRadius: '0' }} />
                <button type="" className='btn btn-success mx-2' style={{ borderRadius: '0' }}>Cancel</button>
            </form>
        </div>
    );
};

export default Login;