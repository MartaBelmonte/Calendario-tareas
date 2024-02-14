import { createApp } from 'vue'
import App from './App.vue'
import CalendarWidget from './components/CalendarWidget.vue'
import TaskDetail from './components/TaskDetail.vue'
import TaskInput from './components/TaskInput.vue'
import TaskList from './components/TaskList.vue'
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);

// Registra los componentes
app.component('CalendarWidget', CalendarWidget);
app.component('TaskDetail', TaskDetail);
app.component('TaskInput', TaskInput);
app.component('TaskList', TaskList);

app.mount('#app');