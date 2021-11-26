import React from 'react';
import ContentLoader from "react-content-loader"
import { useTheme } from 'styled-components';
import { LoadingContainer } from './VideoCardLoading.styles';

export const VideoCardLoading: React.FC = () => {
  const width = window.innerWidth * 0.6;
  const { spacing } = useTheme();

  return (
    <LoadingContainer>
      <ContentLoader
        speed={1}
        width={width}
        height={240}
        viewBox={`0 0 ${width} 240`}
        backgroundColor="#fff"
        foregroundColor="#777"
        style={{ width: '60vw', height: 240 }}
      >
        <rect x="0" y={spacing.small} rx="3" ry="3" width="360" height={240 - spacing.medium} />
        <rect x={360 + spacing.large} y={0 + spacing.small} rx="3" ry="3" width="40%" height={spacing.large} />
        <rect x={360 + spacing.large} y="30%" rx="3" ry="3" width="15%" height="16" />
        <rect x={360 + spacing.large} y="50%" rx="3" ry="3" width="15%" height="6" />
        <rect x={360 + spacing.large} y="75%" rx="3" ry="3" width="50%" height="20%" />
      </ContentLoader>
    </LoadingContainer>
  );
};
