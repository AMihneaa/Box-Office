import React from 'react';

//Import Components
import ShowCard from './ShowCard';

//Import Images
import IMAGE_NOT_FOUND from '../../images/not-found.png';

//Import Styles Components
import { FlexGrid } from '../Style';

const ShowGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
          summary={show.summary}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
