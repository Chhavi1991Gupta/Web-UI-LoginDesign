create database cmpe280;
use cmpe280;
create table registration (user_id INT NOT NULL AUTO_INCREMENT,
   userid VARCHAR(200) NOT NULL,
   email VARCHAR(200) NOT NULL,
   password VARCHAR(200) NOT NULL,
   sec_ques1 VARCHAR(100),
   sec_ans1 VARCHAR(45),
   sec_ques2 VARCHAR(100),
   sec_ans2 VARCHAR(45),
   mobile VARCHAR(12),
   address VARCHAR(50),
   PRIMARY KEY ( user_id ));

GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' IDENTIFIED BY 'root' WITH GRANT OPTION;