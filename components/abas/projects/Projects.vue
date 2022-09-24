<script>
    import Item from './Item'
    import projectsList from './projectsList.js'
    
    export default {
        name: "Projects",
        components: { Item },
        data() {
            return {
                contract: true,
                projectsList,
                carouselCount: 0,
                animation: false,
                sizesDevices: {
                    lg: 1000, md: 800, sm: 600
                }
            }
        },
        computed: {
        
        },
        methods: {
            carouselUse: function(count) {
                if(
                    count == 1 && this.carouselCount + 3 < this.projectsList.length && this.animation == false
                ) {
                    this.carouselCount++
                    this.carouselAnimation()
                } else if (
                    count == -1 && this.carouselCount > 0 && this.animation == false
                ) {
                    this.carouselCount--
                    this.carouselAnimation()
                }
            },

            carouselAnimation: function () {
                const data = this
                const time = setTimeout(function() {
                    data.animation = false
                }, 300)

                this.animation = true
            }
    }
}
</script>

<template>
    <div class="container-skill" >
        <h1 class="skill-title" data-aos="fade-up">Projetos</h1>
        
        <div class="project-container" data-aos="fade-up">

            <span class="material-symbols-outlined arrow"
            @click="carouselUse(-1)"
            :style="{
                color: carouselCount == 0 ? '#b0b0b0' : '#424ed0'
            }"
            >
                chevron_left
            </span>

            <div class="project-items">

                <Item :class="{
                    'project-item': true,
                    'animation': animation
                }"
                v-for="(i, index) in projectsList"
                v-if="index < 3"
                :project="projectsList[index + carouselCount]"
                />

            </div>
            
            <span class="material-symbols-outlined arrow"
            @click="carouselUse(1)"
            :style="{
                color: carouselCount + 3 == projectsList.length  ? '#b0b0b0' : '#424ed0'
            }"
            >chevron_right</span>
        </div>

        
    </div>
</template>

<style scoped lang="scss">
@import 'styles';
@import 'projects-devices';

</style>