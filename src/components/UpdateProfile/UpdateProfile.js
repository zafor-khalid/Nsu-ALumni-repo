import React from 'react';
import { useForm } from "react-hook-form";

const UpdateProfile = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='my-5 p-2'>
            <h1 className='text-center'>Update Profile</h1>
            <form class=' mx-auto text-center' style={{ width: "300px" }} onSubmit={handleSubmit(onSubmit)} >


                <input type="name" className='text-dark form-control  mb-2 ' placeholder='new name' {...register("Name", { required: true })} />

                {/* errors will return when field validation fails  */}
                {errors.Name && <span className='text-danger'>Name is required</span>}


                <input className='text-dark form-control  mb-2' placeholder='new email' {...register("email", { required: true })} />

                {/* errors will return when field validation fails  */}
                {errors.email && <span className='text-danger'>Email is required</span>}


                <input type="password" className='text-dark form-control  mb-2' placeholder='new password' {...register("password", { required: true, minLength: 8 })} />

                {/* errors will return when field validation fails  */}
                {errors.password && <span className='text-danger'>password is required</span>}


                <input type="password" className='text-dark form-control  mb-2' placeholder='confirm new password' {...register("confirmPassword", { required: true, minLength: 8 })} />

                {/* errors will return when field validation fails  */}
                {errors.confirmPassword && <span className='text-danger'>This field is required</span>}


                <input className='text-dark form-control  mb-2' placeholder='new phone' {...register("Phone", { required: true })} />

                {/* errors will return when field validation fails  */}
                {errors.Phone && <span className='text-danger'>Phone is required</span>}


                <input className='text-dark form-control  mb-2' placeholder='new passing year' {...register("PassingYear", { required: true })} />

                {/* errors will return when field validation fails  */}
                {errors.PassingYear && <span className='text-danger'>This field is required</span>}


                <input className='text-dark form-control  mb-2' placeholder='new department' {...register("Department", { required: true })} />

                {/* errors will return when field validation fails  */}
                {errors.Department && <span className='text-danger'>Department is required</span>}
                <br />
                <input type="submit" className='btn btn-success mx-2' style={{ borderRadius: '0' }} />
                <button type="" className='btn btn-success mx-2' style={{ borderRadius: '0' }}>Cancel</button>
            </form>
        </div>
    );
};

export default UpdateProfile;