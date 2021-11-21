import React from 'react';

const SearchVideoScreen: React.FC<{ match: any }> = ({ match }) => {
  const { phrase } = match.params;

  return (<div>Szukam wideos o nazwie <b>{phrase}</b></div>)
};

export default SearchVideoScreen;