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

# Looping in HTML with directive in Vue.js
- Special kind of the attributes that modifies element behaviour
- Directive starts with v- prefix
- Add dynamic functionality
- Used in Vue.js, Angular, Svelte
- Immediately modfies the dom
- eg. v-if, v-for etc.

# Difference between React.js and Vue.js
![Screenshot](VueVsReact1.png)
![Screenshot](VueVsReact2.png)
![Screenshot](VueVsReact6.png)
![Screenshot](VueVsReact3.png)
![Screenshot](VueVsReact4.png)
![Screenshot](VueVsReact5.png)
