import React, { useState } from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import styled from 'styled-components';
import Ptext from './Ptext';
import SectionTitle from './SectionTitle';
import recommendations from '../assets/data/recommendations';

const RecommendationSectionStyle = styled.div`
  padding: 10rem 0;
  text-align: center;
  .recommendation_wrapper {
    position: relative;
    min-height: 300px;
    max-width: 700px;
    margin: 0 auto;
  }
  .recommendation_info {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    margin-top: 5rem;
  }
  .recommendation_desc {
    .para {
      text-align: center;
    }
  }
  .recommendation_name {
    margin-top: 4rem;
    font-family: 'RobotoMono Regular';
    font-size: 2.2rem;
  }
  .recommendation_title {
    font-size: 1.6rem;
    margin-top: 0.5rem;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  .fade-enter {
    opacity: 0;
    transform: scale(0.96);
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in;
    transition-property: opacity, transform;
  }
  .fade-exit {
    opacity: 1;
    transform: scale(1);
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(0.96);
    transition: 250ms ease-in;
    transition-property: opacity, transform;
  }
`;

export default function RecommendationsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = recommendations[activeIndex];

  const handlePrev = () => {
    if (activeIndex <= 0) {
      setActiveIndex(recommendations.length - 1);
    } else {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex >= recommendations.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <RecommendationSectionStyle>
      <div className="container">
        <SectionTitle
          heading="recommendations"
          subheading="see what my colleagues say about me"
        ></SectionTitle>
        <div className="recommendation_wrapper">
          <SwitchTransition>
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <div className="recommendation_info">
                <div className="recommendation_desc">
                  <Ptext>{activeSlide.desc}</Ptext>
                </div>
                <h2 className="recommendation_name">{activeSlide.name}</h2>
                <p className="recommendation_title">
                  {activeSlide.title}, <br /> {activeSlide.org}{' '}
                </p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div
            className="prev"
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBack />
          </div>
          <div
            className="next"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward />
          </div>
        </div>
      </div>
    </RecommendationSectionStyle>
  );
}
