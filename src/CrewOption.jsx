import React, { Component } from 'react';
import axios from 'axios';

const CrewOption = ({editCrew, deleteCrew}) => {
  return (
    <div className='crew-options'>
      <button name='edit' onClick={editCrew}>Edit</button>
      <button name='delete' onClick={deleteCrew}>Delete</button>
    </div>
  )
}

export default CrewOption;
