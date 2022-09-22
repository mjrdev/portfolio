<script>
import { mapState } from 'vuex'
import SkillElement from './SkillElement.vue';
import skills from './skillsScript.js'

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
    <div class="skill">
        <h1 class="title">Minhas Habilidades</h1>
        
        <div v-for="(skill, index) in skills" class="skill-container">
            <SkillElement :skills="skill"/>
        </div>
    </div>
</template>



<style scoped lang="scss">
@import '~assets/sass/theme';
@import '~assets/sass/app-sizes';
@import '~assets/sass/fonts';
@import 'skill-devices';

.skill {
    display: flex;
    flex-direction: column;
    align-content: center; justify-content: center; align-items: center;
    width: 100%;
    margin: 3rem 0;
}

.skill-container {
    width: 70%;
}

.title {
    font-family: $font-primary;
    color: $white;
    font-size: 30pt;

    align-self: center;
    padding: 1rem; margin: 0;
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