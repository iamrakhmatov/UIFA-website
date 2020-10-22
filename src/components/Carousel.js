import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
// import Card from 'react-bootstrap/Card'

import styled from 'styled-components'

import img1 from '../images/carousel/car-1.jpg'
import img2 from '../images/carousel/car-2.jpg'
import img3 from '../images/carousel/car-3.jpg'

const Styled = styled.div`
    .carousel-caption {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0, .3);
        display: flex;
        align-items: center;
        justify-content: center;
        p {
            max-width: 700px;
            margin-bottom: 0;
            font-size: 1.3rem;
        }
    }
`

export const Slide = () => {
    return (
        <Styled>
            <Carousel pause={false} interval={3000} controls={false}>
                <Carousel.Item>
                    <img className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        />
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3> */}
                        <p>
                            Возрожденный Шелковый Путь Период Монгольской империи, около 1260 года Нашей эры
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3> */}
                        <p>
                            Древний шелковый путь, Главные пути в Период расцвета Римской империи около 200 года нашей эры
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3> */}
                        <p>
                            Возрожденный Шелковый Путь Период Монгольской империи, около 1260 года Нашей эры
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Styled>
    )
}

