const app = Vue.createApp({
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      errors: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        final: "",
      },
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    async submitForm() {
      this.errors = {
        name: "",
        dob: "",
        email: "",
        password: "",
        confirmPassword: "",
        final: "",
      };
      let valid = true;
      console.log(this.formData);
      console.log(this.formData, "formData");

      if (this.formData.password !== this.formData.confirmPassword) {
        this.errors.final = "Passwords do not match.";
        valid = false;
      }

      Object.keys(this.formData).forEach((key) => {
        if (!this.formData[key].trim()) {
          this.errors[key] = `${this.capitalizeFirstLetter(key)} is required.`;
          valid = false;
        }
      });

      if (valid) {
        try {
          const response = await axios.post(
            "https://dummyjson.com/c/610a-9f25-4de6-8ee0 ",
            {
              email: this.signupForm.email,
              password: this.signupForm.password,
            }
          );
          console.log(response.data);
          if (response.data.status === "success") {
            alert("Signup successful!");
            this.formData.email = "";
            this.formData.password = "";
          } else {
            alert("Signup failed.");
          }
        } catch (error) {
          console.error("Signup error:", error);
        }
      }
    },
  },
});

app.mount("#app");
