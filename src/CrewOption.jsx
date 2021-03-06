import React, { Component } from 'react';
import axios from 'axios';

const CrewOption = ({crew_id, editCrew, deleteCrew}) => {
  return (
    <div className='crew-options'>
      <button name='edit' onClick={editCrew}>Edit</button>
      <button name='delete' onClick={() => deleteCrew(crew_id)}>Delete</button>
    </div>
  )
}

export default CrewOption;
