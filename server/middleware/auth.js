import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const auth = async (req, res, next) => {
    const secret = process.env.secret;
    try {
        const token = req.headers.authorization.split("")[1];
        const isCustomAuth = token.length< 500;
        let decodedData;
        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, secret)
            req.userId = decodedData?.id
        }
    }
    catch(error) {
        console.log(error)
    }
}

export default auth