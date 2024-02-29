<template>
    <div class="calendar-container">
        <FullCalendar :options="calendarOptions" class="full-calendar" />
    </div>
</template>


<script>
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

export default {
    name: 'CalendarWidget',
    props: ['tasks'],
    components: {
        FullCalendar
    },
    data() {
        return {
            calendarOptions: {
                plugins: [dayGridPlugin, interactionPlugin],
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
                events: this.tasks,
                eventDidMount: this.handleEventMount,
                dateClick: this.handleDayClick
            },
            selectedDate: null
        };
    },
    watch: {
        tasks(newVal) {
            this.calendarOptions.events = newVal
        }
    },
    methods: {
        handleEventMount(info) {
            const el = info.el;
            el.style.cursor = 'pointer';
        },
        handleDayClick(info) {
            const selectedDate = info.dateStr;
            this.$emit('date-selected', selectedDate);
            document.querySelectorAll('.fc-day').forEach(day => {
                day.style.backgroundColor = '';
            });
            info.dayEl.style.backgroundColor = '#ffff99';
        },
    },
};
</script>

<style scoped>
.full-calendar {
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>






































































