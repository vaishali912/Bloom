import { memo } from 'react';


import Dashboard from './components/Dashboard';
import Main from './components/Main';




const App = memo(function App(props = {}) {
  return (
 <Dashboard></Dashboard>
    
  );
});

export { App };
