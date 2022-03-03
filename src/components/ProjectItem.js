import React from 'react';
import styled from 'styled-components';
import projectImg from '../assets/images/cointracker.jpg';

const ProjectItemStyle = styled.div`
  .projectItem_img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem_info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem_title {
    font-size: 2.2rem;
  }
  .projectItem_desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and(max-width: 768px) {
    .projectItem_img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = 'Project Name',
  desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, alias!',
  path = '',
}) {
  return (
    <ProjectItemStyle>
      <a
        href={path}
        className="projectItem_img"
        target="_blank"
        rel="norefferer"
      >
        <img src={img} alt="" />
      </a>
      <div className="projectItem_info">
        <a href={path} target="_blank" rel="norefferer">
          <h3 className="projectItem_title">{title}</h3>
        </a>
      </div>
      <p className="projectItem_desc">{desc}</p>
    </ProjectItemStyle>
  );
}
