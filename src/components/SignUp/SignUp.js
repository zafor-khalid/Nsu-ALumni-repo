import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';

const auth = getAuth();

const SignUp = () => {
    const db = getFirestore();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        passingYear: '',
        department: ''
    });
    let history = useHistory();

    const onSubmit = data => {
        const { email, password, Name, Phone, PassingYear, Department, Occupation } = data;
        const displayName = Name;
        const phoneNumber = Phone;

        createUserWithEmailAndPassword(auth, email, password, displayName, phoneNumber)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser({
                    name: Name,
                    email: email,
                    phone: Phone,
                    passingYear: PassingYear,
                    department: Department,
                    Occupation: Occupation
                });

                createDb(data);
                history.push("/login");
                alert("Sign up successful!");
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage)
            });

        // console.log(user)
    };

    const createDb = async (data) => {
        const { email, password, Name, Phone, PassingYear, Department, Occupation } = data;
        try {
            const docRef = await addDoc(collection(db, "users"), {
                name: Name,
                email: email,
                phone: Phone,
                passingYear: PassingYear,
                department: Department,
                Occupation: Occupation
            });
            const washingtonRef = doc(db, "users", docRef.id);
            await updateDoc(washingtonRef, { ID: docRef.id });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }

    return (
        <div className='my-5 p-2'>
            <h2 className='text-light text-center fw-bold'>Join Now</h2>
            <form class=' mx-auto text-center' style={{ width: "300px" }} onSubmit={handleSubmit(onSubmit)} >


                <input type="name" className='text-dark form-control  mb-2 ' placeholder='Name' {...register("Name", { required: true })} />

                {/* errors will return when field validation fails  */}
                {errors.Name && <span className='text-danger'>Name is required</span>}


                <input className='text-dark form-control  mb-2' placeholder='email' {...register("email", { required: true })} />

                {/* errors will return when field validation fails  */}
                {errors.email && <span className='text-danger'>Email is required</span>}


                <input type="password" className='text-dark form-control  mb-2' placeholder='password' {...register("password", { required: true, minLength: 8 })} />

                {/* errors will return when field validation fails  */}
                {errors.password && <span className='text-danger'>password is required</span>}


                <input type="password" className='text-dark form-control  mb-2' placeholder='confirm password' {...register("confirmPassword", { required: true, minLength: 8 })} />

                {/* errors will return when field validation fails  */}
                {errors.confirmPassword && <span className='text-danger'>This field is required</span>}


                <input className='text-dark form-control  mb-2' placeholder='Phone' {...register("Phone", { required: true })} />

                {/* errors will return when field validation fails  */}
                {errors.Phone && <span className='text-danger'>Phone is required</span>}


                <input className='text-dark form-control  mb-2' placeholder='PassingYear' {...register("PassingYear", { required: true })} />

                {/* errors will return when field validation fails  */}
                {errors.PassingYear && <span className='text-danger'>This field is required</span>}


                <input className='text-dark form-control  mb-2' placeholder='Department' {...register("Department", { required: true })} />

                {/* errors will return when field validation fails  */}
                {errors.Department && <span className='text-danger'>Department is required</span>}

                <input className='text-dark form-control  mb-2' placeholder='Occupation' {...register("Occupation", { required: true })} />

                {/* errors will return when field validation fails  */}
                {errors.Occupation && <span className='text-danger'>Occupation is required</span>}
                <br />

                <input type="submit" className='btn btn-success mx-2' style={{ borderRadius: '0' }} />
                <button type="" className='btn btn-success mx-2' style={{ borderRadius: '0' }}>Cancel</button>
            </form>
            <h6 className="text-center my-2">If you already have an account  <Link to='/login' className="text-warning mx-2">Sign In</Link></h6>
        </div>
    );
};

export default SignUp;