import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../models';
import zod from 'zod';

const userLoginSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6).max(12)
});

const userSignUpSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6).max(12),
    name: zod.string(),
    phone: zod.string().length(10)
});

export const login = async (req: Request, res: Response) => {
    const validationBody = userLoginSchema.safeParse(req.body)
    if (!validationBody.success) {
        return res.status(400).json({
            message: validationBody.error.issues[0].message
        })

    }
    const { email, password } = req.body
    try {
        const user = await prisma.user.findUnique({ where: { email: email } })
        if (!user) {
            return res.status(400).json({ msg: "User not found" })
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ msg: "Password is incorrect" });
        }
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, { expiresIn: '2h' });
        res.status(200).json({ token });
    }
    catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const signUp = async (req: Request, res: Response) => {
    const validation = userSignUpSchema.safeParse(req.body);
    if (!validation.success) {
        return res.status(400).json({ message: "Invalid body", error: validation.error });
    }

    const { email, password, name, phone } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (user) {
            return res.status(400).json({ msg: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
                phone
            }
        });

        const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET as string, { expiresIn: '2h' });
        res.status(201).json({ message: 'User created successfully', userId: newUser.id, token });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};