<template>
    <div class="calendar-container">
        <FullCalendar :options="calendarOptions" class="full-calendar" />
        <div v-if="showTaskForm" class="task-form">
            <h3>Ingrese una tarea para {{ selectedDate }}</h3>
            <textarea v-model="taskText" rows="5" class="form-control" placeholder="Ingrese su tarea aquí"></textarea>
            <button @click="saveTask" class="btn btn-primary mt-3">Guardar tarea</button>
        </div>
    </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import esLocale from '@fullcalendar/core/locales/es'

export default {
    name: 'CalendarWidget',
    components: {
        FullCalendar
    },
    data() {
        return {
            calendarOptions: {
                plugins: [dayGridPlugin],
                initialView: 'dayGridMonth',
                locale: esLocale,
                height: '500px',
                aspectRatio: 1.2,
                themeSystem: 'bootstrap',
                headerToolbar: {
                    start: 'prev',
                    center: 'title',
                    end: 'next'
                },
                eventDidMount: this.handleEventMount,
                dateClick: this.handleDayClick
            },
            selectedDate: null,
            showTaskForm: false,
            taskText: ''
        }
    },
    methods: {
        handleEventMount(info) {
            const el = info.el;
            el.style.cursor = 'pointer';
        },
        handleDayClick(info) {
            this.selectedDate = info.dateStr;
            this.showTaskForm = true;
            // Resetea el color de todos los días
            document.querySelectorAll('.fc-day').forEach(day => {
                day.style.backgroundColor = '';
            });
            // Cambia el color del día seleccionado
            info.dayEl.style.backgroundColor = '#ffff99';
        },
        saveTask() {
            this.showTaskForm = false;
            this.taskText = '';
        }
    }
};
</script>

<style scoped>
.full-calendar {
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 500px;
    margin-top: 50px;
}

.task-form {
    margin-top: 20px;
    text-align: center;
}

/* Cambiar el cursor al pasar sobre los días */
.fc-day {
    cursor: pointer;
}
</style>
















































