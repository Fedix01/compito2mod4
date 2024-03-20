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
                        Benvenuto nel più grande shop di libri online, puoi filtrare per titoli e per categoria utilizzando i vari campi e bottoni, per ogni libro puoi anche vedere i commenti degli utenti.
                    </p>
                </div>
            </div>
        </>
    );
}
export default Welcome;