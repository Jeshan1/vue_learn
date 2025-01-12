import { createRouter, createWebHistory } from "vue-router";
import Form from '../form/Form.vue'
const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Form,
        props: { formType: 'login' }, // Pass the form type dynamically
    },
    {
        path: '/register',
        name:'Register',
        component:Form,
        props:{ formType:'register' }

    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router