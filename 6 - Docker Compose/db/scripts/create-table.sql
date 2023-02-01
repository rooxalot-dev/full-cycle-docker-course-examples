USE `node-app`;

CREATE TABLE if not exists People (
    firstName VARCHAR(250) NULL,
    lastName VARCHAR(250) NULL
);

INSERT INTO People (firstName, lastName)
SELECT * FROM (SELECT 'Rodrigo', 'Martins') AS tmp
WHERE NOT EXISTS (
    SELECT firstName FROM People WHERE firstName = 'Rodrigo'
) LIMIT 1;
