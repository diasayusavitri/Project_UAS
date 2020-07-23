import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText,
    Button
} from 'reactstrap';

import {NavLink} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../CartContext';

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const {value, setValue} = useContext(CartContext)

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Toko Buku Cerdas Ceria</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/"className="nav-link">Beranda</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/info" className="nav-link">Info</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/buku" className="nav-link">Buku</NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink to="/kelas" className="nav-link">Class</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/hooks" className="nav-link">Hook</NavLink>
                        </NavItem> */}
                        {/* <NavItem>
                            <NavLink to="/useeffects" className="nav-link">Use Effects</NavLink>
                        </NavItem> */}
                        <NavItem>
                            <NavLink to="/produk" className="nav-link">Produk</NavLink>
                        </NavItem>
                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    )
}
export default NavbarComp