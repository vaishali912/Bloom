import { memo } from 'react';

import './components/login.css'
import Login from './components/Login';


const App = memo(function App(props = {}) {
  return (
    /*<div className={`${resets.clapyResets} ${classes.root}`}>
      <Frame1 />
    </div>*/
    <> 
    <Login></Login>
   
    </>  
  );
});

export { App };
