<template>
  <div class="col-w-full max-w-xs mx-auto mb-4-12">
    <div class="shadow-md rounded px-8 pt-6 pb-8 mt-16">
      <img id="profile-img" src="../assets/team.png" class="w-1/2 mx-auto" />
      <Form @submit="handleRegister" :validation-schema="schema">
        <div v-if="!successful">
          <div class="form-group mb-4">
            <label for="username" class="block text-gray-700 text-lg font-bold mb-2">Username</label>
            <Field name="username" type="text" class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <ErrorMessage name="username" class="error-feedback" />
          </div>
          <div class="form-group mb-4">
            <label for="email" class="block text-gray-700 text-lg font-bold mb-2">Email</label>
            <Field name="email" type="email" class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <ErrorMessage name="email" class="error-feedback" />
          </div>
          <div class="form-group mb-4">
            <label for="password" class="block text-gray-700 text-lg font-bold mb-2">Password</label>
            <Field name="password" type="password" class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <ErrorMessage name="password" class="error-feedback" />
          </div>

          <div class="form-group flex justify-center">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" :disabled="loading">
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              Sign Up
            </button>
          </div>
        </div>
      </Form>

      <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });

    return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/about");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>
