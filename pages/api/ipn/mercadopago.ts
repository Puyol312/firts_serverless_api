import type { NextApiRequest as Request, NextApiResponse as Response,} from "next";
import methods from "micro-method-router";

export default methods({
  async post(req: Request, res: Response) { 
    res.json({
      message: "No se que va aca."
    })
  }
})