import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="p-3">
                <h1>FILP.store</h1>
            </div>

            <nav>
                <a href="/">Home</a>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/profile">profile</a>

            </nav>
        </div>
    );
};
export default Header;