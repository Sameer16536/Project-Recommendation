import express, { Request } from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

interface AuthenticatedRequest extends Request{
    userId?:number
}

router.get('/',async(req:AuthenticatedRequest,res)=>{
    const userId = req.userId
    try{
        const progress = await prisma.user.findMany({
            where:{
                id:userId
            }
        })
        res.json(progress).status(200)
    }catch(error){
        console.error('Fetch progress error:', error);
    res.status(500).json({ error: 'Internal server error' });
    }
})