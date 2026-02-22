/**
 * Estructura de datos para los estudiantes.
 * Define los campos básicos como nombre, cédula y carrera académica.
 */
import { Schema, model } from 'mongoose';

const estudianteSchema = new Schema({
    nombre: { type: String, required: true },
    cedula: { type: Number, required: true, unique: true },
    carrera: { type: String, required: true },
    trayecto_actual: { type: Number, required: true }
});

export const Estudiante = model('Estudiante', estudianteSchema);
