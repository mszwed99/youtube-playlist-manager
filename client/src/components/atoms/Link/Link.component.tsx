import React from 'react';
import { LinkPropsI } from './Link.types';
import { StyledLink } from './Link.styles';

export const Link: React.FC<LinkPropsI> = ({ to, label }) => <span><StyledLink to={to}>{label}</StyledLink></span>;