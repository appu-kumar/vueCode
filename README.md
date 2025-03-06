# vueCode
Creating the repo to track my vue.js learning


# Definition of Vue.js
- A Javascript framework for building web user interfaces.
- A rich, incrementally adoptable ecosystem that scales between a library and fully-featured framework.
- Builds on top of the standard HTML, CSS and JavaScript with intuitive API and world-class documentation
- A reactive, complier-optimized rendering system that rarely requires manual optimization.


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

# Nested if-else directives
- v-if  v-else
- v-if v-else-if v-else ...

# Event Handling & View Model
- By using v-on and v-bind to make page interactive or reactive
- How v-model directive can be used in place of v-on and v-bind to create a two-way binding.

# v-model  two-way binding
- Bind the data with value of input tag.
- Update the value on value change.

# @click and v-on:click
- Both are same.

# Passing the parameters and $event to the method
- You need access to event properties (event.target, event.preventDefault(), etc.).
- You want to modify event behavior based on the event type.
- $event is required when passing custom arguments so that Vue still provides access to the original event object.
- If no arguments are passed, Vue automatically injects the event object.
- It is useful for handling native events inside methods while also using additional parameters.

# watch option
- In Vue, the watch option lets you observe changes to a specific data property and execute a function when the property changes.
- Running asynchronous operations (e.g., API calls).
- Watching nested objects or arrays for changes.
- Performing side effects when data updates.

- How It Works?
- 1 count is a data property (data()).
- 2 In watch, we observe count.
- 3  When count changes, Vue automatically calls the watch function.
- 4 The function receives two parameters:
- 4.1 newValue → the updated value.
- 4.2 oldValue → the previous value.

# Important about watch option
- Can watch Have the Same Name as a Variable?
- Yes! In watch, the method name should match the data property it is watching.

# Best Example of the watch
- API call
- Side Effect like useEffect(()=>{},[])
- Search Query (searching functionality)
- Input value change




