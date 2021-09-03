import React from 'react';
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from '../SignUp/firebase.config';
const auth = getAuth();

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { email, password, Name } = data;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
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

                <input type="submit" className='btn btn-success mx-2' style={{ borderRadius: '0' }} />
                <button type="" className='btn btn-success mx-2' style={{ borderRadius: '0' }}>Cancel</button>
            </form>
        </div>
    );
};

export default Login;