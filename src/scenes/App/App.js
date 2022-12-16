
import { Routes } from 'react-router-dom';
import { makeRoutes } from 'helpers';

const App = () => {
  const token = null;

  return (
    <div id='app'>
      <Routes>
        {makeRoutes(token)}
      </Routes>
    </div>
  );
};

export { App };