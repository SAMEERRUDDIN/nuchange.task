import React, { useEffect, useState } from 'react';
import JsonData from './Data/Data.json';
import Product from './Product/Product';
import Card from './Cart/Cart';

const Shop = () => {
    const [product, setProduct] = useState([]);

    const [card, setCard] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")


    useEffect(() => {
        setProduct(JsonData);
    }, []);

    const addProduct = (product) => {
        const newCard = [...card, product]
        setCard(newCard);

    }
    return (
        <div className="container-fluid d-flex">
            <div className="col-lg-9 product-area border-right">
                <input type="search" placeholder="search" onChange={(event1) => {
                    setSearchTerm(event1.target.value)
                }} />

                {
                    product.filter((pd) => { if (searchTerm == "") { return pd } else if (pd.categories.toLowerCase().includes(searchTerm.toLowerCase())) return pd }).map(pd => <Product product={pd} addProduct={addProduct}></Product>)
                }

            </div>

            <div className="col-lg-3 card-area">
                <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Shop;