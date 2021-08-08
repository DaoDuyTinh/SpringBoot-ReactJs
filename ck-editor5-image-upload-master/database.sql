PGDMP         
                y            dataweb    12.3    12.3 o    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    29753    dataweb    DATABASE     �   CREATE DATABASE dataweb WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Vietnamese_Vietnam.1252' LC_CTYPE = 'Vietnamese_Vietnam.1252';
    DROP DATABASE dataweb;
                postgres    false            �            1259    39319    banner    TABLE     �   CREATE TABLE public.banner (
    id bigint NOT NULL,
    id_news bigint,
    image character varying(255),
    status boolean,
    title character varying(255),
    type boolean
);
    DROP TABLE public.banner;
       public         heap    postgres    false            �            1259    39317    banner_id_seq    SEQUENCE     v   CREATE SEQUENCE public.banner_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.banner_id_seq;
       public          postgres    false    203            �           0    0    banner_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.banner_id_seq OWNED BY public.banner.id;
          public          postgres    false    202            �            1259    39330    category    TABLE     |   CREATE TABLE public.category (
    id bigint NOT NULL,
    image character varying(255),
    name character varying(255)
);
    DROP TABLE public.category;
       public         heap    postgres    false            �            1259    39328    category_id_seq    SEQUENCE     x   CREATE SEQUENCE public.category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.category_id_seq;
       public          postgres    false    205            �           0    0    category_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;
          public          postgres    false    204            �            1259    64551    color    TABLE     y   CREATE TABLE public.color (
    id integer NOT NULL,
    code character varying(255),
    name character varying(255)
);
    DROP TABLE public.color;
       public         heap    postgres    false            �            1259    64549    color_id_seq    SEQUENCE     �   CREATE SEQUENCE public.color_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.color_id_seq;
       public          postgres    false    229            �           0    0    color_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.color_id_seq OWNED BY public.color.id;
          public          postgres    false    228            �            1259    39352    news    TABLE     �   CREATE TABLE public.news (
    id bigint NOT NULL,
    description text,
    image character varying(255),
    status boolean,
    title character varying(255),
    short_description character varying(255),
    hot boolean,
    reviews integer
);
    DROP TABLE public.news;
       public         heap    postgres    false            �            1259    39350    news_id_seq    SEQUENCE     t   CREATE SEQUENCE public.news_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.news_id_seq;
       public          postgres    false    207            �           0    0    news_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.news_id_seq OWNED BY public.news.id;
          public          postgres    false    206            �            1259    48034    order_details    TABLE     �   CREATE TABLE public.order_details (
    id_orderdetail bigint NOT NULL,
    category character varying(255),
    id bigint NOT NULL,
    image character varying(255),
    price integer NOT NULL,
    quantity integer NOT NULL,
    order_id bigint
);
 !   DROP TABLE public.order_details;
       public         heap    postgres    false            �            1259    48032     order_details_id_orderdetail_seq    SEQUENCE     �   CREATE SEQUENCE public.order_details_id_orderdetail_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public.order_details_id_orderdetail_seq;
       public          postgres    false    221            �           0    0     order_details_id_orderdetail_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public.order_details_id_orderdetail_seq OWNED BY public.order_details.id_orderdetail;
          public          postgres    false    220            �            1259    48045    orders    TABLE     v   CREATE TABLE public.orders (
    id bigint NOT NULL,
    user_id bigint,
    orderdate timestamp without time zone
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    48043    orders_id_seq    SEQUENCE     v   CREATE SEQUENCE public.orders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.orders_id_seq;
       public          postgres    false    223            �           0    0    orders_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;
          public          postgres    false    222            �            1259    39363    product    TABLE     [  CREATE TABLE public.product (
    id bigint NOT NULL,
    color character varying(255),
    horse_power real,
    mass_fraction real,
    name character varying(255),
    price integer,
    product_number bigint,
    zize character varying(255),
    weight real,
    status boolean,
    category_id bigint,
    image character varying(255),
    price_net integer,
    sale boolean,
    type boolean,
    percent integer,
    petrol integer,
    front_brake character varying(255),
    rear_brake character varying(255),
    soon boolean,
    description text,
    install integer,
    access boolean
);
    DROP TABLE public.product;
       public         heap    postgres    false            �            1259    39380    productimages    TABLE     v   CREATE TABLE public.productimages (
    id bigint NOT NULL,
    name character varying(255),
    product_id bigint
);
 !   DROP TABLE public.productimages;
       public         heap    postgres    false            �            1259    39378    productimages_id_seq    SEQUENCE     }   CREATE SEQUENCE public.productimages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.productimages_id_seq;
       public          postgres    false    211            �           0    0    productimages_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.productimages_id_seq OWNED BY public.productimages.id;
          public          postgres    false    210            �            1259    39788    productnews    TABLE     a   CREATE TABLE public.productnews (
    product_id bigint NOT NULL,
    news_id bigint NOT NULL
);
    DROP TABLE public.productnews;
       public         heap    postgres    false            �            1259    39416    productrelated    TABLE     �   CREATE TABLE public.productrelated (
    id bigint NOT NULL,
    product_id bigint,
    product_re bigint,
    name character varying(255)
);
 "   DROP TABLE public.productrelated;
       public         heap    postgres    false            �            1259    39414    productrelated_id_seq    SEQUENCE     �   ALTER TABLE public.productrelated ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.productrelated_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    213            �            1259    39361    products_id_seq    SEQUENCE     x   CREATE SEQUENCE public.products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    209            �           0    0    products_id_seq    SEQUENCE OWNED BY     B   ALTER SEQUENCE public.products_id_seq OWNED BY public.product.id;
          public          postgres    false    208            �            1259    39690    roles    TABLE     W   CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(20)
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    39688    roles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.roles_id_seq;
       public          postgres    false    215            �           0    0    roles_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;
          public          postgres    false    214            �            1259    64458    salient    TABLE     �   CREATE TABLE public.salient (
    id bigint NOT NULL,
    description text,
    images character varying(255),
    product_id bigint,
    title character varying(255)
);
    DROP TABLE public.salient;
       public         heap    postgres    false            �            1259    64456    salient_id_seq    SEQUENCE     w   CREATE SEQUENCE public.salient_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.salient_id_seq;
       public          postgres    false    227            �           0    0    salient_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.salient_id_seq OWNED BY public.salient.id;
          public          postgres    false    226            �            1259    48106 	   sendemail    TABLE     �   CREATE TABLE public.sendemail (
    id bigint NOT NULL,
    description character varying(255),
    email character varying(255),
    title character varying(255)
);
    DROP TABLE public.sendemail;
       public         heap    postgres    false            �            1259    48104    sendemail_id_seq    SEQUENCE     y   CREATE SEQUENCE public.sendemail_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.sendemail_id_seq;
       public          postgres    false    225            �           0    0    sendemail_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.sendemail_id_seq OWNED BY public.sendemail.id;
          public          postgres    false    224            �            1259    39696 
   user_roles    TABLE     ^   CREATE TABLE public.user_roles (
    user_id bigint NOT NULL,
    role_id integer NOT NULL
);
    DROP TABLE public.user_roles;
       public         heap    postgres    false            �            1259    39703    users    TABLE     $  CREATE TABLE public.users (
    id bigint NOT NULL,
    email character varying(255),
    password character varying(255),
    username character varying(255),
    address character varying(255),
    firstname character varying(255),
    lastname character varying(255),
    phone integer
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    39701    users_id_seq    SEQUENCE     u   CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    218            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    217            �
           2604    39322 	   banner id    DEFAULT     f   ALTER TABLE ONLY public.banner ALTER COLUMN id SET DEFAULT nextval('public.banner_id_seq'::regclass);
 8   ALTER TABLE public.banner ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202    203            �
           2604    39333    category id    DEFAULT     j   ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);
 :   ALTER TABLE public.category ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    204    205    205            �
           2604    64554    color id    DEFAULT     d   ALTER TABLE ONLY public.color ALTER COLUMN id SET DEFAULT nextval('public.color_id_seq'::regclass);
 7   ALTER TABLE public.color ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    229    229            �
           2604    39355    news id    DEFAULT     b   ALTER TABLE ONLY public.news ALTER COLUMN id SET DEFAULT nextval('public.news_id_seq'::regclass);
 6   ALTER TABLE public.news ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    206    207    207            �
           2604    48037    order_details id_orderdetail    DEFAULT     �   ALTER TABLE ONLY public.order_details ALTER COLUMN id_orderdetail SET DEFAULT nextval('public.order_details_id_orderdetail_seq'::regclass);
 K   ALTER TABLE public.order_details ALTER COLUMN id_orderdetail DROP DEFAULT;
       public          postgres    false    220    221    221            �
           2604    48048 	   orders id    DEFAULT     f   ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);
 8   ALTER TABLE public.orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222    223            �
           2604    39366 
   product id    DEFAULT     i   ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 9   ALTER TABLE public.product ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    208    209    209            �
           2604    39383    productimages id    DEFAULT     t   ALTER TABLE ONLY public.productimages ALTER COLUMN id SET DEFAULT nextval('public.productimages_id_seq'::regclass);
 ?   ALTER TABLE public.productimages ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    211    211            �
           2604    39693    roles id    DEFAULT     d   ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);
 7   ALTER TABLE public.roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            �
           2604    64461 
   salient id    DEFAULT     h   ALTER TABLE ONLY public.salient ALTER COLUMN id SET DEFAULT nextval('public.salient_id_seq'::regclass);
 9   ALTER TABLE public.salient ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    227    227            �
           2604    48109    sendemail id    DEFAULT     l   ALTER TABLE ONLY public.sendemail ALTER COLUMN id SET DEFAULT nextval('public.sendemail_id_seq'::regclass);
 ;   ALTER TABLE public.sendemail ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    224    225            �
           2604    39706    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            �          0    39319    banner 
   TABLE DATA           I   COPY public.banner (id, id_news, image, status, title, type) FROM stdin;
    public          postgres    false    203   �}       �          0    39330    category 
   TABLE DATA           3   COPY public.category (id, image, name) FROM stdin;
    public          postgres    false    205   I~       �          0    64551    color 
   TABLE DATA           /   COPY public.color (id, code, name) FROM stdin;
    public          postgres    false    229   �~       �          0    39352    news 
   TABLE DATA           f   COPY public.news (id, description, image, status, title, short_description, hot, reviews) FROM stdin;
    public          postgres    false    207   �~       �          0    48034    order_details 
   TABLE DATA           g   COPY public.order_details (id_orderdetail, category, id, image, price, quantity, order_id) FROM stdin;
    public          postgres    false    221   �       �          0    48045    orders 
   TABLE DATA           8   COPY public.orders (id, user_id, orderdate) FROM stdin;
    public          postgres    false    223   �       �          0    39363    product 
   TABLE DATA           �   COPY public.product (id, color, horse_power, mass_fraction, name, price, product_number, zize, weight, status, category_id, image, price_net, sale, type, percent, petrol, front_brake, rear_brake, soon, description, install, access) FROM stdin;
    public          postgres    false    209   ��       �          0    39380    productimages 
   TABLE DATA           =   COPY public.productimages (id, name, product_id) FROM stdin;
    public          postgres    false    211   ��       �          0    39788    productnews 
   TABLE DATA           :   COPY public.productnews (product_id, news_id) FROM stdin;
    public          postgres    false    219   �       �          0    39416    productrelated 
   TABLE DATA           J   COPY public.productrelated (id, product_id, product_re, name) FROM stdin;
    public          postgres    false    213   ��       �          0    39690    roles 
   TABLE DATA           )   COPY public.roles (id, name) FROM stdin;
    public          postgres    false    215   <�       �          0    64458    salient 
   TABLE DATA           M   COPY public.salient (id, description, images, product_id, title) FROM stdin;
    public          postgres    false    227   z�       �          0    48106 	   sendemail 
   TABLE DATA           B   COPY public.sendemail (id, description, email, title) FROM stdin;
    public          postgres    false    225   �      �          0    39696 
   user_roles 
   TABLE DATA           6   COPY public.user_roles (user_id, role_id) FROM stdin;
    public          postgres    false    216   �      �          0    39703    users 
   TABLE DATA           c   COPY public.users (id, email, password, username, address, firstname, lastname, phone) FROM stdin;
    public          postgres    false    218   �      �           0    0    banner_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.banner_id_seq', 11, true);
          public          postgres    false    202            �           0    0    category_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.category_id_seq', 7, true);
          public          postgres    false    204            �           0    0    color_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.color_id_seq', 1, false);
          public          postgres    false    228            �           0    0    news_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.news_id_seq', 32, true);
          public          postgres    false    206            �           0    0     order_details_id_orderdetail_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public.order_details_id_orderdetail_seq', 22, true);
          public          postgres    false    220            �           0    0    orders_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.orders_id_seq', 13, true);
          public          postgres    false    222            �           0    0    productimages_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.productimages_id_seq', 295, true);
          public          postgres    false    210            �           0    0    productrelated_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.productrelated_id_seq', 663, true);
          public          postgres    false    212            �           0    0    products_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.products_id_seq', 73, true);
          public          postgres    false    208            �           0    0    roles_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.roles_id_seq', 1, false);
          public          postgres    false    214            �           0    0    salient_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.salient_id_seq', 34, true);
          public          postgres    false    226            �           0    0    sendemail_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.sendemail_id_seq', 21, true);
          public          postgres    false    224            �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 13, true);
          public          postgres    false    217            �
           2606    39327    banner banner_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.banner
    ADD CONSTRAINT banner_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.banner DROP CONSTRAINT banner_pkey;
       public            postgres    false    203            �
           2606    39338    category category_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.category DROP CONSTRAINT category_pkey;
       public            postgres    false    205                       2606    64559    color color_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.color
    ADD CONSTRAINT color_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.color DROP CONSTRAINT color_pkey;
       public            postgres    false    229            �
           2606    39360    news news_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.news DROP CONSTRAINT news_pkey;
       public            postgres    false    207            �
           2606    48042     order_details order_details_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_pkey PRIMARY KEY (id_orderdetail);
 J   ALTER TABLE ONLY public.order_details DROP CONSTRAINT order_details_pkey;
       public            postgres    false    221                        2606    48050    orders orders_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    223            �
           2606    39392     productimages productimages_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.productimages
    ADD CONSTRAINT productimages_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.productimages DROP CONSTRAINT productimages_pkey;
       public            postgres    false    211            �
           2606    39792    productnews productnews_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public.productnews
    ADD CONSTRAINT productnews_pkey PRIMARY KEY (product_id, news_id);
 F   ALTER TABLE ONLY public.productnews DROP CONSTRAINT productnews_pkey;
       public            postgres    false    219    219            �
           2606    39423 "   productrelated productrelated_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.productrelated
    ADD CONSTRAINT productrelated_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.productrelated DROP CONSTRAINT productrelated_pkey;
       public            postgres    false    213            �
           2606    39371    product products_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.product
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 ?   ALTER TABLE ONLY public.product DROP CONSTRAINT products_pkey;
       public            postgres    false    209            �
           2606    39695    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    215                       2606    64466    salient salient_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.salient
    ADD CONSTRAINT salient_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.salient DROP CONSTRAINT salient_pkey;
       public            postgres    false    227                       2606    48114    sendemail sendemail_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.sendemail
    ADD CONSTRAINT sendemail_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.sendemail DROP CONSTRAINT sendemail_pkey;
       public            postgres    false    225            �
           2606    39715 !   users uk6dotkott2kjsp8vw4d0m25fb7 
   CONSTRAINT     ]   ALTER TABLE ONLY public.users
    ADD CONSTRAINT uk6dotkott2kjsp8vw4d0m25fb7 UNIQUE (email);
 K   ALTER TABLE ONLY public.users DROP CONSTRAINT uk6dotkott2kjsp8vw4d0m25fb7;
       public            postgres    false    218            �
           2606    39713 !   users ukr43af9ap4edm43mmtq01oddj6 
   CONSTRAINT     `   ALTER TABLE ONLY public.users
    ADD CONSTRAINT ukr43af9ap4edm43mmtq01oddj6 UNIQUE (username);
 K   ALTER TABLE ONLY public.users DROP CONSTRAINT ukr43af9ap4edm43mmtq01oddj6;
       public            postgres    false    218            �
           2606    39700    user_roles user_roles_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (user_id, role_id);
 D   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT user_roles_pkey;
       public            postgres    false    216    216            �
           2606    39711    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    218                       2606    48071 #   product fk1mtsbur82frn64de7balymq9s    FK CONSTRAINT     �   ALTER TABLE ONLY public.product
    ADD CONSTRAINT fk1mtsbur82frn64de7balymq9s FOREIGN KEY (category_id) REFERENCES public.category(id);
 M   ALTER TABLE ONLY public.product DROP CONSTRAINT fk1mtsbur82frn64de7balymq9s;
       public          postgres    false    209    205    2792                       2606    48056 "   orders fk32ql8ubntj5uh44ph9659tiih    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT fk32ql8ubntj5uh44ph9659tiih FOREIGN KEY (user_id) REFERENCES public.users(id);
 L   ALTER TABLE ONLY public.orders DROP CONSTRAINT fk32ql8ubntj5uh44ph9659tiih;
       public          postgres    false    2810    223    218            	           2606    48066 *   productrelated fk5w7t4jjc7tpvis4gnughgixin    FK CONSTRAINT     �   ALTER TABLE ONLY public.productrelated
    ADD CONSTRAINT fk5w7t4jjc7tpvis4gnughgixin FOREIGN KEY (product_re) REFERENCES public.product(id);
 T   ALTER TABLE ONLY public.productrelated DROP CONSTRAINT fk5w7t4jjc7tpvis4gnughgixin;
       public          postgres    false    209    2796    213                       2606    64467 #   salient fkas6ld7bre8o3gpqk5og9ibclc    FK CONSTRAINT     �   ALTER TABLE ONLY public.salient
    ADD CONSTRAINT fkas6ld7bre8o3gpqk5og9ibclc FOREIGN KEY (product_id) REFERENCES public.product(id);
 M   ALTER TABLE ONLY public.salient DROP CONSTRAINT fkas6ld7bre8o3gpqk5og9ibclc;
       public          postgres    false    209    227    2796            
           2606    39716 &   user_roles fkh8ciramu9cc9q3qcqiv4ue8a6    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT fkh8ciramu9cc9q3qcqiv4ue8a6 FOREIGN KEY (role_id) REFERENCES public.roles(id);
 P   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT fkh8ciramu9cc9q3qcqiv4ue8a6;
       public          postgres    false    2802    216    215                       2606    39721 &   user_roles fkhfh9dx7w3ubf1co1vdev94g3f    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT fkhfh9dx7w3ubf1co1vdev94g3f FOREIGN KEY (user_id) REFERENCES public.users(id);
 P   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT fkhfh9dx7w3ubf1co1vdev94g3f;
       public          postgres    false    216    218    2810                       2606    48051 )   order_details fkjyu2qbqt8gnvno9oe9j2s2ldk    FK CONSTRAINT     �   ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT fkjyu2qbqt8gnvno9oe9j2s2ldk FOREIGN KEY (order_id) REFERENCES public.orders(id);
 S   ALTER TABLE ONLY public.order_details DROP CONSTRAINT fkjyu2qbqt8gnvno9oe9j2s2ldk;
       public          postgres    false    2816    223    221                       2606    48061 )   productimages fkkxualpj9ljj4n6oy438388rx1    FK CONSTRAINT     �   ALTER TABLE ONLY public.productimages
    ADD CONSTRAINT fkkxualpj9ljj4n6oy438388rx1 FOREIGN KEY (product_id) REFERENCES public.product(id);
 S   ALTER TABLE ONLY public.productimages DROP CONSTRAINT fkkxualpj9ljj4n6oy438388rx1;
       public          postgres    false    2796    211    209                       2606    39798 '   productnews fkp8bgtn7k65wivum34lcvkhj4c    FK CONSTRAINT     �   ALTER TABLE ONLY public.productnews
    ADD CONSTRAINT fkp8bgtn7k65wivum34lcvkhj4c FOREIGN KEY (product_id) REFERENCES public.product(id);
 Q   ALTER TABLE ONLY public.productnews DROP CONSTRAINT fkp8bgtn7k65wivum34lcvkhj4c;
       public          postgres    false    2796    209    219                       2606    39793 '   productnews fkspm9ykbwys9p6io74rsunt4q9    FK CONSTRAINT     �   ALTER TABLE ONLY public.productnews
    ADD CONSTRAINT fkspm9ykbwys9p6io74rsunt4q9 FOREIGN KEY (news_id) REFERENCES public.news(id);
 Q   ALTER TABLE ONLY public.productnews DROP CONSTRAINT fkspm9ykbwys9p6io74rsunt4q9;
       public          postgres    false    2794    207    219            �   �   x�3�4���O���*H�L�L)N)N�L�2�4�LJ��K-2˔p�<ܵ(����Y�e�i�6�+�K��*821�������f@q1D�)�l�T@F��Uy
Iw-�S82����
I�w�� �b7���	�.�`v�B��]�t����%
e��@��:c���� qnQ(      �   7   x�3����KI�+�K�� ���9�K�J�3�B�`&�!gebnbDY$������ �p�      �      x������ � �      �      x���ms[ו&�Y�;�5=d� $�"�lǷ(R��Z��r����4�8���dǕ���v�*�T���Ĵ&qdG���\������Z���%w����>� $%wO�L�+�D������Yk͟{���Z��藉I��$�G�����IO�x|t7�1O�80is�EbZ�G_Ŧ�8>z?1��?�/��&��N\6��~���6�_ï�sk��G����J�.�i��9~�m72;����2{�OM���>lF�?��+L:|Pmxֽ.|>�� �4L��]x���
�kwM���?>�=��=�l����MS�o�ܑ���*������ӂ���yi��|����I�ϸW!Y�G÷pK�Mqum33=S��m]�n扌�����?�<1�B�FӴ�y)6�^��O^l�i��45u��F\jw�N�\���{��~}�Չ�%��~��)��S/�kk�\>��VZ�KS��D�m k"�q|�.���Ǐ�u�/Mu_~�1��K���Iv^^y��f_��g�4�쾼�۟܉�����f�x[���v��]�	�*ނ�}���+���+����� ��>~��Qj�E��tJ�<Y���F\��"���ӗ�m|ϛpb�9:�%Q����ؼN۳OWx�����2,�V��?��iZ�%�~'�����g�z:�Ӟx�Vu�1��,��J����~���_�`�,�cٽ2�[��݃��Ĕ�G$���.<�Uz�{�<+m��X�RTt�}b�:m�|���^��}������}\<�$��	�����|�%�VSZ��x�����ig����+���B ��U�����zD~}��Â���`�1����jxYP~�!������JW��l�p����� �6Ah%e��^�+x|���0iv>~��<¥<L�o-<�F���Z� ��GN�"�'���R� R#����}�� N�y�j��	O�h��KO�XA���ww�O�_3�X�ZN����/����E{����M�LJ�:�4:i)���%�Ē����D f.C����d�ܮ��㣿�2[�Gn�����eV֮�[�������������6�|rem��ƚY��q٬�G����߾��}���E����%��vsg�~h���O^l��:\�f{��{U�*�թƭF��.�NOOO%��f��d>9�����Ƌ5����ɸnc���N���@����}mP���V�#o��&�.{�	��E�܁�2"��b����\l�f�[�ۃ�����M��	D��-R5d-4H��Л#V�1� <.a�(ƅVmzP����0p� 7Ƭ:��~��#�)R6+�����x�%��?N��
{�͘Wt���ƪ*XU**Ǌ�6ߡ&SD��J��",�A:U���m���F�cVH6?��S�&><5`7���3Y6O>D���y�n�(�Dn�[�2���"w� <�{�;�h��Z�,Q�x��W�p���-~e�i�|�@p���7��M:㬌�
�X�d��o��x�Y�U�Z��ɚ?��m�qěHnt�j�ܜm�v �?R�J����?�Ӹ��������=�
ɚ��DZ(��\�C�,%�+�_�U�F}hfL����|η���W��ѽGb��o�=³g[r@�$�M�]���Y�1�q�j�7����
��~����V��p��q�]WV��>d�MJ�hL�֐�o���
�d����)xawH���vB�Kv������c�F�*Bd��x$��ۙ�@���E�aOB�hMs
P�Ql�_5�f;�w슗����V�Wڎ��߿}�zC����A*M�ˤgun}�=\��6R�� �s���x�a�l����!�K�=@ܯ��]1�i�����tP�:��A}P�Qm�2>Iq�4�N��ņ����wB:/���ڀ/'P�4�f,�Q�ӡ���HHď�� o�}�����/4Ƿ�ztq�8R�"�X4~��%�6��<��E��R~fJ���Ӷ�6��s�m��hb�*]#������=Q�(y?n*��]M{[��]��z�y�.=�G��8y�Go��﷭1��+��lw�t�k*/���=�dx������NIH����&�yJ�����}gE1*@Q��ߦ�뀠!�
��}�_� =�X&���~���=H$$]�%��r?�
��װ��e�~�|:��=�'�͠���O9�}�D��Q,lC~�{3�~2�?@� �f�	
���ҁ���G'���d0��
��1}෤k~�$�����yQ�lײ�4!fK;�Q��d�˺d" %���s%�U��C� ol���g~AB�L��,n���*V'YK�_�jb+�۝f�'��J���������2z6��w^7��\��oy����������Ѭ?��:9o�w���ߍ�h�߽YE��������/�گp�@S{���Ձ@�bC������"Ր�e�{(L32���}e�XC����1��I8�v �f�d��A6��
[���Q+��m�p��i�ч�L+��̛fR�|��Kk�ŀ�$�5|\%ȑ��P�4�̗���]��
�4���jT�u�6CI�8�(U~�x�mVNڋ�i�se����
���#�$�D����QĂ�I.��w���_ @�*������\���)|�ڀ�5�CQ��C0�[���m����a�~ue��!��]o�'Vlh)U�MZ�FV�󆶇�Z�%hM38���i�}b�W�V/�"�-�ԙ��`D1����\�'�^����phC���wH'�f�v���!R(.���b́��#{yK�o0�)<�Rd����ߧ�4�)~�]]1�X��?�c��B�{:��3��M��}
�#z\͇i����BN����5.7E���͚�5^{[Le �q�(P�v�$��LLv���F���ԅ�ˠ������vA45Hy�
���rqd��D�)*�NFɺ.s Jt�������gӹYn���9����U��FY����GrB�cr("����{������	��������\��VO��<�i�ٳ>���]ˮ��4�6���YOK��z��f=)���R�x��W��pQ8k%�+��?S.v{�T�ӕ<�6��hC�!��4��B�c�l@�=2���30�H�"ax��0DW6�G�5�.s�Wo7�"�T��0|`D;]Gf������m˶�h��E���%�@�y�O�m˙!�݅�w���B����P��hF�KI�d�7GozC�3�t�ݍ��V����D�2�l��S�Z�2�^��ӱ���'�Eݵ,�
}Ft"���B�a�
w�O�|qSE%>33/1NH����찪L�IH��ֽ��o�NC��6h����Ĩw�Y��*�ʑ�~��h���m:�*[Ǐ?��'���Q���_.�L�?I%q�g��(�0�5��7�#�).�1|�Z�ۺq���'?_'Ȁw5�C��	�$Rvȱ��_��H�Aୟ0�Oi��@�����J�л��Z��"z�W�]���)Ic@����X ;��i�x�ZC�}닼���y`"��.�F��)c�_*�~i��B�G���lwj�����o=#j
C�����@���˸�m��[�
�����������w�h��\������O^�?a�{J�K {4u	Uu�q��k���@�`;NJ;�N3��^��W�����H��>ϹF����(�����ˠ|�w���Y7 �nw��]�d`9��mn�<�C�mqS���}�OMQ�ֹ�tn��]v���g����j2\�lyq�\b���ؘ��\8�2}�ub���Yae�
�]�91rƫHٕ��;����n�������Z��ќ	K�;QgO���lݶ��fZ/�j�6�G�L\�o��2{��q���,�4W�3��g\O?���Fʪ�U�o&6�	�2gFr用�)����x����U4h��-y���QM4��j!W������ϡGIm���جj�z�E6m�_c��	�Q>�%�V	��b��rB��RF���v��L��(���`6��KR����Ì�4B    $�52�fmx� ��6D[u�V}��t:7��5��N�A2�8#�av.�G�-M��w���3��Iq޶�x�g�MW���b"�3��-w&h�:��9�'��<.�kG���.�eұ�Er�Lvi�l�թ��%H�i���dd���>�V��� �����w��[����"~�R�'u��\<p)L��Rl+�&Ex��d��q��F�4c��d�
^��MY�����f(5���?��;�Ѡ:�ݪ J�Q:#���E��`A��M͓L�d_26:e����W�r�hȹ��������r��RE���PL����Z�?���a��j@�$x�Q"1�p;(T>oK��jyC�4�OWЏ1���,ے�U�8��-����[��6y��P��r7�� �A"Ve�\~�.�����R�Q��}"��~�>��z-��3C2�&���aθ	/os���m�F�y}]D�2������$1��A��(
{�x��HB�(ވ�g���y~JV�tb?�%W'O��'�b�HAaGN���M�q���xp%	��_!�$��d�3�nS
��ǔ�I8�:��+~H�ENUsPZn�sn�l^%E�� A�(��������	�����#\'	�V�+��a�A��?�3#�l�b��n� QY��X�'*�x��7��m�N����$"�YS�R� c�YU9�f�Htt�^7���i|�p�$u�k^
ꘐ��Ё��@���?�xu�s:���L����;�
�"c;��_j5_��H���'��X���P#�`4N�KT߷D�� �X��mQ�)���&�I�(m�����`x3H<�z
F)��p�ʋOE�j@9�RkI����	]��]E��+�A�h,�ҢHwH"�����é
�8z�A�a�W����U�	�_JW�����#N:��O����e����b�'*Q ��̤������Fy���	��6Y�CÓ5UW��crҙ;��c���P���H�3��F<�����FĭI� ^�̈́�|���f&=\�,��Qޭ�r�fh���s��F���(��g���kը�<��o�C��{�Q���/{B!��F���y;2�P����2X�o̕Zv�R���-*�*Ή�DX(|F0����a�\��E]9C!�P��At{�C�fp���V�_��Aቨ�� ��+cMʝ�k�OE6Q���&�;���  ���N�2S��N���Z�T�y��Ǚ*v�:�(.�&��[%N�-����`��+�cC�F"����������˛o��V9��ԭX
�������D��wg�^#p����fߦj3E�E��bm�����N�Ǳ�J�lq���+�X�z%N��<WV� ���z��\s�V&���Kϡ�=�r����s�Y~ޚe8��*���np�띙��d��;2+��Z'�źbpb��Ƥ�-�B}tf i�'�$1�6wx`�`TfzH�¿���q醹U~#���Yy.?��� y\e~ڙ�_����}纠�/����-��Bڂ��|W6'�%��%��"�����;�A��e���b�� 0��m��3�{��K�P#�h3��W�+�d�:�>�~�h�M��U>�H��
��ZE���m�z�r����l�ɑr�����}�|'&i/�!�Z"s. j�6_Q1c���X 綇_���ǰ �Q>�@�� -��@�!p�n����{\sC�i(P"�;�CU/>��e|$�U�7�3O����=9���iض-l�R?W����ƚ]�@�pw�yJ?�G�~�7���CB�ܳ�@����
ZƠi�6v��0�ޓ݊��(����K!Y�k(���0.���Ң��pТ݃@RI�REdfI����]�;z�*1C�Ňx�$��7Fn��-��Ϋ���P/�?�E�3 p�1�Dۉ4	�x�%���F��툰� �(0=�����!S��HZ'��fG����HY�Fڷl���l��Yfi���F�	f|��N�w��OY���
�oR�"P���x`��?���]���3���lUqV�ݼ�Z�,
v�*cI�+)�=�1+'˅pv�6k@^�0�ұ6������4_P��T�-*f(��]� %֑X\�>���o�C�NO����^�Ƞ�ΨfA����a���H��� � 멨�V>D �����%b�)�A���1����y��(���t�l���\�F&
�W(��_��O>�t㲹�|�l��l�C��T1�a�aP+8�%��"��� �m(o����lʊz������J]�<�+��sn�UY&�����UM
�?%T����H�FKJ	4Pl'%V*c��Ej��p-�c`�ѡ�UT����*�z[� R\��6,��.eDv������/u��:��\P�`<�=U\CiJz#�`��}��`�����*��.���X�$�\���Y"�8��u��v��+��+#��� %=4�7�����{j]rf�a��B�X!��U:3H7[���\ �lB�s�8��Ng�pr����|c����s�	���n�r�r�~#>���ؠ�����R�f�Q�u&A����X"~�|E����Z�>��K�K$�W������1�	�#%T����8�G�&GG��
�ihu�A�QO��p֫�T6+�"�GY����,���C�/�毛IR�	�JQ=��v+rTE)_,�HD"��ʊ%2酰2AșK�f��$��)�b�5�^�E(���{RG�Uw���"�0yK-@�����
d�6F�$DӺ@yE-��5����r�;�oR^�U?�� ��+�@�p��z�+�W��W���2,����&*K:��]6�3V��`�p���V�I{�S��T{��4�ز��z�R���>�[�D�f��%��Hn����.r,�����%�ߡkʆ��Le��і/�G����}o�n�j�/,ܔ��DFf��<�u�R��;7)�B�t#���<-~�7��\�����l���Bv=�Q�m�v�绮�<^҈)�ӑ*f�w�Y�s�Q�d0P>U%l� �">t�S��*%P�Qv|��N���]��W'�wO�śگ/ѷ��T�h�DKgι���oǔ�F%x�]�x��D��m�(�����9�����>!mɘ��{ï�g�C�x�6�5B��n��~a�\�����q�3B��n���gk�I:���i#}p�Mz������~3.�}<���;�u�ByN��z��k�Ke��pa����J�>�:rR]��k7|�l�qƂ���%�lT�n�q�?�Eyre	�|�F2��[�c���`Ρ��;���b�f�n&��6'��/w:;����1�I��i�&%��){�ߤ?�f������Fe�y��3�ߛd��@8 �=�cGL�"�~�u��<�ɧƌ�Eo���A�Kz��%��2C�\o�� k�lX��N1J�����+�0�����n�*j߲��h�:�j�%����3��~d6(�!�ב<l��?*z�Z'm5��B�-��ŹY�P�6��	l
p�U����&X\�ۆ������3f��#�2�~��� ���Ɗ�_�����i��1i��)Q�V�T�$i=I��V�
����S���ʦM�J����~=}�g�����"s�o�f���gf��	��gxBezq� }6��Ou Lezz��V��6~�"�.,��P5����g��&�֍��m��W�^{�������>��m���}Z�l��=���=j�k�-��W������J`w��Q�0���Q�%�F���h�-��V�w���f�*3x<�gZ��[95�+�I��BF,���uDh�U7YNL
��T�+a���	��6��T��xy��֤��TQ(�e�m�)Gd�B<�=�y֞;��܋��$��3��L��kA|s�w�QU�.Lqs�3�����Ű_0?'��隓���M��bͩd��3-�<����>�"���!b�N!�����{O(s��)��M�F�-��s�B�'��	��������-�3UH#u�Ck3��j�o��>�$��:�����s��1`�I�+Ewk@P���A0"~L�wFI.�    '���B�F���l� �9��&�a����Z��A�68���칗�YK�S��ɞv)��ۍ�l��;ϛ�ɕՁeO=�Z�r{����g37(��I��(��|��r���J�t��\�2����[q�I8󑭍�5�܏������/��LInגpL=�d$��y�c�Ɛ��+	�+�C�� j�"��n�����7�dߗ�M9V�-����C
���2�Phi��Ȗ�5�Q%T�7 ��Ι\23���y�
 �7���/���4"ǈ<� <��|9�@��rWݵ�Kl�����_�̰T0�ҫ�k'ꨒE(�� ஍�T��d�ronf�a�4[�`�R6�Ҍ�����@9�-����� 7��ݢ��S��G�ñ�z6�W"y��(��'(�(k-��S[�1Ml�, ۈ���it�n���2�h{s��J���4�W���փ�;�pj�oW᜴P���n�΁-���B��S�-��o�-h�A��a/�NQQ�Sy����fT�vvKGP1T�wʗ��b��_����!
�}�z�͐d�!����>�K�긘���P��}:{��� m�}v���z�5���`�ek>%��dMmy��l��D$�������FIbe^��0P�yH[��L�)w!aN~	e]U������2"9�6q�E.�R��|44/7l}M��(��6.��t �F�kB���l�4����l��@�fc.𯹭�яbq<��Y."�
�'���/��=��
7ha��/S�C�MF���̵����ii�Q�L�EV�:�0�����g��T�e�$;�'�|���Na
kJ�Z�\�a���܏�Mj)R�S���.%�X�����m�>z�ENK�1�|�>������o~G	*�Jѧ��)�h1������%�0kT'E�d�y&�G� b��D2Ô�Sq1����jd������<�o�v/>Ѫ��0Ū ���}��/mA$ �A�_Ŭ�v��v���enϡ
륻��V��T���c-�"�DI�]d�ƕro��%j��d�G�̷�z�2��"�3��=%�B݅��/�3H�3g"�P��3�:MڠE��0���$��!�p�|&}�;�a�zz�	�q��ksbg�׫�ré#_��?�$D#�6*�e�#����Q��,/R�����'n�Q>p��{*=E��
��U�z��(F�T�������\��U)�?�\ �E.ޑO��*�T�=��(�K�_aV���8�q��vv	�k��z��$)����3F�fr!5�"s��W��y��s�"���2l�d�T�\������ʃCcSWF����c�l��0G�`q�X�F�B7qA9JïP�S��O�L���A�.�e{�d %�3�-�fX�?fI::+���=;<V1vBY.��]#W��]��!zZaP�}��Rɦ��?�w��K ���v+�0�TV.v�t9���'��̯(�^��<B1>GkVvƅ�!���O�?QN0s��� �Ny/���j�e�����o�(�3�mܕ=�d��e�jj��`��8R��L,7|�1#5��1����@l���;���*j�߿��Ά�3d���	�8ǈ1Yf�缏�B�"���b<y����b���/
01NXk�\<�ڶPɻ�G;')�"��0t��2-PuhQ�Ovv��l�&JǍӾ�0vo��V��QV��he9*����@YE:)mHl+4/��!mE��╳��I@ڊ 7ɄRr�w3�Gv!�ٮ9Acr�K�o�ԨV 9���
.ɑ�'�f[��I��껪�-���:u���^AC����L�1vd��|��������(i���!̙K�� �!���)�����\�$tG���P�j�G"����=�(!�d���� A"@����O��R������a�3�_����o��ne`�ag0�S'���ȵ�Xs�7�x���J �Co�6�m�����zB^�7Ј������&�X�2]`�-���;M���l-�ޝh�U��ͺ-lv����/����� 
���crr��0+?��Z�E^,�c�;
a����>��yha����\�/��|���t�W`�p��$>�"����1����#�1c���Q�hб�qq:jv�\~aV���z���;�����U�T�1ݲY[Y�u�������eva���0?c�-��1��2w�쨺��l]����e���XГD�r�XsA��mu��������6�׽)ON
�O�>��z��yb�h1�n|�I���x5Y��LѴ�����Z���G�&�H�K�C���g���,�v���E楫��4���(�4�"'.oђtt>�R.J�]Ux�H��?��o*�󕋧�O�7�ETm�y�����R��\�!�|D���մ]h��ۃ�I�P�K\;�]���)��2ш���l"�G^���F��R(锛Z�d3��l�5����mG&9�"pd�q� g��	,1ò�����O�`�'�24�C������!J�>�Q8����b㝜�(���O�}��V�P����=�y6�)���X,�ϥO���I��Sz�i����E3��!R{$�Ϩ=�J�!�O���� @!8���#���B�lq3��"s%�FQ*ɫڅ-p�T��`w�ě�8�{Z�6�Ҏ79�nFO�F��XT/9wǪ���cN���ʨ(�Ś�$�G���U���n�3bZ���P�낺ہ�2h��A����Ǯ &���U �Ha�`w� ��oN�5��_� 7maV4.�S�/Ps����̸�33*V���Ha�@bS���� ���������5�%1|�=?�b��`d�F�]:�R�m�����s�~b|y3��n�~�+hR�����_k� _�\|�����W�擟o���^[Y�t~�u����~-��?�f6./�nn����Ӈ����#j�}e�ʵ�7�� �>�g�'�@�N�` KO�<�GogM/ǌEɀ1�߲�>�b��7Tbێ(�������}�t}��t\���
NSF�x�n��z��/���4j_��<[X�u��FÏ&�����<},#ZlOM^��2�Y;6g�Iv�r�f*�'иs�7�cE�F'���_ŭz���f���mǑ̕���ب�yz
��oåk��:�I�������D�"s���a��eуĽ��g�,Lzd`�Ͷ���m�����Pc�G�D�o���%�=:��p�@���U�`<t�T�^��R�2]6�c��	vMd0Uf���F���R�`(�O�cM��R'h�Ȝ��;(�Zs�v<��5�P�� ;���hEܝWp��Y��;�E+�"��j��ӈ���,�U;�b���&va#x"����2)�u�u�| ��f=�Jyzqe�g����sJ���<�~�����}�I6 η�������,$m��{��
_b�(���7�9��1IJw+)IK@�u̍N�o{2�E��z�G��<�es�={�~��)��7K���oҹ����g��QL�ɮ"���r����z?��v�f��	��)8�f��j�{߿�;"H��oq	�t3-���~Η�G�+AF�ۃ�at�?L�ãe���C���� ��F����8,��d2�b�"q�������0{�G�]�C��H|W6�Rvf�V�X$H٪#iR����I�)(�KI��s�GK��b��M��%BJڲq]�4��=��'x�T�E���|q6,�z7��"6olE��C#��v�Vo��;&G9{Z�+V";TN��pw��$�ג���FӶ�LlO>�zjb�6p��	��܌�d^�ˑ�(i��Ze�c
�Dy;`r$gR�샟~�ӏ�-s%�3Mb�z��J�W4SX�j�1N��%��ͳG����`<�Mb}�����޷�֗o^�qe�U0l�w��^ڄ��m^_^_^[6%� �!�}�{��W֎���'���~�5�÷7�^����Us�ƕ[���z�	���:^�Xw�,�7d��R����E+m0�s/̞�@<-��L6�M(��    ��0o�oVZ�mu ����no76m�7���q����&�@��f5|�f=W@���d�ء{�V�~״]��4��p-�4f{�<]�7W��QhL��scx�$�j~Sű,�����ώ#�%8G�w��Ƒ�+p|����M<�����ys�޴q���l!�,N8,ڈo��;�)��"f�^�o�����@
m�:�7�R���?������Z��~�r�C�Q	ۨ�C]O;H�rgNB�!cvDK��j��6�6��f�#о������ó��%����.i�N�������5�E ��n3h����o"4vAj�.�Q4b���C�|� ڶI����ҵ3h�γ��~@;̝eذ?w}|3��h�>&���x��[�R D��,�P�u�7�;��':�
G�y�� �yc�s�?�ݺ��v�������������k�&EI̭e4��fO�UL;@�6(Z�{E�t+��N������I����O��F��{"�0�l���zL�q.h�7%6�)>U�;�0���{( QGhD�ߤ�I�q�9j�][�q{B������}"�&�M��R
�$���6b435=G��FB�]�q�b?��ķ�E����Hiù����eQJbX�+��{�:���/R_��R F�YEђA,l���)���:����)6��_���� 7P�Yy�\4\M�Nu�U�*���a�w�3�).�AP� �;�?r���\mg���ͣ
�n��,�Ȝݞ8��{���@��*��8ت�~獔�
w�7��5�l�,�F�-Dx
R\' m�a��I0[����K��R�K�T��s</<���.Q/��+����ԃ�pA�p��`W�[�m7w레��^���ŵ=p��:����6������#�������P���6����=t�.�<���HOc��N\�/xpd��Ϡyu/��ޢl@�|���9D$:��T���(�GՌ���(�a�f�b;�C�,����3�\�V�Oo���Ɂ� ��ʈdB^,E�ڠû�S�IǋG�e�th)�߈
)�\���`$*�����p�O$�(��}JH��ԩ��(�x���isy��j���o�����	�#�#(a����-cPt-��4栬�Ju�4{����Jy8����R7dRLW���� <l���&����Xb����G�X����Gf��Y��Ә�ͯ�o��x��]+�<k��W�t�uLh1<+�gՋ$���4ov�x��B�CIJ���F�vjVH���+DL��4����9u��7��O��`�}f ,��nC��ↂ��Y4��sec]	.x�rB�,���)�A�<\��#�2�E=�ʇ�i�̠�6®)�53��L{�zz���@��朙 �r>�^?O}}���������e����E\�31w~!�9��n��%_�6��.�|٪�+���8�������(��G�ܵ����y�����k8S��^�{��Ai5�k��ҝa�����2��B��*m�G2'��g�hq"�G�x75��'���d�Ȫ�G��{��2� =�g�F$��Rbb�k�:<���c5d KO�8	BS 	�m.z��șL^�顰�~bO �-���3��{�ݫ5I�N
GW6:�NI/��ʂ�Y�z���sS9x<�p�Mev�l��-�YG�v�)m �?c}E\�|j�ڙ��_����r��Z"�c����r3~�W��?����@%�'���tU.g!��rê@w	�dy��A���$��c�ɎAz��]��fΤ[\]���K�@F���0�W"$�b@�ob�[ ֭�M9w�n�3v�&��.����0k3Ex"^~�,����[r>v_�����	���t�N����F��`�0�ʡ�{	�L�Ɂ�}���V�@�b�`�r-�N4�A���%�G���/[�嫻ô�J4�q��'�/��:�����gvUi ������5Ms���B�~1�@��D&�V�	�U�I33 T�_"[�Et�\��k3e�L���@���� a�u�0r�hj�e����(k�RN2�ŊtI��P?rC0W��z���[�lq�&>c�-N�G�_�����v�z'�l�:����#�6��2V��I�"��� /��q/���]RB��L�:Z��_��ly&�V��*sѢ�V���23֞S%,<���HB�2K��S��l�_�d%hTdk�����^)ݨ��y�`2r����o��D^�+���NF|HHK��
N��S�0�%�Dx�����ҌH<��d)rV�9���$�ȐuF�5k��� tu�u�(��[��P��B�p#��A����t��k��itr=�3�bZ���dV�s>��� �+W��F"�{_���d��9M�'[�)s��h�9)^���Kf��q��aҊ���YyK`\K���`�k(�|�3g����A�m.DC�LQ莚�GW
1�]��W���>ק�4�3^�ok��oG�w�^J�S?�)j�Ֆ��`9�!}(`N���)��Oc�lB��h t�uJK����²�����&K�{J���t���O�!J%ƻdJҸ1��D�"��(t.�v%5Ac��|A�KU�#h�'%.��˸� ]���o)	�E�Rl��m?�K?g�A�`�*�w�S�s&?�U�|���N��lz�ԋ���}�܀��W@3ُ�z��}8 Q+����x],|s�Y[8�51���Rlc��.�'��H}0O7�B�N��,��<.P�Z���,�Q��MJ5�`^dh-�s)�.08S�
?��"�hXyѰ��]�	�bLY��n�6�����S���0JZ�F�^:���S%�m�>��E6�����m>��`���?K���#�I{�8)���>���XF+�n�`����Z����6�c%Ǟ��A\Bs�Ss�����ٹ��|i~�B|aq~{�Z[�ь�`z����9���tQLD�^�/������ɇu*?�k�oL���R7*��̑%|�)��!s��%l�Ը	�>��{�im���"'��S[���u���� hG1��
�֧.}҃(g()��w���F� �;<��	j�7��j3n9J����m�iTC�nLF����}IU�Q�l���Q�g�rnqo�l��g�{�{�������
=�{�����ƿ�[�� �<�����b�nya�����0֩�5g����q���� ��0H-T]���I�^3�'��l褡�b�I/jp[�h���J���2΢��*�d00���К�ߔƩ��O�}s��<��� N|�L�@�7=v�����n�r��3��V�3������S0B�����I��J�>E��nK{I~�~݇"-����0�ʟ�^ļ�K�Y<�����E���H��+�<3=#��=�����dEU�|��̇0�`S9��Jf��^�ݶ%���7���$��E�yCO������ 0�*��QZ1m�hg���5j��i�K+��	h�X� :�� �X�p�����رD����j���A��?����}��&sU��:{��״J� ����iD��;��B���m���3�����ۏpv'؞��^P����{��v��v.TU$�)l9��l!dbT#�1��}nf������18���Z|o�qf����D����D훙��k��o$�׮\�r����K�f�į��*�ٹi����j�-����'����u�Qv��<�&����� Ҷ��n3���'�ވ�s9�x�Ke+J��Κ=
S 3Q��Zj��b[��S�	Ȓ�f��*7�@>����-a�J�����Y�CKZB^�i�9M��
�V��� #Z�z.�w���G�yI��f���< 'sy�VeC��e�p��a�D������k?�ӊ��Eu	^�	�c��[��U@��I��oz����7F&١�,+}#M$s~#��`7��ɕ��iu��W0Qt�3���������~v�R��0)��[���V\��n�j�����6G�
g��7K��u�c,���굵�H+��Fp��Ϙ��)�I�å�B�X    ��eg��<K��̸i;��I�44V3���K��z���M ���������✱L2ymF{����0�4[�g�*��L�i£#i'�Ź�&�Ƚ�fo��U�A�*K�ܭ���l/L���3kg�ρ5���i�6�XiN�"�E=��T�y�M�l�d �ˡ�O��n/�3=�8W��� <�y�Ʀ�vǢ�V��SOR��y�y�O���$��*��xK��Uk0>�r��x�����$`�t��(�����Z9b���:�[� �8tBD���0���(ܩ��8�P�������f)6�- �Y�5��f������U�Š�L���V�������D��_1�PI�C�d>�m
6a7g>n%oʮ�4'�u��k+��>ꘚ��Y���Z���^L�S+ő�J$��O�?�ǳX���l̫���lJX�k�0���ي9�_��2}.׷'k'�N3v���6B�:�&s�L���r,b�� $�(.Gۦ�<��16��n���6l�GԾܹ��ʢ	<��J���E�";z �t�a���XA�������`}+��Y2�d�'��!m�U�2�҈1���m�UF)���o.��q��DSJ_LBt�L!j{�I���⭦�{�6�"��뜓gh|��u�u<�2=�����[*���~��d��}�P�H�Ŧ�T�7�5,�źO;����m��9X׸�Yk77&�2tp�9�d���=�M�X�`���U*�-Xp�e�Y爫p.����쨎L``؞j����$ma�R0U�O&�;����#%��J�t��7:Y@�[�����h����oG�	NJ��a�X�&uyT��W:�c�)�ƀ=���-��D�c���؉N�����~̟��\@��9Q-�k�Y��{9�u	�JR>ȅ䛞���\��/�-��Zlu��:ԑ�#J��8h�F?��f9Z4Ь�@��b	����2��--�mG��� 2
�b�O���;ً@"�a{M�{�5x���[D�G��@�(�Ůi�[ndw��a\l��I��/����=^�\	4
��K�1���Ҏ�Vy�"�C��&{����������*p���s��i`��i/��d��|�(Xx'�^�΀+GZ���I�0u+ȴ	ZI����R80h��+~�?z@z¸�t���ܑ��V��+
 ��w��R�V(�(��.V`�`x��vzжn��XBS�=�˝F�(�K)~�wS-M�Ɍ: 	Rl��ld)T��W�p�a���6�v��v ��q�WU���_���v��ȟ|���.-��TD��A��4�����u9#�=�`3��ٮ���}L\A��͝'0�e�Az]&7��WV����|�����0[�t� �L�0�N"�.d��($�A�3x��ܢ��[`z.H�='���.��K&Hli=���p�U�2��\R��Lx�������7����I��_���T�_���m�	�"��j��@�&���MXȵZ)&���	8����*BjYL"�b���"��QM)�g�Rk:��J2�IC�|�A��UQK]��w@&3�KVrtC��qX����a�P|�eB�Zn�����K+ײ�~S� �z��WdR0z"�Ң��'��6���%���FlAP���gs}y�l���{�Q������u�yΥ�=FZs�:��߳�C��&E�򴣛�r�@�t��,>��^FRT��'7i���Zh�0|(��G)I{���#9��w䠩K�uL�:8�<,��9�k녈�t�9�5��'O��s����Vh&k�s��o�6g j��Q#D	�.��Z�R]�ܤ-:�kV��i�6���I}���W��|4N��jꔂ��d�t���r5>�.��c�%jP�� J���E%(fB��[-Q? ܱ汼-��Qjb�^�M$B�XQ1@!��jp�N�!pi@,�[W�%aU�1F�h]�M;���8��>Tn�E�_��'r��26l�\,c;3���"-�U�T(,�����>���;�����I����%���!�,X h�#���"w�h�ʤd��
����>O�a)w)_%�H2$?�6$n���j{-ʟ�:�̱�����e�l����v���g�`'eei��K�&�J�%�&�ݗMٮ)Ξ�vlJ8K�7Ǉba�9�M��G^k�$|��~5G�_H�k��' |%�i�l�,q��=��*�� (�!}�gV��WxC^]y0r�鈃)���g�K
��N׳M�|��T����y�y��7�'f����rG)g&h����Pd.��&�e*�(�'�ו�v{24B��K�2r�6�J?*]�9�zEޥ����e������(c��D�i��HR��n���-
��A�9�V3��Y%�N�ޯ*8:G$�(3{�{��C�\,s��k��cz�����ͺw���hO�����9KX�Ak��3�a�Z�V5"�����'� KƳk#���qY$,�Ͼ�@��`����(׻ ��r%;}A���bF��'�^��=o���KP��K���s�B+�+���L0�L��P�q7� ?4(pX����"�6�PU��/�yؑYE�+ۢ�F����P&!���nh<���۪C�N���#m5FtA#AH�D)�N��r?����%��2�I�:��"},�gh�D`�����kg�܈���*��o����«��������<�m/r��'Li�[�3_X'�E�Ay��>Ϛ��ӵ�6�8U����M521u �@��l��:�py���RS4�D���^��x*��M[Zl���J��ey�$"�%HSɏ��%H"�h�j|������q��F����{v[���zl��'vD��Ut{�r['�uF?i�<XV%���g"�w�m���kP:Ez�-A��$^�+뒁h�����7����D.c�IG���[�>Ru_�i^�W�%��LK�d����dZd<:�H�h���l�5Ҩ�r������2�MGg�yt�G�:�*��jj���!�ʠ��Nd� E��Yen��A^������>���CN�|��yAT��8&�GO��'��}�;c�{{\[�	���t� �e)��Bm�qa�Tcb\v� ���d�b"&|4:HY�.�a�� 􁑋��I� ˷��An��=j�!x�;�昛o��5�
As ����-s�[�RD�V*�A���e��vs�*�q8+Q��B�Gf�?ʄ�<4#2��4����$qd�vM��
��r/���d,�w?Ta(}	�B���%p� 8;q��z�+�a��4�Z�%fy�r8�C���w���,3q�>�U��N2L�H��68�r:/N��g������-������Ҡ��8JZr~�?O�(p����!b,`��s��LP�X�Z����Ӱ���d|7�v�;؅%��M�����ǈ|5L��Ξ�q^(�GB�4��Z��;
(�۪���f��c<B�#x_L1_�_§N�(�)��q-w�s�K8A�۳��ܚt+W}2	���"#$
�U�H}JD�8��ɤM�q��).��_f���	�vu�H�wE:�4P��(pT]��À�3K��oPw��_��Pe���� ��@An�/��2��Bm[��=G��e
8���k������!z�4n�HPg�������j�Ⰵp��u�$��Ү�d�,���s�T�ҍt���:,�'��q*��u�Y	)�ز��f(~X��ʵ���BZe�ϚYX;A�f���ب�q��g�Iy�V��$(i#����(��-R�`�x�-����R�������n�7�K3��wz���復�l	���>�ң�
�[�4r��e��㢤�.��bi��vN:7?�/���E�������e^|i��|2cߎ��j�U�mklw�Ed;�^�"�\�*c�y
Ηr�D�����_ �S(�%`��G�/�뙑	:��j�5�پ'��m�߉����pO�\G���9�9���!@�{�v"���#n�5���$�X����
0T �7Z�2^����S�ռb2�&�aDo���S3���c����n7H�ܰ��)��0�� �K+;� H  �F^v��%}���BƄ�zm�"����f��4���8��1��]��J��*�+�+fǐm��M�f�1?]����[�s��5
T�p�����ʹ�	�m�w��n�GvZܤ~��ơI��
#�YتBrIy]��K&*G���&ً�9�sa@�(�y8�|,�e�.�LJN���;
c>�H��ȵ���M�&���n-�Q.���;�����Nq�K�@��!=�<e<����$_�����5�����J����e��s��5sUg�������Z?��s�aF6�d^Kj��v'�c�w��2߄�ЎH�:<�"���vJҢ�W*�G��o��Ю�X�nxJBȨLCkfs����.�o��tT�2?]�:3(L�;�gI7�����J���6��|�� ��e=��O��Af�&��Yhb����9C���*Ώ���Upx���$i=I��?4`��T1��#K�/=�M���P��ށ=rx�Ɍk� �]2�������+��kb���ɬj�P�]�V1O�'��iC�Q佑��l�W^�{;�곌'��w�}O������kEƶ����-�����bHa�V1<�W�Ԉ.�Kk��j6
�:�_V�A���ߏ=��X2\�	y�����v�E�Sf��9��i�7���^*�D.�L�n� ��i��Ui�Ӹ�F4U=n�ɛ�ҵ���)lag���V%�˲�'H'%^8�\�⪂�'�c���[����~̨L�
)f[�9�C�_,��-�BX�����HtB���%�q��-�\G}sS3��i���O�O��W���+�J�9do�P��j�=��<���m�+2�L�M����3���n�Kr/6CFJQ@���h�L�mtH��ibL�[������HK��}�4ZX�;e#��&��'���Sq�Q�z6 a'��h>�}d:��x K��{�,d�D��5�.rn�Og�ʣRe:fAwt���f�>h�'�73<t�:6�f��(�i��ie����0h�!�<qŖ���*���W9�*5�2�y�%�6�I,�r����Sd��H��3�N��ȃ�zC���f��>i��-D،O���*�4�[�?R\*͟����Q�4��҉��S[?��m���}X4���c3����ޠٯ�����!c����G������P�Pڶt=��:�yp`[�;`����
�G���Vg�k����L����t>�o�3(�����
.v|p�l�Oے�`eu�")6�S`=˱ˈ��cE�^T4��rP�"2�>�;!'+p�ZeF���@H��9,]���N�Xmb̬f�,��J�$*A���Z�>�S�hV(�u��?h�Đ� =Q6�s�FJ���c.�a)i�N@�����)��h
M���4{�s��,��!��ic�w�R w��a�H�d���I�,�i'�:�6��tc��9�"�����uO���^|O�#I�e��`�	U�iFة��+�z�+2���j��#�V^S3��0!`��޶	���Q��_P��  v�qA�t{�ڎ,h�g]4��Hl�w�K2u[Z����Shh�UY�r~v�9�Gh?��e~�I0�ڨSk��l!�,�'��E�&Ȕx0X�H�ȕ��r�A�I�� �fK\�Hq����D�Ō��hY/����	��H�(4."�.h�r��q����`�Нnbv��܃B�T6���
8,�c�H��XP�����IBߒ��}����na..L���UV�q�W��+(����]�_���k *����٩�·/�Oy�-��������#
$zvYQ����
3dF����]��Q�W����y,��A�Y\�0�T��YǶT�z��e�T��XNYy�s����@ETZ}%;.pfD}���zu��*A ;�94s�|>网�M|J?.�g�㜺�X�07F��*j�v���faMۖت��b�	�Ub}@�\d0M����l�����e�7����+�,�]���A�=?}����ɦ�0ܐ�Ą�V!~�.�1ٹd�6�E����?[�dի��� �O�M�:K3��ʴ�sRO�Uz�k�R����m`�%/��}�����h��<E���'���h���Н���SJ���K��<�PQ��./'�Yt9�hO��P�1b-�(�9k5�{iЙ�>�������c:���
�pS,(]1Pdr��Q��4��t���ڬ#�1[ʄmf�Z�G�	���Ua?��l�Z���=BVj]����b�َ�'�9��;kd!Z�v�j�	7c�&���9���_�	,s����O ��	���شݑ����j5���s�,yxW���^m�0M���b�>=�ox�R�πe7������IE��l�.�D
�6�7����'��ub�{	ݹ�t�7k�N��qRk�����E���X[�Ymw��R���h���dp����N����-.!<�q4��Ee�M�S�<~��[�m\��o\�\�:3���v����ُl�)�������-��][���-o�?5?6p���+ܞ�HF>�G�������-@�2c\<|�Z�V�Gg+����	��d�q;3=DrI�NՅ��� K{���!�J4��t�ʷ��i�JT�� ����9#�-H��|P#��#�yP�� �x��M�@<�dfQ��O@M�ƿ����w��pƛ���-�j+!tW�h�������Y��1�@����#;c�� z��.|t����/�陹�33;��c�]��P�0�_����Ngw�艕���j�=�+��n5@eO��Y�2Vr�U%d�����"�߬$JL��F��^���:�      �   �   x����n�0DϻC�k�z�R.V� �0(@���k.u/>�������4$4}gOmgj;����N���)��yNx{_xRj��(�%"�*��.7k�>)�#%�+$yJcu��.A#�/�����Z�t��W�I ���}ݷ��'��@��Y�K�>�"��fM�� kx���g\$tcf��u���������/��y�,�/�ލ��/s �?�^�9C�ol�(      �   X   x�}ͱ� D�O�X�#�,��$%�d�w�����h6F��5P�$6[��쇂~(�+�k7x�D��tp�K?_��UD��*%      �      x��[m�W��\��16��zWU&�vlgb{=���,�R*��J�J�T�Q��f����0�`B�iL�'1���-B>ț���K���zQK/q`X֝���[u��s�sΕgXwS�eX�g\w�W���&�3װ����@�?V~h�+�iY�ڰL���؂��as���؂?���[�(����F���~������=�s<�&����(�d�T�?�s�̟����^�v<�My���v8߇w�o�� ���͟���q�W����~���~�����D����5�:���D0�x����Cx5�ì��M`���G�{<{�̏j:��T<J7q���U��S�R|�CN�q��������k�k�?c���	��8J;]���ڮ�lD:U~��3H�3I�	�G�^�`o��"�?���G�e*=>z2R���0z�!!�@G0��0��_�j�m��A0����S��8��"m�.1�T�x�Gՙ���X���'�@�RY�x�W�Vy��DuH�5��l9?>z�X���U�p%Rga8����&)�sJ��٨c{�۲l�
ࡓ�e``�a;�����-_�,D��(M�c��ΨgX�g�jl��+4e<=�������ܳ����n�À�M� ��O�$��v�Cxm5 ��V��d�Zd(]��c�����˪������P�`R�.�Ʒ0
l.Ǡӣ}X��o����5��W�����9����~Cm��)X�`$�g��>z����b���������X�����@�p��}4��)}L�}�E��=��.����'��X�A�7;����Ɉ���ֶ��r��|�ӄD������tt5�j�z^E����2�2I��B��W��$��T�*�!e^�L`�+j��Q]{��
i��"�2���W�����N2uǯ�u����p�I�$��?J�F1���I�*�����8nx� {"��]��� (7d!rN�b>#V��A*��K�G#��>����r?�[�h֤Wh��h5!�Y���|D��z�p̊G6C��6�M�C����?�O�680�#�G�X:�����3�M�l?JP#�p����� ���d��s@�}�կ&�P�Q���B-� o�maɩg��|�|�L"������i�61Fg��؅D]
�
-��H�I>�zE����A�D�OҜФ�.L�p�Z�3�uSumc���b��e@�D��H�0`�#���#4Ϛ���=ű�� K���2-�/�ӈ�Y�Q�^JV/&�S�g�7Vuqߘֆ���O8p=�Y�v���
�o���Xa�N�&�(VMU�	$��B�c�!�N�%#aE�8#!+#�����Ȇ#��h0���Ȣq�6�&Ywp�!�B����'���^�k����&;����le�aV}�يS�	�c6Cp/����_Y7��2�V�4řZ��&�%F����ۂY5o�{��r�7�?��v�Bn����#m�I*q���P���@�ZCj7J� \��k�j*]A�2�[H��("�M�"��5�3|-'�3��*S��2}ÎC�d�W��r��m�l`D�����(VVK%i�'��h���'�A3��B��.�����ayG@�ζ�۸���ڡD�s���a��/42�5���߁��4j�	�q�^�Z针�)�A�
OhA� '�}�'�
R4r-ȔG��R�Aə=���;����PB2L�'T��ݩ�w���;��r3�D��~�i့��LE˸!)�NH;��"˽�j��n.��pP�4�f%{k#ɢԎ�Kʼ��2k!}j.Ҡ��>o��lI[�wZ��>=Z&<��$,�3���X�x��w,S�!&;����������n��^l�m�l�+k�+�Ƽ�_��~yb�) V�! � Űl�F�b��둂O��+H�m@I.(	���
�/m���S��J?��*3�%��0
ͦ�W��?��Bc#aC��Lg	����!k9H��Ⱦ���S�{"�q�n�����wdr� ^�����i7��vw�\ͼ(=�H}V�\ڴ���mhi/Ш��ZW�߭�7֮��P��Ҟ=m dN��8ޟ��\Ń�Ǵ� (w�0�{���`���za�}ñBܞ���Emۥ��KS��Awa�/9^G��?a	��rŪ�.���jB@mO}C��5e��D�m}�Պ�0�'TM��s��UJ�s����n���.88��Ne-�K��pY�#an��ea�$K�'��*c٬$%���oRS��x�D����,�;�y������q4M������R��Tp=���A��ר{�Z���]�|�\���@��%�E�h�޾������h�(W6���R�"�q;��ډ�4�n���|���� j������'8'�G'!��I�Y��Ķ����p���l�62¯ps_Qz[�����(��'d�\ʓ|�AYlf��F����=񒇐���gq��a�K����sk��J��C�l��u�m|�q�)�i���r.�`7w��óZ��;��3��V�(���a?��ŌV_��2�ƛ������&�	z�p�	���?C_�>���},���?�W�&��\��w��>����q�{�Z�L�PM�,W�����M����ݮa��F�J�,�U�UuZ�0��H>��]bW+,��.�`n#����6�!����1_�T�s׼�HZ�h��.��u,�Z�q)g��H!�M�ַсˀ�z�C��!M�2�#����oG�:��^�A=}� Z�F��a�����ndO���iwm���ǭ�m��9١�&XN�X�0��ǲ�V�Ppm�3�����l���lf;|A�n���~��ˉ]/��	��-�r��T񠯊�Y� ��pqWS�w���#���
O��mI߆֡���N:�huX�!��l�l׏�q[J$��͖Y�7���vߝ��^�Er���:z��?4�b�"��\9ץ���-�ܢ<�*--�֞�ti.��Y���x~ұ~�R��n-�A7�)�.��(Zu����A�{Xį�EG�!��~�l�8�J��#U�EF->>`Q��HW�b2�;��ײ*9h龫��EE`���8�V&��5�uH�����5?���ԝ�[���A���8O�\-)VZW���sY.�ڠ`������|Ml�h��w*���da���$��(N7�ML�?A�FZ� 2q0�^���$R(�l�7�xY
�N
�Xڙ���u7�A��'qH.V�8��+2=�6���vIFڑ2eY�g^�q=�d}��0k�M�W���(�"��� a��<Sw�1GO��Dl�cR��_���=.�$2X���	�	�D���Z���vӝ�`�"�O<� >带q-ڋ��$��j�zT�C9����!�]� ���^]7�_^E5#ޙ��o'���e��j?��I*�u�'�f���g5a��+�c �:�R�YA����h�4���:pVk~�<���:
���7$�
\Zm.H��
��Mn�\�����d��y`K���^�/x�����Ɣ5�% �	������j�d�{i͒M�X�H��zSqsn����G��"r�
AG��r�F8�Հ)��F�gC���.���D��9"ɦ��ac�!���P�U�+o��:�`&�����ܲ<z��_ݯ�J�v,O���!�>!r��=Q\N/��h.9q��Ĉ�=���
�	?�u@�@A��,�^H)'�nsNw3����VĘ�}�t�NZH�QRԑK:bc��������-��{yd�8:�m���"���8Yt\��Z
U�R|��j�Dݯ�_�Z[�cݓ�}I�G���e�xe�Pᩀ�d���=b�z<T;'�ΔѪ�1�� ݾ'�g�|��V�<2����~�������8
����j�K����{@�F6�v3�e�O*�b��&a$�Tq���/m�7�r�>�L�����-uN��Vw�5Í����q �U�..��n�R|�h�xM<I(!`{{˰�b�   E�J�*��';w	�0���r���M�7�}bm�qV�a6�A��<0/��Z����9׼u��Ab�"J�{��lU弆 (X.H���\%4a\�d�; ��7����N:���Ώ]yC𤬑�\�p�����ڸ��#��|�ҧB���UI���1�p�ٮ������7��$�٢�k�U��&�ؒBF%��31�jU��Ҩ����֓49(R� �L�y5��8��"�J���W��i�Z1q�Yxz�l
C+~����b��n�/S4s<)�Ax"Q\��\չ�wY���&����Ů�es��q�������׎�T��Uo��p�6��4#����1̆�J0i�l0>�
����"||t����3�hY5��n��Me�����¥7���$��]~b�*��nS�iiYC�"n�Wy��!9|����S�l����>0\"���r����4��aJf���2o���#pQR�Kѻ�a4�)>Q�8Ԅ�3��]��%����}M�2�U�U��.�2:�Ñlv��^+���j��]���D+0G~�����b���u�O�w�<���CvX��\.6^-j'owa�jvN@�1��<
�E��F����)�J�^��$��T��?(�ϒ�#	L+ )<�S9N
�.�¯>��6+��rotVd�Q;l��5Q��2l��ݬl尤��$}2���r�O��J��ߋ��kNZ]O~��?�B�dͺ�0��Qu[Ӧ�Oeͦ�$��D~�q��`�\dh�ukHp�n'1 �e��R7�#�HDO��m��D��e��3����׹�(N��rk%<�ƍ��9��'q�u�X>�T!SE"L�L05��RѨ��5*c�P@[��$��m��3������Ҷ��`X	�(�׹_y���%ov�U�p�G�����<u8�]B&3�kôU�&B��Շqh5RK����oJ� *y�,$nS�'*	p(!<�0}���V��X�݁�(Yä���a;��m� ��0�p���
�+����#��F�l����B�O��	�^~�'��vŔh�l2<3��h��t�
��d�,@`�A��	���( T(#�Ws�[��%Z�Y�-ް|9� �k�)�i�O�&��s�n�}1(Z}� �`�Ii��SII�?��L�F� =f��Oe�;�q��j�/��~U�������Q�wS,~��tH�r�#�ma���V�J2rP��h�'���r�H�dP��u�]<E]?9-�p9���Ŋ��'0��:f��+�����d��-Ij:\r;�N�)�GX@���5�[@��b+J�VOU��I_g�oϟQ�^�)SD��c���y�h{�*۫%L�O�V�jB~]x-���v�ˤ��(��O�6��q��>��,��~���T�?_b�d�҅�۵,��t>a�[Q��_���'rV�S��MÀ�	�R�cL3j���}��Zڗ#��`/S���C��/�|�}SS���+4�ק��*'�����<�����6Ϝ9�?~|Y�      �   �  x���KO�0 �翀�;��˾NH+(�]!En	m��*m����m=���G3���ªU|��~ϴ9�, �^��������M�T�p�T�Ԣ)��'��2���C1/Fl�k|������09��i@���S���j�5�}lW2�_LC�!��C�ivu����l8���6]�o��c�0�/��O�f�]ۥԠ!�?1������]쥛�PNC(!?�����W�2M{W���B&#D��6�]=��}��C�0�`l��*��pۈo������� C`������7u��7<��`�HQԍ�D�~n�7����b(��H,o��]��Y��7�&��~O�eBh9�r:վ�s��!d*��IFG�T�_.�h���H��ġ:(>h��� �a��� |�� �J���pjcn�>���F�w�}�@ȄB6�0�a�.˰!EY9���̇��҃|��{01��e"!���o���c�]�c��mT��ӏ�&�m�M���gIFb4�,�S���PL_�gB��DL�ο�}#}	J3Rő�(�����g�o��b(��Hl�|ҏ>y>IL���:��7��r$�I�$Bjݿ4.�,˄B���L:TԨ��~n���ۯ�˯����ꚪ�����`�qǦK�d�(<q�%���.g����檺��TZ�jHu�M( �TЮ��~����b�y����ҠȊi�\��sO�4m�g�<����Iʼ=��x�S.      �   Q   x����0��l1��8���:"��c�Ѷ���nŏ���*����S;N�k.	
�a�z����j�
�=:��{I� ,��      �   L  x�U��N�0D���@;v����@�K9DH)
T��gvkC�\���qJA ������5�g��K	����a�g�%i��w���:��������y�CtY��x�p|�x�,E�g��eu��8Np�{[�וP��h�e�~��çC�������t<^�&����(A�@��q��yõ欯μd]&�n!�bMN�E�3���{�%���V6�fƓ��O���螶Y��Y#�$Ӻ�"�����L(�E`���^�W��S�"Hӱ<�����������ַlq[�!�>�2��O�әLw��UDe�-QPQ�x��F��p��!m�1      �   .   x�3���q�v�2��}�]\�C����!�.��~\1z\\\ "{�      �   _  x��Y�o����+^��HN�M�Q���ZB	)")m�~Yo\�6ٵ�w��w��(B�;��N`Ҕ����������%}f������S�䇽���3��<3;?u�}fq8��b8�5�����V�M�Rg����뭫8}�8��F���6>y��������*�]����+wZ�YOw>��o��y����ӂ��'�g�[^7:����lu�5��SG�T�IN�F�/�6�:�|�W�3�Ǎ���@�%��t��U������|=��w�(U�wZ��]���`���?N�f��������N]�Ӟ'^���h4[ӳs�AuJ�(ږJu#ݏ�J�L>��3�OG{_����j�HŪ�/T�⧯�Z�{�j��F	 ���i/�W�?���lS 쇃o��}ǳv�*�5�O�Υ�O�و񸅟�0����ql�~�(>��[*jR�� |�O��Ņ��������J�b��2� ����I�6p���+�C��p���AX���(0�Vw��<�w*��'����u\3W�(��`%��ѿ��6��x>ᇗE�\[�A�i9��Y�~���h�ϖ��N���Z*<|�r|=	����O|�(�e%�y'��F>���(��5+�>	���i/о0����T#qp7�m����Xr�������F\Ҕ��8���F��r�>_y�=��:YM����OO} yO��y+Ղ1�P�T�&��n~Fӊ,3�\�zB���*�V��K��	��a7���k�X�6SC��ȕ��=v��k?Qݖ&N[�L�7�Y�;]�Q��
Ҳ.�2�k�\9K��*fs�${8��A�����a�G�P�ҧ[�QnUDߌC�g�(q@���.��ߖԞ'��^f��?k"Q�%�PM!r�b�T2f)�m��3b� �[��?���uh��Q��KO��L�6P]�NQ͊De�"���sj��!Eza�����~��V/�>_�����jy8�����G�ܼ�r��T�7KԦt�㠀���鸡���Ha�FF�{�vH�Y�R'��z��Ra�	�tn10ש���K�<���T��z3�o3}��`?f�[#�bS��՛����ͷ�%[��t^�.�/�ՅE���>Z�Z�oVՇj)�vQ]��I��2���(�q��@�.���֙%ҧ�B�=�m��ՄJt�W��,�a�g�t݄�f��V��㚹���"-b
�Ę1�Wq�s�����Ǳ���-����%"��q8���Νv�oү�9�-��d���e��n*�5Iw8�:�J�d(!M�H$�����4}IZ�D�����_��{�&]o)�KE����(��I�i��۞�s�#\��n�R
��_:`�t�#��Ebu�\Č�ZӠB�{�S�K 	@�T?���+��;g�>�vA8�,S4��F��{�.����	F�$����?�3�G�!��{�BDKkmP3���D���Ҟ�~bN1��3�n��o�1.���~/xN-�7+A,�^�
w[�`�1��?%��Q��=��a�-Ϸs^�1�8j�TN�~�o��Hk�ߺ�뻥1g�����L�����
S���y���.&�8���(�#Bn����kRH"C�itd��Dj:�WT����lc�j|H���`9�gR�k��s�Q�m��:�9����;lx˥�&���'MW�.M��f�cb���Rb�]�U�P|`��C �)Q̘O�o��k���.�F��ZCӬ�OI�|�x}r�0j���>Md��8j"�c���yS>����C7l�T��n'V+�ݸ���Os<�_U
�m�G<ؠ�ѣ4_l��}����;�1k����G�����T����*�/�@�2�u��i㢼�ݍg� �[�i�u]|��}�u:3��V�^dL����Aޖ�78P����.�ʹ��a_LɅ؜R��NČ�X����'�3|��g�LȳVp��7>^�m	�d�9�0#���R}���iwBJ��,��%u�r\P�¯�}�+j�c�uʳ�e����H������ב�Na����㨦H�:�1�3g.ў��]�~~g	^�	>2%:��,�;@i?1��Y���N�9�C�p�1K�Q���Y����ˋ7m�L���XT�0��4��|�y���.W�<�F���k]���:c<�)�cx*H�*��⚬5x,�;�Z�T��f]�g;�TKG��I2�MK[ �/4�b���m�j�?�k. 0N�dwd�Z��Z#R�+�e{�>Y��$	2�_�-�ݴ��~-bAE��8�;�X!��\��M�,���gٶLf�>�7^���0SBxB%/�ۆM)���ѫ�n�	�=�ܔ ��p�s�qL����c�}�f��l6�X^���E�N���ʺ숄ԛٕ�=k/۽���q��Qm;G��YI��е%���6\�i+�\\��o׍��HM�1�^��I�x�]��Do,z�-SH����C��Ba��N��l3��s�
�����S�섵���E���C��1��R��]�\�V�z�X��U$�=2Sa��&�I���d�����˦n���Ɓ'X��l,j���u��E�)SZ�7�X?���	��bo�s��w�xƈ9�&�x����C�\�"/:x�7����e�˰I-aU5�:��	X�ۆ���}�B6'Zq-����B�k	N�@�kR5�w�������=F�<�GG^�ٳP+v�2+oz<k��*��'�"�������a25^, ����`�v��j����{p=�Z���T��jBt������@72�ӤѢ�*��:���������̓H1�j�;�&��J�n�E�̈́�~�o���Y�m�g���l�!�����!���i<��ԃU�d�Is��o:��|���~ �BKe�䯕�YE��[.M�O�f֤���<k��U�O-��͵�ج9>�����߭��H�l:qy��@�F�b�۔�Hǽv��3�\���D�z:`m7���#<X	1_hl;bW�*��ƍW�����(F9P��H�_ߏe*���Dy$&й`��:�"ƮS�6�S��{�����\�RiZ���"h�v�y^JJL��w��_R����M�e?���!��i��B��݌�8��Bm      �   �   x���A
�0�ur
O21F�y��n���Ƃ���t�kx��E��B'�b6�Ç�ZdhgL�5D�$��2�0�a�X��]�I�$�I�"iC�5I7$ݒ4H��	%;m�T��E�*YI=\�eɍ�a���5��n���q�k}$����RMV��I�c���g����� ~@J}      �      x���4�2�4�242��D� $>�      �   ~  x��Q;N�@�קp�2Zv׿�K���'D�f�5�x�OB:DA��� H�P:�=r�W��'M1�if��h��ˌ��4�1��'1�Zè֞v�H�B�1q~�2�b[K��c�.��}�p>�;Hם=��}>�`9�b,O�th܊�V��5$s�������w�F�e�}��$wz7rF�Q���jn� �I[��h2�B1�|s�/�+{wy]�aX>�+\=�_��^�z�;�U��|��(d,o��ϼ�A���%� rF	Ґ�O�i�`��B|�>�l����[x|��������B�8TH��e����;�����y�)s��_n�2(�xu�7�@Y����.�Y�l��1����)�$�����     