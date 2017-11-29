var myRouter = new VueRouter({
    routes: [
       
        {
            path: '/',
            // because we don't have the component initially, we write a function that defines how to get it, using AJAX
            // when we finally have the component, we RESOLVE it. if we fail to retrieve the component, we REJECT.
            component: {
               template: `
                   <div class="container">
                         <div class="row">
                                <div class="cell">
                                       <div class="col-md-4"><img src="images/family2016.png" class="img-responsive" alt="Responsive image">Family photo
                                       </div>
                                       <div class="col-md-8">
                                              <p>Detail-oriented project manager transitioning to the tech world! Expert at planning projects 
                                              (and kids and activites and girls night). I love helping people learn something new and be successful with their projects. </p>
                                              <p>An efficient and organized project manager with over 10 years of experience in construction and engineering transitioning to 
                                              web development after coding bootcamp. A flexible, self-directed professional who specializes in organization, client-focused projects, and cross-functional teams. 
                                              Interested in a lifelong pursuit of learning, including more in depth understanding of web design, development, testing and user experience. 
                                              </p>
                                       </div>
                                </div>
                         </div><!--Change text to white once the size is smaller than 992px-->
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
                              <div class="col-md-12"><p>Contact me!</p>
                              </div> 
                               <div class="col- md-4"><p>Katie McBride</p>
                              </div> 
                              <div class="col- md-4"><p>Cell: 303.718.6442</p>
                              </div> 
                              <div class="col- md-8"><p>Email: archmcbride22@gmail.com</p>
                              </div> 
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
                              
                              <div class="col-md-2"><img src="images/conroymen.jpg" class="img-responsive minion" alt="Responsive image">
                              </div> <!--Change text to white once the size is smaller than 992px--> 

                              <div class="col- md-10"><p><a href ="http://www.concretecommando.site" target="_blank"> www.concretecommando.site</a> (2017)</p>
                                    <p>This is a single page application (SPA) website for a small construction company that
                                    I completed for my final project at CodeCraft School of Technology, utilizing all the technology I learned during CodeCraft, including JavaScript,
                                    Mongoose and Vue. It allows the client to log in to the website and view their concrete projects, the status of the project,
                                    costs associated, the proposed start date and other relevant information. It also links with the Google Maps API to show the location of the
                                    project. </p> 
                              </div>  
    
                        </div><br /> 
                        
                        <div class="row project">                                
                              <div class="col-md-8"><p>healthHAWK (2017)</p>
                                    <p>A full-stack app built with Vue, MongoDB, Express, Node.js. allowing the user to visualize their nutritional intake.
                                    The calorie-counting app allows users to have a clearer view, via pie charts, of their calories per meal (breakfast,
                                    lunch, dinner, or snacks), and all the foods eaten. This was a group project, which expected our group to work
                                    collaboratively to build the front-end, the server and the database. 
                                    To view code, please see github link: <a href ="https://github.com/archmcbride/healthHAWK.git" target="_blank"> healthHAWK github link</a>
                                    </p>
                              </div> 
                              <div class="col-md-4"><img src="images/hawk-logo.jpg" class="img-responsive minion" alt="Responsive image">
                              </div> <!--Change text to white once the size is smaller than 992px-->                       
                        </div><br /> 

                        <div class="row project">       
                              <div class="col-md-4"><img src="images/hugo-villegas-267210.jpg" class="img-responsive minion" alt="Responsive image">       
                              </div>       

                              <div class ="col-md-8"><p>NASA API Asteroids project (2017)</p>              
                                    <p>This is a project that
                                      utilizes a NASA API to display the closest, potentially dangerous asteroids on a web page based
                                      on certain date parameters entered by the user. It also utilizes the server to mask the API key
                                      from the user. To view code, please see github link: <a href ="https://github.com/archmcbride/nasa_02.git" target="_blank"> NASA API github link</a>         
                                    </p>         
                              </div> <!--Change text to white once the size is smaller than 992px--> 
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
