-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: advert43
-- ------------------------------------------------------
-- Server version	5.7.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ad`
--

DROP TABLE IF EXISTS `ad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ad` (
  `ad_id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `header` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `footer_id` int(11) NOT NULL,
  PRIMARY KEY (`ad_id`),
  KEY `fk_ad_footer1_idx` (`footer_id`),
  CONSTRAINT `fk_ad_footer1` FOREIGN KEY (`footer_id`) REFERENCES `footer` (`footer_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ad`
--

LOCK TABLES `ad` WRITE;
/*!40000 ALTER TABLE `ad` DISABLE KEYS */;
INSERT INTO `ad` VALUES (1,'Get the adds of the store Lashes ','first ad','img/live_concert1.jpg',1),(2,'Get the adds of the store Lashes ','second ad','img/news_card.jpg',2),(4,'Get the adds of the store Lashes','fourth ad','img/live_concert2.jpg',5);
/*!40000 ALTER TABLE `ad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card`
--

DROP TABLE IF EXISTS `card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card` (
  `card_id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `header` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `footer_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  `card_detail_id` int(11) NOT NULL,
  PRIMARY KEY (`card_id`),
  KEY `fk_card_footer1_idx` (`footer_id`),
  KEY `fk_card_user1_idx` (`user_id`),
  KEY `fk_card_location1_idx` (`location_id`),
  KEY `fk_card_card_details1_idx` (`card_detail_id`),
  CONSTRAINT `fk_card_card_details1` FOREIGN KEY (`card_detail_id`) REFERENCES `card_details` (`card_detail_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_card_footer1` FOREIGN KEY (`footer_id`) REFERENCES `footer` (`footer_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_card_location1` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_card_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card`
--

LOCK TABLES `card` WRITE;
/*!40000 ALTER TABLE `card` DISABLE KEYS */;
INSERT INTO `card` VALUES (1,'Get the Illusion of Fuller Lashes by “Mascng.','Get the Illusion','img/whatNews1.jpg',1,1,1,1),(2,'Get the Illusion of Fuller Lashes by “Mascng.','Get the Illusion','img/whatNews1.jpg',2,1,2,1),(3,'Get the Illusion of Fuller Lashes by “Mascng.','Get the Illusion','img/whatNews1.jpg',3,1,4,1),(4,'Get the Illusion of Fuller Lashes by “Mascng.','Get the Illusion','img/whatNews1.jpg',4,2,3,1),(5,'Get the Illusion of Fuller Lashes by “Mascng.','Get the Illusion','img/whatNews2.jpg',2,2,5,1),(6,'Get the Illusion of Fuller Lashes by “Mascng.','Get the Illusion','img/whatNews1.jpg',5,1,6,1);
/*!40000 ALTER TABLE `card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_details`
--

DROP TABLE IF EXISTS `card_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card_details` (
  `card_detail_id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) DEFAULT NULL,
  `dealtype` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `province` varchar(255) DEFAULT NULL,
  `publish` bit(1) NOT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `status` bit(1) NOT NULL,
  `street` varchar(255) DEFAULT NULL,
  `subcategory` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `zipcode` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`card_detail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_details`
--

LOCK TABLES `card_details` WRITE;
/*!40000 ALTER TABLE `card_details` DISABLE KEYS */;
INSERT INTO `card_details` VALUES (1,'1','12',500,'1',_binary '','12',_binary '','Camama','2','2','0007');
/*!40000 ALTER TABLE `card_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_image`
--

DROP TABLE IF EXISTS `card_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card_image` (
  `card_image_id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `is_cover` bit(1) NOT NULL,
  PRIMARY KEY (`card_image_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_image`
--

LOCK TABLES `card_image` WRITE;
/*!40000 ALTER TABLE `card_image` DISABLE KEYS */;
/*!40000 ALTER TABLE `card_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Carros'),(2,'Bicicletas');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `footer`
--

DROP TABLE IF EXISTS `footer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `footer` (
  `footer_id` int(11) NOT NULL AUTO_INCREMENT,
  `link` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`footer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `footer`
--

LOCK TABLES `footer` WRITE;
/*!40000 ALTER TABLE `footer` DISABLE KEYS */;
INSERT INTO `footer` VALUES (1,'link1','500'),(2,'link2','500'),(3,'link3','100'),(4,'link4','100'),(5,'link5','free');
/*!40000 ALTER TABLE `footer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `location_id` int(11) NOT NULL AUTO_INCREMENT,
  `location` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'Bengo'),(2,'Benguela'),(3,'Bié'),(4,'Cabinda'),(5,'Cuando_Cubango'),(6,'Cunene'),(7,'Huambo'),(8,'Huíla'),(9,'Kwanza_Norte'),(10,'Kwanza_Sul'),(11,'Luanda'),(12,'Lunda_Norte'),(13,'Lunda_Sul'),(14,'Malanje'),(15,'Moxico'),(16,'Namibe'),(17,'Uíge'),(18,'Zaire');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message` (
  `message_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`message_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_category`
--

DROP TABLE IF EXISTS `sub_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_category` (
  `sub_category_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`sub_category_id`),
  KEY `fk_sub_category_category_idx` (`category_id`),
  CONSTRAINT `fk_sub_category_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_category`
--

LOCK TABLES `sub_category` WRITE;
/*!40000 ALTER TABLE `sub_category` DISABLE KEYS */;
INSERT INTO `sub_category` VALUES (1,'Toyota',1),(2,'BMW',1),(3,'Honda',1),(4,'Montana',2),(5,'BMX',2),(6,'CrossOver',2);
/*!40000 ALTER TABLE `sub_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `photo` text,
  `email` varchar(255) DEFAULT NULL,
  `email_visible` bit(1) NOT NULL,
  `tel_visible` bit(1) NOT NULL,
  `telefone` varchar(255) DEFAULT NULL,
  `active_since` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `remember` bit(1) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Antonio','img/me.jpg','antonio@gmail.com',_binary '\0',_binary '\0',NULL,NULL,'12345',_binary '\0'),(2,'Pedro','img/user.png',NULL,_binary '\0',_binary '\0',NULL,NULL,NULL,_binary '\0'),(3,'Jonas','img/user.png',NULL,_binary '\0',_binary '\0',NULL,NULL,NULL,_binary '\0'),(4,'Lucas','img/user.png',NULL,_binary '\0',_binary '\0',NULL,NULL,NULL,_binary '\0'),(5,'Maria','img/user.png',NULL,_binary '\0',_binary '\0',NULL,NULL,NULL,_binary '\0'),(6,'Antonio','img/user.png',NULL,_binary '\0',_binary '\0',NULL,NULL,NULL,_binary '\0'),(7,'Antonio','img/user.png',NULL,_binary '\0',_binary '\0',NULL,NULL,NULL,_binary '\0'),(8,'Maria','img/user.png',NULL,_binary '\0',_binary '\0',NULL,NULL,NULL,_binary '\0'),(9,'Carlos','img/user.png',NULL,_binary '\0',_binary '\0',NULL,NULL,NULL,_binary '\0');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'advert43'
--

--
-- Dumping routines for database 'advert43'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-03 20:44:56
