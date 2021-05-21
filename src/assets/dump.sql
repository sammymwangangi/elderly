CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name TEXT,
    user_email EMAIL,
    user_phone PHONE,
    user_dob DATE,
    user_password PASSWORD,
    user_password_confirm PASSWORD,
);

INSERT or IGNORE INTO users(id, user_name, user_email,user_phone,user_dob,user_password,user_password_confirm) VALUES (1, 'Justin Bieber', 'sammymwinzi2@gmail.com','0717503802','14/05/1990','1234567','1234567');
INSERT or IGNORE INTO users(id, user_name, user_email,user_phone,user_dob,user_password,user_password_confirm) VALUES (2, 'Jonas Brothers', 'jonas@gmail.com','0717503800','11/05/1993','1234555','1234555');
INSERT or IGNORE INTO users(id, user_name, user_email,user_phone,user_dob,user_password,user_password_confirm) VALUES (3, 'Lucy Good', 'lucy@gmail.com','0717503999','10/05/1995','1234561','1234561');
INSERT or IGNORE INTO users(id, user_name, user_email,user_phone,user_dob,user_password,user_password_confirm) VALUES (4, 'Lauv', 'lauv@gmail.com','0717503808','19/05/1991','1234560','1234560');
INSERT or IGNORE INTO users(id, user_name, user_email,user_phone,user_dob,user_password,user_password_confirm) VALUES (5, 'Frank Klevin', 'frank@gmail.com','0717503888','14/08/1992','1234765','1234765');
INSERT or IGNORE INTO users(id, user_name, user_email,user_phone,user_dob,user_password,user_password_confirm) VALUES (6, 'Sammy Wang', 'sammy@gmail.com','0700503802','06/05/1980','1234789','1234789');