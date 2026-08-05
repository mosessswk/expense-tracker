--
-- PostgreSQL database dump
--

\restrict m627RYc1nVLrfB3uHv70uioy3CsqXE9tTg3c1yza8b9jBrpGePqtod4RCUWzBHj

-- Dumped from database version 18.4 (Homebrew)
-- Dumped by pg_dump version 18.4 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users OVERRIDING SYSTEM VALUE VALUES (7, 'den', '$2b$10$QbiCkoe8DvEsG2vTo46.beA4JjG/gFLWMyNbvwZGg.zuipBgI2.cW', NULL);
INSERT INTO public.users OVERRIDING SYSTEM VALUE VALUES (8, 'alice123', '$2b$10$hq9J.qR4AWwzKeQgRdoPGufr81pHYGZVXW57jFyiYsEAefyLaL.ry', NULL);
INSERT INTO public.users OVERRIDING SYSTEM VALUE VALUES (9, 'c77', '$2b$10$pOb0HLWJH1BzIRQeq4X9O.KwRMFhqC7vZJassth2Xgk6ZRzr7mi1y', 'Charlie Charles');
INSERT INTO public.users OVERRIDING SYSTEM VALUE VALUES (10, 'bob', '$2b$10$P7TjAcW/OLVqw04fQKdnEeoqY6T6tGZZCTZy4rxxfnUH0Iee/oo3m', 'Bob');
INSERT INTO public.users OVERRIDING SYSTEM VALUE VALUES (18, 'hello', '$2b$10$K1QN2QXGXHTcuzk0ZBVmO.mwnzUjnuF6RYHY3XSbMNi1eo9r/BN0K', NULL);
INSERT INTO public.users OVERRIDING SYSTEM VALUE VALUES (25, 'test', '$2b$10$je3H2Ik73UMX4zhzPdrpAu1Q98xquxqM6KdFT515AwBoikKLQ/yca', 'hehe');
INSERT INTO public.users OVERRIDING SYSTEM VALUE VALUES (30, '1', '$2b$10$OfWa01ppPSEMqYwdEIhjIOZ6LDfHliQZ9E5ptvdBQO2vL.sYzvSDO', NULL);
INSERT INTO public.users OVERRIDING SYSTEM VALUE VALUES (32, 'newacc', '$2b$10$tsJ.HDrMYH6Qw42EcDmZe.AyFV05YkBy4XQEyTbZbwZPT3vEosmmy', 'Happy User');


