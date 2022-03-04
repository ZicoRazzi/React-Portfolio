import React from 'react';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServiceSectionStyle = styled.div`
  text-align: center;
  padding: 10rem 0;
  .services_allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0 0;

    .services_allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServiceSectionStyle>
      <div className="container">
        <SectionTitle heading="Services" subheading="what I will do for you?" />

        <div className="services_allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Web Design"
            desc="I do ui/ux design for the website that helps website to get a unique look"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Dev"
            desc="I also develop the websites. I create high performance website with blazing fast speed"
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            desc="I develop mobile applications. I create mobile app with eye catching ui"
          />
        </div>
      </div>
    </ServiceSectionStyle>
  );
}
