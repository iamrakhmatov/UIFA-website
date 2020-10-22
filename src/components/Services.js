import React from 'react'
import styled from 'styled-components'

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import { IconContext } from "react-icons";
import { FaWarehouse } from 'react-icons/fa'
import { GiTruck } from 'react-icons/gi'
import { FaRoute } from 'react-icons/fa'
import { AiFillSchedule } from 'react-icons/ai'
import bgr from '../images/services.jpg'

const Styled = styled.div`
    background: url(${bgr}) no-repeat center;
    background-size: cover;
    position: relative;

    .overlay {
        background: rgba(0,0,0, .7);
        position: absolute;
        top:0;
        left: 0;
        height: 100%;
        width: 100%;
    }
    .container {
        position: relative;
        z-index: 1;
        margin-bottom: 2rem;

        .section-title {
            background: transparent;
            font-size: 1.8rem;
            color: #fff !important;
            border: 0;
        }

        .icon {
            font-size: 2rem;
        }

        .card-deck {
            margin: 5rem 0;
            
            .card {
                background: transparent;
                border-radius: 0;
                .card-header {
                    border-radius: 0;
                    background: rgba(255,255,255, .8); 
                    display: flex;
                    align-items: center;
                    .card-title {
                        margin: 0;
                        margin-left: .5rem;
                        display: inline-block;
                    }
                }
    
                .card-body{
                    background: rgba(0, 0, 0, .1);
                    color: #fff;
                }
            }
        }

    }
`

export const Service = () => {
    return (
        <Styled>
            <div className="overlay"></div>
            <Container>
                <Card className="
                        section-title
                        text-muted
                        text-center
                        rounded-0 
                        py-lg-3
                        border-right-0 
                        border-left-0" body>
                            Наши Услуги
                </Card>

                <CardDeck className="my-0 my-lg-5">
                    <Card border="light"
                        style={{ width: '18rem' }}
                        className="mb-2 rounded-0"
                        >
                        <Card.Header>
                            <IconContext.Provider value={{ className: "icon" }}>
                                <FaWarehouse />
                            </IconContext.Provider>
                            <Card.Title> Хранение </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Обеспечение сохранности грузов и сортировка их по пунктам назначения;
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="light"
                        style={{ width: '18rem' }}
                        className="mb-2 rounded-0"
                        >
                        <Card.Header>
                            <IconContext.Provider value={{ className: "icon" }}>
                                <GiTruck />
                            </IconContext.Provider>
                            <Card.Title> Перевозка </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Перевозка мелкопартионных грузов;
                                Перевозка крупногабаритных грузов;
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="light"
                        style={{ width: '18rem' }}
                        className="mb-2 rounded-0"
                        >
                        <Card.Header>
                            <IconContext.Provider value={{ className: "icon" }}>
                                <FaRoute />
                            </IconContext.Provider>
                            <Card.Title> План Маршрута </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Разработка оптимальных маршрутов доставки грузов; 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="light"
                        style={{ width: '18rem' }}
                        className="mb-2 rounded-0"
                        >
                        <Card.Header>
                            <IconContext.Provider value={{ className: "icon" }}>
                                <AiFillSchedule />
                            </IconContext.Provider>
                            <Card.Title> Сохранность Товара </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Гарантированная доставка грузов до грузополучателей во всем мире;
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
            <Container className="text-center pb-lg-5 mb-0">
                <a href="/services">
                    <Button variant="outline-light" className="rounded-0 px-4 mb-2">Подробнее</Button>
                </a>
            </Container>
        </Styled>
    )
}