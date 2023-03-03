import React, { useState } from 'react'
import { images } from '../../constant'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion';
import './Navbar.scss'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const Types = ['Home', 'About', 'Works', 'Skills', 'Contact'];

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.logo} alt="Logo image" />
            </div>
            <ul className='app__navbar-links'>
                {Types.map((items) => (
                    <li className='app__flex p-text' key={`link-${items}`}>
                        <div />
                        <a href={`#${items}`}>{items}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {Types.map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;