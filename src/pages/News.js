import React from 'react'
import styled from 'styled-components'


import { NavigationBar } from '../components/Navigation'
import { Footer } from '../components/Footer'

import Container from 'react-bootstrap/Container' 
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

import bgr from '../images/carousel/car-1.jpg'
import news1 from '../images/news/news1.jpg'
import news2 from '../images/news/news2.jpg'
import news3 from '../images/news/news3.jpg'

const Styled = styled.div`

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
    
`

export const News = () => {
    return (
        <Styled>
            <NavigationBar />

            <Card className="bg-dark text-white rounded-0">
                <Card.Img className="rounded-0" src={bgr} alt="Card image" />
                <Card.ImgOverlay>
                    <div className="caption">
                        <Card.Title className="d-none d-lg-block">Новости и Информация</Card.Title>
                        <Card.Title className="mob d-block d-lg-none">Новости</Card.Title>
                        <Card.Text>
                            <cite className="d-none d-lg-block title" title="Source Title">
                                Последние новости об Узбекской ассоциации международных экспедиторов здесь.
                            </cite>
                        </Card.Text>
                    </div>
                </Card.ImgOverlay>
            </Card>

            <Container className="p-5">
                <CardColumns>
                    <Card>
                        <Card.Img variant="top" src={news1} />
                        <Card.Body>
                            <Card.Title>О ходе выполнения решений и о планах</Card.Title>
                            <Card.Text>
                                21 октября 2020 года в г. Москва в режиме видеоконференции состоялось 18-заседание Консультативного комитета по транспорту и инфраструктуре Евразийской экономической комиссии.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="p-3">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            О вопросе ответственности за вред, причиненный третьим лицам арендованным транспортным средствам
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                заявил <cite title="Source Title">АМЭУз</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={news3} />
                        <Card.Body>
                            <Card.Title>Итоги и планы АНЭК</Card.Title>
                            <Card.Text>
                                25 сентября, 8 и 13 октября 2020 года Комитетом по защите 
                                и развитию конкуренции МНЭ РУз проведены онлайн заседания 
                                Рабочей группы по грузовым перевозкам железнодорожным 
                                транспортом.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">27 октября 2020 года</small>
                        </Card.Footer>
                    </Card>
                    <Card bg="primary" text="white" className="text-center p-3">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Об исполнении «Основных направлений деятельности АМЭУз за 2019 год»
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-light">
                                6 Август, <cite title="Source Title">2020 года</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </Card>
                    <Card className="text-center">
                        <Card.Body>
                        <Card.Title>Пандемия</Card.Title>
                        <Card.Text>
                            О проблемах транспорта и мерах подержки в условиях пандемии
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">14 октября 2020 года </small>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img src={news2} />
                    </Card>
                    <Card className="text-right">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Бизнес-семинар «Фландрия – окно в Западную Европу» 08 
                            октября 2020 г.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                             <cite title="Source Title">21.09.20</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </Card>
                    <Card>
                        <Card.Body>
                        <Card.Title>О ходе выполнения решений и о планах</Card.Title>
                        <Card.Text>
                            21 октября 2020 года в Евразийской экономической комиссии в г. 
                            Москва в режиме видеоконференции состоялось заседание Экспертной 
                            группы при Консультативном комитете по транспорту и 
                            инфраструктуре с участием Республики Казахстан, 
                            Республики Белорусь, Республики Армении, 
                            Кыргызской Республики и Российской Федерации.
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </Container>
            <Footer /> 
        </Styled>
    )
}


