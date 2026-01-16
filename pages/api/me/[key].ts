import type { NextApiRequest as Request, NextApiResponse as Response,} from "next";
import methods from "micro-method-router";
// @ts-ignore
import { authMiddleware } from "./index";

export default methods({
  async patch(req:Request, res: Response) { 
    const isAuth = authMiddleware(req, res);
    if (!isAuth) return;
    return res.json({
      key: req.query.key,
      "Nuevo dato": req.body,
    })
  }
})