<script>
import { mapState } from 'vuex'
import SkillElement from './skills/SkillElement.vue';
import skills from './skills/skillsScript.js'

export default {
    components: { SkillElement },
    data() {
        return {
            skills,
            boxSkill: true
        }
    },
    methods: {
    }
}
</script>


<template>
    <div class="container-skill">
        <h1 class="title">Minhas Habilidades</h1>
        
        <div v-for="(skill, index) in skills">
            <SkillElement :skills="skill"/>
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
    align-content: center; justify-content: center; align-items: center;
    gap: 1.3rem 0;
}

.title {
    font-family: $font-primary;
    color: $white;
    font-size: 30pt;

    align-self: center;
    padding: 5vh 0;
}

.skills-items {
    width: 60%;

    display: flex;
    flex-direction: column;

    .item {
        background-color: $white;
        border-radius: 5px;
    }
}
</style>