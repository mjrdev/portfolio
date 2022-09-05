<script>
import { mapState } from 'vuex'
import SkillElement from './skills/SkillElement.vue';

export default {
    components: { SkillElement },
    data() {
        return {
            skills: {
                frameworks: {
                    title: 'Frameworks',
                    items: ['NodeJs', 'VueJS', 'Laravel', 'Express', 'NuxtJs','NestJs']
                },
                languagens: {
                    title: 'Languagens',
                    items: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'SQL', 'HTML, CSS']
                },
                others: {
                    title: 'Others',
                    items: ['Git', 'Sass', 'Docker']
                }
            }
        }
    }
}
</script>


<template>
    <div class="container-skill">
        <h1 class="skill-title">Minhas Habilidades</h1>
        
        <div class="skills-items">
            <div class="item item-1">
                <SkillElement v-bind:skills="skills.frameworks"/>
            </div>
            <div class="item item-2">
                <SkillElement v-bind:skills="skills.languagens"/>
            </div>
            <div class="item item-3">
                <SkillElement v-bind:skills="skills.others"/>
            </div>
        </div>
    </div>
</template>



<style scoped lang="scss">
@import '~assets/sass/theme';
@import '~assets/sass/app-sizes';
@import '~assets/sass/fonts';

.container-skill {
    padding: 0 $app-padding;
    display: flex;
    flex-direction: column;
    align-content: center;
}

.skill-title {
    font-family: $font-primary;
    color: $white;
    font-size: 30pt;

    align-self: center;
    padding: 5vh 0;
}

.item {
    background-color: $white;
    height: 60vh;
}
.skills-items {
    width: 100%;
    height: 20vh;

    display: grid;
    grid-template-columns: 1fr 1.4fr 1fr;
    grid-template-areas:
    "item1 item2 item3";
    gap: 15px;
}

.item-1 {
    grid-area: item1;
}

.item-2 {
    grid-area: item2;
}

.item-3 {
    grid-area: item3;
}
</style>