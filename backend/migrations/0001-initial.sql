--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------
create table cards (
  id BINARY(16) PRIMARY KEY DEFAULT UUID_TO_BIN(UUID()),
  name TEXT,
  number INTEGER,
  arcana TEXT,
  suit TEXT,
  img TEXT
);

CREATE TABLE spreads (
  id BINARY(16) PRIMARY KEY DEFAULT UUID_TO_BIN(UUID()),
  name TEXT,
  description TEXT
);

CREATE TABLE themes (
  id BINARY(16) PRIMARY KEY DEFAULT UUID_TO_BIN(UUID()),
  name TEXT,
  description TEXT,
  img TEXT
);

CREATE TABLE decks (
  id BINARY(16) PRIMARY KEY DEFAULT UUID_TO_BIN(UUID()),
  name TEXT,
  description TEXT
);

CREATE TABLE meanings (
  id BINARY(16) PRIMARY KEY DEFAULT UUID_TO_BIN(UUID()),
  card_id REFERENCES cards(id),
  deck_id REFERENCES decks(id),
  symbolism TEXT,
  synopsis TEXT,
  description TEXT
);

CREATE TABLE art (
  id BINARY(16) PRIMARY KEY DEFAULT UUID_TO_BIN(UUID()),
  card_id REFERENCES cards(id),
  theme_id REFERENCES theme(id),
  img TEXT,
  description TEXT
);

CREATE TABLE placements (
  id BINARY(16) PRIMARY KEY DEFAULT UUID_TO_BIN(UUID()),
  spread_id REFERENCES spreads(id),
  number TEXT,
  name TEXT,
  description TEXT,
  location_x FLOAT,
  location_y FLOAT,
  rotation FLOAT
);

INSERT INTO cards (name, number, arcana, suit, img) values ("The Fool",0,"Major Arcana",null,"m00.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("The Magician",1,"Major Arcana",null,"m01.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("The High Priestess",2,"Major Arcana",null,"m02.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("The Empress",3,"Major Arcana",null,"m03.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("The Emperor",4,"Major Arcana",null,"m04.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("The Hierophant",5,"Major Arcana",null,"m05.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("The Lovers",6,"Major Arcana",null,"m06.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("The Chariot",7,"Major Arcana",null,"m07.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Strength",8,"Major Arcana",null,"m08.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("The Hermit",9,"Major Arcana",null,"m09.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Wheel of Fortune",10,"Major Arcana",null,"m10.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Justice",11,"Major Arcana",null,"m11.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("The Hanged Man",12,"Major Arcana",null,"m12.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Death",13,"Major Arcana",null,"m13.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Temperance",14,"Major Arcana",null,"m14.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("The Devil",15,"Major Arcana",null,"m15.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("The Tower",16,"Major Arcana",null,"m16.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("The Star",17,"Major Arcana",null,"m17.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("The Moon",18,"Major Arcana",null,"m18.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("The Sun",19,"Major Arcana",null,"m19.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Judgement",20,"Major Arcana",null,"m20.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("The World",21,"Major Arcana",null,"m21.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Ace of Cups",1,"Minor Arcana","Cups","c01.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Two of Cups",2,"Minor Arcana","Cups","c02.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Three of Cups",3,"Minor Arcana","Cups","c03.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Four of Cups",4,"Minor Arcana","Cups","c04.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Five of Cups",5,"Minor Arcana","Cups","c05.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Six of Cups",6,"Minor Arcana","Cups","c06.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Seven of Cups",7,"Minor Arcana","Cups","c07.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Eight of Cups",8,"Minor Arcana","Cups","c08.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Nine of Cups",9,"Minor Arcana","Cups","c09.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Ten of Cups",10,"Minor Arcana","Cups","c10.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Page of Cups",11,"Minor Arcana","Cups","c11.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Knight of Cups",12,"Minor Arcana","Cups","c12.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Queen of Cups",13,"Minor Arcana","Cups","c13.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("King of Cups",14,"Minor Arcana","Cups","c14.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Ace of Swords",1,"Minor Arcana","Swords","s01.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Two of Swords",2,"Minor Arcana","Swords","s02.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Three of Swords",3,"Minor Arcana","Swords","s03.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Four of Swords",4,"Minor Arcana","Swords","s04.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Five of Swords",5,"Minor Arcana","Swords","s05.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Six of Swords",6,"Minor Arcana","Swords","s06.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Seven of Swords",7,"Minor Arcana","Swords","s07.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Eight of Swords",8,"Minor Arcana","Swords","s08.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Nine of Swords",9,"Minor Arcana","Swords","s09.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Ten of Swords",10,"Minor Arcana","Swords","s10.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Page of Swords",11,"Minor Arcana","Swords","s11.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Knight of Swords",12,"Minor Arcana","Swords","s12.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Queen of Swords",13,"Minor Arcana","Swords","s13.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("King of Swords",14,"Minor Arcana","Swords","s14.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Ace of Wands",1,"Minor Arcana","Wands","w01.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Two of Wands",2,"Minor Arcana","Wands","w02.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Three of Wands",3,"Minor Arcana","Wands","w03.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Four of Wands",4,"Minor Arcana","Wands","w04.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Five of Wands",5,"Minor Arcana","Wands","w05.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Six of Wands",6,"Minor Arcana","Wands","w06.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Seven of Wands",7,"Minor Arcana","Wands","w07.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Eight of Wands",8,"Minor Arcana","Wands","w08.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Nine of Wands",9,"Minor Arcana","Wands","w09.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Ten of Wands",10,"Minor Arcana","Wands","w10.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Page of Wands",11,"Minor Arcana","Wands","w11.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Knight of Wands",12,"Minor Arcana","Wands","w12.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Queen of Wands",13,"Minor Arcana","Wands","w13.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("King of Wands",14,"Minor Arcana","Wands","w14.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Ace of Pentacles",1,"Minor Arcana","Pentacles","p01.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Two of Pentacles",2,"Minor Arcana","Pentacles","p02.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Three of Pentacles",3,"Minor Arcana","Pentacles","p03.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Four of Pentacles",4,"Minor Arcana","Pentacles","p04.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Five of Pentacles",5,"Minor Arcana","Pentacles","p05.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Six of Pentacles",6,"Minor Arcana","Pentacles","p06.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Seven of Pentacles",7,"Minor Arcana","Pentacles","p07.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Eight of Pentacles",8,"Minor Arcana","Pentacles","p08.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Nine of Pentacles",9,"Minor Arcana","Pentacles","p09.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Ten of Pentacles",10,"Minor Arcana","Pentacles","p10.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Page of Pentacles",11,"Minor Arcana","Pentacles","p11.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Knight of Pentacles",12,"Minor Arcana","Pentacles","p12.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("Queen of Pentacles",13,"Minor Arcana","Pentacles","p13.jpg");
INSERT INTO cards (name, number, arcana, suit, img) values ("King of Pentacles",14,"Minor Arcana","Pentacles","p14.jpg");

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

drop table cards;
drop table spreads;
drop table themes;
drop table decks;
drop table art;
drop table meanings;
drop table placements;