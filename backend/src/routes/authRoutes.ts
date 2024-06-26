import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import zod, { number, string } from 'zod'
const router = express.Router();
const prisma = new PrismaClient();
import dotenv from "dotenv";

dotenv.config()

//Input validation:
const userLoginSchema = zod.object({
    email: zod.string().email(),
    password: string().min(6).max(12)
})

const userSignUpSchema = zod.object({
    email: zod.string().email(),
    password: string().min(6).max(12),
    name: string(),
    phone:number().min(10).max(10)
})


router.post('/login', async (req, res) => {
    const validationBody = userLoginSchema.safeParse(req.body)
    if (!validationBody.success) {
        return res.status(400).json({ message: "Invalid body", error: validationBody.error })
    }
    const { email, password } = req.body
    try {
        const user = await prisma.user.findUnique({ where: { email } })
        if (!user) {
            return res.status(400).json({ msg: "user not found" })
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res.status(400).json({ msg: "password is incorrect" })
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, { expiresIn: '2h' })
        res.status(200).json({ token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.post('/signup', async (req, res) => {
    const validation = userSignUpSchema.safeParse(req.body)
    if (!validation.success) {
        return res.status(400).json({ message: "Invalid body", error: validation.error })
        }
        const { email, password, name,phone } = req.body
        try {
            const user = await prisma.user.findUnique({ where: { email } })
            if (user) {
                return res.status(400).json({ msg: "user already exists" })
                }
                const hashedPassword = await bcrypt.hash(password, 10)
                const newUser = await prisma.user.create({
                    data:{
                        email,
                        name,
                        password: hashedPassword,
                        phone
                    }
                })
                const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET as string, {
                    expiresIn: '2h'
                  });
                  res.status(200).json({ token });
                res.status(201).json({ message: 'User created successfully', userId: newUser.id });
            }
            catch (error) {
                console.error('Signup error:', error);
                res.status(500).json({ error: 'Internal server error' });
            }
})

export default router;