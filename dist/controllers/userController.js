"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getAllUsers = exports.createUser = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(401).json({
            message: "Todos os campos são obrigatórios!!",
            success: false,
            status: 401,
        });
    }
    try {
        const checkEmail = yield prisma_1.default.user.findUnique({
            where: { email },
        });
        if (checkEmail) {
            res.status(401).json({
                message: "E-mail já está sendo usado por outro usuário!",
                success: false,
                status: 401,
            });
        }
        const user = yield prisma_1.default.user.create({
            data: {
                name,
                email,
                password,
            },
        });
        res.status(201).json({
            message: "Usuário criado com sucesso!",
            success: true,
            status: 201,
            usuario: user,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "Internal server error" });
        }
    }
});
exports.createUser = createUser;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAll = yield prisma_1.default.user.findMany();
        res.status(200).json({
            message: "Usuários encontrados com sucesso",
            success: true,
            status: 200,
            usuarios: getAll,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "Internal server error" });
        }
    }
});
exports.getAllUsers = getAllUsers;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { uuid } = req.params;
        const { name, email } = req.body;
        const findUser = yield prisma_1.default.user.findUnique({
            where: {
                id: uuid,
            },
        });
        if (!findUser) {
            res.status(404).json({ message: "Usuário não encontrado" });
        }
        const updatedData = { name, email };
        if (!name || !email) {
            res
                .status(401)
                .json({
                message: "Todos os campos são obrigatórios!!",
                success: false,
                status: 401,
            });
        }
        const updatedUser = yield prisma_1.default.user.update({
            where: {
                id: uuid,
            },
            data: updatedData,
        });
        res.status(200).json({
            message: "Usuário atualizado com sucesso!",
            success: true,
            status: 200,
            usuario: updatedUser,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "Internal server error" });
        }
    }
});
exports.updateUser = updateUser;
