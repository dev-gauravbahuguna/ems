const app=Vue.createApp({
    data(){
        return {
            form: {
                name: '',
                dob: '',
                email: '',
                password: '',
                confirmPassword: '',
              },
              errors: {
                name: '',
                dob: '',
                email: '',
                password: '',
                confirmPassword: '',
                final: '',
              },
            
        }
    },
    methods:{
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          },

        submitForm() {
            this.errors = { name: '', dob: '', email: '', password: '', confirmPassword: '', final: '' };
            let valid = true;
  
            if (this.form.password !== this.form.confirmPassword) {
              this.errors.final = 'Passwords do not match.';
              valid = false;
            }
  
            Object.keys(this.form).forEach((key) => {
              if (!this.form[key].trim()) {
                this.errors[key] = `${this.capitalizeFirstLetter(key)} is required.`;
                valid = false;
              }
            });
             
            if (valid) {            
              alert('Form is valid. Submitting...');
            }
        },
    }
})

app.mount('#app')