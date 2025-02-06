import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import User from "./entity/user.js";
import Course from "./entity/course.js";
import Section from "./entity/section.js";
import Question from "./entity/question.js";
import Option from "./entity/option.js";
import Inscription from "./entity/inscription.js";
import UserAnswer from "./entity/user_answer.js";

// Carga las variables de entorno
dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL, // Usa la URL de conexión en Railway
    synchronize: true, // Cambiar a "false" en producción
    logging: false,
    entities: [User, Course, Section, Question, Option, Inscription, UserAnswer],
    subscribers: [],
    migrations: [],
    ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false, // Necesario en Railway si requiere SSL
});
