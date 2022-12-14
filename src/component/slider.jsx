import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/carousel.css"

export default function Carousel({ images }) {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;

    useEffect(() => {
        timeOut =
            autoPlay &&
            setTimeout(() => {
                slideRight();
            }, 2500);
    });

    const slideRight = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const slideLeft = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };
    console.log(current);

    return (
        <div className=" sectionContainer">
            <div class="sectionhead">

                <h2><span>Miscellaneous </span>Projects</h2>
            </div>
            <div
                className="carousel"
                onMouseEnter={() => {
                    setAutoPlay(false);
                    clearTimeout(timeOut);
                }}
                onMouseLeave={() => {
                    setAutoPlay(true);
                }}
            >
                <div className="carousel_wrapper">
                    {images.map((image, index) => {
                        return (
                            /* (condition) ? true : false */

                            <div
                                key={index}
                                className={
                                    index === current
                                        ? "carousel_card carousel_card-active"
                                        : "carousel_card"
                                }
                            >

                                <img className="card_image" src={image.image} />
                                <div className="card_overlay">
                                    <div className="over">{image.title}</div>
                                    <div className="links">
                                        <button class="glow-on-hover" ><a href={image.live} className="liveLink" target="_blank" rel="noopener noreferrer">Live</a></button>
                                        <button class="glow-on-hover" ><a href={image.repo} className="repoLink" target="_blank" rel="noopener noreferrer">Repo</a></button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div className="carousel_arrow_left" onClick={slideLeft}>
                        &lsaquo;
                    </div>
                    <div className="carousel_arrow_right" onClick={slideRight}>
                        &rsaquo;
                    </div>
                    <div className="carousel_pagination">
                        {images.map((_, index) => {
                            return (
                                <div
                                    key={index}
                                    className={
                                        index == current
                                            ? "pagination_dot pagination_dot-active"
                                            : "pagination_dot"
                                    }
                                    onClick={() => setCurrent(index)}
                                ></div>
                            );
                        })}
                    </div>
                </div >
            </div >
        </div>
    );
}
