DROP DATABASE IF EXISTS Restraunts;
DROP USER IF EXISTS Restraunts_user@localhost;
CREATE DATABASE Restraunts CHARECTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER Restraunts_user@localhost IDENTIFIED BY '@3edc4rfv#EDC$RFV';
GRANT ALL PRIVILEGES ON Restraunts.* TO Restraunts_user@localhost;