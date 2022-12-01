import React from 'react';

//Import Components
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title={'Box-Office'}
        subtitle={'Are you looking for a movie or for an actor? '}
      />
      <Navs />

      {children}
    </div>
  );
};

export default MainPageLayout;
