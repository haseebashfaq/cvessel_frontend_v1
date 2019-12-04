-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 14, 2018 at 11:57 AM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cvessel`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(99) NOT NULL,
  `firstname` varchar(99) NOT NULL,
  `lastname` varchar(99) NOT NULL,
  `email` varchar(99) NOT NULL,
  `password` varchar(99) NOT NULL,
  `phone` varchar(99) NOT NULL,
  `address` varchar(99) NOT NULL,
  `user_type` varchar(2) NOT NULL,
  `status` varchar(10) NOT NULL,
  `created_at` varchar(99) NOT NULL,
  `updated_at` varchar(99) NOT NULL,
  `deleted_at` varchar(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstname`, `lastname`, `email`, `password`, `phone`, `address`, `user_type`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Robin', 'Van Opstal', 'robin@cvessel.com', '123', '123', 'Hamburg', '21', 'active', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `user_type`
--

CREATE TABLE `user_type` (
  `id` int(2) NOT NULL,
  `type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_type`
--

INSERT INTO `user_type` (`id`, `type`) VALUES
(1, 'admin'),
(2, 'owner'),
(3, 'customer');

-- --------------------------------------------------------

--
-- Table structure for table `vessel`
--

CREATE TABLE `vessel` (
  `id` int(99) NOT NULL,
  `vesselname` varchar(99) NOT NULL,
  `accommodation` int(6) NOT NULL,
  `afterdeck` int(6) NOT NULL,
  `beam` varchar(99) NOT NULL,
  `cargocapacity` varchar(99) NOT NULL,
  `classification` varchar(99) NOT NULL,
  `cranecapacity` varchar(99) NOT NULL,
  `foredeckspace` int(6) NOT NULL,
  `design` varchar(99) NOT NULL,
  `enginetype` varchar(99) NOT NULL,
  `fender` varchar(99) NOT NULL,
  `flag` varchar(99) NOT NULL,
  `totaldeck` int(6) NOT NULL,
  `freshwatercapacity` int(6) NOT NULL,
  `fuelcapacity` int(6) NOT NULL,
  `hulltype` varchar(99) NOT NULL,
  `imo` varchar(99) NOT NULL,
  `lengthoverall` varchar(99) NOT NULL,
  `mmsi` varchar(99) NOT NULL,
  `maxdraft` varchar(99) NOT NULL,
  `maxspeed` varchar(99) NOT NULL,
  `mindraft` varchar(99) NOT NULL,
  `crew12hr` int(6) NOT NULL,
  `crew14hr` int(6) NOT NULL,
  `crew24hr` int(6) NOT NULL,
  `numberofpax` int(6) NOT NULL,
  `owner` varchar(99) NOT NULL,
  `propulsiontype` varchar(99) NOT NULL,
  `shipname` varchar(99) NOT NULL,
  `shipyard` varchar(99) NOT NULL,
  `transitspeed` varchar(99) NOT NULL,
  `yearofconstruction` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vessel`
--

INSERT INTO `vessel` (`id`, `vesselname`, `accommodation`, `afterdeck`, `beam`, `cargocapacity`, `classification`, `cranecapacity`, `foredeckspace`, `design`, `enginetype`, `fender`, `flag`, `totaldeck`, `freshwatercapacity`, `fuelcapacity`, `hulltype`, `imo`, `lengthoverall`, `mmsi`, `maxdraft`, `maxspeed`, `mindraft`, `crew12hr`, `crew14hr`, `crew24hr`, `numberofpax`, `owner`, `propulsiontype`, `shipname`, `shipyard`, `transitspeed`, `yearofconstruction`) VALUES
(1, '', 0, 0, '', '', '', '', 0, '', '', '', '', 0, 0, 0, '', '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '', 0),
(2, '', 0, 0, '', '', '', '', 0, '', '', '', '', 0, 0, 0, '', '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '', 0),
(3, 'MO1', 0, 123, '9.5', '40', 'MCA Cat 2', '1', 32, 'Teknicraft', 'Caterpillar C32', '', 'UK', 155, 8000, 36000, 'Catamaran Aluminum', '0', '25.25', '0', '2.3', '30', '0', 2, 3, 6, 12, 'Mainprize Offshore Ltd.', 'Fixed Pitch Propellers', '', '', '25', 2014),
(5, 'MV Achiever', 2, 0, '7.6', '15', 'DNV1A1 HSLC R1(dnk) CREW', '0', 52, '', 'MTU 8V 2000 M72', '', 'DK', 52, 0, 8400, 'Catamaran Aluminum', '9634127', '19.99', '0', '1.4', '27', '0', 2, 3, 6, 12, 'Northern Offshore Services A/S', 'Servo fear eco flow', '', 'Grovfjord Mek Verksted AS', '22', 2011),
(6, 'MCS Boreas', 0, 0, '10.4', '0', 'BV I  HULL  MACH, Light Ship  Fast Utility Vessel', '0', 90, 'Twin Axe FCS 2610', 'Caterpillar C22T', '', 'UK', 90, 0, 21000, 'Catamaran Aluminum', '9679098', '26', '0', '2.2', '26', '1.98', 2, 3, 6, 12, 'Maritime Craft Services', 'Fixed pitch propeller', '', 'Damen Shipyard', '22', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_type`
--
ALTER TABLE `user_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vessel`
--
ALTER TABLE `vessel`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(99) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_type`
--
ALTER TABLE `user_type`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `vessel`
--
ALTER TABLE `vessel`
  MODIFY `id` int(99) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
