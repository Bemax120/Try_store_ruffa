import React from 'react';

function Navbar({ activeSection, setActiveSection }) {
    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <h1 className="header-title">Mendoza Store</h1>
                    </li>
                    <li>
                        <a href="#" className={activeSection === 'Home' ? 'active-section' : ''} onClick={() => handleSectionClick('Home')}>Home</a>
                    </li>
                    <li>
                        <a href="#" className={activeSection === 'Products' ? 'active-section' : ''} onClick={() => handleSectionClick('Products')}>Products</a>
                    </li>
                    <li>
                        <a href="#" className={activeSection === 'Orders' ? 'active-section' : ''} onClick={() => handleSectionClick('Orders')}>Orders</a>
                    </li>
                </ul>
            </nav>
            <div className="search-container">
                <input type="text" placeholder="Search here" />
            </div>
        </header>
    );
}

export default Navbar;