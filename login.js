const app = Vue.createApp({
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
        rememberMe: false,
      },
      errors: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async submitLogin() {
      this.errors = { email: "", password: "" };
      let valid = true;

      if (!this.loginForm.email.trim()) {
        this.errors.email = "Email is required.";
        valid = false;
      }
      if (!this.loginForm.password.trim()) {
        this.errors.password = "Password is required.";
        valid = false;
      }

      if (valid) {
        try {
          const response = await axios.post(
            "https://dummyjson.com/c/b9a5-5f1e-43f6-a497",
            {
              email: this.loginForm.email,
              password: this.loginForm.password,
            }
          );
          console.log(response.data);

          if (response.data.success) {
            alert("Login successful!");
          } else {
            alert("Invalid credentials.");
          }
        } catch (error) {
          console.error("Login error:", error);
        }
      }
    },
  },
});

app.mount("#app");
