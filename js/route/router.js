const router = new VueRouter({
    routes: [
        {
            path:'',
            redirect:'/home'
        },{
            path:'/home',
            name:'home',
            component : () => fetch('./js/route/home.js').then(
                res => res.text()
            ).then(res => 
                eval(res)
            ) 
        },{
            path:'/food',
            name:'food',
            component: () => fetch('./js/route/food.js').then(
                res => res.text()
            ).then(res => 
                eval(res)
            )
        },{
            path:'/learn',
            name:'learn',
            component:() => fetch('./js/route/learn.js').then(
                res => res.text()
            ).then(res => 
                eval(res)
            )
        }
    ]
})