DROP TABLE IF EXISTS users templates stories;

CREATE TABLE users (
  user_id SERIAL UNIQUE PRIMARY KEY,
  user_name VARCHAR(255),
  email VARCHAR(255),
  password_digest TEXT
);

CREATE TABLE templates (
  template_id SERIAL UNIQUE PRIMARY KEY,
  user_id INT reference users (user_id),
  template_name VARCHAR(255),
  content TEXT
);

CREATE TABLE stories (
  stories_id SERIAL UNIQUE PRIMARY KEY,
  template_id INT reference template (template_id),
  user_id INT reference users (user_id),
  content TEXT
);
