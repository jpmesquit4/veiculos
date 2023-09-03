import { con } from './connection.js';

export async function inserirVeiculo(tipo, modelo, marca, ano, placa) {
    const comando = `INSERT INTO tb_veiculo (ds_modelo, ds_marca, ds_ano, ds_placa)
	                                         VALUES (?, ?, ?, ?)`


    const [linhas] = await con.query(comando, [tipo, modelo, marca, ano, placa])
    return linhas[0];
}

export async function buscarTodosVeiculos() {
    const comando =
        `
    select  id_veiculo          id,
            id_tipoVeiculo      tipo,
            ds_modelo           modelo,
		    ds_marca            marca,
            ds_ano              ano,
            ds_placa            placa
    from  tb_veiculo;
    `

    const [linhas] = await con.query(comando)
    return linhas;
}

export async function alterarVeiculoporID(id, veiculo) {
    const comando =
        `
        UPDATE tb_veiculo
        SET     ds_modelo           = ?,
                ds_marca            = ?,
                ds_ano              = ?,
                ds_placa            = ?
        WHERE id_veiculo = ?
        `;

    const [resposta] = await con.query(comando, [veiculo.modelo, veiculo.marca, veiculo.ano, veiculo.placa, id])
    return resposta.affectedRows;
}

export async function removerVeiculo(id) {
    const comando =
        `
    DELETE 
    from tb_veiculo   
    where id_veiculo          = ? `;

    const [resposta] = await con.query(comando, [id])
    return resposta.affectedRows;
}


