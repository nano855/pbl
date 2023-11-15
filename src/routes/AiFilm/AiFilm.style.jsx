import styled from 'styled-components';

export const Container = styled.div`
  .wrapper {
    position: relative;
    min-height: 100vh;
  }
  
  nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 12px 30px;
    border-bottom: 1px solid gray;
    box-sizing: border-box;
  }
  
  .like-btn {
    
    &.active {
      font-weight: bold;
      color: red;
    }
  }
  
  .nav-link {
    margin: 0 5px 
  }

  .container {
    width: 1024px;
    margin: 0 auto;
  }
`;
