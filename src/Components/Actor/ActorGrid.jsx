import React from 'react';

//Import Components
import ActorCard from './ActorCard';

//Import Images
import IMAGE_NOT_FOUND from '../../images/not-found.png';

//Import Styled Components
import { FlexGrid } from '../Style';

const ActorGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ person }) => {
        return (
          <ActorCard
            key={person.id}
            name={person.name}
            country={person.country ? person.country.name : null}
            birthday={person.birthday}
            deathday={person.deathday}
            gender={person.gender}
            image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ActorGrid;
