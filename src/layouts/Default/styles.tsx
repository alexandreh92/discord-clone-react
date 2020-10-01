import styled from 'styled-components';

// SL - SERVER LIST
// SN - SERVER NAME
// CI - CHANNEL INFO
// CL - CHANNEL LIST
// CD - CHANNEL DATA
// UL - USERLIST
// UI - USER INFO

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 46px 1fr 52px;
  grid-template-columns: 71px 240px 1fr 240px;
  grid-template-areas:
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL';

  height: 100vh;
`;
