import type { NextApiRequest as Request, NextApiResponse as Response,} from "next";
import methods from "micro-method-router";

export function authMiddleware(req: Request, res: Response):Promise<boolean> {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(400).json({
      error: "Bad request",
      message: "Informacion faltante -> Token",
    });
    return new Promise((resolve) => {
      resolve(false);
    });
  }
  const parts = authHeader.split(" ");
  const token = parts.length === 2 ? parts[1] : parts[0];
  if (!token) {
    res.status(400).json({
      error: "Bad request",
      message: "Formato de autorizacion del header invalido",
    });
    return new Promise((resolve) => {
      resolve(false);
    });
  }
  (req as any).user = {
    id: "1",
    name: "Informacion de test 1",
    edad: 20
  }
  return new Promise((resolve) => {
    resolve(true);
  });
}

export default methods({
  async get(req: Request, res: Response) { 
    const isAuth = await authMiddleware(req, res);
    if (!isAuth) return;
    return res.json({
      id: "1",
      name: "Informacion de test 1",
      edad: 20
    });
  },
  async patch(req: Request, res: Response) { 
    const isAuth = await authMiddleware(req, res);
    if (!isAuth) return;
    const { name, email, edad } = req.body;
    return res.json({
      "Datos nuevos": {
        name,
        email,
        edad
      },
      "Datos viejos": (req as any).user
    });
  }
})