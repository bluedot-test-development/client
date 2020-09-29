import styled, { css } from 'styled-components';

export const ThumbnailBlock = styled.div`
  background-size: contain;
  background-position: center;
  ${props => css`
    background-image: url(${props.img});
    width: ${props.size}rem;
    height: ${props.size}rem;
    border-radius: ${props.size / 2}rem;
  `}
`;
