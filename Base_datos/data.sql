--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4
-- Dumped by pg_dump version 16.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: master
--

SET SESSION AUTHORIZATION DEFAULT;

ALTER TABLE public.roles DISABLE TRIGGER ALL;

COPY public.roles (id, nombre) FROM stdin;
1	administrador
2	lector
\.


ALTER TABLE public.roles ENABLE TRIGGER ALL;

--
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: master
--

ALTER TABLE public.usuarios DISABLE TRIGGER ALL;

COPY public.usuarios (id, nombre, email, password, rol_id, administrador_id, token) FROM stdin;
5	Juan Pérez Actualizado	juan.perez.actualizado@example.com	$2b$10$jezcZTv4rh9Z7NqFs9Vfve6shRcgVP1LsvyB2MEsXUrTupr.GG/5K	2	1	\N
2	lector 1	admin1@example.com	$2b$10$bW78SYvxG1edFGXBYOJFsO8B2Cvu9ceXiJ/RI/P1rwWqcvFJpBrcm	2	1	\N
3	Usuario1	usuario1@example.com	$2b$10$2j3PuM.50ySbMHqLe06UQuxcma0.1Ql49sny78sWip4q.o/W9wQIi	2	2	\N
1	Master User	master@example.com	$2b$10$2NiFqSaJLRB3DysOqRu.muQUAG7ln40dNQUrB7v7vroE9qqSdqWlW	1	\N	\N
6	Diana Pérez	diana.jj@example.com	$2b$10$pDyqD1nhRqm9XkU7JoVEIe2SipTHctJrK2QIC4IcxEL2J.h4ckiFi	1	\N	\N
\.


ALTER TABLE public.usuarios ENABLE TRIGGER ALL;

--
-- Data for Name: proyectos; Type: TABLE DATA; Schema: public; Owner: master
--

ALTER TABLE public.proyectos DISABLE TRIGGER ALL;

COPY public.proyectos (id, nombre, descripcion, fecha_creacion, administrador_id) FROM stdin;
3	Reportaje	Cubrir noticias	2025-01-30 11:56:24.628391	1
1	Meditar	Aprender acerca de la meditación	2025-01-28 17:24:42.33523	6
23	Desarrollo web	Aprender Java	2025-01-31 22:43:41.222986	6
2	Literatura	Escribir cuentos cortos	2025-01-30 11:56:24.615196	1
24	Ciencia de datos	Aprender pytnhon	2025-01-31 23:25:49.336036	6
\.


ALTER TABLE public.proyectos ENABLE TRIGGER ALL;

--
-- Data for Name: usuarios_proyectos; Type: TABLE DATA; Schema: public; Owner: master
--

ALTER TABLE public.usuarios_proyectos DISABLE TRIGGER ALL;

COPY public.usuarios_proyectos (id, usuario_id, proyecto_id) FROM stdin;
1	3	1
\.


ALTER TABLE public.usuarios_proyectos ENABLE TRIGGER ALL;

--
-- Name: proyectos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: master
--

SELECT pg_catalog.setval('public.proyectos_id_seq', 24, true);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: master
--

SELECT pg_catalog.setval('public.roles_id_seq', 2, true);


--
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: master
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 6, true);


--
-- Name: usuarios_proyectos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: master
--

SELECT pg_catalog.setval('public.usuarios_proyectos_id_seq', 1, true);


--
-- PostgreSQL database dump complete
--

