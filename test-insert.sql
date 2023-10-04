INSERT INTO utente(id, username, password) VALUES(1, 'admin', 'admin');

INSERT INTO conto(id, utente_id, nome, bilancio, valuta, iban) VALUES(1, 1, 'Personale', 1650.50, '$', 10000056689);

INSERT INTO movimento(id, conto_id, ammontare, data, tipologia, descrizione) VALUES (1, 1, 500.65, '2023-07-23 12:12:49', 'USCITA', 'Bonifico disposto da Tuo Padre');