import React from 'react'
import styled from 'styled-components'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

import { IconContext } from "react-icons";
import { GrTwitter } from 'react-icons/gr'
import { GrFacebookOption } from 'react-icons/gr'
import { GrInstagram } from 'react-icons/gr'
import { FaTelegramPlane } from 'react-icons/fa'


const Styled = styled.div`
    height: 50vh;
    background: #2a4b83;

    @media screen and (max-width: 768px) {
        height: unset;
    }

    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .text-muted {
            @media screen and (max-width: 768px) {
                padding: 0 .5rem; 
            }
        }
        .nav-link {
            color: #fff;
            font-weight: bold;
            font-size: 1.1rem;
            transition: all .3s ease;


            &:hover{
                transform: translateX(.5rem);
            }

            .icon {
                font-size: 1.5rem;
            }

            p {
                padding-left: 1rem;
                display: inline-block;
                margin-bottom: 0;
            }
        }
        .title {
            font-size: 1.2rem;
            opacity: 1;
        }
        hr {
            opacity: .6;
            background: #fff;
            width: 60%;
        }

        .map {
            border: 0;
            width: 100%;
            frameborder: 0;
        }
    }
`

export const Footer = () => {
    return (
        <Styled>
            <Container>
                <Row>
                    <Col className="py-4" md={3}>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link disabled><cite className="title" title="Source Title">Навигация</cite></Nav.Link>
                            <hr style={{"marginLeft": "16px", "marginRight": "16px"}}/>
                            <Nav.Link href="/">Главная</Nav.Link>
                            <Nav.Link href="/news">Новости</Nav.Link>
                            <Nav.Link href="/services">Услуги</Nav.Link>
                            <Nav.Link href="/about_us">Об Организации</Nav.Link>
                            <Nav.Link href="/contacts" className="d-block d-lg-none">Контакты</Nav.Link>
                        </Nav>
                    </Col>
                    <Col className="py-md-4" md={6}>
                        <iframe className="map"
                            title="This is the location of UIFA"
                            src="https://www.google.com/maps/d/u/0/embed?mid=1PrTrYbM43B-AffBZOt5pTFN9dSzqNchx" 
                            width="420" height="240">
                        </iframe>
                    </Col>
                    <Col className="py-md-4" md={3}>
                        <Nav defaultActiveKey="/home" className="justify-content-center flex-lg-column">
                            <Nav.Link className="d-none d-lg-inline-block" disabled><cite className="title" title="Source Title">Социальные медиа</cite></Nav.Link>
                            <hr className="d-none d-lg-inline-block" style={{"marginLeft": "16px", "marginRight": "16px"}}/>
                            <Nav.Link href="/">
                                <IconContext.Provider value={{ className: "icon" }}>
                                    <GrFacebookOption />
                                </IconContext.Provider>
                                <p className="d-none d-lg-inline-block">Facebook</p>
                            </Nav.Link>
                            <Nav.Link href="/">
                                <IconContext.Provider value={{ className: "icon" }}>
                                    <FaTelegramPlane />
                                </IconContext.Provider>
                                <p className="d-none d-lg-inline-block">Telegram</p>
                            </Nav.Link>
                            <Nav.Link href="/">
                                <IconContext.Provider value={{ className: "icon" }}>
                                    <GrInstagram />
                                </IconContext.Provider>
                                <p className="d-none d-lg-inline-block">Instagram</p>
                            </Nav.Link>
                            <Nav.Link href="/">
                                <IconContext.Provider value={{ className: "icon" }}>
                                    <GrTwitter />
                                </IconContext.Provider>
                                <p className="d-none d-lg-inline-block">Twitter</p>
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Row>
                <Row >
                    <p style={{"color": "#fff"}} className="mx-auto  mb-0 d-none d-lg-block">
                        Copyright © 2020 Узбекская ассоциация международных экспедиторов. Все права защищены.
                    </p>
                    <p style={{"color": "#fff"}} className=" text-center mb-0 d-block d-lg-none pt-3">
                        Copyright © 2020 UIFA. All rights reserved.
                    </p>
                </Row>
            </Container>
        </Styled>
    )

}