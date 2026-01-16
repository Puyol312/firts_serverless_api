import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router"

export default methods({ 
  async post(req: NextApiRequest, res: NextApiResponse) {
    const { email, code } = req.body;
    if (!email || !code) { 
      return res.status(400).json({
        error: "Bad request",
        message: `Informacion faltante -> ${!email ? "email" : "code"}`
      });
    }
    return res.status(200).json({
      token: "Este es un token falso"
    });
  }
});