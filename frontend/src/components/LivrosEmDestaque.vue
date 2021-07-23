<template>
	<v-app id="inspire">
		<v-navigation-drawer
			v-model="drawer"
			app
			class="pt-4"
			color="rgba(0, 0, 0, 0.56)"
			mini-variant
			mini-variant-width="40"
			permanent
		>
			<v-item-group v-model="window" class="shrink mr-6" mandatory tag="v-flex">
				<v-item v-for="n in length" :key="n" v-slot="{ active, toggle }">
					<div>
						<v-btn :input-value="active" icon @click="toggle">
							<v-icon>mdi-record</v-icon>
						</v-btn>
					</div>
				</v-item>
			</v-item-group>
		</v-navigation-drawer>

		<v-main style="padding: 0">
			<v-row class="mb-4" align="center" style="margin: 10% auto 10%">
				<v-col>
					<v-window
						style="background-coloer: blue"
						v-model="window"
						class="elevation-1"
						vertical
					>
						<v-window-item v-for="n in length" :key="n">
							<v-card flat>
								<v-card-text>
									<v-avatar color="grey" class="mr-4"></v-avatar>
									<strong class="text-h6">Title {{ n }}</strong>
									<v-spacer></v-spacer>
									<v-btn icon>
										<v-icon>mdi-account</v-icon>
									</v-btn>

									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</p>

									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</p>

									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</p>
								</v-card-text>
							</v-card>
						</v-window-item>
					</v-window>
				</v-col>
			</v-row>
		</v-main>
	</v-app>
</template>

<script>
	export default {
		data: () => ({
			length: 3,
			window: 0,
		}),
	};
</script>