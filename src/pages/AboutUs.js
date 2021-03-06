import React from 'react'
import styled from 'styled-components'

import { NavigationBar } from '../components/Navigation'
import { Footer } from '../components/Footer'

import Container from 'react-bootstrap/Container' 
import Jumbotron from 'react-bootstrap/Jumbotron' 
import Tab from 'react-bootstrap/Tab' 
import Nav from 'react-bootstrap/Nav' 
import Row from 'react-bootstrap/Row' 
import Col from 'react-bootstrap/Col' 

import image from '../images/about.jpg'


const Styled = styled.div`
    .jumbo{
        background: url(${image}) no-repeat fixed bottom;
        background-size: cover;
        position: relative;

        .container{
            position: relative;
            z-index: 1;
            color: #fff;

            .text {
                opacity: .9;
                width: 60%;

                @media screen and (max-width: 768px) {
                    width: 100%;
                    font-size: 1rem;
                }
            }
        }
    }

    .overlay{
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0,0,0, .6);
        height: 100%;
        width: 100%;
    }

    .nav-item {
        .nav-link {
            color: #2a4b83;
            transition: all .3s ease;
            &:hover{
                transform: translateX(1rem);
            }
        }
        
    }

    .nav-pills .nav-link.active {
        background: #2a4b83 ;
        border-radius: 0;
        color: white;
        &:hover {
            transform: none;
        }
    }
    .inner {
        margin-left: 2  rem;
    }
`

export const AboutUs = () => {
    return (
        <Styled>
            <NavigationBar />
            <Jumbotron fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h3>Об Ассоциации Международных Экспедиторов Узбекистана</h3>
                    <p className="text">
                        Действительный член FIATA с 1996 года.
                    </p>
                </Container>
            </Jumbotron>

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="w-100">
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Полномочия Ассоциации</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Состав Ассоциации</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Основные Направления</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                
                                Действительный член ФИАТА с 1996 года;
                                Представлена в Генеральном Совете ФИАТА;
                                Представлена в Совете директоров ФИАТА;
                                Представлена в ФИАТА в составе национальных ассоциаций стран Азиатско-Тихоокеанского региона;
                                Представлена в институтах ФИАТА:
                                Институт воздушных перевозок;
                                Институт морского транспорта;
                                Институт мультимодального транспорта;
                                Институт по таможенным вопросам;

                                Представлена в консультативных органах ФИАТА по юридическим вопросам, связям с общественностью, профессиональному обучению, перевозке опасных грузов и информационным технологиям;
                                Представлена в составе трех правительственных комиссий: по лицензированию в сфере транспорта; по координации грузопотоков через порты Грузии; по внешнеэкономической политике и привлечению иностранных инвестиций Межведомственного Совета по реформированию и инвестициям при Президенте Республики Узбекистан.
                                Ассоциация участвует в подготовке и экспертизе проектов нормативно-правовых актов в сфере транспорта, транспортно-экспедиторской и транспортно-страховой деятельности, разрабатывает и выпускает инструктивно-методические, информационно-справочные, научные, производственно-технические издания;
                                АМЭУз имеет права на печатание и распространение следующих международных унифицированных товарно-транспортных и транспортно-экспедиторских документов и форм ФИАТА:
                                Коносамент мультимодальной перевозки ФИАТА;
                                Сертификат экспедитора о транспортировке груза;
                                Сертификат экспедитора о получении груза;
                                Складская расписка;
                                Форма для инструкций по экспедированию грузов;
                                Отправительская декларация на перевозку опасных грузов;
                                Воздушная накладная ФИАТА;
                                Интермодальный грузовой сертификат грузоотправителя.

                                АМЭУз получил специальный сертификат, разрешающий осуществлять профессиональную подготовку кадров для транспортно-экспедиторской индустрии.
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <ul>
                                    <li>Генеральный Совет (Общее собрание);</li>
                                    <li>Совет АМЭУз;</li>
                                    <li>Дирекция АМЭУз;</li>
                                    <li>Ревизионная комиссия;</li>
                                    <li>Учебно-производственный и научный центр "Международный транспортный эспедитор - АМЭУз";</li>
                                    <li>Рабочие группы (комитеты);
                                        <ul className="inner">
                                            <li>транспорно-экспедиторская деятельность на авиатранспорте;</li>
                                            <li>транспортно-экспедиторская деятельность на автотранспорте;  </li>
                                            <li>транспортно-экспедиторская деятельность на железнодорожном транспорте;</li>
                                            <li>транспортно-экспедиторская деятельность на водном транспорте;</li>
                                            <li>транспортно-экспедиторская деятельность на мультимодальном (смешанном) транспорте;</li>
                                            <li>группа подготовки нормативно-правовой базы транспортно-экспедиторской деятельности;</li>
                                            <li>группа по таможенным вопросам и содействия экспедированию;</li>
                                            <li>группа по связям с общественностью;</li>
                                            <li>группа по перевозке опасных грузов;</li>
                                            <li>группа по логистике и маркетингу на транспорте;</li>
                                            <li>группа по информационным технологиям.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <p>
                                    Объединение транспортных, транспортно-экспедиторских и транспортно-страховых организаций Республики Узбекистан, совместных узбекских и иностранных предприятий и компаний, осуществляющих транспортно-экспедиторские и связанные с ними страховые и иные операции на рынке международных транспортно-экспедиторских и страховых услуг;
                                </p>
                                <p>
                                    Содействие становлению и развитию транспортно-экспедиторской индустрии в Республике Узбекистан;
                                </p>
                                <p>
                                    Представление и защита интересов транспортно-экспедиторской индустрии Узбекистана на внутреннем и внешнем рынках транспортно-экспедиторских услуг;
                                </p>
                                <p>
                                    Координация усилий действительных и ассоциированных членов Ассоциации по расширению их деловой активности на внутреннем и внешнем рынках и недопущение между ними недобросовестной конкуренции;
                                </p>
                                <p>
                                    Представление и защита интересов профессии международного экспедитора и перевозчика в государственных и общественных органах, образовательных, научно-исследовательских и проектных учреждениях, организациях, в т.ч. международных, расположенных внутри республики и за ее пределами;
                                </p>
                                <p>
                                    Оказание поддержки и расширение сотрудничества между членами Ассоциации;
                                </p>
                                <p>
                                    Повышение качества транспортно-экспедиторского обслуживания путем выработки научно-обоснованных подходов, методов, технологий и рекомендаций, активного участия в создании нормативно-правовой базы ее регулирования и стандартизации, научных и методических основ ее развития, внедрения международных унифицированных документов и форм Международной Федерации Экспедиторских Ассоциаций (FIATA), стандартных торговых условий ИНКОТЕРМС, а также рекомендаций и результатов выполненных Ассоциацией научных и других исследований в сфере отечественной и зарубежной транспортно-экспедиторской индустрии;
                                </p>
                                <p>
                                    Развитие делового сотрудничества с зарубежными транспортно-экспедиторскими, страховыми и другими организациями;
                                </p>
                                <p>
                                    Представление и защита интересов членов Ассоциации в Международной федерации экспедиторских ассоциаций (FIATA), в других международных федерациях, союзах, объединениях и национальных транспортно-экспедиторских ассоциациях.
                                </p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            <Footer /> 
        </Styled>
    )
}
