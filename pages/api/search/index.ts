import type { NextApiRequest as Request, NextApiResponse as Response,} from "next";
import methods from "micro-method-router";

export default methods({
  async get(req: Request, res: Response) { 
    const { query, offset, limit } = req.query;
    if (!query || !offset || !limit) res.status(400).json({
      error: "Bad request",
      messsage: `Informacion faltante -> ${!query ? "query" : !offset ? "offset" : "limit"}`
    });
    return res.json({
      query,
      offset,
      limit
    })
  }
})