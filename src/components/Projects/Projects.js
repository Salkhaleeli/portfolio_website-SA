import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const AllProjects = [0, 1, 2, 3, 4, 5];

const Projects = () => (
  <Section noPadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {AllProjects.map((project) => (
        <div>
          {project}
        </div>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;