--
-- Data for Name: expenses; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (88, 'MTR', 6.00, 'Transport', '2026-08-03', NULL, 9);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (38, 'MTR', 12.00, 'Transport', '2026-07-16', NULL, 10);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (39, 'MTR', 12.00, 'Transport', '2026-07-16', NULL, 10);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (40, 'MTR', 0.00, 'Transport', '2026-07-16', NULL, 10);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (42, 'MTR', 10.00, 'Transport', '2026-07-16', NULL, 10);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (44, 'MTR', 10.00, 'Transport', '2026-07-16', NULL, 10);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (47, 'MTR', 9.50, 'Transport', '2026-07-16', NULL, 9);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (50, 'MTR', 8.00, 'Transport', '2026-07-17', NULL, 9);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (53, 'MTR', 4.00, 'Transport', '2026-07-19', NULL, 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (56, 'MTR', 10.00, 'Transport', '2026-07-19', NULL, 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (57, 'MTR', 12.00, 'Transport', '2026-07-19', NULL, 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (60, 'MTR', 10.00, 'Transport', '2026-07-20', NULL, 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (61, 'Lunch', 50.00, 'Food', '2026-07-20', NULL, 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (62, 'MTR', 6.00, 'Transport', '2026-07-20', NULL, 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (63, 'MTR', 9.00, 'Transport', '2026-07-20', NULL, 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (64, 'MTR', 10.00, 'Transport', '2026-07-20', NULL, 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (65, 'Dinner', 80.00, 'Food', '2026-07-20', NULL, 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (66, 'MTR', 4.00, 'Transport', '2026-07-20', NULL, 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (67, 'Dinner', 60.00, 'Food', '2026-07-19', NULL, 9);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (68, 'Breakfast', 15.00, 'Food', '2026-07-20', NULL, 9);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (70, 'MTR', 9.00, 'Transport', '2026-07-20', NULL, 9);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (71, 'Lunch', 75.00, 'Food', '2026-07-21', NULL, 9);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (85, 'MTR', 3.00, 'Transport', '2026-05-16', NULL, 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (28, 'Lunch', 75.00, 'Food', '2026-07-16', 'Chicken Rice', 9);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (73, 'Lunch', 50.00, 'Food', '2026-07-21', NULL, 9);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (74, 'MTR', 6.00, 'Transport', '2026-07-20', NULL, 9);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (35, 'Quite Very Long Title', 12.00, 'A Bit Long Category', '2026-04-30', 'looooo onnnggg ggggggggG description', 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (27, 'Lunch', 75.00, 'Food', '2026-07-14', 'Chicken Rice', 9);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (86, 'MTR', 13.00, 'Transport', '2026-05-10', NULL, 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (69, 'MTR', 6.00, 'Transport', '2026-07-20', NULL, 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (29, 'MTR', 14.00, 'Transport', '2026-07-15', '2', 9);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (30, 'MTR', 14.00, 'Transport', '2026-07-16', '', 9);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (75, 'MTR', 14.00, 'Transport', '2026-07-21', NULL, 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (2, 'MTR', 12.00, 'Transport', '2026-07-13', 'Station to home', 7);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (3, 'Dinner', 110.00, 'Food', '2026-07-13', 'Ramen', 7);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (4, 'MTR', 10.00, 'Transport', '2026-07-14', 'Station to work', 7);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (5, 'Gift', 359.00, 'Entertainment', '2026-07-14', 'Coffee powders for Tom''s birthday', 7);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (20, 'MTR', 9.00, 'Transport', '2026-07-15', NULL, 7);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (1, 'Lunch', 79.00, 'Food', '2026-07-12', 'Chicken Rice', 7);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (77, 'Lunch', 65.00, 'Food', '2026-07-22', NULL, 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (78, 'Lunch', 34.00, 'Food', '2026-07-22', NULL, 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (79, 'MTR', 1.00, 'Transport', '2026-07-22', NULL, 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (76, 'MTR', 14.00, 'Transport', '2026-07-21', NULL, 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (58, 'Breakfast', 5.00, 'Food', '2026-07-19', 'Bun', 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (80, 'Lunch', 85.00, 'Food', '2026-07-23', 'McD', 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (81, 'MTR', 13.00, 'Transport', '2026-07-21', 'yay', 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (82, 'Groceries', 53.00, 'Other', '2026-07-24', 'Supermarket', 9);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (33, 'Lunch', 90.50, 'Food', '2026-07-14', 'Chicken Rice yummy', 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (52, 'MTR', 3.00, 'Transport', '2026-06-18', NULL, 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (51, 'Dinner', 90.00, 'Food', '2026-06-17', NULL, 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (83, 'MTR', 14.00, 'Transport', '2026-08-03', NULL, 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (84, 'something', 555.00, 'Other', '2026-08-14', 'haha', 8);
INSERT INTO public.expenses OVERRIDING SYSTEM VALUE VALUES (87, 'Bus to Home', 13.70, 'Transportation', '2026-08-02', 'abc -> def', 32);


--
-- Name: expenses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.expenses_id_seq', 88, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 32, true);


--
-- PostgreSQL database dump complete
--

\unrestrict m627RYc1nVLrfB3uHv70uioy3CsqXE9tTg3c1yza8b9jBrpGePqtod4RCUWzBHj

