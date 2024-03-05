import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
           <button className="vs-menu-toggle" onClick={toggleMenu}>
                Toggle Menu
            </button>
        
        <div className={`vs-menu-wrapper ${isOpen ? 'vs-body-visible' : ''}`}>
         
            <div className="vs-menu-area text-center">
                {isOpen && (
                    <div className="vs-mobile-menu">
                        <ul id="menu-mobile-menu">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-131">
                                <Link to='/' onClick={toggleMenu}>Главная</Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-135">
                                <a href="#">О нас</a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-136">
                                <a href="#">Расчет налога</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-8925">
                                        <Link to='taxhome'>Жилое здание, сооружение и помещение</Link>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8923">
                                        <Link to="taxnohome">Нежилое здание, сооружение и помещение</Link>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8921">
                                        <Link to="taxplace">Земли насел. пунктов и несельхоз назнач.</Link>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8922">
                                        <Link to={'taxcar'}>Транспортное средство</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-139">
                                <a href="#">Blog</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-140">
                                        <a href="#">Blog</a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-141">
                                        <a href="#">Blog Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-142">
                                <a href="#">Pages</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-151">
                                        <a href="#">Pricing Plan</a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-153">
                                        <a href="#">Projects</a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-154">
                                        <a href="#">Project Details</a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-155">
                                        <a href="#">Team</a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-156">
                                        <a href="#">Team Details</a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-160">
                                        <a href="#">404 Page</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-161">
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div></>
    );
}

export default DropdownMenu;
