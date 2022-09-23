<script>
    import Item from './Item'
    
    export default {
        name: "Projects",
        components: { Item }
    }
</script>

<template>
    <div class="container-skill" >
        <h1 class="skill-title" data-aos="fade-up">Projetos</h1>
        
        <div class="project-container" data-aos="fade-up">
            <Item class="project-item"/>
            <div class="project-item"></div>
            <div class="project-item"></div>
            <div class="project-item"></div>
            <div class="project-item"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import 'styles';
</style>