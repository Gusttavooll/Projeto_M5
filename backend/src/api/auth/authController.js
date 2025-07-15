// src/api/auth/authController.js
import * as authService from './authService.js';

export async function login(req, res, next) {
  try {
    const { email, senha } = req.body;
    const { usuario, token } = await authService.loginUsuario(email, senha);

    res.cookie('authToken', token, {
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'none', 
      maxAge: 24 * 60 * 60 * 1000, // Expira em 24 horas
    });

    res.status(200).json({
      message: "Login bem-sucedido!",
      usuario: usuario, 
    });
  } catch (error) {
    next(error);
  }
}

