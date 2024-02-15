<template>
  <div>
    <!-- Encabezado -->
    <header class="bg-primary text-white py-4">
      <div class="container text-center">
        <h1 class="task-title mb-2">Mi Lista de Tareas</h1>
        <p class="lead mb-0 blinking-text">Selecciona un día y escribe tu tarea pendiente</p>
      </div>
    </header>

    <!-- Contenedor principal -->
    <div class="container">
      <div class="row">
        <div class="col-md-6" style="height: 50vh;">
          <CalendarWidget :tasks="tasks" @date-selected="updateSelectedDate" ref="calendarWidget" />
        </div>

        <!-- Componente TaskList -->
        <div class="col-md-6 mt-5">
          <div class="task-list-container">
            <h2 class="text-center">Tareas Pendientes</h2>
            <TaskList :tasks="tasks" :selectedDate="selectedDate" @task-deleted="handleTaskDeleted" />
          </div>
        </div>
      </div>
    </div>

    <!-- Input de texto y botón (solo en dispositivos móviles) -->
    <div class="container d-md-none"><!-- Mostrar solo en dispositivos móviles -->
      <div class="row mt-3">
        <div class="col-12">
          <div class="input-group">
            <textarea v-model="taskText" rows="3" class="form-control mb-1"
              placeholder="Ingrese su tarea aquí"></textarea>
            <button @click="saveTask" class="btn btn-primary btn-sm ml-2" style="height: 40px; line-height: 1;">Guardar
              tarea</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer bg-dark text-white py-3 mt-4 fixed-bottom">
      <div class="container text-center">
        <p class="mb-0">© 2024 Marta Belmonte Andrés</p>
      </div>
    </footer>
  </div>
</template>

<script>
import CalendarWidget from './components/CalendarWidget.vue';
import TaskList from './components/TaskList.vue';

export default {
  components: {
    CalendarWidget,
    TaskList
  },
  data() {
    return {
      tasks: [],
      taskText: '',
      selectedDate: null
    };
  },
  methods: {
    updateSelectedDate(date) {
      this.selectedDate = date;
    },
    handleTaskSaved(taskInfo) {
      // Verificar si la tarea ya existe en el array
      const existingTaskIndex = this.tasks.findIndex(task => task.id === taskInfo.id);
      if (existingTaskIndex === -1) {
        // Si no existe, agregarla al array
        this.tasks.push(taskInfo);
      }
    },
    handleTaskDeleted(task) {
      // Filtrar las tareas para eliminar cualquier tarea con el mismo ID que la tarea que se va a eliminar
      this.tasks = this.tasks.filter(t => t.id !== task.id);
      // Eliminar el evento del calendario
      this.$refs.calendarWidget.removeEventFromCalendar(task.id);
    },
    saveTask() {
      if (this.taskText.trim() !== '') {
        const taskInfo = { id: this.generateUniqueId(), date: this.selectedDate, title: this.taskText };
        this.handleTaskSaved(taskInfo);
        this.taskText = '';
      }
    },
    generateUniqueId() {
      return Math.random().toString(36).substr(2, 9); // Simple función para generar un ID único
    }
  }
};
</script>

<style>
.task-title {
  margin-bottom: 10px;
}

.lead {
  font-size: 1.25rem;
}

.task-list-container {
  height: 40vh;
  overflow-y: auto;
}

.blinking-text {
  animation: blinking 1.5s infinite;
}

@keyframes blinking {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>

































