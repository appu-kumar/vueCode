# vueCode
Creating the repo to track my vue.js learning


# Definition of Vue.js
- A Javascript framework for building web user interfaces.
- A rich, incrementally adoptable ecosystem that scales between a library and fully-featured framework.
- Builds on top of the standard HTML, CSS and JavaScript with intuitive API and world-class documentation
- A reactive, complier-optimized rendering system that rarely requires manual optimization


# Let's createApp using the CDN of Vue.js
-  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
-  const {createApp} = Vue;
             const myapp = createApp({
                data(){
                    return {
                        message:"I am learning Vue.js",
                        name:"Appu kumar"
                    }
                }
             })

             myapp.mount("#app");


