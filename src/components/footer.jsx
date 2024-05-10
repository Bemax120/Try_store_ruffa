import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="social-icons">
                    <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="icon" />
                    </a>
                    <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="icon" />
                    </a>
                    <a href="mailto:your-email@gmail.com">
                        <FontAwesomeIcon icon={faGoogle} className="icon" />
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} Mendoza Shoes Store</p>
            </div>
        </footer>
    );
}

export default Footer;
