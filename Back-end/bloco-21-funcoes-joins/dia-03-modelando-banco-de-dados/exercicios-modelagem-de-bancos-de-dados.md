# Para Fixar 
### 1. Monte uma query que:

* Crie um banco de dados chamado **normalization**;
* Crie todas as tabelas resultantes do exercício 2 (na 2ª Forma Normal);
* Popule todas as tabelas com os dados fornecidos nos exercícios.

```sql
DROP DATABASE IF EXISTS normalization;
CREATE DATABASE normalization;
USE normalization;

CREATE TABLE FUNCIONARIO (
  FUNCIONARIO_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  NOME VARCHAR(45) NOT NULL,
  SOBRENOME VARCHAR(45) NOT NULL,
  CONTATO VARCHAR(45) NOT NULL,
  TELEFONE VARCHAR(45) NOT NULL,
  DATA_CADASTRO DATETIME DEFAULT NOW()
) AUTO_INCREMENT=12 ENGINE=InnoDB;

CREATE TABLE SETOR (
  SETOR_ID INT NOT NUll PRIMARY KEY AUTO_INCREMENT,
  NOME VARCHAR(45) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE FUNCIONARIO_SETOR (
  FUNCIONARIO_ID INT NOT NULL,
  SETOR_ID INT NOT NULL,
  PRIMARY KEY (FUNCIONARIO_ID, SETOR_ID),
  FOREIGN KEY (FUNCIONARIO_ID) REFERENCES FUNCIONARIO(FUNCIONARIO_ID),
  FOREIGN KEY (SETOR_ID) REFERENCES SETOR(SETOR_ID)
) ENGINE=InnoDB;

INSERT INTO SETOR (NOME)
VALUES
  ("Administração"),
  ("Vendas"),
  ("Operacional"),
  ("Estratégico"),
  ("Marketing");

INSERT INTO FUNCIONARIO (
  NOME,
  SOBRENOME,
  CONTATO,
  TELEFONE,
  DATA_CADASTRO
) 
VALUES
  ('Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', CAST('2020-05-05 08:50:25' AS DATETIME)),
  ('André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', CAST('2020-02-05 00:00:00' AS DATETIME)),
  ('Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', CAST('2020-05-05 10:55:35' AS DATETIME)),
  ('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', CAST('2020-05-05 11:45:40' AS DATETIME));

INSERT INTO FUNCIONARIO_SETOR (
  FUNCIONARIO_ID,
  SETOR_ID
)
VALUES
  (12, 1),
  (12, 2),
  (13, 3),
  (14, 4),
  (14, 2),
  (15, 5);
```

### 2. Faça o banco de dados **albuns** tentando identificar as entidades, atributos e relacionamentos.

```sql
CREATE DATABASE IF NOT EXISTS albums;
USE albums;

CREATE TABLE genre (
  genre_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE artist (
  artist_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE album (
  album_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  price DECIMAL NOT NULL,
  genre_id INT NOT NULL,
  artist_id INT NOT NULL,
  FOREIGN KEY (genre_id) REFERENCES genre(genre_id),
  FOREIGN KEY (artist_id) REFERENCES artist(artist_id)
) ENGINE=InnoDB;

CREATE TABLE song (
  song_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50),
  duration_in_seconds INT NOT NULL,
  album_id INT NOT NULL,
  FOREIGN KEY (album_id) REFERENCES album(album_id)
) ENGINE=InnoDB;
```

# Exercícios
### 1. Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:

* Nome;
* Espécie;
* Sexo;
* Idade;
* Localização.

Cada animal também possui **um** cuidador, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui **um** gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.

```sql
CREATE DATABASE IF NOT EXISTS animals;
USE animals;

CREATE TABLE specie (
  specie_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE manager (
  manager_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE location (
  location_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  address VARCHAR(50)
) ENGINE=InnoDB;

CREATE TABLE caregiver (
  caregiver_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  manager_id INT NOT NULL,
  FOREIGN KEY (manager_id) REFERENCES manager(manager_id)
) ENGINE=InnoDB;

CREATE TABLE animal (
  animal_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  sex VARCHAR(50) NOT NULL,
  age VARCHAR(50) NOT NULL,
  specie_id INT NOT NULL,
  location_id INT NOT NULL,
  caregiver_id INT NOT NULL,
  FOREIGN KEY (specie_id) REFERENCES specie(specie_id),
  FOREIGN KEY (location_id) REFERENCES location(location_id),
  FOREIGN KEY (caregiver_id) REFERENCES caregiver(caregiver_id)
) ENGINE=InnoDB;
```
