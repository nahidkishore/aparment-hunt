import React from 'react';
import { useHistory } from 'react-router-dom';

const Event = () => {
  const history = useHistory();
  return (
    <section>
      <div className="container">
      <button className="mt-5" onClick={() => history.push('/service')}>event page</button>

    </div>
    </section>
  );
};

export default Event;