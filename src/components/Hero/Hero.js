import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row noPadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Creative, motivated, and resourceful full stack Web Developer with a Bachelor of Science Degree in Electromechanical Engineering.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/Salkhaleeli'} >Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;