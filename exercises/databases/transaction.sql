BEGIN TRANSACTION;

INSERT INTO surveys("userId","title")
VALUES('1','test survey');

COMMIT;