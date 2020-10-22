import React from 'react'
import styled from 'styled-components'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import image from "../images/aboutUs.jpg";

const Styled = styled.div`
    .jumbo{
        background: url(${image}) no-repeat fixed center;
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
        background: #011f4b;
        opacity: .7;
        height: 100%;
        width: 100%;
    }

    .jumbo-header{
        background: #fff;
        margin-bottom: 0;

        .blockquote-footer {
            font-size: 1rem;
        }
    }

`

export const JumboContainer = () => {
    return (
        <Styled>
            <Jumbotron className="jumbo-header">
                <Container className="text-center">
                    <h1>АМЭУз</h1>
                    <p className="blockquote-footer">
                        Действительный член <cite title="Source Title">ФИАТА с 1996 года</cite>
                    </p>
                </Container>
            </Jumbotron>
            <Jumbotron fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h3>Ассоциация Международных Экспедиторов Узбекистана</h3>
                    <p className="text">
                        Действительный член ФИАТА с 1996 года.
                        Представлена в Генеральном Совете ФИАТА.
                        Представлена в Совете директоров ФИАТА.
                    </p>
                    <p>
                        <a href="/about_us">
                            <Button variant="outline-light rounded-0">Подробнее</Button>
                        </a>
                    </p>
                </Container>
            </Jumbotron>
        </Styled>
    )
}