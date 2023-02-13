<script>
import IssuesList from './IssuesList.vue';

export default ({
    components: {
        IssuesList
    },
    props: {
        sortedRepos: {
            type: Array,
            required: true
        }
    }

})

</script>
<template>
    <v-expansion-panels>
        <v-expansion-panel v-for="repo in sortedRepos" :key="repo.id">
            <v-expansion-panel-title>
                {{ repo.name }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>

                <IssuesList :issues="repo.issues.edges" />

            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>
