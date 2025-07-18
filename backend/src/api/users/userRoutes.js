// src/api/users/userRoutes.js
import express from 'express';
import * as userController from './userController.js';
import { authenticateToken, requireAdmin } from '../middlewares/auth.js';

const router = express.Router();

/**
 * @swagger
 * /:
 *   post:
 *     summary: Cria um novo usuário. (Rota Pública)
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UsuarioInput'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: Dados inválidos.
 *       409:
 *         description: Conflito (email ou idRegistro já existe).
 *       500:
 *         description: Erro no servidor.
 */
router.post('/', userController.criar);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Lista todos os usuários.
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Uma lista de usuários.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 *       500:
 *         description: Erro no servidor.
 */
// Protegido: Apenas usuários autenticados e com perfil de ADMIN podem listar todos os usuários.
router.get('/', authenticateToken, requireAdmin, userController.listar);

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Busca um usuário pelo ID.
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário.
 *     responses:
 *       200:
 *         description: Detalhes do usuário.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: ID inválido.
 *       404:
 *         description: Usuário não encontrado.
 *       500:
 *         description: Erro no servidor.
 */
// Protegido: Apenas usuários autenticados podem buscar por ID.
router.get('/:id', authenticateToken, userController.buscarPorId);

/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Atualiza um usuário existente.
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UsuarioUpdateInput'
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: ID ou dados inválidos.
 *       404:
 *         description: Usuário não encontrado.
 *       409:
 *         description: Conflito (email ou idRegistro já existe).
 *       500:
 *         description: Erro no servidor.
 */
// Protegido: Apenas usuários autenticados podem atualizar.
router.put('/:id', authenticateToken, userController.atualizar);

/**
 * @swagger
 * /{id}:
 *   delete:
 *     summary: Deleta um usuário.
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário.
 *     responses:
 *       204:
 *         description: Usuário deletado com sucesso.
 *       400:
 *         description: ID inválido.
 *       404:
 *         description: Usuário não encontrado.
 *       500:
 *         description: Erro no servidor.
 */
// Protegido: Apenas usuários autenticados podem deletar.
router.delete('/:id', authenticateToken, userController.deletar);

export default router;