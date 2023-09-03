use veiculosDB;

-- inserir novo contato
INSERT INTO tb_agenda (nm_contato, ds_telefone, ds_email)
	 VALUES ('mesquita', '11 91234-5678', 'mesquita@gmail.com');
     
     
     
     
-- CSU02:: buscar todos os contatos
 select nm_contato,
		    ds_telefone,
        ds_email
   from tb_agenda;




-- CSU03:: buscar por nome 
select nm_contato
   from	tb_agenda
  where nm_contato		   	= '%a%';
    
    
    
    
-- CSU04:: buscar por favorito
select nm_contato
   from	tb_agenda
  where bt_favorito		   	= true;
    
    
    
-- CSU05
INSERT INTO tb_filme (id_usuario, nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
	 VALUES (1, 'Harry Potter e a Camara Secreta', 'Filme bem Tops', 8.2, '2012-02-11', true);
     
     
     
     
-- CSU03
 UPDATE tb_filme
	SET nm_contato			= 'Kauan Pedro',
		ds_telefone			= '11 99999-8888',
        ds_email			= 'kauanpedro@gmail.com',
        bt_favorito			= true,
        dt_cadastro			= '2020-05-12 12:00:00'
  WHERE id_filme			= 1;
  
  
  



-- CSU04
DELETE FROM tb_filme
	  WHERE id_filme = 1;
      