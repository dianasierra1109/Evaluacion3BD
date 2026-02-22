/**
 * Modelo para las materias o asignaturas del sistema.
 * Contiene información sobre créditos, semestre y códigos de identificación.
 */
import { Schema, model } from 'mongoose';

const materiaSchema = new Schema({
    nombre: { type: String, required: true },
    codigo: { type: String, required: true, unique: true },
    creditos: { type: Number, required: true },
    semestre: { type: Number, required: true }
});

export const Materia = model('Materia', materiaSchema);
