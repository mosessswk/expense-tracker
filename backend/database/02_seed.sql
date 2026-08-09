--
-- PostgreSQL database dump
--

\restrict 9Ya5IqzQv8HmTcmnMjQYf51cSjjRonzD0RYqfjspO3oisKWh3wYJ6c8fkoD3gdf

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
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: Moses
--

COPY public.users (id, username, password_hash, display_name) FROM stdin;
35	user1	$2b$10$pzrnHpSVvFf7oTzJjLsmiONyfSl7IBFZN.t8S2iPhF6r49FyxKb6C	Sample User
36	user2	$2b$10$JEIDTZfTg30zSrLW3k7bieMyQUlEYGqbTSm/mOqp2d0W/zC98s1BC	\N
\.


--
-- Data for Name: expenses; Type: TABLE DATA; Schema: public; Owner: Moses
--

COPY public.expenses (id, title, amount, category, date, description, owner_id) FROM stdin;
91	Lunch	65.00	Food	2026-08-02	Chicken rice	36
89	Breakfast	8.50	Food	2026-07-21	Coffee and toast	36
90	MTR	12.00	Transport	2026-07-30	Home to work	36
93	MTR	12.00	Transport	2026-08-13	Work to home	36
94	Dinner	92.00	Food	2026-08-17	Dinner with friends	36
95	Movie	45.00	Entertainment	2026-08-26	Cinema ticket	36
96	Coffee	16.00	Food	2026-08-31	\N	36
98	New Backpack	159.00	Shopping	2026-09-07	\N	36
92	Groceries	128.40	Shopping	2026-08-03	\N	36
97	Bus	13.70	Transport	2026-09-01	\N	36
\.


--
-- Name: expenses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Moses
--

SELECT pg_catalog.setval('public.expenses_id_seq', 98, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Moses
--

SELECT pg_catalog.setval('public.users_id_seq', 36, true);


--
-- PostgreSQL database dump complete
--

\unrestrict 9Ya5IqzQv8HmTcmnMjQYf51cSjjRonzD0RYqfjspO3oisKWh3wYJ6c8fkoD3gdf

