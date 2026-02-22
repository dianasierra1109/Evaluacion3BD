/**
 * Lógica principal del frontend.
 * Se encarga de la interacción con el DOM, llamadas a la API y renderizado de datos.
 */
const API_URL = '/api/estudiantes';
const form = document.getElementById('student-form');
const studentList = document.getElementById('student-list');
const studentIdInput = document.getElementById('student-id');
const formTitle = document.getElementById('form-title');
const submitBtn = document.getElementById('submit-btn');
const cancelBtn = document.getElementById('cancel-btn');
const studentCountText = document.getElementById('student-count');
const noDataContainer = document.getElementById('no-data');

let isEditing = false;

// Cargar estudiantes al iniciar
document.addEventListener('DOMContentLoaded', fetchStudents);

async function fetchStudents() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        renderStudents(data);
    } catch (err) {
        showToast('Error al cargar datos', 'error');
    }
}

function renderStudents(students) {
    studentList.innerHTML = '';
    studentCountText.innerText = `${students.length} Estudiantes`;

    if (students.length === 0) {
        noDataContainer.classList.remove('hidden');
    } else {
        noDataContainer.classList.add('hidden');
        students.forEach(s => {
            const tr = document.createElement('tr');
            tr.className = 'hover:bg-gray-50 transition-colors';
            tr.innerHTML = `
                <td class="px-6 py-4 font-medium text-gray-900">${s.nombre}</td>
                <td class="px-6 py-4 text-gray-600">${s.cedula}</td>
                <td class="px-6 py-4 text-gray-600">${s.carrera}</td>
                <td class="px-6 py-4 text-center">
                    <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-bold">${s.trayecto_actual}</span>
                </td>
                <td class="px-6 py-4 text-right space-x-2">
                    <button onclick="editStudent('${s._id}', '${s.nombre}', ${s.cedula}, '${s.carrera}', ${s.trayecto_actual})" class="text-indigo-600 hover:text-indigo-900 font-medium">Editar</button>
                    <button onclick="deleteStudent('${s._id}')" class="text-red-600 hover:text-red-900 font-medium">Borrar</button>
                </td>
            `;
            studentList.appendChild(tr);
        });
    }
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const studentData = {
        nombre: document.getElementById('nombre').value,
        cedula: parseInt(document.getElementById('cedula').value),
        carrera: document.getElementById('carrera').value,
        trayecto_actual: parseInt(document.getElementById('trayecto').value)
    };

    try {
        let res;
        if (isEditing) {
            res = await fetch(`${API_URL}/${studentIdInput.value}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(studentData)
            });
        } else {
            res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(studentData)
            });
        }

        if (res.ok) {
            showToast(isEditing ? '¡Actualizado con éxito!' : '¡Estudiante creado!');
            resetForm();
            fetchStudents();
        } else {
            const err = await res.json();
            showToast(err.message || 'Error en la operación', 'error');
        }
    } catch (err) {
        showToast('Error de conexión', 'error');
    }
});

function editStudent(id, nombre, cedula, carrera, trayecto) {
    isEditing = true;
    studentIdInput.value = id;
    document.getElementById('nombre').value = nombre;
    document.getElementById('cedula').value = cedula;
    document.getElementById('carrera').value = carrera;
    document.getElementById('trayecto').value = trayecto;

    formTitle.innerText = 'Editar Estudiante';
    submitBtn.innerText = 'Actualizar Datos';
    cancelBtn.classList.remove('hidden');

    // Scroll a tope para ver el formulario
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function deleteStudent(id) {
    if (confirm('¿Estás seguro de eliminar a este estudiante?')) {
        try {
            const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            if (res.ok) {
                showToast('Estudiante eliminado');
                fetchStudents();
            }
        } catch (err) {
            showToast('Error al eliminar', 'error');
        }
    }
}

function resetForm() {
    isEditing = false;
    form.reset();
    studentIdInput.value = '';
    formTitle.innerText = 'Agregar Estudiante';
    submitBtn.innerText = 'Guardar Estudiante';
    cancelBtn.classList.add('hidden');
}

cancelBtn.addEventListener('click', resetForm);

function showToast(msg, type = 'info') {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');

    toastMsg.innerText = msg;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
        toast.classList.remove('translate-y-0', 'opacity-100');
    }, 3000);
}
