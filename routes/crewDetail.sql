SELECT crew_id, crew.name AS name, species.name AS species, bio FROM crew
LEFT OUTER JOIN species ON crew.species_id = species.species_id
WHERE crew.crew_id = $1
