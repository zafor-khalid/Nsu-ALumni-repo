import React, { useState } from 'react';
import { Button, ButtonToolbar, Form, FormControl, Table } from 'react-bootstrap';

const arr = [
    {
        name: 'zafor',
        department: 'CSE',
        batch: 2011,
        Occupation: "software Engineer"
    },
    {
        name: 'khalid',
        department: 'EEE',
        batch: 2012,
        Occupation: "Nothing"
    },
    {
        name: 'asif',
        department: 'ece',
        batch: 2012,
        Occupation: "Cader"
    },
    {
        name: 'Mouno',
        department: 'SE',
        batch: 2022,
        Occupation: "not applied"
    },
    {
        name: 'arin',
        department: 'economics',
        batch: 2009,
        Occupation: "Chartared Accountant"
    },
    {
        name: 'afridi',
        department: 'Cse',
        batch: 2018,
        Occupation: "software Engineer"
    }, {
        name: 'rashi',
        department: 'BBA',
        batch: 2016,
        Occupation: "Manager"
    },
    {
        name: 'ishfaq',
        department: 'cse',
        batch: 2019,
        Occupation: "web developer"
    }

]


const MemberDirectory = () => {
    let [index, setIndex] = useState(0);

    const handleNext = () => {
        if (index !== arr.length - 1) {
            setIndex(++index);
        }

    }
    const handlePrevious = () => {
        if (index !== 0) {
            setIndex(--index);
        }

    }
    return (
        <>
            <div className="d-flex justify-content-center m-5">

                <Form className="d-flex flex-wrap m-auto justify-content-center">
                    <Form.Select className="m-2" size="sm" style={{ width: '200px', borderRadius: '0', height: '30px' }} >
                        <option>By Department</option>
                        <option>By Name</option>
                    </Form.Select>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="m-2"
                        aria-label="Search"
                        style={{ width: '200px', borderRadius: '0', height: '30px' }}
                    />


                    <Button className="m-2" variant="outline-light" size="sm" style={{ borderRadius: '0', height: '30px' }}>Search</Button>
                </Form>
            </div>
            <div className=" d-flex justify-content-center my-5 mx-3 fw-bold">
                <Table striped bordered hover responsive variant="dark" style={{ width: '550px', borderLeft: '5px double #bd0000' }}>

                    <tbody>
                        <tr >
                            <td style={{ width: '210px' }}>Member Name</td>
                            <td style={{ width: '210px' }}> {arr[index].name} </td>
                        </tr>
                        <tr>
                            <td style={{ width: '210px' }}>Department</td>
                            <td style={{ width: '210px' }}>{arr[index].department}</td>
                        </tr>
                        <tr>
                            <td style={{ width: '210px' }}>Batch</td>
                            <td style={{ width: '210px' }}>{arr[index].batch}</td>
                        </tr>

                        <tr>
                            <td style={{ width: '210px' }}>Occupation</td>
                            <td style={{ width: '210px' }}>{arr[index].Occupation}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="text-center">
                <Button onClick={() => handlePrevious()} className="mx-5" size="sm" variant='outline-success' style={{ borderRadius: '0', width: '75px' }}>Previous</Button>
                <Button onClick={() => handleNext()} className="mx-5" size="sm" variant='outline-success' style={{ borderRadius: '0', width: '75px' }}>Next</Button>
            </div>

        </>
    );
};

export default MemberDirectory;