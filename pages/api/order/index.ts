import type { NextApiRequest as Request, NextApiResponse as Response,} from "next";
import methods from "micro-method-router";

export default methods({
  async post(req: Request, res: Response) { 
    const { productId } = req.query;
    if (!productId) return res.status(400).json({
      error: 'Bad request',
      message: "Informacion faltante -> Id del producto"
    });
    return res.json({
      url: "Aca la url de mercado pago"
    })
  }
})