<template>
    <div class="container-skill-item">
        <h1 class="skill-item-title">{{title}}</h1>
        <ul class="languages" v-for="l in content">
            <li class="language">{{l}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Linguagens',
            content: [
                "JavaScript", "PHP", "TypeScript",
                "Python", "SQL", "Dart"
            ]
        }
    }
}
</script>
<style scoped lang="scss">

@import '~assets/sass/theme';

.container-skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.skill-item-title {
    font-family: $font-primary;
    font-size: 17pt;
}

.languages {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.language {
    padding: 0 10px 2px 10px;
    font-family: $font-primary;
    font-size: 15pt;
    list-style-type: none;
    border-bottom: 1px solid $black;
}
</style>