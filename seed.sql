insert into laptopuser
    (user_id, email_ouder1, email_ouder2, family_name, first_name, klas)
values (0, "test@email", "", "testmans", "frank", "1 ABC");
insert into laptopuser
    (user_id, email_ouder1, email_ouder2, family_name, first_name, klas)
values (1, "francis.Tester@mail.be", "fransesca@testermail.be", "tafels", "bobby", "3 CDE");
insert into laptopuser
    (user_id, email_ouder1, email_ouder2, family_name, first_name, klas)
values (2, "testmail@mail.fr", "", "testmans", "peter", "5 XYZ");

insert into laptop
    (serial_number, brand, model, processor, laptop_user_user_id)
values ("PF3075", "lenovo", "e14", "i5", null);
insert into laptop
    (serial_number, brand, model, processor, laptop_user_user_id)
values ("PF1234", "asus", "testmodel", "i5", null);
insert into laptop
    (serial_number, brand, model, processor, laptop_user_user_id)
values ("SN578QRP", "dell", "testmodel", "I3", null);
insert into laptop
    (serial_number, brand, model, processor, laptop_user_user_id)
values ("PF3076", "lenovo", "e14", "i5", 0);
insert into laptop
    (serial_number, brand, model, processor, laptop_user_user_id)
values ("PF3077", "lenovo", "e14", "i3", 0);
insert into laptop
    (serial_number, brand, model, processor, laptop_user_user_id)
values ("SN578QRQ", "dell", "testmodel", "I3", 1);

insert into users
    (id, `name`, email, email_verified, image, role)
values ("sampleID1", "Bobby Tafels", "bobby_tables@samplemail.be", "false", "", "");
insert into users
(id, `name`, email, email_verified, image, role)
values ("sampleID2", "Miranda Tafels", "miranda_tables@samplemail.be", "true", "", "USER");
insert into users
(id, `name`, email, email_verified, image, role)
values ("sampleID3", "Franky Tafels", "franky_tables@samplemail.be", "true", "", "");