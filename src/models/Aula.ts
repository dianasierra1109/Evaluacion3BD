/**
 * Definición del esquema y modelo para la colección de Aulas en MongoDB.
 * Permite gestionar la capacidad, tipo y ubicación física de los salones.
 */
import { Schema, model } from 'mongoose';

const aulaSchema = new Schema({
    numero: { type: String, required: true, unique: true },
    capacidad: { type: Number, required: true },
    tipo: { type: String, required: true }, // Laboratorio, Salon, Auditorio
    piso: { type: Number, required: true }
});

export const Aula = model('Aula', aulaSchema);
