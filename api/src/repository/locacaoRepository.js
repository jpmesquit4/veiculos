import { con } from "./connection.js";

export async function inserir() {
    const comando = 
    `
    
    `
    
    const [linhas] = await con.query(comando, [])
    return linhas[0];
}