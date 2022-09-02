<template>
    <div class="container-skill">
        <h1 class="skill-title">Minhas Habilidades</h1>
        
        <div class="skills-items">
            <div class="item item-1">
                <SkillElement/>
            </div>
            <div class="item item-2">
                <SkillElement/>
            </div>
            <div class="item item-3">
                <SkillElement/>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import SkillElement from './skills/SkillElement.vue';

export default {
    computed: mapState(["theme"]),
    components: { SkillElement }
}
</script>
<style scoped lang="scss">
@import '~assets/sass/theme';
@import '~assets/sass/app-sizes';

.container-skill {
    padding: 0 $app-padding;
    display: flex;
    flex-direction: column;
    align-content: center;
}

.skill-title {
    font-family: 'Montserrat', Arial, sans-serif;
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