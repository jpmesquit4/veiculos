import { inserirCliente, buscarTodosCliente, removerCliente, alterarClienteporID} from '../repository/clienteRepository.js'
import { Router } from "express";

const server = Router();

server.post('/cliente', async (req, resp) => {
    try {
        const { nome, email, telefone, cpf, cnh } = req.body;

        const resposta = await inserirCliente(nome, email, telefone, cpf, cnh);
        resp.send(resposta)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})


server.get('/cliente', async (req, resp) => {
    try {
        const resposta = await buscarTodosCliente();
        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.delete('/cliente/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const resposta = await removerCliente(id);
        if (resposta != 1)
            throw new Error('Cliente não pode ser removido.');

        resp.status(204).send()
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.put('/cliente/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const cliente = req.body;

        if (!cliente.nome)
            throw new Error('Nome do contato é obrigatório!')

        if (!cliente.email)
            throw new Error('Email é obrigatório!')

        if (!cliente.telefone)
            throw new Error('Telefone é obrigatório!')

        const resposta = await alterarClienteporID(id, cliente)
        if (resposta != 1)
            throw new Error('Contato não pode ser alterado.');

        resp.status(204).send()
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})


// server.get('/contato/busca', async (req, resp) => {
//     try {
//         const { nome } = req.query;
//         const resposta = await buscarContatosporNome(nome);

//         if (resposta.length == 0)
//             resp.status(404).send([])
//         else
//             resp.send(resposta);
//     } catch (err) {
//         resp.status(400).send({
//             erro: err.message
//         });
//     }
// })

// server.get('/contato/favoritos', async (req, resp) => {
//     try {
//         const { favorito } = req.query;

//         const resposta = await buscarContatosporFavorito(favorito);
//         resp.send(resposta)
//     } catch (err) {
//         resp.status(400).send({
//             erro: err.message
//         });
//     }
// })

// server.get('/contato/cadastro', async (req, resp) => {
//     try {
//         const { cadastro } = req.query;

//         const resposta = await buscarporData(cadastro);
//         resp.send(resposta)
//     } catch (err) {
//         resp.status(400).send({
//             erro: err.message
//         });
//     }
// })



export default server;