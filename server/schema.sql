DROP DATABASE IF EXISTS `chat`;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `objectId` INTEGER AUTO_INCREMENT,
  `username` MEDIUMTEXT NULL DEFAULT NULL,
  `text` MEDIUMTEXT NULL DEFAULT NULL,
  `roomname` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`objectId`)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

