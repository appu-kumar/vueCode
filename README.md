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

# custom component
- Getting props in props property
- Passing the props from App.vue to custom component or one component to another component
- Registering the component in the parent eg. component(App.vue) inside the components property


# custom event and global method(parent method)
- In Vue.js, custom events allow communication between child and parent components, while global methods provide reusable utility functions accessible throughout the application. Let's explore both in detail.

# custom event(It is like inbuilt event v-on:click,v-on:change etc)
- It is based on the event bubbling. okay
- Events in Vue do not bubble automatically up the component hierarchy like in the DOM.
- Events only travel one level up, from child to direct parent.
- Emitting Custom Events (Child to Parent Communication)
- Use $emit() in the child component to send an event to the parent.
- Listen the event at the parent level
- See the syntactic sugar in the vue.js
- See example App.vue in ActorList component


# What is a Slot in Vue.js?
- A slot in Vue.js is a placeholder inside a child component where parent components can insert their own content.
- To make components more reusable and flexible.
- To allow custom content inside a child component.
- <slot> </slot> provided by the vue.js
- <slot />  we can use like this also okay
- template inside the template is used to match with name slot okay see base-layout component in emitwala project


# Lifecycle Methods in Vue.js
- Vue.js provides lifecycle hooks that allow you to execute code at different stages of a component’s existence. These hooks help in managing data fetching, event binding, DOM manipulation, and cleanup tasks.

# There are four major phases in a Vue component’s lifecycle:
- V.V.Imp Creation Phase – Component is being created, but not yet added to the DOM.
  - created()
  - Runs after data and methods are set up (but before DOM is available). Useful for API calls.
  - Good for API calls that don’t depend on the DOM. E.g., fetching user data, configs, etc.
- V.V.IMP Mounting Phase – Component is inserted into the DOM.
  - mounted()
  - Runs after component is added to the DOM (perfect for DOM manipulation).
  - Good for API calls that depend on the DOM. E.g., measuring elements, interacting with third-party libraries.
- Updating Phase – Component reacts to changes and re-renders.
  - updated()
  - Runs after Vue updates the DOM (useful for responding to UI changes).
- Unmounting Phase – Component is removed from the DOM.
  - unmounted()
  - Runs after component is removed from the DOM.


# meta component
- In Vue.js, meta components are used to dynamically update the title, description, and other metadata of a page.
- This is important for SEO (Search Engine Optimization) and social media sharing.

# Why props option in export default object of child
- Vue uses export default to track, validate, and reactively update props.
- If the parent updates a prop, Vue can detect the change.
- Since Vue components are modular, export default ensures each component:

# Vue.js follows modular component paradigm
- A modular component is a self-contained, reusable, and independent unit of a UI.
- It helps break down large applications into smaller, manageable parts.
- Each component focuses on a specific task, making the code clean and scalable.

# How export default Works in Vue.js?
- In Vue.js, export default is used to export an object that contains:
- Data (JavaScript logic)
- Template (HTML UI structure)
- eg. 
- export default {
  template: `<h1>Hello, {{ name }}!</h1>`,
  data() {
    return { name: "Appu" };
  }
};


# How is the Template UI Exported?
- Vue's internal compiler does this by:
- Extracting the <template>
- Compiling it into a render function
- Merging it with the exported object



# Fetching the data from the JSONPlaceholder API, render the returned list to the page
- See in the FetchData project okay.



# Composition API
- The Composition API is a way of writing Vue components where we group logic together instead of splitting it across different component options (data, methods, computed, watch, etc.).
- It was introduced in Vue 3 to make components more readable, reusable, and maintainable—especially for large projects.
- The Composition API is not a replacement for the Options API but an alternative approach for structuring Vue components. It helps organize logic, improves reusability, and makes the code easier to maintain, especially in large projects.

# What is ref() in Vue 3?
- ref() is a function from Vue 3 that makes a value reactive.
- This means Vue will track changes to the value and automatically update the UI.
- ref() returns an object
- ref() is used inside setup() in Vue 

# Write reactive data at single place
- const state = reactive({name:'',users:[], etc..});
- It is enhancement of the ref() okay



# Final verdict over the Composition API
- Write the script tag with setup    '<script setup>  </script>'. This line removes the setup() { }  function ok
- No need to register the component automatically done by the vue.js compiler.
- No need to return any value, Because there is no any setup kind of the funciton.
- defineProps() and defineEmits()  
- Continue working on this you will get more knowledge.


