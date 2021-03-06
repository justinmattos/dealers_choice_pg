UPDATE crew
  SET name = $1, bio = $2
  WHERE crew_id = $3;
