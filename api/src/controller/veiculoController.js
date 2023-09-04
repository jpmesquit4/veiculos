import { inserirVeiculo, buscarTodosVeiculos, removerVeiculo, alterarVeiculoporID} from '../repository/veiculoRepository.js'
import { Router } from "express";

const server = Router();

server.post('/veiculo', async (req, resp) => {
    try {
        const { modelo, marca, ano, placa } = req.body;

        const resposta = await inserirVeiculo(modelo, marca, ano, placa);
        resp.send(resposta)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})


server.get('/veiculo', async (req, resp) => {
    try {
        const resposta = await buscarTodosVeiculos();
        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.delete('/veiculo/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const resposta = await removerVeiculo(id);
        if (resposta != 1)
            throw new Error('Veiculo não pode ser removido.');

        resp.status(204).send()
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.put('/veiculo/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const veiculo = req.body;

        if (!veiculo.modelo)
            throw new Error('Nome do modelo é obrigatório!')

        if (!veiculo.marca)
            throw new Error('Marca é obrigatório!')

        if (!veiculo.ano)
            throw new Error('Ano é obrigatório!')

        if(!veiculo.placa)
            throw new Error('Placa é obrigatória!')

        const resposta = await alterarVeiculoporID(id, veiculo)
        if (resposta != 1)
            throw new Error('Veiculo não pode ser alterado.');

        resp.status(204).send()
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})



export default server;