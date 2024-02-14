<template>
    <div class="calendar-container">
        <FullCalendar ref="calendar" :options="calendarOptions" class="full-calendar" />
    </div>
</template>

<script>
import { ref } from 'vue';

import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default {
    name: 'CalendarWidget',
    props: ['tasks'],
    components: {
        FullCalendar
    },
    setup() {
        const calendarRef = ref(null);

        const removeEventFromCalendar = (eventId) => {
            if (calendarRef.value) {
                const calendarApi = calendarRef.value.getApi();
                const event = calendarApi.getEventById(eventId);
                if (event) {
                    event.remove();
                }
            }
        };

        return {
            calendarRef,
            removeEventFromCalendar
        };
    },
    data() {
        return {
            calendarOptions: {
                plugins: [dayGridPlugin, interactionPlugin],
                initialView: 'dayGridMonth',
                height: '500px',
                aspectRatio: 1.2,
                themeSystem: 'bootstrap',
                headerToolbar: {
                    start: 'prev',
                    center: 'title',
                    end: 'next'
                },
                events: [],
                eventDidMount: this.handleEventMount,
                dateClick: this.handleDayClick
            },
            selectedDate: null
        };
    },
    methods: {
        handleEventMount(info) {
            const el = info.el;
            el.style.cursor = 'pointer';
        },
        handleDayClick(info) {
            const selectedDate = info.dateStr;
            this.$emit('date-selected', selectedDate);
            // Resetea el color de todos los días
            document.querySelectorAll('.fc-day').forEach(day => {
                day.style.backgroundColor = '';
            });
            // Cambia el color del día seleccionado
            info.dayEl.style.backgroundColor = '#ffff99';
        },
        addEventToCalendar(event) {
            this.calendarOptions.events.push(event);
        },
        handleTaskDeleted(task) {
            // Vuelve a cargar todos los eventos del calendario
            this.calendarOptions.events = this.calendarOptions.events.filter(e => e.id !== task.id);

            // Emitir evento para informar a App.vue sobre la tarea eliminada
            this.$emit('task-deleted', task);
        },
    },
    mounted() {
        // Establecer la referencia al calendario cuando el componente se monta
        this.calendarRef = this.$refs.calendar;
    }
};
</script>

<style scoped>
.full-calendar {
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 500px;
    margin-top: 70px;
}
</style>






































































