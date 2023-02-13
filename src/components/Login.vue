<template>
	<div class="w-full max-w-xs mx-auto mb-4">
		<div class="shadow-md rounded px-8 pt-6 pb-8 mt-16">
			<img id="profile-img" src="../assets/team.png" class="w-1/2 mx-auto" />
			<Form @submit="handleLogin" :validation-schema="schema">
				<div class="form-group mb-4">
					<label for="username" class="block text-gray-700 text-lg font-bold mb-2">Username</label>
					<Field name="username" type="text" class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
					<ErrorMessage name="username" class="error-feedback" />
				</div>
				<div class="form-group">
					<label for="password" class="block text-gray-700 text-lg font-bold mb-2">Password</label>
					<Field name="password" type="password" class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
					<ErrorMessage name="password" class="error-feedback" />
				</div>
	
				<div class="form-group mt-4 flex justify-center">
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" :disabled="loading">
						<span v-show="loading" class="spinner-border spinner-border-sm"></span>
						<span>Login</span>
					</button>
				</div>
	
				<div class="form-group">
					<div v-if="message" class="alert alert-danger" role="alert">
						{{ message }}
					</div>
				</div>
			</Form>
		</div>
	</div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
	name: "Login",
	components: {
		Form,
		Field,
		ErrorMessage,
	},
	data() {
		const schema = yup.object().shape({
			username: yup.string().required("Username is required!"),
			password: yup.string().required("Password is required!"),
		});

		return {
			loading: false,
			message: "",
			schema,
		};
	},
	computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
	created() {
		if (this.loggedIn) {
			this.$router.push("/about");
		}
	},
	methods: {
		handleLogin(user) {
			this.loading = true;

			this.$store.dispatch("auth/login", user).then(
				() => {
					this.$router.push("/profile");
				},
				(error) => {
					this.loading = false;
					this.message =
						(error.response &&
							error.response.data &&
							error.response.data.message) ||
						error.message ||
						error.toString();
				}
			);
		},
	},
};
</script>

