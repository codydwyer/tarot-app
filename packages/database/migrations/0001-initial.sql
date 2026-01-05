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