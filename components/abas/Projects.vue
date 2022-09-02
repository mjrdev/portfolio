<template>
    <div class="container-skill">
        <h1 class="skill-title">Projetos</h1>
        
        <div class="project-items">
            <Project class="project"/>
            <div class="project"></div>
            <div class="project"></div>
            <div class="project"></div>
        </div>
    </div>
</template>
<script>
import Project from './projects/Project'

export default {
    name: "Projects",
    components: {
        Project
    },
    data() {
        return {

        }
    }
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
    background-image: $project-gradient;
}

.skill-title {
    font-family: 'Montserrat', Arial, sans-serif;
    color: $white;
    font-size: 30pt;

    align-self: center;
    padding: 5vh 0;
}

.project-items {

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    gap: 20px;

}

.project {
    background-color: $white;
    width: 100%;
    height: 23em;
    background-color: $color-primary;
}

@media (max-width: 1200px) {
    .project-items {

        grid-template-columns: 1fr 1fr;
    }
}
</style>