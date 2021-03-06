import React from 'react';
import CrewOption from './CrewOption.jsx';
import CrewEdit from './CrewEdit.jsx';

const CrewDetail = ({ selected, editMode, editCrew, deleteCrew }) => {
  return (
    <div>
      <h2>{selected.name}</h2>
      <p><small>{selected.species}</small></p>
      <p>{selected.bio}</p>
      { editMode ?
      <CrewEdit
        crew_id={selected.crew_id}
        editCrew={editCrew}
      /> : <CrewOption
        crew_id={selected.crew_id}
        editCrew={editCrew}
        deleteCrew={deleteCrew}
      />}
    </div>
  )
}

export default CrewDetail;
