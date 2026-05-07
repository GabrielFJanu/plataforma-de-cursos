import UsuarioService from "../services/UsuarioService.js";

class UsuarioController {

    static async getAll(req, res) {
        try {
            const usuarios = await UsuarioService.getAll();

            res.status(200).json(usuarios);
        }
        catch (error) {
            next(error);
        }
    }

    static async getById(req, res, next) {
        try {
            const id = req.params.id;
        
            const usuario = await UsuarioService.getById(id);

            res.status(200).json(usuario)
        }
        catch (error) {
            next(error);
        }
    }

    static async create(req, res, next) {
        try {
            const usuarioData = req.body;

            const newUsuario = await UsuarioService.create(usuarioData);

            res.status(201).json(newUsuario);
        }
        catch (error) {
            next(error);
        }
    }
}

export default UsuarioController