--
-- PostgreSQL database dump
--

-- Dumped from database version 12.16 (Ubuntu 12.16-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.16 (Ubuntu 12.16-0ubuntu0.20.04.1)

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
-- Name: likes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.likes (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "postId" integer NOT NULL
);


--
-- Name: likes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.likes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.likes_id_seq OWNED BY public.likes.id;


--
-- Name: post_trending; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.post_trending (
    id integer NOT NULL,
    "postId" integer NOT NULL,
    "trendingId" integer NOT NULL
);


--
-- Name: post_trending_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.post_trending_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: post_trending_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.post_trending_id_seq OWNED BY public.post_trending.id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    description text,
    url text NOT NULL
);


--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    token text NOT NULL,
    "userId" integer NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: trendings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trendings (
    id integer NOT NULL,
    trending text NOT NULL
);


--
-- Name: trendings_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trendings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: trendings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trendings_id_seq OWNED BY public.trendings.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    photo text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: likes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes ALTER COLUMN id SET DEFAULT nextval('public.likes_id_seq'::regclass);


--
-- Name: post_trending id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.post_trending ALTER COLUMN id SET DEFAULT nextval('public.post_trending_id_seq'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: trendings id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trendings ALTER COLUMN id SET DEFAULT nextval('public.trendings_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.likes VALUES (1, 2, 13);
INSERT INTO public.likes VALUES (2, 2, 13);
INSERT INTO public.likes VALUES (3, 2, 13);
INSERT INTO public.likes VALUES (4, 2, 13);
INSERT INTO public.likes VALUES (5, 2, 13);
INSERT INTO public.likes VALUES (6, 2, 13);


--
-- Data for Name: post_trending; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.posts VALUES (2, 2, '', 'https://www.devmedia.com.br/ciclo-de-vida-de-um-componente-react-com-o-effect-hook/43555');
INSERT INTO public.posts VALUES (3, 2, '', 'https://www.devmedia.com.br/ciclo-de-vida-de-um-componente-react-com-o-effect-hook/43555');
INSERT INTO public.posts VALUES (4, 2, 'Aprenda a usar o lindissimo do Styled-Components :) ', 'https://www.devmedia.com.br/utilizando-styled-components-no-react/43554');
INSERT INTO public.posts VALUES (5, 2, '', 'https://www.devmedia.com.br/fundamentos-basicos-de-javascript-necessarios-para-aprender-react/43553');
INSERT INTO public.posts VALUES (6, 2, '', 'https://www.devmedia.com.br/react-spa-entendendo-o-conceito-de-uma-single-page-application/43490');
INSERT INTO public.posts VALUES (7, 2, '', 'https://www.devmedia.com.br/react-spa-entendendo-o-conceito-de-uma-single-page-application/43490');
INSERT INTO public.posts VALUES (8, 2, 'Agora vamos ver um pouco de como funciona o Context-API !!', 'https://www.devmedia.com.br/react-js-passando-dados-com-context-api/42904');
INSERT INTO public.posts VALUES (9, 2, '', 'https://www.devmedia.com.br/validando-formularios-com-react-hook-forms/42903');
INSERT INTO public.posts VALUES (10, 2, 'Aprenda a usar o lindissimo do Styled-Components :) ', 'https://www.devmedia.com.br/utilizando-styled-components-no-react/43554');
INSERT INTO public.posts VALUES (11, 1, 'Aprende ai um pouco de Postresql é muuuuuiiiiito mais legaaaal  <3', 'https://www.devmedia.com.br/artigo-sql-magazine-6-postgresql-introducao-e-conceitos/7185');
INSERT INTO public.posts VALUES (12, 1, '', 'https://www.devmedia.com.br/guia/tecnologia-postgresql/34328');
INSERT INTO public.posts VALUES (13, 1, '', 'https://www.infoq.com/br/articles/postgresql-bigdata/');
INSERT INTO public.posts VALUES (14, 1, 'Não são artigos, mas são livrinhos!!', 'https://www.casadocodigo.com.br/products/livro-postgresql');
INSERT INTO public.posts VALUES (15, 4, 'Quer aprender javascript? Faça esse curso comigo!!', 'https://www.alura.com.br/formacao-programacao?utm_term=curso%20de%20programa%C3%A7%C3%A3o&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Cursos+-+Campanha+Unificada&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=10211097486&hsa_grp=147812395669&hsa_ad=655638997881&hsa_src=g&hsa_tgt=kwd-142665915&hsa_kw=curso%20de%20programa%C3%A7%C3%A3o&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwysipBhBXEiwApJOcu9TYHYXFn-WN6KHyCiPLB59hVEaVWZ0lGVdlxPg18ykXuRA58B7Z4RoC9lgQAvD_BwE');


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (8, 'c98c854f-e329-470b-964c-b4c7ccb219dc', 2);
INSERT INTO public.sessions VALUES (10, '07c2db4f-0b03-4133-a6bf-8001007670dc', 1);
INSERT INTO public.sessions VALUES (12, '5de4f254-fee3-4d83-b1d0-3e2d7dbbca08', 4);


--
-- Data for Name: trendings; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'fulaninha', 'fulana@fulana.com', '$2b$10$o4cy46ZwpZY.fMAxT8mzjeglf2IXjlq2j3lvDYWWGsUP6m4J9Em8W', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn-aB5brTmpeDnB_5cPXLxQl-j0khXeQl25-xewz8n7M08IFk7mt3BV-TKlK77AgTMhLA&usqp=CAU');
INSERT INTO public.users VALUES (2, 'maylinha', 'mayla@auau.com', '$2b$10$hCx225/7wJ5I3l1GFxhpQ.cbHpPcOvQIhrXHksH/ehgbRMld2jb8G', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKIUdBQAswVyfHaRA2Koru1BsOH6u3MmdHUOxZLH-Tcg4lux1mUADHrINZ8W66bsvczs&usqp=CAU');
INSERT INTO public.users VALUES (3, 'joao', 'joao@joao.com', '$2b$10$Yp.UJp7ZyUdzKOLZhtt4Ou3C42rPK9itpkt559oec8ix1rh5lNDBa', 'data:image/jpeg;base64,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');
INSERT INTO public.users VALUES (4, 'Rafinha Pajé', 'rafinha@rafa.com', '$2b$10$DG727PxcQlrMn3Ot42B8DuHfnAgMwIwTKAMq9CKHxjpIktKULGds2', 'data:image/jpeg;base64,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');


--
-- Name: likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.likes_id_seq', 11, true);


--
-- Name: post_trending_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.post_trending_id_seq', 1, false);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.posts_id_seq', 15, true);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 12, true);


--
-- Name: trendings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trendings_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: likes likes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (id);


--
-- Name: post_trending post_trending_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.post_trending
    ADD CONSTRAINT post_trending_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: trendings trendings_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trendings
    ADD CONSTRAINT trendings_pkey PRIMARY KEY (id);


--
-- Name: trendings trendings_trending_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trendings
    ADD CONSTRAINT trendings_trending_key UNIQUE (trending);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: likes likes_postId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT "likes_postId_fkey" FOREIGN KEY ("postId") REFERENCES public.posts(id);


--
-- Name: likes likes_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT "likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: post_trending post_trending_postId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.post_trending
    ADD CONSTRAINT "post_trending_postId_fkey" FOREIGN KEY ("postId") REFERENCES public.posts(id);


--
-- Name: post_trending post_trending_trendingId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.post_trending
    ADD CONSTRAINT "post_trending_trendingId_fkey" FOREIGN KEY ("trendingId") REFERENCES public.trendings(id);


--
-- Name: posts posts_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT "posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

