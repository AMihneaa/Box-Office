import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//IMPORT Functions
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();

  const [show, SetShow] = useState(null);

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
      SetShow(results);
    });
  }, [id]);

  console.log(show);

  return <div>This is Show Page, more info</div>;
};

export default Show;
