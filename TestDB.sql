#customers TABLE
CREATE TABLE IF NOT EXISTS testDB.`customers` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  active BOOLEAN DEFAULT false
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#some values
INSERT INTO testDB.`customers`
(email, name, active)
VALUES('someone@mail.com', 'someone', 1);

INSERT INTO testDB.`customers`
(email, name, active)
VALUES('anOtherSomeone@mail.com', 'anOtherSomeone', 0);