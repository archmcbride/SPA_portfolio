var myRouter = new VueRouter({
    routes: [
       
        {
            path: '/',
            // because we don't have the component initially, we write a function that defines how to get it, using AJAX
            // when we finally have the component, we RESOLVE it. if we fail to retrieve the component, we REJECT.
            component: {
               template: `<div class="container" >
                   <div class="row">
                        <div class="cell">
                           <div class="col-md-4"><img src="images/family2016.png" class="img-responsive" alt="Responsive image">Family photo</div>
                           <div class="col-md-8"><p >Detail-oriented project manager transitioning to the tech world! Expert at planning projects (and kids and activites and girls night). I love helping people learn something new and be successful with their projects. </p>
                           </div>
                        </div>
                   </div>
                 <!--Change text to white once the size is smaller than 992px-->
               </div>`
            }
            // component: {
            //     template: '<h1>hello</h1>'
            // }
        },
        {
            path: '/contacts',
            // because we don't have the component initially, we write a function that defines how to get it, using AJAX
            // when we finally have the component, we RESOLVE it. if we fail to retrieve the component, we REJECT.
            component: {
                template:
                `<div class="container table stretch-v ">
                  <div class="row stretch-v"> 

                          <div class="col-md-12"><p>Contact me!</p></div>
                          <div class="col-md-8"><p>Email: archmcbride@hotmail.com</p></div>
                   </div>  
                </div>`
            }
        },
        {
            path: '/projects',
            component: {
                template:
                `<div class="container">
                      <div class="row project">
                          <div class="col-md-8"><p>Future project information</p>
                          </div>
                          <div class="col-md-4"><img src="images/minion_quote.png" class="img-responsive minion" alt="Responsive image"></div>
                          <!--Change text to white once the size is smaller than 992px-->
                      </div><br />
                      <div class="row project">
                          <div class="col-md-4"><img src="images/frog.png" class="img-responsive minion" alt="Responsive image"></div>
                          <div class="col-md-8"><p>Future project information</p>
                          </div>
                          <!--Change text to white once the size is smaller than 992px-->
                      </div><br />
                      <div class="row project">
                          <div class="col-md-8"><p>Future project information</p>
                          </div>
                          <div class="col-md-4"><img src="images/adulting_dog.png" class="img-responsive minion" alt="Responsive image"></div>
                          <!--Change text to white once the size is smaller than 992px-->
                      </div><br />
                </div>`
            }
        }
    ]
})




var mainVm = new Vue({
    el: '#app',
    router: myRouter,
    data: {
    }
})
