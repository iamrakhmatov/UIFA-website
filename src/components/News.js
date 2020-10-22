import React from 'react'
import styled from 'styled-components'

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


import img1 from '../images/card/card-1.jpg'
import img2 from '../images/card/card-2.jpg'
import img3 from '../images/card/card-3.jpg'

const Styled = styled.div`
    .container {
        margin-bottom: 5rem;

        .section-title {
            font-size: 1.5rem;
        }
    }

    .card {
        max-height: 500px;
        .card-body {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .text-center{
                font-weight: bold;
            }
            .card-text{
                max-height: 75px;
                overflow: hidden;
            }

            .btn{
                margin-top: 1rem;
                border-radius: 0;
                font-weight: bold;
            }
        }
    }

    
`
export const Cards = () => {
    return (
        <Styled>
            <Container>
                <Card className=" 
                    section-title
                    text-muted
                    text-center
                    rounded-0 
                    my-5 
                    border-right-0 
                    border-left-0" body>
                        Новости
                </Card>
                <CardDeck>
                    <Card className="shadow rounded-0">
                        <Card.Img className="rounded-0" variant="top" src={img1} />
                        <Card.Body>
                            <div>
                                <Card.Title className="text-center">Транспортировка по ЖД!</Card.Title>
                                <Card.Text>
                                    Транспортировка по железной дороге – Один из самых безопасных и дешевых способов транспортировки крупногабаритных грузов в дальние страны.
                                </Card.Text>
                            </div>
                            <Button variant="outline-dark">Подробнее</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Был опубликован 7 часов назад</small>
                        </Card.Footer>
                    </Card>
                    <Card className="shadow rounded-0">
                        <Card.Img className="rounded-0" variant="top" src={img2} />
                        <Card.Body>
                            <div>
                                <Card.Title className="text-center">Хранение товаров.</Card.Title>
                                <Card.Text>
                                    Процесс хранения товаров начинается с размещения их на складе. Метод размещения выбирают в зависимости от задач, назначения грузов, выбранного способа хранения
                                </Card.Text>
                            </div>
                            <Button variant="outline-dark">Подробнее</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Был опубликован 1 день назад</small>
                        </Card.Footer>
                    </Card>
                    <Card className="shadow rounded-0">
                        <Card.Img className="rounded-0" variant="top" src={img3} />
                        <Card.Body>
                            <div>
                                <Card.Title className="text-center">Логистическая система</Card.Title>
                                <Card.Text>
                                    Логистическая система – это сложная организационно завершенная (структурированная) экономическая система, состоящая из элементов – звеньев, взаимосвязанных в едином процессе управления материальными и
                                </Card.Text>
                            </div>
                            <Button variant="outline-dark">Подробнее</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Был опубликован 2 дня назад</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Container>
        </Styled>
    )
}