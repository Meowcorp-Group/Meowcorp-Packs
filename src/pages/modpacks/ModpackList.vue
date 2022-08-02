<script>
import { db } from './../../plugins/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export default {
	data() {
		return {
			modpacks: [],
			modpackIds: [],
			checkedFilter: [],
			resultSort: ['Popularity'],
		};
	},
	watch: {
		checkedFilter: {
			handler(newValue) {
				console.log(newValue);
			},
			deep: true,
		},
	},
	methods: {
		async getPacks() {
			const querySnapshot = await getDocs(collection(db, 'modpacks'));
			await querySnapshot.forEach(async (doc) => {
				// doc.data() is never undefined for query doc snapshots
				console.log(doc.id, ' => ', doc.data());
				this.modpacks.push(doc.data());
				this.modpackIds.push(doc.id);
			});
			console.dir(this.modpacks);
		},
		async genBoilerPlate() {
			const docRef = await addDoc(collection(db, 'modpacks'), {
				updateDate: {
					seconds: 1659162296,
					nanoseconds: 209000000,
				},
				downloads: 12,
				author: 'meowcorp',
				hearts: 6,
				icon: 'https://cdn.discordapp.com/attachments/812822210354872351/1002954863447117894/icon.png',
				name: 'Test Modpack 8',
				gameVersion: '1.18.2',
				description: 'i have i have i have quilt',
				contributors: [
					'meowcorp',
					'waoweens',
					'sitaslmao',
					'skytoon50',
				],
				category: 'kitchen-sink',
				loaderVersion: '0.17.1',
				createDate: {
					seconds: 1659090519,
					nanoseconds: 810000000,
				},
				modloader: 'quilt',
			});
			console.log('Document written with ID: ', docRef.id);
		},
	},
	created() {
		this.getPacks();
		// this.genBoilerPlate();
	},
};
</script>
<template>
	<v-container class="pa-4 pa-sm-6 pa-md-8" style="max-width: 80rem">
		<h1>Modpacks</h1>
		<v-row dense>
			<v-col style="max-width: 20rem">
				<div style="max-width: 20rem">
					<v-card class="mt-2">
						<v-card-title><b>Filter</b></v-card-title>
						<v-list-item>
							<v-btn
								variant="outlined"
								@click="checkedFilter = []"
								>Clear Filters</v-btn
							>
						</v-list-item>
						<v-list>
							<v-list-item>
								<p class="pb-1">Category</p>
								<v-checkbox-btn
									v-model="checkedFilter"
									label="Adventure"
									value="adventure"
									density="compact"
									hide-details
								></v-checkbox-btn>
								<br />
								<v-checkbox-btn
									v-model="checkedFilter"
									label="Combat"
									value="combat"
									density="compact"
									hide-details
								></v-checkbox-btn>
								<br />
								<v-checkbox-btn
									v-model="checkedFilter"
									label="Kitchen Sink"
									value="kitchen-sink"
									density="compact"
									hide-details
								></v-checkbox-btn>
								<br />
								<v-checkbox-btn
									v-model="checkedFilter"
									label="Lightweight"
									value="lightweight"
									density="compact"
									hide-details
								></v-checkbox-btn>
								<br />
								<v-checkbox-btn
									v-model="checkedFilter"
									label="Optimization"
									value="optimization"
									density="compact"
									hide-details
								></v-checkbox-btn>
								<br />
							</v-list-item>
							<v-list-item>
								<p class="pb-1">Modloader</p>
								<v-checkbox-btn
									v-model="checkedFilter"
									intermediate-icon="mdi-anvil"
									label="Forge"
									value="forge"
									density="compact"
									hide-details
								></v-checkbox-btn>
								<br />
								<v-checkbox-btn
									v-model="checkedFilter"
									prepend-icon=""
									label="Fabric"
									value="fabric"
									density="compact"
									hide-details
								></v-checkbox-btn>
								<br />
								<v-checkbox-btn
									v-model="checkedFilter"
									prepend-icon=""
									label="Quilt"
									value="quilt"
									density="compact"
									hide-details
								></v-checkbox-btn>
								<br />
								<v-checkbox-btn
									v-model="checkedFilter"
									prepend-icon=""
									label="Rift"
									value="rift"
									density="compact"
									hide-details
								></v-checkbox-btn>
								<br />
								<v-checkbox-btn
									v-model="checkedFilter"
									prepend-icon=""
									label="LiteLoader"
									value="liteloader"
									density="compact"
									hide-details
								></v-checkbox-btn>
								<br />
							</v-list-item>
						</v-list>
					</v-card>
				</div>
			</v-col>

			<v-col style="max-width: 60rem">
				<div>
					<v-card class="mt-2 pa-2">
						<v-row>
							<v-col>
								<v-text-field
									variant="outlined"
									hide-details
									label="Search..."
									prepend-inner-icon="mdi-magnify"
								></v-text-field>
							</v-col>
							<v-col cols="3">
								<v-select
									variant="outlined"
									hide-details
									label="Sort"
									v-model="resultSort"
									:items="[
										'Popularity',
										'Hearts',
										'Downloads',
									]"
								></v-select>
							</v-col>
						</v-row>
					</v-card>
				</div>
				<div
					v-for="(modpack, index) in modpacks"
					style="max-width: 60rem"
				>
					<v-card class="mt-2">
						<v-row>
							<v-col sm="1">
								<v-card-item>
									<template v-slot:prepend>
										<v-img :src="modpack.icon" width="100px"></v-img>
									</template>
								</v-card-item>
							</v-col>
							<v-col>
								<v-card-title style="font-size: 1.5rem"
									><router-link
										:to="`/modpack/${modpackIds[index]}`"
										style="
											color: inherit;
											text-decoration: none;
										"
										><b>{{ modpack.name }}</b></router-link
									>&nbsp;
									<span style="font-size: 1rem"
										>by
										<router-link
											:to="`/user/${modpack.author}`"
											style="color: inherit"
											>{{ modpack.author }}</router-link
										></span
									></v-card-title
								>
								<v-card-text>
									{{ modpack.description }}
								</v-card-text>
							</v-col>
						</v-row>
					</v-card>
				</div>
			</v-col>
		</v-row>

		<ul>
			<li v-for="(modpack, index) in modpacks">
				{{ index + 1 }}. {{ modpack }}
			</li>
		</ul>
	</v-container>
</template>
