import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const Product = (props) => {
    const { name, image, price, categories, vendor } = props.product;
    return (
        <>
            <div className="container">

                <div className="product-card shadow-sm">
                    <img className="product-img img-fluid" src={image} alt="" />
                    <h5 className="categories">{categories}</h5>
                    <h5 className="product-title">{name}</h5>
                    <h5>Price: ${price}</h5>
                    <h4><small> {vendor}</small></h4>

                    <Button onClick={() => props.addProduct(props.product)}
                        className="btn btn-success">
                        <FontAwesomeIcon icon={faPlus} /> Add to Card</Button>

                    <br />
                    <br />
                    <Button onClick={() => props.removeProduct(props.product)}
                        className="btn btn-success">
                        <FontAwesomeIcon icon={faMinus} />remove from Card</Button>
                </div>
            </div>
        </>
    );
};

export default Product;