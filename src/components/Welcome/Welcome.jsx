import React from 'react';
import { Button } from 'react-bootstrap';
import "./Welcome.css"
function Welcome() {

    return (
        <>
            <div className='jumbotron d-flex justify-content-center'>
                <div className=' container jumbo-content mx-5'>
                    <h1 className='fw-bold'>Benvenuto in Epibooks</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </div>
            </div>
        </>
    );
}
export default Welcome;