import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { post } from '../../redux/actions/postJobActions'

const CareerOppurtunities = () => {
    const dispatch = useDispatch();
    const value = useSelector((state) => {
        return (state.postReducers);
    })
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const gotData = {
            title: data.Title,
            location: data.location,
            salary: data.salary,
        }
        dispatch(post(gotData))
    }
    const [displayStatus, setDisplayStatus] = useState('none');
    const postJob = (status) => {
        setDisplayStatus(status)
    }
    console.log(value);

    return (
        <>
            <div className="d-flex flex-wrap justify-content-center align-items-center my-5">
                {
                    value.map((d, idx) => {
                        return <Card key={idx} style={{ width: '18rem', backgroundColor: '#dff4a0' }} className='text-dark m-2' >
                            <Card.Body>
                                <h5 className='fw-bold text-dark'> {d.title} </h5>
                                <Button className=' fw-bold m-1' size='sm' variant="warning" style={{ borderRadius: '35px' }}>Apply Now</Button>
                                <Button className=' fw-bold m-1' size='sm' variant="warning" style={{ borderRadius: '35px' }}>Bookmark</Button>
                                <Button className=' fw-bold m-1' size='sm' variant="warning" style={{ borderRadius: '35px' }}>{d.salary}</Button>
                                <Button className=' fw-bold m-1 m-1' size='sm' variant="warning" style={{ borderRadius: '35px' }}>{d.location}</Button>


                            </Card.Body>
                        </Card>
                    })
                }

            </div>
            <div className='text-center'>
                {/* <Button className='mx-2' variant='success' style={{ borderRadius: '0' }}>Load More</Button> */}
                <Button onClick={() => postJob('block')} className='mx-2' variant='success' style={{ borderRadius: '0' }}>Post a Job</Button>
            </div>

            <div className={`d-${displayStatus} , my-5`} >

                <form class=' mx-auto text-center' style={{ width: "300px" }} onSubmit={handleSubmit(onSubmit)} >


                    <input type="name" className='text-dark form-control  mb-2 ' placeholder='Title' {...register("Title", { required: true })} />

                    {/* errors will return when field validation fails  */}
                    {errors.Title && <span className='text-danger'>Title is required</span>}


                    <input className='text-dark form-control  mb-2' placeholder='salary' {...register("salary", { required: true })} />

                    {/* errors will return when field validation fails  */}
                    {errors.salary && <span className='text-danger'>salary is required</span>}


                    <input type="" className='text-dark form-control  mb-2' placeholder='location' {...register("location", { required: true, minLength: 8 })} />

                    {/* errors will return when field validation fails  */}
                    {errors.location && <span className='text-danger'>location is required</span>}

                    <br />

                    <input onClick={() => postJob('none')} type="submit" className='btn btn-success mx-2' style={{ borderRadius: '0' }} />

                </form>

            </div>

        </>
    );
};

export default CareerOppurtunities;