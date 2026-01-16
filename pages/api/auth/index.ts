import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

// --- VERSION SIN LIBRERIAS ---
// export default function auth(req: NextApiRequest, res: NextApiResponse) {
//   switch (req.method) {
//     case "POST":
//       res.status(200).send("AUTH FUNCTION POST");
//       break;
//     case "GET":
//       res.status(200).send("AUTH DEFAULT FUNCTION");
//       break;
//       default:
//       res.status(405).send("AUTH DEFAULT METHOD NOT ALLOWED");
//       break;
//   }
// }
export default methods({
  async post(req: NextApiRequest, res: NextApiResponse) {
    const { email } = req.body;
    if (!email) { 
      return res.status(400).json({
        error: "Bad request",
        message: `Informacion faltante -> "email"`
      });
    }
    return res.status(200).json({
      message:"Codigo enviado al mail."
    });
  }
})