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


# computed option in Vue.js
- Use computed for derived values that need to be cached and updated reactively.
- Use watch for side effects such as API calls, event listeners, or debounced actions.
- If you need both, you can combine them for maximum efficiency.
- eg. firstName and lastName---->fullName  use fullName as variable in ui layer measn where we are mounting

- fullName is a computed property, but it behaves like a variable.
- When we write {{ fullName }} in the template, Vue automatically calls the computed function and displays the returned value.
- We do not need to call it as a function (fullName())—Vue handles it automatically.

- eg. calculating totalPrize of card in E-commerce
- computed properties are designed to derive and return values dynamically based on reactive data.
- They act like virtual properties that derive a new value from existing data.

- {{fullName}} actually we are callingthe fullName but no need to put fullName() Vue.js automatically handle this

# Now create the project with the help of the vite
- npm create vue@3  or npm create vite@latest
- install volar to get notification of element of vue.js


# SFC
- A Single File Component (SFC) in Vue.js is a .vue file that contains the HTML, CSS, and JavaScript needed for a component in a single file.

- Why Use Single File Components (SFC)?
- Encapsulation – Everything (template, logic, styles) is in one file.
- Reusability – Components can be reused across the app.
- Scoped Styles – CSS applies only to the specific component.
- Better Code Structure – Easier to read and maintain.

# SFC is divided in 3 parts
- 1. script-->For importing component
- 2. template for html
- 3. style for css check eg.

# Option API and Composition API
- Options API (export default) with normal <script> </script>, the Composition API (<script setup> </script>)

# Why Use Vite Instead of Webpack?
- If you write the code in script tag and put in html, no need of the build tool like vite or webpack
- Faster development (Instant HMR).
- Less configuration needed.
- Smaller and optimized production builds.
- Better for modern JavaScript frameworks (Vue, React, Svelte, etc.).

# Assignment
- Given by the Umesh
- userValidation 


