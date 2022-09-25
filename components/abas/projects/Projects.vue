<script>
    import projectsList from './projectsList.js'
    
    export default {
        name: "Projects",
        data() {
            return {
                projectsList,
                indexItemActive: 0,
                carouselScrollActive: true,
                animation: false,
            }
        },
        methods: {
            carouselScroll(direction) {

                switch (direction) {
                    case 'right':
                        {
                            if(this.indexItemActive < projectsList.length - 1 && this.carouselScrollActive) {
                                this.indexItemActive++
                                this.animation = true
                                this.carouselScrollActive = false
                            }
                        }
                        break;
                    case 'left':
                        {
                            if(this.indexItemActive > 0 && this.carouselScrollActive) {
                                this.indexItemActive--
                                this.animation = true
                                this.carouselScrollActive = false
                            }
                        }
                        break;
                }


                setTimeout(() => {
                    this.animation = false
                    this.carouselScrollActive = true
                }, 400)
            }
        }
}
</script>

<template>
    <div class="projects" data-aos="fade-up">
        <h1 class="title-projects" >Projetos</h1>

        <div class="carousel">
            <span class="material-symbols-outlined arrow" @click="carouselScroll('left')">chevron_left</span>
                <div :class="{
                    'item-project': true, 'animation-opacity': animation
                }">
                    <h1>{{projectsList[indexItemActive].title}}</h1>
                    <p>{{projectsList[indexItemActive].description}}</p>
                </div>
            <span class="material-symbols-outlined arrow" @click="carouselScroll('right')">chevron_right</span>
        </div>

        <div class="container-projects">

            <div class="item-project" v-for="(pjt, index) in projectsList">
                <h1>{{pjt.title}}</h1>
                <p>{{pjt.description}}</p>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
@import 'styles';
@import 'projects-devices';

</style>