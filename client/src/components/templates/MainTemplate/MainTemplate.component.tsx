import React from 'react';
import { Header, Sidebar } from 'components/organisms';
import { Container, Row, ContentContainer } from './MainTemplate.styles';
import { MainTemplateI } from './MainTemplate.types';
import { MainTemplateProvider } from './MainTemplateContext';

const MainTemplate: React.FC<MainTemplateI> = ({ children }) => {
  return (
    <Container>
      <MainTemplateProvider>
        <Header />
        <Row>
          <Sidebar />
          <ContentContainer>
            {children}
          </ContentContainer>
        </Row>
      </MainTemplateProvider>
    </Container>
  );
};

export default MainTemplate;