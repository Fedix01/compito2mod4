import React from 'react';
import { Button } from 'react-bootstrap';
import "./Welcome.css"
function Welcome() {

    return (
        <>
            <div className='jumbotron'>
                <div className='jumbo-content'>
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