-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: practisedb
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `equipments`
--

DROP TABLE IF EXISTS `equipments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipments` (
  `e_id` int NOT NULL AUTO_INCREMENT,
  `e_name` varchar(45) NOT NULL,
  `e_cost` double NOT NULL,
  `e_desc` varchar(400) DEFAULT NULL,
  `e_purchasedate` datetime NOT NULL,
  `e_qty` int(10) unsigned zerofill NOT NULL,
  PRIMARY KEY (`e_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipments`
--

/*!40000 ALTER TABLE `equipments` DISABLE KEYS */;
/*!40000 ALTER TABLE `equipments` ENABLE KEYS */;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback` (
  `f_id` int NOT NULL AUTO_INCREMENT,
  `f_stars` int(10) unsigned zerofill NOT NULL,
  `f_text` varchar(240) DEFAULT NULL,
  `m_id` int NOT NULL,
  PRIMARY KEY (`f_id`),
  KEY `member_id_idx` (`m_id`),
  CONSTRAINT `members_id` FOREIGN KEY (`m_id`) REFERENCES `members` (`m_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;

--
-- Table structure for table `hdata`
--

DROP TABLE IF EXISTS `hdata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hdata` (
  `h_id` int NOT NULL AUTO_INCREMENT,
  `h_height` double unsigned zerofill DEFAULT NULL,
  `h_weight` double unsigned zerofill DEFAULT NULL,
  `h_fatp` double unsigned zerofill DEFAULT NULL,
  `h_targetweight` double unsigned zerofill DEFAULT NULL,
  `h_bmi` int DEFAULT NULL,
  `m_id` int DEFAULT NULL,
  PRIMARY KEY (`h_id`),
  KEY `m_id_idx` (`m_id`),
  CONSTRAINT `member_id` FOREIGN KEY (`m_id`) REFERENCES `members` (`m_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hdata`
--

/*!40000 ALTER TABLE `hdata` DISABLE KEYS */;
/*!40000 ALTER TABLE `hdata` ENABLE KEYS */;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `members` (
  `m_id` int NOT NULL AUTO_INCREMENT,
  `m_fname` varchar(45) NOT NULL,
  `m_lname` varchar(45) DEFAULT NULL,
  `m_email` varchar(45) NOT NULL,
  `m_password` varchar(200) NOT NULL,
  `m_age` int DEFAULT NULL,
  `m_gender` char(1) DEFAULT NULL,
  `m_address` varchar(300) DEFAULT NULL,
  `m_joindate` datetime NOT NULL,
  `u_id` int NOT NULL,
  `t_id` int NOT NULL,
  `pl_id` int NOT NULL,
  PRIMARY KEY (`m_id`),
  UNIQUE KEY `u_id_UNIQUE` (`u_id`),
  KEY `trainer_id_idx` (`t_id`),
  KEY `plan_id_idx` (`pl_id`),
  CONSTRAINT `plan_id` FOREIGN KEY (`pl_id`) REFERENCES `plans` (`pl_id`),
  CONSTRAINT `trainer_id` FOREIGN KEY (`t_id`) REFERENCES `trainers` (`t_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`u_id`) REFERENCES `users` (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

/*!40000 ALTER TABLE `members` DISABLE KEYS */;
/*!40000 ALTER TABLE `members` ENABLE KEYS */;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `p_id` int NOT NULL AUTO_INCREMENT,
  `p_status` tinyint NOT NULL,
  `p_amount` double DEFAULT NULL,
  `p_date` datetime NOT NULL,
  `m_id` int NOT NULL,
  `pl_id` int NOT NULL,
  PRIMARY KEY (`p_id`),
  KEY `m_id_idx` (`m_id`),
  CONSTRAINT `m_id` FOREIGN KEY (`m_id`) REFERENCES `members` (`m_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;

--
-- Table structure for table `plans`
--

DROP TABLE IF EXISTS `plans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plans` (
  `pl_id` int NOT NULL AUTO_INCREMENT,
  `pl_name` varchar(45) NOT NULL,
  `pl_desc` varchar(240) DEFAULT NULL,
  `pl_duration` int(10) unsigned zerofill DEFAULT NULL,
  `pl_cost` double unsigned zerofill NOT NULL,
  PRIMARY KEY (`pl_id`),
  UNIQUE KEY `p_name_UNIQUE` (`pl_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plans`
--

/*!40000 ALTER TABLE `plans` DISABLE KEYS */;
/*!40000 ALTER TABLE `plans` ENABLE KEYS */;

--
-- Table structure for table `trainers`
--

DROP TABLE IF EXISTS `trainers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trainers` (
  `t_id` int NOT NULL AUTO_INCREMENT,
  `t_fname` varchar(45) NOT NULL,
  `t_lname` varchar(45) NOT NULL,
  `t_email` varchar(45) NOT NULL,
  `t_password` varchar(200) NOT NULL,
  `t_phone` varchar(20) NOT NULL,
  `t_address` varchar(300) DEFAULT NULL,
  `t_age` int DEFAULT NULL,
  `t_gender` varchar(10) DEFAULT NULL,
  `u_id` int NOT NULL,
  PRIMARY KEY (`t_id`),
  UNIQUE KEY `t_email_UNIQUE` (`t_email`),
  UNIQUE KEY `t_phone_UNIQUE` (`t_phone`),
  KEY `u_id_idx` (`u_id`),
  CONSTRAINT `u_id` FOREIGN KEY (`u_id`) REFERENCES `users` (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trainers`
--

/*!40000 ALTER TABLE `trainers` DISABLE KEYS */;
/*!40000 ALTER TABLE `trainers` ENABLE KEYS */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `u_id` int NOT NULL AUTO_INCREMENT,
  `u_fname` varchar(45) NOT NULL,
  `u_lame` varchar(45) NOT NULL,
  `u_email` varchar(60) NOT NULL,
  `u_password` varchar(200) NOT NULL,
  `u_role` varchar(45) NOT NULL,
  PRIMARY KEY (`u_id`),
  UNIQUE KEY `u_email_UNIQUE` (`u_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-05 23:17:40
