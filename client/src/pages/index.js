import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Educations, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Educations />
      <Jobs />
      {/*<Featured />*/}
      {/*<Projects />*/}
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export const Head = () => (
  <>
    <title>Kin Chen | Homepage</title>
    <meta name="description" content="Kin Chen's Homepage" />
  </>
);

export default IndexPage;
