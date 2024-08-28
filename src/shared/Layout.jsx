import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;
`;

const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