# Composables 
- Composables are reusable functions that help organize and share logic in Vue 3 using the Composition API. They allow you to extract logic from components and reuse it across multiple components.
- Imagine you have multiple components that need to fetch data, handle user authentication, or manipulate the DOM. Instead of repeating the logic in each component, you can create a composable and reuse it.
- With Composables: A single function (useUser()) can be reused in different components.
- A composable is simply a function that encapsulates reusable logic.





















# Set up the  SSH key with greytip's project
- 1. Step 1: Check for an Existing SSH Key
  - ls -al ~/.ssh
- 2. Step 2: Generate a New SSH Key
  - ssh-keygen -t ed25519 -C "your-email@example.com"
- 3. Step 3: Add SSH Key to SSH Agent
  - eval "$(ssh-agent -s)"
  - ssh-add ~/.ssh/id_ed25519
- 4. Step 4: Add SSH Key to GitHub
  - cat ~/.ssh/id_ed25519.pub
  - Go to GitHub → Settings → SSH and GPG keys
  - GitHub SSH Keys Settings
  - Click New SSH Key → Paste your key → Add SSH Key.


# Install brew 
- To download application in (mac and linux)

# Install Python 3.11
- export PYENV_ROOT="$HOME/.pyenv"
[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
- pyenv --version
- pyenv install {python-version}
- to install python 3.9
- pyenv install 3.9
- pyenv versions(list all the versions of the python in this env)
- If you want to set any python version globally, you can use
- pyenv global (python version)

# Some basic commands of postgresql and docker
- \q   # Exit psql
- \l   # To list all the dbs
- exit # Exit the Docker container
- 1. psql -U $(whoami) -h localhost -p 5432 -d postgres  # login using the computer username then create default postgres user or any user ok
    - CREATE ROLE postgres WITH SUPERUSER CREATEDB CREATEROLE LOGIN PASSWORD 'yourpassword';
- 2. Restart PostgreSQL
    - After creating the role, restart PostgreSQL:
    - brew services restart postgresql@15
- 3. Login to PostgreSQL
   - psql -U postgres -h localhost -p 5432
- 4. Create a new database
    - create database zaire_mt;   
- 5. Connect to the database
  - \c zaire_mt    
- Run sql script
- psql -U postgres -d zaire_mt -h localhost -p 5432 -f mandatory_sql_script.sql
- brew services restart postgresql@15

- login using docker   -->  docker exec -it citus psql -U postgres

- docker system prune -a
- docker run -d --name citus -p 5432:5432 -e POSTGRES_PASSWORD=mypass citusdata/citus:12.1     --> create the image 
- sudo docker exec -it citus bash 

- sudo docker exec -it citus bash
- psql -U postgres
- CREATE DATABASE zaire_mt_1;
- \q
- psql -U postgres -d zaire_mt_1 -f test1.sql    -->Run the SQL Script Inside Docker
- exit 
- docker cp test1.sql citus:/test1.sql
- psql -U postgres -d zaire_mt_1 -f /test1.sql
- sudo lsof -i:5432
- kill -9 73423


- Inside Docker: Works ✅ → Always use docker exec -it citus psql -U postgres
- From Mac:
- If failing, check brew services list
- Stop local PostgreSQL if needed
- Use psql -h localhost -p 5432 -U postgres




- # virtaul env
- source .venv/bin/activate    # if virtaul env of python is already created then activate with this command
- deactivate      ---> this command to deactivate the python virtual env

- # To create new virtual environment
- python3 -m venv python_env
- source name_env_kro/bin/activate

- # Changing the host 
- sudo nano /etc/hosts


# All commands to setup project
- brew installs wale steps
- /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
- echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
- eval "$(/opt/homebrew/bin/brew shellenv)"
- brew info

- Installing git
- brew install git

# python setup for recruit core and recruit marketplace
- brew install pyenv
- export PYENV_ROOT="$HOME/.pyenv"
- [[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"
- eval "$(pyenv init -)"
- pyenv --version   
- pyenv  -->it is used to install various versions of the python
- pyenv versions  --> list all the python installed

- brew install nvm
- nano ~/.zshrc
- export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
- nvm install 14 failed need to check
- nvm use {node_version}   --> use node according to your requirement



# project setup 
- mkdir -p ~/Workspace/recruit-platform-core
- git clone git@github.com:greytip/recruit-platform-core.git
- python3 -m venv python-env 
- source python-env/bin/activate
- If version error comes try to create virtual env under python 3.11.11 okay

# Run postgresql using docker
- docker run -d --name citus -p 5432:5432 -e POSTGRES_PASSWORD=mypass citusdata/citus:12.1
- psql -U postgres -h localhost -p 5432    -->login wala

# postgresql locally
- brew services list
- brew services start postgresql@15
- psql -U postgres    ->login 












   




