<template>
  <AuthForm type="login"></AuthForm>
</template>

<script>
import AuthForm from '../components/AuthForm.vue'
export default {
  name: 'Login',
  components: {
    AuthForm,
    Navbar
  }
}
</script>
