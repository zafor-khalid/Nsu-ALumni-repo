import React from 'react';
import { Button } from 'react-bootstrap';

const EventsCalender = () => {
    return (
        <div className="text-center" style={{ marginTop: '55px' }}>
            <div>
                <Button variant="transparent" style={{ backgroundColor: '#ff9800', width: '300px', borderRadius: '0', height: '200px', borderTop: '13px solid #270084' }} className='col-md-6 fs-5 fw-bold m-1'>create events</Button>
                < Button variant="transparent" style={{ backgroundColor: '#ff9800', width: '300px', borderRadius: '0', height: '200px', borderTop: '13px solid #270084' }
                } className='col-md-6 fs-5 fw-bold m-1' > upcoming events</Button>
            </div >
            <div>
                <Button variant="transparent" style={{ backgroundColor: '#ff9800', width: '300px', borderRadius: '0', height: '200px', borderTop: '13px solid #270084' }} className='col-md-6 fs-5 fw-bold m-1'>recent updates</Button>
                <Button variant="transparent" style={{ backgroundColor: '#ff9800', width: '300px', borderRadius: '0', height: '200px', borderTop: '13px solid #270084' }} className='col-md-6 fs-5 fw-bold m-1'>join in a event</Button>
            </div>
            <div >
                <Button variant="transparent" style={{ backgroundColor: '#ff9800', width: '300px', borderRadius: '0', height: '200px', borderTop: '13px solid #270084' }} className='col-md-6 fs-5 fw-bold m-1'>Annaul Meetup</Button>
                <Button variant="transparent" style={{ backgroundColor: '#ff9800', width: '300px', borderRadius: '0', height: '200px', borderTop: '13px solid #270084' }} className='col-md-6 fs-5 fw-bold m-1'>Holidays with NSU club's</Button>
            </div>
            <br />
            <br />
        </div >
    );
};

export default EventsCalender;