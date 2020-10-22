import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import styled from 'styled-components'

import logo from '../images/logo.gif'

import { IconContext } from "react-icons";
import { ImLocation2 } from 'react-icons/im'
import { ImPhone } from 'react-icons/im'
import { GrMail } from 'react-icons/gr'


const Styled = styled.div`
    .navbar {
        background: #fff;
    }
    .breadcrumb {
        margin-bottom: 0px;
        background: transparent;

        .breadcrumb-item {
            color: #000;
        }
    }

    .icon {
        font-size: 1.5rem;
        color: #000;
        margin-right: .5rem;
    }
`

export const Header = () => {
    return (
        <Styled className = "d-none d-md-block">
            <Navbar variant="dark">
                <Navbar.Brand href="/">
                    <img
                    alt=""
                    src= {logo}
                    width="210"
                    height="70"
                    className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Breadcrumb className = "ml-auto">
                    <Breadcrumb.Item active>
                        <IconContext.Provider value={{ className: "icon" }}>
                            <ImLocation2 />
                        </IconContext.Provider>
                        Адрес: Мирзо-Улугбекский пр-т Мустакиллик, 88А
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        <IconContext.Provider value={{ className: "icon" }}>
                            <ImPhone />
                        </IconContext.Provider>
                        Телефон Доверия: +998 78 1405107 
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        <IconContext.Provider value={{ className: "icon" }}>
                            <GrMail />
                        </IconContext.Provider>
                        E-mail: info@uifa.uz
                    </Breadcrumb.Item>
                </Breadcrumb>
            </Navbar>
        </Styled>
    )
}