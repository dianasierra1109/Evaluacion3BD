/**
 * Script para poblar la base de datos con información inicial, para cumplir con requerimiento
 * de la UC base de Datos II
 */
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Profesor } from './models/Profesor';
import { Materia } from './models/Materia';
import { Aula } from './models/Aula';
import { Representante } from './models/Representante';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/colegio';

const seedData = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Conectado a MongoDB para carga de datos...');

        // Limpiar colecciones antes de insertar
        await Profesor.deleteMany({});
        await Materia.deleteMany({});
        await Aula.deleteMany({});
        await Representante.deleteMany({});
        console.log('Colecciones limpiadas.');

        // 1. Profesores
        const profesores = [
            { nombre: 'Carlos Rodríguez', especialidad: 'Matemáticas', email: 'carlos.rod@escuela.edu', telefono: '0414-1234567' },
            { nombre: 'María Elena García', especialidad: 'Lengua y Literatura', email: 'maria.garcia@escuela.edu', telefono: '0412-7654321' },
            { nombre: 'José Luis Martínez', especialidad: 'Física', email: 'jose.mtz@escuela.edu', telefono: '0416-1112233' },
            { nombre: 'Ana Isabel López', especialidad: 'Química', email: 'ana.lopez@escuela.edu', telefono: '0424-4445566' }
        ];
        await Profesor.insertMany(profesores);
        console.log('Profesores insertados.');

        // 2. Materias
        const materias = [
            { nombre: 'Cálculo I', codigo: 'MAT101', creditos: 4, semestre: 1 },
            { nombre: 'Programación Orientada a Objetos', codigo: 'PROG202', creditos: 5, semestre: 2 },
            { nombre: 'Física Mecánica', codigo: 'FIS102', creditos: 4, semestre: 1 },
            { nombre: 'Base de Datos I', codigo: 'BD301', creditos: 3, semestre: 3 }
        ];
        await Materia.insertMany(materias);
        console.log('Materias insertadas.');

        // 3. Aulas
        const aulas = [
            { numero: 'L-101', capacidad: 30, tipo: 'Laboratorio', piso: 1 },
            { numero: 'S-205', capacidad: 45, tipo: 'Salon', piso: 2 },
            { numero: 'A-001', capacidad: 100, tipo: 'Auditorio', piso: 0 },
            { numero: 'S-302', capacidad: 25, tipo: 'Salon', piso: 3 }
        ];
        await Aula.insertMany(aulas);
        console.log('Aulas insertadas.');

        // 4. Representantes
        const representantes = [
            { nombre: 'Juan Carlos Pérez', cedula: 12345678, parentesco: 'Padre', telefono: '0414-9998877' },
            { nombre: 'Carmen Rosa Mendoza', cedula: 87654321, parentesco: 'Madre', telefono: '0412-5554433' },
            { nombre: 'Luis Alberto Gómez', cedula: 11223344, parentesco: 'Tío', telefono: '0416-6667788' },
            { nombre: 'Beatriz Adriana Silva', cedula: 55667788, parentesco: 'Madre', telefono: '0424-1119900' }
        ];
        await Representante.insertMany(representantes);
        console.log('Representantes insertados.');

        console.log('¡Datos cargados exitosamente!');
        process.exit(0);
    } catch (error) {
        console.error('Error al cargar datos:', error);
        process.exit(1);
    }
};

seedData();
