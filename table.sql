DROP TABLE IF EXISTS Restraunts;
CREATE TABLE Restraunts(
	RestrauntID SERIAL PRIMARY KEY, 
	RestrauntName TEXT,
	RestrauntType TEXT,
	RestrauntGoogleLink TEXT,
	RestrauntIMG TEXT,
	is_deleted INT DEFAULT 0
);
