import React from 'react';
import { Link } from 'react-router-dom';

import SectionTitle from './SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import projects from '../assets/data/projects';
import ProjectItem from './ProjectItem';
import styled from 'styled-components';
import 'swiper/css/bundle';

SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
  padding: 10rem 0;
  text-align: center;
  .projects_allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0px;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects_allItems {
      flex-direction: column;
      width: 100%;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .swiper {
        width: 100%;
      }
      .projectItem_img {
        width: 100%;
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      width: 30px;
      height: 30px;
      top: 10px;
      border-radius: 5px;
    }
    .swiper-button-prev {
      right: 32px;
    }
    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 1.4rem;
    }
  }
`;

export default function ProjectsSection() {
  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle heading="Projects" subheading="some of recent works" />
        <div className="projects_allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              //when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              //when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              //when window width is >= 1200px
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => {
              if (index >= 5) return;
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                    path={project.path}
                  ></ProjectItem>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  );
}
