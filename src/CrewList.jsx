import React from 'react';

const CrewList = ({ crew, selectCrew }) => {
  return (
    <ul>
      {crew.map((crewMate) => {
        const { crew_id, name } = crewMate;
        return <li key={crew_id} onClick={() => selectCrew(crew_id)}>{name}</li>;
      })}
    </ul>
  );
};

export default CrewList;
