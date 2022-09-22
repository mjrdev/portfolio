<template>
    <div>
        <h1 class="project-title" data-aos="fade-right">{{title}}</h1>
        <p class="project-text">{{text}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Push Game',
            text: 'Jogo de navegador, feito em Javascript Vanilla'
        }
    },
    name: 'Project'
}
</script>
<style scoped lang="scss">
@import 'item';
</style>