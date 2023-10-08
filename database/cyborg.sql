-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 08, 2023 at 04:48 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cyborg`
--

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `gameId` int(11) NOT NULL,
  `gameName` varchar(255) NOT NULL,
  `gameCategory` varchar(255) NOT NULL,
  `gameRate` decimal(2,1) NOT NULL,
  `gameDownloads` int(11) NOT NULL,
  `gameImgPath` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`gameId`, `gameName`, `gameCategory`, `gameRate`, `gameDownloads`, `gameImgPath`) VALUES
(1, 'fortnite', 'sandbox', '4.8', 23, '1.jpg'),
(2, 'pubg', 'battle s', '4.5', 19, '2.jpg'),
(3, 'dota 2', 'stream-x', '4.1', 17, '3.jpg'),
(4, 'cs-go', 'legendary', '3.5', 33, '4.jpg'),
(5, 'minicraft', 'legendary', '4.7', 57, '5.jpg'),
(6, 'eagles fly', 'matrix games', '3.1', 99, '6.jpg'),
(7, 'warface', 'max 3d', '4.6', 122, '7.jpg'),
(8, 'marcraft', 'legend', '4.8', 200, '8.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`gameId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `gameId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
