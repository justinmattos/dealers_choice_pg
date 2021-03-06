import React from 'react';

const CrewEdit = ({crew_id, editCrew}) => {
  return (
    <div className='crew-edit'>
      <label>Name: </label>
      <input id="NAME" name="Name" type="text"></input>
      <label>Bio: </label>
      <input id="BIO" name="Bio" type="text"></input>
      <button onClick={() => editCrew(crew_id)}>Submit</button>
    </div>
  )
}

export default CrewEdit;
