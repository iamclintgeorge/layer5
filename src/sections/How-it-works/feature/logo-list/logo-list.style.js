import styled from "styled-components";

const Howitworks = styled.section`
.logos {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 440px;
    flex-wrap: wrap;
  
    & > div {
      margin-right: 30px;
      margin-bottom: 20px;
    }
  }
  
  .footerText {
    color: var(--gray-5);
  }
  

`;

export default Howitworks;