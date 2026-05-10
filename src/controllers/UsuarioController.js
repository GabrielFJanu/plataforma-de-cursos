import UsuarioService from "../services/UsuarioService.js";

class UsuarioController {

    static async getAll(req, res, next) {
        try {
            const usuariosDto = await UsuarioService.getAll();

            res.status(200).json(usuariosDto);
        }
        catch (error) {
            next(error);
        }
    }

    static async getById(req, res, next) {
        try {
            const id = req.params.id;
        
            const usuarioDto = await UsuarioService.getById(id);

            res.status(200).json(usuarioDto)
        }
        catch (error) {
            next(error);
        }
    }

    static async create(req, res, next) {
        try {
            const createUsuarioData = req.body;

            const newUsuarioDto = await UsuarioService.create(createUsuarioData);

            res.status(201).json(newUsuarioDto);
        }
        catch (error) {
            next(error);
        }
    }

    static async update(req, res, next) {
        try {
            const id = req.params.id;
            const updateUsuarioData = req.body;

            const usuarioDto = await UsuarioService.update(id, updateUsuarioData);

            res.status(200).json(usuarioDto);
        }
        catch (error) {
            next(error);
        }
    }
}

export default UsuarioController