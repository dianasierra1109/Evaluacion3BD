/**
 * Esquema para los representantes legales o padres de los estudiantes.
 * Esencial para el registro de contactos de emergencia.
 */
import { Schema, model } from 'mongoose';

const representanteSchema = new Schema({
    nombre: { type: String, required: true },
    cedula: { type: Number, required: true, unique: true },
    parentesco: { type: String, required: true },
    telefono: { type: String, required: true }
});

export const Representante = model('Representante', representanteSchema);
