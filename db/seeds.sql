-- Makes it so all of the following code will affect burgers_db --
USE burgers_db;

-- Creates sample rows in the burger table --
INSERT INTO burgers (burger_name, devoured)
VALUES ("Euphie's burger", true);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Aurel's burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Felix's burger", false);