create database veiculosDB;
use veiculosDB;

create table tb_clienteVeiculos (
	id_cliente 			int primary key auto_increment,
    nm_cliente			varchar(400),
    ds_email			varchar(100),
    ds_telefone			varchar(100),
    ds_cpf		        varchar(100),
    ds_cnh				varchar(100)
);

create table tb_veiculo (
	id_veiculo			int primary key auto_increment,
    id_tipoveiculo		int,
    ds_modelo			varchar(100),
	ds_marca			varchar(100),
    ds_ano				varchar(4),
    ds_placa			varchar(100),
    foreign key (id_tipoVeiculo) references tb_tipoVeiculo(id_tipoVeiculo)
);

create table tb_tipoVeiculo (
	id_tipoVeiculo		int primary key auto_increment,
    ds_tipo				varchar(50)
);

create table tb_locacao (
	id_locacao			int primary key auto_increment not null,
    id_cliente			int not null,
    id_veiculo			int not null,
    nr_km_retirada		varchar(50) not null,
    dt_locacao			datetime not null,
    bt_seguro			bool not null,
    ds_observacoes		varchar(800) not null,
    ds_situacao			varchar(50) not null,
    nr_km_entrega		int not null,
    dt_entrega			datetime not null,
    vl_total			decimal(15, 2),
    foreign key (id_cliente) references tb_clienteVeiculos(id_cliente),
    foreign key (id_veiculo) references tb_veiculo(id_veiculo)
);