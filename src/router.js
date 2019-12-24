import Router from 'vue-router'
import Login from './components/Login'
import Home from './components/Home'
import AddMovie from './components/Admin/Movie/Add'

export const routes = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                auth: true
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                guest: true
            },            
        },
        {
            path: '/admin',
            name: 'Admin',
            component: AddMovie,
            children: [
                {
                    path: 'movie/add',
                    name: 'AddMovie',
                    component: AddMovie
                }
            ]
        },
    ]
})

routes.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.auth)){
        let authToken = localStorage.getItem('d1wasLoggedPass');
        if(authToken == null || authToken == false){
            alert(authToken) 
            next({
                path: '/login'
            })
        }    
    }
    next()
})