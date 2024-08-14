create database Weather;
use weather_data;
create table seven_days_data(time int,city_name varchar(100), temperature int, description varchar(50));
select * from weather;
INSERT INTO weather VALUES(1706529785,"kathmandu",302	,"clouds",21,1412,4,"Clouds");

INSERT INTO weather VALUES(1706623200,"kurnool",307	,"overcast",30,1015,0,"Clouds"),
(1706536800,"kurnool",306	,"passing clouds",30,982,0,"Clouds"),
(1706450400,"kurnool",306	,"clear",30,948,0,"Clear"),
(1706364000,"kurnool",306	,"clear",30,982,0,"Clear"),
(1706277600,"kurnool",306	,"passing clouds",54,982,0,"Clouds"),
(1706191200,"kurnool",306	,"drizzle",84,298,3,"Drizzle");

INSERT INTO weather VALUES(1706623200,"Wolverhampton",284,"clouds",67,1023,19,"Clouds"),
(1706536800,"Wolverhampton",283	,"overcast",68,1022,14,"Clouds"),
(1706450400,"Wolverhampton",282	,"fog",67,1021,16,"Mist"),
(1706364000,"Wolverhampton",283	,"clear",64,1025,11,"Clear"),
(1706277600,"Wolverhampton",284	,"clear",64,1025,19,"Clear"),
(1706191200,"Wolverhampton",296	,"overcast",67,1023,18,"Clouds");

drop database Weather_data;
CREATE TABLE IF NOT EXISTS weather(time int,city_name varchar(100), temperature int, description varchar(50),humidity int,pressure int, wind_speed int,icon varchar(30));