<template>
    
    <div class="container px-4 mx-auto mt-10">
      <div class="max-w-lg px-10 mx-auto py-5 rounded-xl" :class="{'bg-blue-100': isLogin, 'bg-green-100': isSignup}">
        <div class="text-center mb-6">
          <h2 :class="{'text-3xl': isLogin, 'text-4xl': isSignup, 'font-extrabold': true}">
            {{ formTitle }}
          </h2>
        </div>
        <form @submit.prevent="handleSubmit">
          <div v-if="isSignup" class="mb-6">
            <label class="block mb-2 font-extrabold" for="name">Name</label>
            <input
              v-model="formData.name"
              class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
              id="name"
              type="text"
              placeholder="Name"
            />
            <div class="error" v-if="errors.name">{{ errors.name }}</div>
          </div>
          <div class="mb-6">
            <label class="block mb-2 font-extrabold" for="email">Email</label>
            <input
              v-model="formData.email"
              class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
              id="email"
              type="email"
              placeholder="Email"
            />
            <div class="error" v-if="errors.email">{{ errors.email }}</div>
          </div>
          <div class="mb-6">
            <label class="block mb-2 font-extrabold" for="password">Password</label>
            <input
              v-model="formData.password"
              class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
              id="password"
              type="password"
              placeholder="**********"
            />
            <div class="error" v-if="errors.password">{{ errors.password }}</div>
          </div>
          <div v-if="isSignup" class="mb-6">
            <label class="block mb-2 font-extrabold" for="confirmPassword">Confirm Password</label>
            <input
              v-model="formData.confirmPassword"
              class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
              id="confirmPassword"
              type="password"
              placeholder="**********"
            />
            <div class="error" v-if="errors.confirmPassword">{{ errors.confirmPassword }}</div>
          </div>
          <div v-if="isLogin" class="flex flex-wrap -mx-4 mb-6 items-center justify-between">
            <div class="w-full lg:w-auto px-4 mb-4 lg:mb-0">
              <label for="remember">
                <input type="checkbox" id="remember" v-model="formData.rememberMe" />
                <span class="ml-1 font-extrabold">Remember me</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            class="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
          >
            {{ buttonText }}
          </button>
          <p class="text-center font-extrabold">
            {{ alternateText }}
            <router-link class="text-red-500 hover:underline" :to="alternateLink">{{ alternateLinkText }}</router-link>
        
           
        </p>
        
        </form>
      </div>
    </div>
  
  </template>
   


<script>
export default {
  name: 'AuthForm',
  

  props: {
      type: {
        type: String,
        required: true,
        validator(value) {
          return ['login', 'signup'].includes(value);
        }
      }
    },
    data() {
      return {
        formData: {
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          rememberMe: false
        },
        errors: {}
      };
    },
    computed: {
      isLogin() {
        return this.type === 'login';
      },
      isSignup() {
        return this.type === 'signup';
      },
      formTitle() {
        return this.isLogin ? 'Sign in' : 'Sign up';
      },
      buttonText() {
        return this.isLogin ? 'Sign in' : 'Sign up';
      },
      alternateText() {
        return this.isLogin ? "Don't have an account?" : 'Already have an account?';
      },
      alternateLinkText() {
        return this.isLogin ? 'Sign up' : 'Log in';
      },
      alternateLink() {
        return this.isLogin ? '/signup' : '/login';
      }
    },
    methods: {
      async handleSubmit() {
        if (this.isLogin) {
          await this.submitLogin();
        } else {
          await this.submitSignup();
        }
      },
      async submitLogin() {
        this.errors = { email: '', password: '' };
        let valid = true;
  
        if (!this.formData.email.trim()) {
          this.errors.email = 'Email is required.';
          valid = false;
        }
        if (!this.formData.password.trim()) {
          this.errors.password = 'Password is required.';
          valid = false;
        }
  
        if (valid) {
          try {
            const response = await axios.post(
              'https://dummyjson.com/c/b9a5-5f1e-43f6-a497',
              {
                email: this.formData.email,
                password: this.formData.password
              }
            );
            console.log(response.data);
  
            if (response.data.success) {
              alert('Login successful!');
            } else {
              alert('Invalid credentials.');
            }
          } catch (error) {
            console.error('Login error:', error);
          }
        }
      },
      async submitSignup() {
        this.errors = {
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          final: ''
        };
        let valid = true;
  
        if (this.formData.password !== this.formData.confirmPassword) {
          this.errors.final = 'Passwords do not match.';
          valid = false;
        }
  
        Object.keys(this.formData).forEach(key => {
          if (!this.formData[key].trim()) {
            this.errors[key] = `${this.capitalizeFirstLetter(key)} is required.`;
            valid = false;
          }
        });
  
        if (valid) {
          try {
            const response = await axios.post(
              'https://dummyjson.com/c/610a-9f25-4de6-8ee0',
              {
                email: this.formData.email,
                password: this.formData.password
              }
            );
            console.log(response.data);
            if (response.data.status === 'success') {
              alert('Signup successful!');
              this.formData = {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                rememberMe: false
              };
            } else {
              alert('Signup failed.');
            }
          } catch (error) {
            console.error('Signup error:', error);
          }
        }
      },
      capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    }
 
}
</script>
  

  