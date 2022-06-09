import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height:'30px'}} className='mt-5 w-100 d-flex justify-content-center align-items-center' >
              <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;