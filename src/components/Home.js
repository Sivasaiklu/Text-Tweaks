import React from 'react';
import { Link } from 'react-router';


export default function Home() {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-md-6 bg-dark rounded text-info mx-auto" >
          <h2 className='text-center text-warning'>Welcome to TextTweaks</h2>
          <p>
            Simplify your text manipulation tasks with our powerful online tools. 
            TextTweaks offers a suite of features to help you work with text effectively.
          </p>
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <button className="btn my-5 bg-primary mx-auto"><Link to="/" className=" text-light text-decoration-none">Go to Dashboard</Link></button>
      </div>
    </div>
  );
}