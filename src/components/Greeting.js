import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getGreetingFromApi } from '../redux/greeting/greeting';

const Greeting = () => {
  const listing = useSelector((state) => state.greetingReducer, shallowEqual);

  const result = listing[(Math.random() * listing.length) | 0];// eslint-disable-line no-bitwise

  let text = '';
  if (result) {
    text = result.text;
  }

  const dispatch = useDispatch();

  const showGreeting = () => {
    getGreetingFromApi(dispatch);
  };

  return (
    <div>
      <button type="button" onClick={showGreeting}>Get a greeting</button>
      <br />
      <h1>{text}</h1>
    </div>
  );
};

export default Greeting;
