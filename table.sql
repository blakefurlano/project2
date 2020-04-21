DROP TABLE IF EXISTS Restraunts;
CREATE TABLE Restraunts(
  RestrauntID SERIAL PRIMARY KEY, --primarykey
  RestrauntName varchar(255),
  RestrauntType varchar(255),
  RestrauntGoogleLink varchar(255),
  RestrauntIMG varchar(255),
  is_delete INT DEFAULT 0
);