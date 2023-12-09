import React from 'react';
import UserContext from '../../context/context';
import { useContext } from 'react';

const Contact3 = () => {
    let {plane} = useContext(UserContext)
  return (
    <p>
      Contact 3 + {plane}
    </p>
  )
}

export default Contact3;
