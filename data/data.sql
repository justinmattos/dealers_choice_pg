DROP TABLE IF EXISTS crew;
DROP TABLE IF EXISTS species;
CREATE TABLE IF NOT EXISTS species (
  species_id INTEGER PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);
CREATE TABLE IF NOT EXISTS crew (
  crew_id INTEGER PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL,
  bio TEXT,
  species_id INTEGER REFERENCES species(species_id)
);
INSERT INTO species VALUES
  (1, 'Human'),
  (2, 'Asari'),
  (3, 'Turian'),
  (4, 'Krogan'),
  (5, 'Quarian'),
  (6, 'Geth'),
  (7, 'Drell'),
  (8, 'Salarian');
INSERT INTO crew VALUES
  (1, 'Commander Shepard', 'Shepard was born on April 11, 2154, is a graduate of the Systems Alliance N7 special forces program (service no. 5923-AC-2826), a veteran of the Skyllian Blitz, and is initially assigned to the SSV Normandy in 2183 as Executive Officer. Shepard later becomes the first human to join the Spectres, an elite special task force for the Citadel Council.', 1),
  (2, 'Garrus Vakarian', 'Garrus Vakarian is a turian, formerly part of C-Sec''s Investigation Division. Like most turians, Garrus had his military training at fifteen, but later followed in his father''s footsteps to become a C-Sec officer. He was responsible for the investigation of Saren Arterius, the Council''s top Spectre, after the Alliance claimed Saren had gone rogue. Although Garrus was told that the investigation was over, he decided to defy the Executor''s order and pursue another lead on his own. Eventually, Garrus attempts to join Commander Shepard''s team to help defeat Saren and the geth.', 3),
  (3, 'Liara T''Soni', 'Dr. Liara T''Soni is an asari researcher who has spent the past fifty years of her life studying Prothean technology and culture, specialising in the Prothean extinction. She was born on Thessia in 2077, making her "only" 106—barely an adult in asari terms. She already has a great deal of insight into the Protheans and is a highly trained user of biotics.', 2),
  (4, 'Urdnot Wrex', 'A famed krogan mercenary and bounty hunter, Urdnot Wrex is also one of the last Krogan Battlemasters: rare individuals who combine powerful biotic abilities with the devastating firepower of advanced weaponry. A long-lived krogan who has had many adventures, Wrex has heard of Commander Shepard during his travels, and respects the Commander as a fellow warrior.', 4),
  (5, 'Tali''Zorah nar Rayya', 'Tali''Zorah nar Rayya is a quarian and a member of Commander Shepard''s squad. She is the daughter of Rael''Zorah, a member of the Admiralty Board. Though young, Tali is a mechanical genius. In 2183, she is on her Pilgrimage, the rite of passage to prove her worth and bring something of value back to her people aboard the Migrant Fleet.', 5),
  (6, 'Kaidan Alenko', 'Kaidan Alenko is a human Sentinel and a Systems Alliance Marine. While serving aboard the SSV Normandy, he is a Staff Lieutenant and head of the ship''s Marine detail. He''s also an initial member of Commander Shepard''s squad. Kaidan is a biotic wired with the controversial L2 implants, which are known to cause severe neurological damage to the user. However, he is fortunate enough to only suffer from occasional severe migraines.', 1),
  (7, 'Ashley Williams', 'Ashley Williams is a human soldier who served in the Systems Alliance as a Gunnery Chief in the 2nd Frontier Division on Eden Prime, and was later assigned to Commander Shepard''s squad after the geth attack on Eden Prime.', 1),
  (8, 'Legion', 'Legion is the name taken by the gestalt consciousness formed by 1,183 geth programs inhabiting a unique geth "mobile platform".', 6),
  (9, 'Mordin Solus', 'Mordin Solus is a salarian geneticist, professor, and a former operative of the Special Tasks Group, where he performed reconnaissance and participated in the modification of the genophage. In 2185, he is recruited by Commander Shepard to assist in a high-risk mission against the Collectors. Mordin has a moral character best described as consequentialist, believing the ends justify the means, though he dislikes taking life without good cause. His actions are often guided by an impersonal logic, refusing to let his conscience, personal, and emotional connections cloud his judgment of what he believes is truly best in the big picture. Though he is affable, quick-talking and friendly, Mordin bears physical scars of his time in the STG and is still handling the consequences of his past.', 8),
  (10, 'Thane Krios', 'Thane Krios is a drell assassin, rumored to be the most skilled in the galaxy. Unlike most assassins, who prefer to snipe their targets from a distance, Thane prefers to get up close and kill his target personally, utilizing a mixture of stealth, firearms, hand-to-hand combat and biotic abilities. Despite his profession, Thane is a deeply spiritual man who prays for success in his missions. Thane asks for forgiveness after each kill, even going as far as to ignore those in his immediate vicinity until he is finished doing so.', 7),
  (11, 'Urdnot Grunt', 'Grunt is a genetically engineered krogan super soldier. Bred and educated in a tank, he was intended to exemplify the best traits of the krogan, and help reinvigorate his species. In the meantime, he fights alongside Commander Shepard to satisfy his natural desire for violence.', 4);
