/**
 * Definición para la colección de Profesores.
 * Almacena los datos de contacto y la especialidad de cada docente.
 */
import { Schema, model } from 'mongoose';

const profesorSchema = new Schema({
    nombre: { type: String, required: true },
    especialidad: { type: String, required: true },
    email: { type: String, required: true },
    telefono: { type: String, required: true }
});

export const Profesor = model('Profesor', profesorSchema);
