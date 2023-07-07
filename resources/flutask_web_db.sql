-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 21, 2023 at 06:38 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flutask_web_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `project_name` text NOT NULL,
  `start_date` text NOT NULL,
  `end_date` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `creation_date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id`, `project_name`, `start_date`, `end_date`, `user_id`, `creation_date`) VALUES
(10, 'Test Project', 'no date', 'no date', 1, 'no date'),
(11, 'Test Project', 'no date', 'no date', 1, 'no date'),
(12, 'Test Project', 'no date', 'no date', 1, 'no date'),
(13, 'Test Project', 'no date', 'no date', 1, 'no date'),
(14, 'Test Project', 'no date', 'no date', 1, 'no date'),
(15, 'Test Project', 'no date', 'no date', 3, 'no date');

-- --------------------------------------------------------

--
-- Table structure for table `project_vs_user`
--

CREATE TABLE `project_vs_user` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `added_date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `project_vs_user`
--

INSERT INTO `project_vs_user` (`id`, `project_id`, `user_id`, `added_date`) VALUES
(1, 1, 2, ''),
(2, 1, 1, 'no_date'),
(3, 1, 1, 'no_date'),
(4, 1, 1, 'no_date'),
(5, 1, 1, 'no_date'),
(6, 10, 1, 'no_date'),
(7, 10, 1, 'no_date'),
(8, 10, 1, 'no_date'),
(9, 10, 1, 'no_date');

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `task_name` text NOT NULL,
  `project_id` int(11) NOT NULL,
  `start_date` text NOT NULL,
  `end_date` text NOT NULL,
  `creation_date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `task_name`, `project_id`, `start_date`, `end_date`, `creation_date`) VALUES
(1, 'Test Task one', 15, 'no date', 'no date', 'no date');

-- --------------------------------------------------------

--
-- Table structure for table `task_plan`
--

CREATE TABLE `task_plan` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `email` text NOT NULL,
  `collaboration_date` text NOT NULL,
  `project_id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  `status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `task_plan`
--

INSERT INTO `task_plan` (`id`, `user_id`, `email`, `collaboration_date`, `project_id`, `task_id`, `status`) VALUES
(1, 2, 'emon@gmail.com', 'no date', 15, 1, 'complete'),
(2, 2, 'emon@gmail.com', 'no date', 15, 1, 'planning'),
(3, 2, 'emon@gmail.com', 'no date', 15, 1, 'planning'),
(4, 2, 'emon@gmail.com', 'no date', 15, 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(1, 'emon21', 'emon@gmail.com', '$2b$10$6wP3E9ubdstawC/HPFmOPu/vL8sz68zHy2ssB0Yuq19kk3exUFMiK'),
(3, 'saif', 'saif@gmail.com', '$2b$10$isjFHpjzImsjUdjEEtPBX.8mwbzasbI86lIA/NSd0Fxyn1doU83Cm'),
(4, 'fahmida', 'fahmida@gmail.com', '$2b$10$vxzeTKmfUo5.fAWDYuQZXerd1w3qYV8wFY5IIG4.Pn.otDpRJP7aS'),
(8, 'tanvir', 'tanvir@gmail.com', '$2b$10$nSql1wNhSttfl0P7TM9So.1OwMNCfn5eg0XbdGYlTwUby77hpVGEu'),
(9, 'tasnim', 'tasnim@gmail.com', '$2b$10$C1v4v8aWEMsZshqs4dps/uJVRunV40coPFqwSdVfUBMsz9dwJK40W');

-- --------------------------------------------------------

--
-- Table structure for table `working_time`
--

CREATE TABLE `working_time` (
  `id` int(11) NOT NULL,
  `start_time` text NOT NULL,
  `end_time` text DEFAULT NULL,
  `task_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_vs_user`
--
ALTER TABLE `project_vs_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task_plan`
--
ALTER TABLE `task_plan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `working_time`
--
ALTER TABLE `working_time`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `project_vs_user`
--
ALTER TABLE `project_vs_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `task_plan`
--
ALTER TABLE `task_plan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `working_time`
--
ALTER TABLE `working_time`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
