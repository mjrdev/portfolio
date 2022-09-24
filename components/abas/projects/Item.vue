<script>
    export default {
        data() {
            return {
                animation: false
            }
        },
        props: ['project'],
        name: 'Project',
        methods: {
        }
    }
</script>

<template>
    <div class="item">
        <h1 class="project-title">{{project.title}}</h1>
        <p class="project-text">{{project.description}}</p>
    </div>
</template>

<style scoped lang="scss">
@import 'item';
</style>