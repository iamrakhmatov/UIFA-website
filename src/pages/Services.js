import React from 'react'
import styled from 'styled-components'

import Container from 'react-bootstrap/Container' 
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'


import { NavigationBar } from '../components/Navigation'
import { Footer } from '../components/Footer'

import bgr from '../images/carousel/car-1.jpg'

const Styled = styled.div`
    .card {

        .card-img-overlay {
            background: rgba(0,0,0, .6);
            
            .caption {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                .card-title {
                    font-size: 2.8rem;
                }
                .mob {
                    font-size: 2rem;
                }

                .card-text {
                    opacity: .9;
                    font-size: 1.1rem;
                }
            }
        }
    }

`

export const Services = () => {
    return (
        <Styled>
            <NavigationBar />

            <Card className="bg-dark text-white rounded-0">
                <Card.Img className="rounded-0" src={bgr} alt="Card image" />
                <Card.ImgOverlay>
                    <div className="caption">
                        <Card.Title className="d-none d-lg-block">Наши Услуги</Card.Title>
                        <Card.Title className="mob d-block d-lg-none">Услуги</Card.Title>
                        <Card.Text>
                            <cite className="d-none d-lg-block title" title="Source Title">
                                Мы предоставляем разные услуги в индустрии FIATA.
                            </cite>
                        </Card.Text>
                    </div>
                </Card.ImgOverlay>
            </Card>

            <Container className="py-5 px-1 px-lg-5">
                <Card className="mb-4 shadow-sm">
                    <Card.Header as="h5">Перевозка</Card.Header>
                    <Card.Body>
                        <Card.Title>Виды услуг:</Card.Title>
                        <Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Смешанные перевозки;</ListGroup.Item>
                                <ListGroup.Item>Перевозка мелкопартионных грузов;</ListGroup.Item>
                                <ListGroup.Item>Перевозка крупногабаритных грузов;</ListGroup.Item>
                                <ListGroup.Item>перевозка грузов по железной дороге под таможенным контролем;</ListGroup.Item>
                                <ListGroup.Item>Авиаперевозки;</ListGroup.Item>
                                <ListGroup.Item>Автомобильные перевозки;</ListGroup.Item>
                                <ListGroup.Item>Транспортировка экспортно-импортных и транзитных грузов в крупнотоннажных контейнерах международного стандарта;</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mb-4 shadow-sm">
                    <Card.Header as="h5">Хранение</Card.Header>
                    <Card.Body>
                        <Card.Title>Виды услуг:</Card.Title>
                        <Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Складские услуги;</ListGroup.Item>
                                <ListGroup.Item>Страхование грузов;</ListGroup.Item>
                                <ListGroup.Item>Содействие в таможенном оформлении;</ListGroup.Item>
                                <ListGroup.Item>Возврат собственных контейнеров и вагонов их владельцам;</ListGroup.Item>
                                <ListGroup.Item>Обработка грузов современным контейнерным терминалом;</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mb-4 shadow-sm">
                    <Card.Header as="h5">Планирование маршрута товара</Card.Header>
                    <Card.Body>
                        <Card.Title>Виды услуг:</Card.Title>
                        <Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Разработка оптимальных маршрутов доставки грузов;</ListGroup.Item>
                                <ListGroup.Item>Транспортировка грузов с определенной скоростью;</ListGroup.Item>
                                <ListGroup.Item>Организация оформления и отправки личных вещей различными видами транспорта;</ListGroup.Item>
                                <ListGroup.Item>Обеспечение сохранности грузов и сортировка их по пунктам назначения;</ListGroup.Item>
                                <ListGroup.Item>Охрана грузов в пути;</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <Footer /> 
        </Styled>
    )
}