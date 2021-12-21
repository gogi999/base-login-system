import React, { useRef } from 'react';
import IdleTimer from 'react-idle-timer';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import Dashboard from '../pages/Dashboard';

const IdleTimerContainer = (props) => {
  const idleTimerRef = useRef(null);
  const isAuthenticated = 
    useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleOnIdle = () => {
    if (isAuthenticated) dispatch(logoutUser());
  }

  return (
    <IdleTimer 
        ref={idleTimerRef} 
        timeout={1000 * 60 * 10} 
        onIdle={handleOnIdle}
    >
      <Dashboard />
    </IdleTimer>
  );
};

export default IdleTimerContainer;
