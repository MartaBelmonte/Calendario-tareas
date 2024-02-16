<template>
  <!-- Encabezado -->
      <header class="bg-primary text-white py-4">
        <div class="container text-center">
          <h1 class="task-title mb-2">Mi Lista de Tareas</h1>
          <p class="lead mb-0 blinking-text">Selecciona un día y escribe tu tarea pendiente</p>
        </div>
      </header>

    <!-- Contenedor principal -->
<main class="container">
      <div class="row my-3">
        <div class="col-12 col-md-6">
          <CalendarWidget :tasks="tasks" @task-saved="handleTaskSaved" @show-task-form="toggleTaskForm"
            @date-selected="updateSelectedDate" ref="calendarWidget" />
        </div>

        <!-- Componente TaskList -->
        <div class="col-12 col-md-6">
          <div class="task-list-container">
            <h2 class="text-center">Tareas Pendientes</h2>
            <TaskList :tasks="tasks" :selectedDate="selectedDate" @task-deleted="handleTaskDeleted" />
          </div>
        </div>
      </div>
    <div class="row mb-5">

    <!-- Input de texto y botón -->
        <div class="col-12">
          <TaskInput v-if="selectedDate" :selectedDate="selectedDate" @new-task="handleTaskSaved"/>
        </div>
    </div>
    </main>

    <!-- Footer -->
<footer class="footer bg-dark text-white py-2 mt-4 fixed-bottom">
      <div class="container text-center">
        <p class="mb-0">© 2024 Marta Belmonte Andrés</p>
      </div>
    </footer>
</template>

<script>
import CalendarWidget from './components/CalendarWidget.vue';
import TaskInput from './components/TaskInput.vue';
import TaskList from './components/TaskList.vue';

export default {
  components: {
    CalendarWidget,
    TaskList,
    TaskInput
  },
  data() {
    return {
      tasks: [],
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
      this.$refs.calendarWidget.handleTaskDeleted(task.id);
    }
  }
};

</script >

<style>
.task-title {
  margin-bottom: 10px;
}

.lead {
  font-size: 1.25rem;
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
}</style>






































