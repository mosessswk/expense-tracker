--
-- PostgreSQL database dump
--

\restrict BkCaiFsafGj0bfwPnIoG1qrF3Wvai8OcsVoZnLSvl79pi5e7p0LRKVdDJng0RTd

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: expenses; Type: TABLE; Schema: public; Owner: Moses
--

CREATE TABLE public.expenses (
    id integer NOT NULL,
    title text NOT NULL,
    amount numeric(10,2) NOT NULL,
    category text NOT NULL,
    date date DEFAULT CURRENT_DATE NOT NULL,
    description text,
    owner_id integer DEFAULT 9 NOT NULL,
    CONSTRAINT expense_amount_check CHECK (((amount)::double precision >= (0)::double precision))
);


ALTER TABLE public.expenses OWNER TO "Moses";

--
-- Name: expenses_id_seq; Type: SEQUENCE; Schema: public; Owner: Moses
--

ALTER TABLE public.expenses ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.expenses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: Moses
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username text NOT NULL,
    password_hash text NOT NULL,
    display_name text
);


ALTER TABLE public.users OWNER TO "Moses";

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: Moses
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: expenses; Type: TABLE DATA; Schema: public; Owner: Moses
--

COPY public.expenses (id, title, amount, category, date, description, owner_id) FROM stdin;
88	MTR	6.00	Transport	2026-08-03	\N	9
38	MTR	12.00	Transport	2026-07-16	\N	10
39	MTR	12.00	Transport	2026-07-16	\N	10
40	MTR	0.00	Transport	2026-07-16	\N	10
42	MTR	10.00	Transport	2026-07-16	\N	10
44	MTR	10.00	Transport	2026-07-16	\N	10
47	MTR	9.50	Transport	2026-07-16	\N	9
50	MTR	8.00	Transport	2026-07-17	\N	9
53	MTR	4.00	Transport	2026-07-19	\N	8
56	MTR	10.00	Transport	2026-07-19	\N	8
57	MTR	12.00	Transport	2026-07-19	\N	8
60	MTR	10.00	Transport	2026-07-20	\N	8
61	Lunch	50.00	Food	2026-07-20	\N	8
62	MTR	6.00	Transport	2026-07-20	\N	8
63	MTR	9.00	Transport	2026-07-20	\N	8
64	MTR	10.00	Transport	2026-07-20	\N	8
65	Dinner	80.00	Food	2026-07-20	\N	8
66	MTR	4.00	Transport	2026-07-20	\N	8
67	Dinner	60.00	Food	2026-07-19	\N	9
68	Breakfast	15.00	Food	2026-07-20	\N	9
70	MTR	9.00	Transport	2026-07-20	\N	9
71	Lunch	75.00	Food	2026-07-21	\N	9
85	MTR	3.00	Transport	2026-05-16	\N	8
28	Lunch	75.00	Food	2026-07-16	Chicken Rice	9
73	Lunch	50.00	Food	2026-07-21	\N	9
74	MTR	6.00	Transport	2026-07-20	\N	9
35	Quite Very Long Title	12.00	A Bit Long Category	2026-04-30	looooo onnnggg ggggggggG description	8
27	Lunch	75.00	Food	2026-07-14	Chicken Rice	9
86	MTR	13.00	Transport	2026-05-10	\N	8
69	MTR	6.00	Transport	2026-07-20	\N	8
29	MTR	14.00	Transport	2026-07-15	2	9
30	MTR	14.00	Transport	2026-07-16		9
75	MTR	14.00	Transport	2026-07-21	\N	8
2	MTR	12.00	Transport	2026-07-13	Station to home	7
3	Dinner	110.00	Food	2026-07-13	Ramen	7
4	MTR	10.00	Transport	2026-07-14	Station to work	7
5	Gift	359.00	Entertainment	2026-07-14	Coffee powders for Tom's birthday	7
20	MTR	9.00	Transport	2026-07-15	\N	7
1	Lunch	79.00	Food	2026-07-12	Chicken Rice	7
77	Lunch	65.00	Food	2026-07-22	\N	8
78	Lunch	34.00	Food	2026-07-22	\N	8
79	MTR	1.00	Transport	2026-07-22	\N	8
76	MTR	14.00	Transport	2026-07-21	\N	8
58	Breakfast	5.00	Food	2026-07-19	Bun	8
80	Lunch	85.00	Food	2026-07-23	McD	8
81	MTR	13.00	Transport	2026-07-21	yay	8
82	Groceries	53.00	Other	2026-07-24	Supermarket	9
33	Lunch	90.50	Food	2026-07-14	Chicken Rice yummy	8
52	MTR	3.00	Transport	2026-06-18	\N	8
51	Dinner	90.00	Food	2026-06-17	\N	8
83	MTR	14.00	Transport	2026-08-03	\N	8
84	something	555.00	Other	2026-08-14	haha	8
87	Bus to Home	13.70	Transportation	2026-08-02	abc -> def	32
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: Moses
--

COPY public.users (id, username, password_hash, display_name) FROM stdin;
7	den	$2b$10$QbiCkoe8DvEsG2vTo46.beA4JjG/gFLWMyNbvwZGg.zuipBgI2.cW	\N
8	alice123	$2b$10$hq9J.qR4AWwzKeQgRdoPGufr81pHYGZVXW57jFyiYsEAefyLaL.ry	\N
9	c77	$2b$10$pOb0HLWJH1BzIRQeq4X9O.KwRMFhqC7vZJassth2Xgk6ZRzr7mi1y	Charlie Charles
10	bob	$2b$10$P7TjAcW/OLVqw04fQKdnEeoqY6T6tGZZCTZy4rxxfnUH0Iee/oo3m	Bob
18	hello	$2b$10$K1QN2QXGXHTcuzk0ZBVmO.mwnzUjnuF6RYHY3XSbMNi1eo9r/BN0K	\N
25	test	$2b$10$je3H2Ik73UMX4zhzPdrpAu1Q98xquxqM6KdFT515AwBoikKLQ/yca	hehe
30	1	$2b$10$OfWa01ppPSEMqYwdEIhjIOZ6LDfHliQZ9E5ptvdBQO2vL.sYzvSDO	\N
32	newacc	$2b$10$tsJ.HDrMYH6Qw42EcDmZe.AyFV05YkBy4XQEyTbZbwZPT3vEosmmy	Happy User
\.


--
-- Name: expenses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Moses
--

SELECT pg_catalog.setval('public.expenses_id_seq', 88, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Moses
--

SELECT pg_catalog.setval('public.users_id_seq', 32, true);


--
-- Name: expenses expenses_pkey; Type: CONSTRAINT; Schema: public; Owner: Moses
--

ALTER TABLE ONLY public.expenses
    ADD CONSTRAINT expenses_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: Moses
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: Moses
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: expenses fk_expenses_owner; Type: FK CONSTRAINT; Schema: public; Owner: Moses
--

ALTER TABLE ONLY public.expenses
    ADD CONSTRAINT fk_expenses_owner FOREIGN KEY (owner_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

\unrestrict BkCaiFsafGj0bfwPnIoG1qrF3Wvai8OcsVoZnLSvl79pi5e7p0LRKVdDJng0RTd

