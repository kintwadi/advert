-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: advert43
-- ------------------------------------------------------
-- Server version	8.0.18

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
  `footer` int(11) DEFAULT NULL,
  PRIMARY KEY (`ad_id`),
  KEY `FK4f6st27tcma87ji3tn82aa0is` (`footer`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ad`
--

LOCK TABLES `ad` WRITE;
/*!40000 ALTER TABLE `ad` DISABLE KEYS */;
INSERT INTO `ad` VALUES (1,'Get the adds of the store Lashes ','first ad','img/live_concert1.jpg',1),(2,'Get the adds of the store Lashes ','second ad','img/news_card.jpg',1),(4,'Get the adds of the store Lashes','fourth ad','img/live_concert2.jpg',1);
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
  `footer` int(11) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `dealtype` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `province` varchar(255) DEFAULT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `subcategory` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `zipcode` varchar(255) DEFAULT NULL,
  `status` bit(1) NOT NULL,
  `publish` bit(1) NOT NULL,
  `card_details` int(11) DEFAULT NULL,
  PRIMARY KEY (`card_id`),
  KEY `FKidojig5oh2ccs67uaxxojon8s` (`card_details`),
  KEY `FKh77ykn9w0s2o4hjtiry8iife8` (`footer`),
  KEY `FK1x20bpkcek26a4vmli8xbu36c` (`user`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card`
--

LOCK TABLES `card` WRITE;
/*!40000 ALTER TABLE `card` DISABLE KEYS */;
INSERT INTO `card` VALUES (1,'Get the Illusion of Fuller Lashes by “Mascng.','Get the Illusion','img/whatNews1.jpg',1,1,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,_binary '\0',_binary '\0',NULL),(2,'Get the Illusion of Fuller Lashes by “Mascng.','Get the Illusion','img/whatNews1.jpg',2,1,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,_binary '\0',_binary '\0',NULL),(3,'Get the Illusion of Fuller Lashes by “Mascng.','Get the Illusion','img/whatNews1.jpg',3,2,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,_binary '\0',_binary '\0',NULL),(4,'Get the Illusion of Fuller Lashes by “Mascng.','Get the Illusion','img/whatNews1.jpg',4,2,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,_binary '\0',_binary '\0',NULL),(5,'Get the Illusion of Fuller Lashes by “Mascng.','Get the Illusion','img/whatNews2.jpg',5,3,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,_binary '\0',_binary '\0',NULL),(6,'Get the Illusion of Fuller Lashes by “Mascng.','Get the Illusion','img/whatNews1.jpg',5,5,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,_binary '\0',_binary '\0',NULL);
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
  `card_image` int(11) DEFAULT NULL,
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
  PRIMARY KEY (`card_detail_id`),
  KEY `FKslqhk8n4bssh11h58jve9s5ef` (`card_image`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_details`
--

LOCK TABLES `card_details` WRITE;
/*!40000 ALTER TABLE `card_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `card_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_image`
--

DROP TABLE IF EXISTS `card_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card_image` (
  `card_detail_id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `is_cover` bit(1) NOT NULL,
  `card_image_id` int(11) NOT NULL,
  PRIMARY KEY (`card_detail_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
  `parent` int(11) DEFAULT NULL,
  PRIMARY KEY (`sub_category_id`),
  KEY `FKimpw57miotgftglk5fy25ssvo` (`parent`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
  `photo` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `email_visible` bit(1) NOT NULL,
  `tel_visible` bit(1) NOT NULL,
  `telefone` varchar(255) DEFAULT NULL,
  `active_since` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `remember` bit(1) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Antonio','img/me.jpg','antonio@gmail.com',_binary '\0',_binary '\0',NULL,NULL,'12345',_binary '\0'),(2,'Pedro','img/user.png',NULL,_binary '\0',_binary '\0',NULL,NULL,NULL,_binary '\0'),(3,'Jonas','img/user.png',NULL,_binary '\0',_binary '\0',NULL,NULL,NULL,_binary '\0'),(4,'Lucas','img/user.png',NULL,_binary '\0',_binary '\0',NULL,NULL,NULL,_binary '\0'),(5,'Maria','img/user.png',NULL,_binary '\0',_binary '\0',NULL,NULL,NULL,_binary '\0'),(6,'Antonio','img/user.png',NULL,_binary '\0',_binary '\0',NULL,NULL,NULL,_binary '\0'),(7,'Antonio','img/user.png',NULL,_binary '\0',_binary '\0',NULL,NULL,NULL,_binary '\0'),(8,'Maria','img/user.png',NULL,_binary '\0',_binary '\0',NULL,NULL,NULL,_binary '\0'),(9,'Carlos','img/user.png',NULL,_binary '\0',_binary '\0',NULL,NULL,NULL,_binary '\0');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-07  0:38:14
