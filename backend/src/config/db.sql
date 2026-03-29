-- ==============================
-- CREATION BASE DE DONNEES
-- ==============================
Drop DATABASE IF EXISTS fitness_app;
CREATE DATABASE IF NOT EXISTS fitness_app;
USE fitness_app;

-- ==============================
-- SUPPRESSION DES TABLES (ordre important)
-- ==============================


-- ==============================
-- TABLE USERS
-- ==============================
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL UNIQUE,
    password VARCHAR(250) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    height INT,
    age INT,    
    image VARCHAR(250)
);

INSERT INTO users (name, email, password, height, age, image) VALUES
('Jean Dupont', 'jean@email.com', 'hashedpassword1', 175, 28, 'jean.jpg'),
('Marie Martin', 'marie@email.com', 'hashedpassword2', 165, 24, 'marie.jpg');

-- ==============================
-- TABLE LEVEL
-- ==============================
CREATE TABLE level (
    id INT AUTO_INCREMENT PRIMARY KEY,
    label VARCHAR(250) NOT NULL
);

INSERT INTO level (label) VALUES
('Débutant'),
('Intermédiaire'),
('Avancé');

-- ==============================
-- TABLE MUSCLE_TAG
-- ==============================
CREATE TABLE muscle_Tag (
    id INT AUTO_INCREMENT PRIMARY KEY,
    label VARCHAR(250) NOT NULL
);

INSERT INTO muscle_Tag (label) VALUES
('Poitrine'),
('Dos'),
('Jambes'),
('Bras'),
('Abdominaux');

-- ==============================
-- TABLE EXERCISE
-- ==============================
CREATE TABLE exercise (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    description VARCHAR(250),
    reps INT,
    sets INT,
    image VARCHAR(250),

    user_id INT NOT NULL,
    level_id INT NOT NULL,
    muscle_tag_id INT NOT NULL,

    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (level_id) REFERENCES Level(id) ON DELETE CASCADE,
    FOREIGN KEY (muscle_tag_id) REFERENCES Muscle_Tag(id) ON DELETE CASCADE
);

INSERT INTO exercise (name, description, reps, sets, image, user_id, level_id, muscle_tag_id) VALUES
('Pompes', 'Travaille la poitrine et les bras', 15, 3, 'pompes.jpg', 1, 1, 1),
('Squats', 'Renforce les jambes', 20, 4, 'squats.jpg', 1, 2, 3),
('Crunch', 'Travail des abdominaux', 25, 3, 'crunch.jpg', 2, 1, 5),
('Tractions', 'Travaille le dos', 10, 4, 'tractions.jpg', 2, 3, 2);

-- ==============================
-- TABLE WEIGHT
-- ==============================
CREATE TABLE weight (
    id INT AUTO_INCREMENT PRIMARY KEY,
    weight INT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,

    user_id INT NOT NULL,

    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

INSERT INTO weight (weight, user_id) VALUES
(75, 1),
(74, 1),
(60, 2),
(59, 2);

-- ==============================
-- INDEX
-- ==============================
CREATE INDEX idx_exercise_user ON exercise(user_id);
CREATE INDEX idx_exercise_level ON exercise(level_id);
CREATE INDEX idx_exercise_muscle ON exercise(muscle_tag_id);
CREATE INDEX idx_weight_user ON weight(user_id);