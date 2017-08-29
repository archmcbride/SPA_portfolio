var myRouter = new VueRouter({
    routes: [
        {
            path: '/', // localhost:8080/#
            component: {
                template: `<h1 class="text-center">Random Image Gallery.</h1>`,   
            }
        },
        {
            //just like in express, we can use parameterized URLs with Vue
            /*
            /images/cats
            /images/business
            /images/abstract
            */
           // path: '/images/:category',
            // component : {
            //     computed: {
            //         // imageUrl needs to be computed, not just regular data, because the $route.params change. whenever they change, we want to recalculate the imageUrl
            //         imageUrl: function(){
            //             // in express, we accessed req.params. here, we have this.$route.params.
            //             return `http://lorempixel.com/400/400/${this.$route.params.category}`
            //             return `/images/${this.$route.params.category}.jpg`
            //         }
            //     },
            //     template: '#images',
            //     created: function(){ console.log('created the images component')},
            //     destroyed: function(){ console.log('destroyed the images component')}
            // }

        },
        {
            // path: '/about',
            // // because we don't have the component initially, we write a function that defines how to get it, using AJAX
            // // when we finally have the component, we RESOLVE it. if we fail to retrieve the component, we REJECT.
            // component: function(resolve, reject){
            //     $.get('/about.html', function(htmlFromServer){
            //         resolve({
            //             template: htmlFromServer
            //         })
            //     })
            // }
        }

    ]
})




var mainVm = new Vue({
    el: '#app',
    router: myRouter,
    data: {
        // user : {
        //     name: 'steve'
        }
    }
})
