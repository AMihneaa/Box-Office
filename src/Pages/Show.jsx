import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//IMPORT Functions
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();

  const [show, SetShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  let isMounted = true;

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        setTimeout(() => {
          if (isMounted) {
            SetShow(results);
            setIsLoading(false);
          }
        }, 200);
      })
      .catch(err => {
        if (isMounted) {
          setError(err.message);
          setIsLoading(false);
        }
      });
  }, [id]);

  console.log(show);

  if (isLoading) {
    return <div>Data is being LOADING</div>;
  }

  if (error) {
    return <div>Error occured: {error}</div>;
  }

  return () => {
    isMounted = false;
  };
};

export default Show;
