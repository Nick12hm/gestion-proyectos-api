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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: proyectos; Type: TABLE; Schema: public; Owner: master
--

CREATE TABLE public.proyectos (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion text,
    fecha_creacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    administrador_id integer NOT NULL
);


ALTER TABLE public.proyectos OWNER TO master;

--
-- Name: proyectos_id_seq; Type: SEQUENCE; Schema: public; Owner: master
--

CREATE SEQUENCE public.proyectos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.proyectos_id_seq OWNER TO master;

--
-- Name: proyectos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: master
--

ALTER SEQUENCE public.proyectos_id_seq OWNED BY public.proyectos.id;


--
-- Name: roles; Type: TABLE; Schema: public; Owner: master
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    nombre character varying(50) NOT NULL
);


ALTER TABLE public.roles OWNER TO master;

--
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: master
--

CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.roles_id_seq OWNER TO master;

--
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: master
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- Name: usuarios; Type: TABLE; Schema: public; Owner: master
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(255) NOT NULL,
    rol_id integer NOT NULL,
    administrador_id integer,
    token character varying(255)
);


ALTER TABLE public.usuarios OWNER TO master;

--
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: master
--

CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuarios_id_seq OWNER TO master;

--
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: master
--

ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;


--
-- Name: usuarios_proyectos; Type: TABLE; Schema: public; Owner: master
--

CREATE TABLE public.usuarios_proyectos (
    id integer NOT NULL,
    usuario_id integer NOT NULL,
    proyecto_id integer NOT NULL
);


ALTER TABLE public.usuarios_proyectos OWNER TO master;

--
-- Name: usuarios_proyectos_id_seq; Type: SEQUENCE; Schema: public; Owner: master
--

CREATE SEQUENCE public.usuarios_proyectos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuarios_proyectos_id_seq OWNER TO master;

--
-- Name: usuarios_proyectos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: master
--

ALTER SEQUENCE public.usuarios_proyectos_id_seq OWNED BY public.usuarios_proyectos.id;


--
-- Name: proyectos id; Type: DEFAULT; Schema: public; Owner: master
--

ALTER TABLE ONLY public.proyectos ALTER COLUMN id SET DEFAULT nextval('public.proyectos_id_seq'::regclass);


--
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: master
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- Name: usuarios id; Type: DEFAULT; Schema: public; Owner: master
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);


--
-- Name: usuarios_proyectos id; Type: DEFAULT; Schema: public; Owner: master
--

ALTER TABLE ONLY public.usuarios_proyectos ALTER COLUMN id SET DEFAULT nextval('public.usuarios_proyectos_id_seq'::regclass);


--
-- Name: proyectos proyectos_pkey; Type: CONSTRAINT; Schema: public; Owner: master
--

ALTER TABLE ONLY public.proyectos
    ADD CONSTRAINT proyectos_pkey PRIMARY KEY (id);


--
-- Name: roles roles_nombre_key; Type: CONSTRAINT; Schema: public; Owner: master
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_nombre_key UNIQUE (nombre);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: master
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: usuarios usuarios_email_key; Type: CONSTRAINT; Schema: public; Owner: master
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_email_key UNIQUE (email);


--
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: master
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- Name: usuarios_proyectos usuarios_proyectos_pkey; Type: CONSTRAINT; Schema: public; Owner: master
--

ALTER TABLE ONLY public.usuarios_proyectos
    ADD CONSTRAINT usuarios_proyectos_pkey PRIMARY KEY (id);


--
-- Name: usuarios_proyectos usuarios_proyectos_usuario_id_proyecto_id_key; Type: CONSTRAINT; Schema: public; Owner: master
--

ALTER TABLE ONLY public.usuarios_proyectos
    ADD CONSTRAINT usuarios_proyectos_usuario_id_proyecto_id_key UNIQUE (usuario_id, proyecto_id);


--
-- Name: proyectos proyectos_administrador_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: master
--

ALTER TABLE ONLY public.proyectos
    ADD CONSTRAINT proyectos_administrador_id_fkey FOREIGN KEY (administrador_id) REFERENCES public.usuarios(id) ON DELETE CASCADE;


--
-- Name: usuarios usuarios_administrador_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: master
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_administrador_id_fkey FOREIGN KEY (administrador_id) REFERENCES public.usuarios(id) ON DELETE SET NULL;


--
-- Name: usuarios_proyectos usuarios_proyectos_proyecto_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: master
--

ALTER TABLE ONLY public.usuarios_proyectos
    ADD CONSTRAINT usuarios_proyectos_proyecto_id_fkey FOREIGN KEY (proyecto_id) REFERENCES public.proyectos(id) ON DELETE CASCADE;


--
-- Name: usuarios_proyectos usuarios_proyectos_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: master
--

ALTER TABLE ONLY public.usuarios_proyectos
    ADD CONSTRAINT usuarios_proyectos_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id) ON DELETE CASCADE;


--
-- Name: usuarios usuarios_rol_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: master
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_rol_id_fkey FOREIGN KEY (rol_id) REFERENCES public.roles(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

