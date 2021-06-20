import React from 'react';


import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { number: 4, text: 'Open Source Projects'},
  { number: 2, text: 'Internships', },
  { number: 1,text: 'Became a Rotaract Club President', }
];

const Accomplishments = () => (
    <Section>
      <SectionTitle>Personal Achievements</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
            <Box key={index}>
              <BoxNum>{`${card.number}`}</BoxNum>
              <BoxText>{card.text}</BoxText>
            </Box>
        ))}
      </Boxes>
      <SectionDivider/>
    </Section>
);

export default Accomplishments;
