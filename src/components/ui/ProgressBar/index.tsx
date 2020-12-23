import React from 'react';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  title: string;
}

const ProgressBar: React.FC<Props> = ({ title }) => (
  <Styled.ProgressBar>
    <Styled.Content>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Percentage>{}</Styled.Percentage>
    </Styled.Content>
    <Styled.BarWrapper>
      <Styled.Bar/>
    </Styled.BarWrapper>
  </Styled.ProgressBar>
);

export default ProgressBar;
