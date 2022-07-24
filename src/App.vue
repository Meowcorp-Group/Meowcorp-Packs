<script>
export default {
	name: 'App',

	data() {
		return {
			drawer: true,
			loggedIn: true,
		};
	},
};
</script>

<template>
	<v-app>
		<v-app-bar app>
			<v-app-bar-nav-icon
				@click.stop="drawer = !drawer"
			></v-app-bar-nav-icon>
			<v-toolbar-title>Meowcorp Packs <sup>BETA</sup></v-toolbar-title>

			<v-spacer></v-spacer>
			<v-btn icon x-large v-if="loggedIn">
				<v-avatar color="brown"
					><v-img
						src="https://drive.google.com/uc?export=download&id=16fvkSOAsL_-tZzyMyh7DUvdUttpUTEoO"
					></v-img
				></v-avatar>
			</v-btn>
		</v-app-bar>

		<v-navigation-drawer app v-model="drawer">
			<v-list>
				<v-list-item
					v-if="!loggedIn"
					prepend-icon="mdi-account-circle"
					title="Not logged in"
				></v-list-item>
				<v-list-item
					v-if="loggedIn"
					prepend-avatar="https://drive.google.com/uc?export=download&id=16fvkSOAsL_-tZzyMyh7DUvdUttpUTEoO"
					title="John Doe"
					subtitle="john.doe@meowcorp.net"
				></v-list-item>
			</v-list>
			<v-divider></v-divider>

			<v-list nav>
				<v-list-item prepend-icon="mdi-home" value="home" to="/"
					>Home</v-list-item
				>
				<v-list-item
					prepend-icon="mdi-archive"
					value="modpacks"
					to="/modpacks"
					>Modpacks</v-list-item
				>
				<v-list-item prepend-icon="mdi-wrench" value="mods" to="/mods"
					>Mods</v-list-item
				>
				<v-list-item
					prepend-icon="mdi-cube"
					value="respacks"
					to="/respacks"
					>Resource Packs</v-list-item
				>
			</v-list>
			<v-divider></v-divider>
			<v-list nav>
				<v-list-item
					v-if="!loggedIn"
					@click="loggedIn = !loggedIn"
					prepend-icon="mdi-login"
					value="login"
					>Login</v-list-item
				>
				<v-list-item
					v-if="loggedIn"
					@click="loggedIn = !loggedIn"
					prepend-icon="mdi-logout"
					value="logout"
					>Logout</v-list-item
				>
			</v-list>
		</v-navigation-drawer>

		<!-- Sizes your content based upon application components -->
		<v-main>
			<!-- Provides the application the proper gutter -->
			<v-container fluid>
				<!-- If using vue-router -->
				<router-view></router-view>
			</v-container>
		</v-main>

		<v-footer app>
			<!-- -->
		</v-footer>
	</v-app>
</template>
