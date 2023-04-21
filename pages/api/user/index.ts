import { NextApiRequest, NextApiResponse } from "next";
import * as user from "../../../lib/user";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await user.list();
    return res.status(200).json(data)
}