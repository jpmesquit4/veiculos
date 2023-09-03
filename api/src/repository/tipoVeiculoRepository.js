import { con } from "./connection.js";

export async function buscarPorId(tipo, idTipoVeiculo) {
    const comando = 
    `
    select ds_tipo
    from tb_veiculo
    where id_veiculo = ?       
    `

    const [linhas] = await con.query(comando, [tipo, idTipoVeiculo])
    return linhas[0];
}
