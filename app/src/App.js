import { memo } from 'react';



import Parent from './components/Parent';
import Main from './components/Main';
import Dashboard from './components/Dashboard';






const App = memo(function App(props = {}) {
  return (
<Dashboard></Dashboard>
    
  );
});

export { App };
