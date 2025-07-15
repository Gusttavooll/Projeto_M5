import jwt from "jsonwebtoken";
import prisma from "../prisma.js";

/**
 * Middleware para autenticar o token JWT do cookie.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const authenticateToken = async (req, res, next) => {
  try {
    const token = req.cookies.authToken;

    if (!token) {
      res.status(401).json({ error: "Token não fornecido" });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.usuario.findUnique({
      where: { id: decoded.id },

      select: { id: true, email: true, role: true },
    });

    if (!user) {
      res.status(401).json({ error: "Usuário não encontrado" });
      return;
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Token inválido" });
  }
};

/**
 * Middleware para verificar se o usuário autenticado é um ADMIN.
 * Deve ser usado após `authenticateToken`.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const requireAdmin = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({ error: "Não autenticado" });
    return;
  }

  if (req.user.role !== "ADMIN") {
    res.status(403).json({ error: "Acesso negado" });
    return;
  }

  next();
};
