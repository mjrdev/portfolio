<script>
    import Item from './Item'
    import projectsList from './projectsList.js'
    
    export default {
        name: "Projects",
        components: { Item },
        data() {
            return {
                projectsList,
                carouselItemsActive: [
                    true, true, true, true
                ]
            }
        },
}
</script>

<template>
    <div class="projects">
        <h1 class="title-projects" data-aos="fade-up">Projetos</h1>
        
        <div class="container-projects" data-aos="fade-up">
            <div class="item-project"> project 1 </div>
            <div class="item-project"> project 2 </div>
            <div class="item-project"> project 3 </div>
            <div class="item-project"> project 4 </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import 'styles';
@import 'projects-devices';

</style>