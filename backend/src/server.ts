import express from "express";
import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import  dotenv  from "dotenv";


dotenv.config()
const app = express()
const prisma = new PrismaClient()

//Conversion to Json
app.use(bodyParser.json())