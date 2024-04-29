insert into laptopuser
(user_id, email_ouder1, email_ouder2, family_name, first_name)
values (0, "test@email", "", "testmans", "frank");
insert into laptopuser
(user_id, email_ouder1, email_ouder2, family_name, first_name)
values (1, "francis.Tester@mail.be", "fransesca@testermail.be", "tafels", "bobby");
insert into laptopuser
(user_id, email_ouder1, email_ouder2, family_name, first_name)
values (2, "testmail@mail.fr", "", "testmans", "peter");

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