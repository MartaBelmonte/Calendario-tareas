import { createApp } from 'vue'
import App from './App.vue'
import CalendarWidget from './components/CalendarWidget.vue'
import TaskList from './components/TaskList.vue'
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);

// Registra los componentes
app.component('CalendarWidget', CalendarWidget);
app.component('TaskList', TaskList);

app.mount('#app');