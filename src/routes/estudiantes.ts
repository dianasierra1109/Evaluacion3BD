/**
 * Definición de los puntos de entrada (endpoints) de la API para estudiantes.
 * Aqui manejamos las operaciones CRUD: Obtener, Crear, Actualizar y Eliminar.
 */
import { Router } from 'express';
import { Estudiante } from '../models/Estudiante';

const router = Router();

// Obtener todos los estudiantes
router.get('/', async (req, res) => {
    try {
        const estudiantes = await Estudiante.find();
        res.json(estudiantes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener estudiantes', error });
    }
});

// Crear un estudiante
router.post('/', async (req, res) => {
    try {
        const nuevoEstudiante = new Estudiante(req.body);
        await nuevoEstudiante.save();
        res.status(201).json(nuevoEstudiante);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear estudiante', error });
    }
});

// Actualizar un estudiante
router.put('/:id', async (req, res) => {
    try {
        const estudianteActualizado = await Estudiante.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(estudianteActualizado);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar estudiante', error });
    }
});

// Borrar un estudiante
router.delete('/:id', async (req, res) => {
    try {
        await Estudiante.findByIdAndDelete(req.params.id);
        res.json({ message: 'Estudiante eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar estudiante', error });
    }
});

export default router;
