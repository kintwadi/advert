-- MySQL Workbench Synchronization
-- Generated: 2020-11-10 23:55
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: SAMUEL

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

ALTER TABLE `advert43`.`card` 
DROP COLUMN `card_details`,
DROP COLUMN `user`,
DROP COLUMN `footer`,
ADD COLUMN `footer_id` INT(11) NOT NULL AFTER `publish`,
ADD COLUMN `user_id` INT(11) NOT NULL AFTER `footer_id`,
ADD COLUMN `location_id` INT(11) NOT NULL AFTER `user_id`,
ADD COLUMN `card_detail_id` INT(11) NOT NULL AFTER `location_id`,
ADD INDEX `fk_card_footer1_idx` (`footer_id` ASC) ,
ADD INDEX `fk_card_user1_idx` (`user_id` ASC) ,
ADD INDEX `fk_card_location1_idx` (`location_id` ASC) ,
ADD INDEX `fk_card_card_details1_idx` (`card_detail_id` ASC) ,
DROP INDEX `FK1x20bpkcek26a4vmli8xbu36c` ,
DROP INDEX `FKh77ykn9w0s2o4hjtiry8iife8` ,
DROP INDEX `FKidojig5oh2ccs67uaxxojon8s` ;
;

ALTER TABLE `advert43`.`card_image` 
DROP COLUMN `card_image_id`,
CHANGE COLUMN `card_detail_id` `card_image_id` INT(11) NOT NULL AUTO_INCREMENT ;

ALTER TABLE `advert43`.`sub_category` 
DROP COLUMN `parent`,
ADD COLUMN `category_id` INT(11) NOT NULL AFTER `name`,
ADD INDEX `fk_sub_category_category_idx` (`category_id` ASC) ,
DROP INDEX `FKimpw57miotgftglk5fy25ssvo` ;
;

ALTER TABLE `advert43`.`user` 
CHANGE COLUMN `photo` `photo` TEXT NULL DEFAULT NULL ;

ALTER TABLE `advert43`.`ad` 
DROP COLUMN `footer_id`,
DROP COLUMN `footer`,
ADD COLUMN `footer_id` INT(11) NOT NULL AFTER `image`,
ADD INDEX `fk_ad_footer1_idx` (`footer_id` ASC),
DROP INDEX `FKdc2fo8eyd5q12399h6ig9ixxa` ,
DROP INDEX `FK4f6st27tcma87ji3tn82aa0is` ;
;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- MySQL Workbench Synchronization
-- Generated: 2020-11-11 00:52
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: SAMUEL

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

ALTER TABLE `advert43`.`card` 
DROP COLUMN `publish`,
DROP COLUMN `status`,
DROP COLUMN `zipcode`,
DROP COLUMN `type`,
DROP COLUMN `subcategory`,
DROP COLUMN `street`,
DROP COLUMN `reference`,
DROP COLUMN `province`,
DROP COLUMN `price`,
DROP COLUMN `dealtype`,
DROP COLUMN `category`;

ALTER TABLE `advert43`.`card_details` 
DROP COLUMN `card_image`,
DROP INDEX `FKslqhk8n4bssh11h58jve9s5ef` ;
;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

UPDATE `advert43`.`sub_category` SET `category_id` = '1' WHERE (`sub_category_id` = '1');
UPDATE `advert43`.`sub_category` SET `category_id` = '1' WHERE (`sub_category_id` = '2');
UPDATE `advert43`.`sub_category` SET `category_id` = '1' WHERE (`sub_category_id` = '3');
UPDATE `advert43`.`sub_category` SET `category_id` = '2' WHERE (`sub_category_id` = '4');
UPDATE `advert43`.`sub_category` SET `category_id` = '2' WHERE (`sub_category_id` = '5');
UPDATE `advert43`.`sub_category` SET `category_id` = '2' WHERE (`sub_category_id` = '6');

INSERT INTO `advert43`.`card_details` (`category`, `dealtype`, `price`, `province`, `publish`, `reference`, `status`, `street`, `subcategory`, `type`, `zipcode`) VALUES ('1', '12', 500, '1', true, '12', true, 'Camama', '2', '2', '0007');

UPDATE `advert43`.`card` SET `footer_id` = '1', `user_id` = '1', `location_id` = '1', `card_detail_id` = '1' WHERE (`card_id` = '1');
UPDATE `advert43`.`card` SET `footer_id` = '2', `user_id` = '1', `location_id` = '2', `card_detail_id` = '1' WHERE (`card_id` = '2');
UPDATE `advert43`.`card` SET `footer_id` = '3', `user_id` = '1', `location_id` = '4', `card_detail_id` = '1' WHERE (`card_id` = '3');
UPDATE `advert43`.`card` SET `footer_id` = '4', `user_id` = '2', `location_id` = '3', `card_detail_id` = '1' WHERE (`card_id` = '4');
UPDATE `advert43`.`card` SET `footer_id` = '2', `user_id` = '2', `location_id` = '5', `card_detail_id` = '1' WHERE (`card_id` = '5');
UPDATE `advert43`.`card` SET `footer_id` = '5', `user_id` = '1', `location_id` = '6', `card_detail_id` = '1' WHERE (`card_id` = '6');

UPDATE `advert43`.`ad` SET `footer_id` = '1' WHERE (`ad_id` = '1');
UPDATE `advert43`.`ad` SET `footer_id` = '2' WHERE (`ad_id` = '2');
UPDATE `advert43`.`ad` SET `footer_id` = '5' WHERE (`ad_id` = '4');

