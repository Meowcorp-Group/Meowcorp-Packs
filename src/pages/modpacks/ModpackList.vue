<script>
import { db } from './../../plugins/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export default {
	data() {
		return {
			modpacks: [],
		};
	},
	methods: {
		async getPacks() {
			const querySnapshot = await getDocs(collection(db, 'modpacks'));
			await querySnapshot.forEach(async (doc) => {
				// doc.data() is never undefined for query doc snapshots
				// console.log(doc.id, ' => ', doc.data());
				this.modpacks.push(doc.data());
			});
			// console.dir(this.modpacks);
		},
	},
	created() {
		this.getPacks();
	},
};
</script>
<template>
	<v-container class="pa-4 pa-sm-6 pa-md-8" style="max-width: 80rem">
		<h1>Modpacks</h1>
		<v-row>
			<v-col>
				<div
					v-for="(modpack, index) in modpacks"
					style="max-width: 60rem"
				>
					<v-card class="mt-2">
						<v-card-title
							><span style="font-size: 1.25em;"><b>{{ modpack.name }}</b></span>&nbsp;
							<span style="font-size: 0.75em;">by <a href="#">{{ modpack.author }}</a></span></v-card-title
						>
						<v-avatar>
							<v-img src=""></v-img>
						</v-avatar>
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
