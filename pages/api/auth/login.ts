import { NextApiRequest, NextApiResponse } from "next";
import * as user from '../../../lib/user';
import bcrypt from "bcrypt";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {email, password} = req.body;

    if(req.method === "POST") {
        if(!email || !password) {
            return res.status(401).json({error: "필수 데이터가 없습니다.", OK: false});
        }
        const isValidEmail = await user.searchValidEmail(email);
        if(isValidEmail.length === 0) {
            return res.status(401).json({error: "비밀번호가 일치하지 않거나 등록되지 않은 이메일입니다.", OK: false})
        }
        const isValidPwd = await bcrypt.compare(password, isValidEmail[0].password);

        if(!isValidPwd) {
            return res.status(401).json({error: "비밀번호가 일치하지 않거나 등록되지 않은 이메일입니다.", OK: false})
        }

        return res.status(200).send("로그인 성공!");
    } 
}