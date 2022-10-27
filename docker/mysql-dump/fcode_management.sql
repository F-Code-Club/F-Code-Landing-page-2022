-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema fcode_management
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema fcode_management
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `fcode_management` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci ;
USE `fcode_management` ;

-- -----------------------------------------------------
-- Table `fcode_management`.`event`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fcode_management`.`event` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `point` INT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `start_time` TIMESTAMP NOT NULL,
  `end_time` TIMESTAMP NULL DEFAULT NULL,
  `location` VARCHAR(100) NULL DEFAULT 'Upcomming',
  `status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fcode_management`.`position`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fcode_management`.`position` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `position` VARCHAR(155) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fcode_management`.`crew`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fcode_management`.`crew` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(10) NULL,
  `level` INT NULL,
  `meeting_url` VARCHAR(255) NULL,
  `drive_url` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fcode_management`.`member`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fcode_management`.`member` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `student_id` VARCHAR(12) NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `avatar_url` TEXT NULL DEFAULT NULL,
  `major` VARCHAR(45) NULL DEFAULT NULL,
  `date_of_birth` DATE NULL DEFAULT NULL,
  `role` TINYINT NULL DEFAULT NULL,
  `club_entry_date` DATE NULL DEFAULT NULL,
  `phone` CHAR(10) NULL,
  `personal_mail` VARCHAR(320) NULL DEFAULT NULL,
  `school_mail` VARCHAR(320) NULL DEFAULT NULL,
  `facebook_url` VARCHAR(250) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `ip` VARCHAR(45) NULL DEFAULT NULL,
  `status` VARCHAR(255) NULL DEFAULT NULL,
  `position_id` INT NULL DEFAULT NULL,
  `crew_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `personal_mail_UNIQUE` (`personal_mail` ASC) VISIBLE,
  UNIQUE INDEX `member_id_UNIQUE` (`student_id` ASC) VISIBLE,
  UNIQUE INDEX `school_mail_UNIQUE` (`school_mail` ASC) VISIBLE,
  UNIQUE INDEX `facebook_UNIQUE` (`facebook_url` ASC) VISIBLE,
  INDEX `fk_member_position1_idx` (`position_id` ASC) VISIBLE,
  UNIQUE INDEX `phone_UNIQUE` (`phone` ASC) VISIBLE,
  INDEX `fk_member_crew1_idx` (`crew_id` ASC) VISIBLE,
  CONSTRAINT `fk_member_position1`
    FOREIGN KEY (`position_id`)
    REFERENCES `fcode_management`.`position` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_member_crew1`
    FOREIGN KEY (`crew_id`)
    REFERENCES `fcode_management`.`crew` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fcode_management`.`attendance`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fcode_management`.`attendance` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `member_id` INT NOT NULL,
  `event_id` INT NOT NULL,
  `date` DATE NOT NULL,
  `state` INT NOT NULL DEFAULT 0,
  INDEX `fk_attendance_event1_idx` (`event_id` ASC) VISIBLE,
  INDEX `fk_attendance_member1_idx` (`member_id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_attendance_event1`
    FOREIGN KEY (`event_id`)
    REFERENCES `fcode_management`.`event` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_attendance_member1`
    FOREIGN KEY (`member_id`)
    REFERENCES `fcode_management`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fcode_management`.`genre`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fcode_management`.`genre` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fcode_management`.`article`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fcode_management`.`article` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(90) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `author` VARCHAR(250) NULL DEFAULT NULL,
  `content` TEXT NULL,
  `location` VARCHAR(250) NULL DEFAULT NULL,
  `image_url` TEXT NULL,
  `status` VARCHAR(45) NULL,
  `created_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `genre_id` INT NOT NULL,
  `member_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_article_genre1_idx` (`genre_id` ASC) VISIBLE,
  INDEX `fk_article_member1_idx` (`member_id` ASC) VISIBLE,
  CONSTRAINT `fk_article_genre1`
    FOREIGN KEY (`genre_id`)
    REFERENCES `fcode_management`.`genre` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_article_member1`
    FOREIGN KEY (`member_id`)
    REFERENCES `fcode_management`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fcode_management`.`announcement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fcode_management`.`announcement` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(90) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `info_group` TEXT NULL DEFAULT NULL,
  `info_user_id` TEXT NULL,
  `location` VARCHAR(250) NULL DEFAULT NULL,
  `image_url` VARCHAR(250) NULL,
  `created_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `send_email_when_update` TINYINT NOT NULL DEFAULT 0,
  `mail` TEXT NULL,
  `mail_title` VARCHAR(255) NULL,
  `status` VARCHAR(45) NOT NULL,
  `member_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_annoucement_member1_idx` (`member_id` ASC) VISIBLE,
  CONSTRAINT `fk_annoucement_member1`
    FOREIGN KEY (`member_id`)
    REFERENCES `fcode_management`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fcode_management`.`subject`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fcode_management`.`subject` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(250) NULL,
  `semester` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fcode_management`.`resource`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fcode_management`.`resource` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(250) NULL,
  `contributor` VARCHAR(250) NULL,
  `description` TEXT NULL,
  `subject_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_resource_subject1_idx` (`subject_id` ASC) VISIBLE,
  CONSTRAINT `fk_resource_subject1`
    FOREIGN KEY (`subject_id`)
    REFERENCES `fcode_management`.`subject` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fcode_management`.`question`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fcode_management`.`question` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(90) NOT NULL,
  `content` TEXT NULL DEFAULT NULL,
  `author_email` VARCHAR(250) NULL DEFAULT NULL,
  `created_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fcode_management`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fcode_management`.`comment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` TEXT NULL DEFAULT NULL,
  `author_email` VARCHAR(250) NULL DEFAULT NULL,
  `created_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` VARCHAR(45) NOT NULL,
  `question_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_comment_question1_idx` (`question_id` ASC) VISIBLE,
  CONSTRAINT `fk_comment_question1`
    FOREIGN KEY (`question_id`)
    REFERENCES `fcode_management`.`question` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fcode_management`.`notification`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fcode_management`.`notification` (
  `annoucement_id` INT NOT NULL,
  `member_id` INT NOT NULL,
  INDEX `fk_notification_annoucement1_idx` (`annoucement_id` ASC) VISIBLE,
  INDEX `fk_notification_member1_idx` (`member_id` ASC) VISIBLE,
  CONSTRAINT `fk_notification_annoucement1`
    FOREIGN KEY (`annoucement_id`)
    REFERENCES `fcode_management`.`announcement` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_notification_member1`
    FOREIGN KEY (`member_id`)
    REFERENCES `fcode_management`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fcode_management`.`challenge`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fcode_management`.`challenge` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `start_time` TIMESTAMP NOT NULL,
  `end_time` TIMESTAMP NULL DEFAULT NULL,
  `created_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fcode_management`.`crew_announcement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fcode_management`.`crew_announcement` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(90) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `location` VARCHAR(250) NULL DEFAULT NULL,
  `image_url` VARCHAR(250) NULL,
  `created_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` VARCHAR(45) NOT NULL,
  `crew_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_crew_annoucement_crew1_idx` (`crew_id` ASC) VISIBLE,
  CONSTRAINT `fk_crew_annoucement_crew1`
    FOREIGN KEY (`crew_id`)
    REFERENCES `fcode_management`.`crew` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fcode_management`.`fee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fcode_management`.`fee` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fcode_management`.`member_fee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fcode_management`.`member_fee` (
  `member_id` INT NOT NULL,
  `fee_id` INT NOT NULL,
  PRIMARY KEY (`member_id`, `fee_id`),
  INDEX `fk_member_has_fee_fee1_idx` (`fee_id` ASC) VISIBLE,
  INDEX `fk_member_has_fee_member1_idx` (`member_id` ASC) VISIBLE,
  CONSTRAINT `fk_member_has_fee_member1`
    FOREIGN KEY (`member_id`)
    REFERENCES `fcode_management`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_member_has_fee_fee1`
    FOREIGN KEY (`fee_id`)
    REFERENCES `fcode_management`.`fee` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fcode_management`.`plus_point`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fcode_management`.`plus_point` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NOT NULL DEFAULT 1,
  `reason` VARCHAR(320) NOT NULL,
  `date` DATE NOT NULL,
  `member_id` INT NOT NULL,
  `status` VARCHAR(45) NULL,
  PRIMARY KEY (`id`, `member_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_plus_point_member1_idx` (`member_id` ASC) VISIBLE,
  CONSTRAINT `fk_plus_point_member1`
    FOREIGN KEY (`member_id`)
    REFERENCES `fcode_management`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fcode_management`.`register`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fcode_management`.`register` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `student_id` VARCHAR(12) NULL,
  `name` VARCHAR(90) NOT NULL,
  `major` VARCHAR(45) NULL DEFAULT NULL,
  `phone` CHAR(10) NULL,
  `personal_mail` VARCHAR(320) NULL DEFAULT NULL,
  `school_mail` VARCHAR(320) NULL DEFAULT NULL,
  `semester` TINYINT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
