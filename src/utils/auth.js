import axios from 'axios';
  
  export default {
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
        return this.isLogin ? '/login' : '/signup';
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

    
  };

  