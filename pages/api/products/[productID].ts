import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

export default methods({
  async get(req:NextApiRequest, res:NextApiResponse) { 
    const { productID } = req.query;
    if (!productID) return res.status(400).json({
      error: "Bad request",
      message: `Informacion faltante -> "ID del producto"`
    });
  }
})