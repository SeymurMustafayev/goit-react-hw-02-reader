import React from 'react';
import Reader from './Reader/Reader';
import publication from './ publications.json';

const App = () => (
  <div>
    <Reader items={publication} />
  </div>
);

export default App;
