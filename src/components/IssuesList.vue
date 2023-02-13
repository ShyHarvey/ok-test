<script>
import Comments from './Comments.vue';



export default ({
    props: {
        issues: {
            type: Array,
            required: true
        }
    },
    components: { Comments }
})

</script>
<template>
    <p v-if="issues.length === 0" class="font-weight-bold">
        Has no issues
    </p>
    <v-expansion-panels v-else>
        <p class="font-weight-bold">
            Issues
        </p>
        <v-expansion-panel v-for="issue in issues" :key="issue.id">
            <v-expansion-panel-title>
                <p v-if="issue.node.closed" class="text-red mr-4"> Closed </p>
                <p v-else class="text-green mr-4"> Opened </p>

                {{ issue.node.title !== '' ? issue.node.title : 'has no title' }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                <p class="font-weight-bold">Description</p>
                {{ issue.node.body !== '' ? issue.node.body : 'has no description' }}

                <Comments :comments="issue.node.comments.edges" />


            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>

</template>