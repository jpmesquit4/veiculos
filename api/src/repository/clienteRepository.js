import { con } from './connection.js';

export async function inserirCliente(nome, email, telefone, cpf, cnh) {
    const comando = `INSERT INTO tb_clienteVeiculos (nm_cliente, ds_email, ds_telefone, ds_cpf, ds_cnh)
	                                         VALUES (?, ?, ?, ?, ?)`


    const [linhas] = await con.query(comando, [nome, email, telefone, cpf, cnh])
    return linhas[0];
}


export async function buscarTodosCliente() {
    const comando =
        `
    select  id_cliente          id,
            nm_cliente          nome,
		    ds_email            email,
            ds_telefone         telefone,
            ds_cpf              cpf,
            ds_cnh              cnh    
    from tb_clienteVeiculos;
    `

    const [linhas] = await con.query(comando)
    return linhas;
}

// export async function buscarContatosporNome(nome) {
//     const comando =
//         `
//     select  id_agenda        id,
//             nm_contato       nome,
// 		    ds_telefone      telefone,
//             ds_email         email,
//             bt_favorito      favorito
//     from tb_agenda
//    where nm_contato like ? `;

//     const [linhas] = await con.query(comando, [`%${nome}%`])
//     return linhas;
// }

// export async function buscarContatosporFavorito(favorito) {
//     const comando =
//         `
//     select  id_agenda            id,
//             nm_contato           nome,
//             bt_favorito          favorito
//     from	tb_agenda           
//     where bt_favorito		   	= true `;

//     const [linhas] = await con.query(comando, [favorito])
//     return linhas;
// }

// export async function buscarporData(cadastro) {
//     const comando =
//         `
//     SELECT * FROM tb_agenda
//     WHERE dt_cadastro BETWEEN '2020-01-01' AND '2023-08-15'`;

//     const [resposta] = await con.query(comando, [cadastro])
//     return resposta;
// }


export async function alterarClienteporID(id, cliente) {
    const comando =
        `
        UPDATE tb_clienteVeiculos
        SET     nm_cliente          = ?,
                ds_email            = ?,
                ds_telefone         = ?,
                ds_cpf              = ?,
                ds_cnh              = ?

        WHERE id_cliente = ?;
        `;

    const [resposta] = await con.query(comando, [cliente.nome, cliente.email, cliente.telefone, cliente.cpf, cliente.cnh, id])
    return resposta.affectedRows;
}

export async function removerCliente(id) {
    const comando =
        `
    DELETE 
    from tb_clienteVeiculos   
    where id_cliente          = ? `;

    const [resposta] = await con.query(comando, [id])
    return resposta.affectedRows;
}