import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Service = ({ service }) => {
    const { key, img1, name, shortDescription } = service;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img1} className="service-img card-img-top" alt="..." />
                <div class ="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{shortDescription}</p>
                    <Link to={`/service/${key}`}><button className="button mb-2">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;