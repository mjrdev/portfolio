<template>
    <div class="container-project-item">
        <h1 class="project-title">{{title}}</h1>
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
    }
}
</script>
<style scoped lang="scss">

@import '~assets/sass/theme';

.container-project-item {
    display: flex;
    justify-items: flex-end;
    align-items: flex-end;
    //flex-direction: column;
    flex-wrap: wrap;
    background-image: url('https://store-images.s-microsoft.com/image/apps.61115.13510798887492506.b86251ad-7829-496b-817f-4eda475a9ace.f7ea2460-82ef-4d4c-a003-b0c9d111b666?mode=scale&q=90&h=200&w=200&background=%230078D7');
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 10;
}

.project-title {
    font-family: $font-primary;
    font-size: 20pt;
}

.project-text {
    font-family: $font-primary;
    font-size: 12pt;
    list-style-type: none;
}
</style>