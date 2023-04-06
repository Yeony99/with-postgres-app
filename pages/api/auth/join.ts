import { NextApiRequest, NextApiResponse } from "next";
import * as user from '../../../lib/user';

export default async (req:NextApiRequest, res: NextApiResponse) => {
    const {email, password, name, phone} = req.body;

    if(req.method === "POST") {    
        if(!email || !password || !name || !phone) {
            // res.statusCode = 400;
            return res.send("필수 데이터가 없습니다.");
        }      
        const isValidEmail = await user.searchValidEmail(email)
        if(isValidEmail.length > 0) {
            return res.send("이미 등록된 이메일입니다.")
        }

        const newUser = await user.create(req.body)
        console.log(newUser)

        return res.status(200).send("등록 완료!");
    }
    // res.statusCode = 405;

    // return res.end();
}