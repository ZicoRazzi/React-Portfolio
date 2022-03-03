import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import Ptext from './Ptext';

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem_icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem_title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  desc = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum molestiae natus sint ut quisquam tenetur neque facere iure odio, dolores cumque id totam dicta necessitatibus possimus modi, dolorum, suscipit soluta?',
}) {
  return (
    <ItemStyles>
      <div className="servicesItem_icon">{icon}</div>
      <div className="servicesItem_title">{title}</div>
      <Ptext>{desc}</Ptext>
    </ItemStyles>
  );
}
