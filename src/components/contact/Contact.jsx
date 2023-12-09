import React from 'react';
import Contact2 from './Contact2';
import { useContext } from 'react';
import UserContext from '../../context/context';


const Contact = () => {
  const { drive } = useContext(UserContext);
  return (
    <p>
      Contact {drive("Brumm!")}
     
    </p>
  )
}

export default Contact;
