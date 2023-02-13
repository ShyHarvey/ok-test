<script>

export default ({
    props: {
        comments: {
            type: Array,
            required: true
        }
    }

})

</script>
<template>

    <p v-if="comments.length > 0" class="font-weight-bold mt-4">
        Comments
    </p>
    <p v-else class="font-weight-bold mt-4">
        No Comments
    </p>
    <v-list>
        <v-list-item v-for="comment in comments" :key="comment.node.createdAt" variant="elevated" class="mt-2">
            <v-list-item-title v-text="comment.node.body"></v-list-item-title>
            <v-list-item-subtitle v-text="comment.node.createdAt.replace(/[A-Z]/gi, ' ')"></v-list-item-subtitle>
        </v-list-item>
    </v-list>

</template>