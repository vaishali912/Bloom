import { memo } from 'react';

import resets from '../_resets.module.css';
import classes from './Frame1.module.css';

import { Rectangle3Icon } from './Rectangle3Icon';
import Navbar from '../Navbar';

const Frame1 = memo(function Frame1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle4}></div>
      <div className={classes._2310W062N005285AP302851}></div>
      <div>
      <div className={classes.rectangle1}></div><div className= {`${classes.rectangle8} form-floating`}>
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div></div>
     
      
      <div className={classes.rectangle2} >
      <Navbar></Navbar>
      </div>
      
      <div className={classes.frame2}>
        
        <div className={classes.rectangle6}></div>
        <div className={classes.IconPeople}>
          
          <div className={classes.helpSupport}>Help &amp; Support</div>
        </div>
      </div>
      
  
  <div className= {`${classes.rectangle8} form-floating`}>
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>
    </div>
  );
});

export { Frame1 };
