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
        <h1 class="title-projects">Projetos</h1>

        <div class="container-projects">

            <a class="item-project" v-for="(pjt, index) in projectsList" :href="pjt.url" target="_blank">
            <div class="wallpaper" :style="{ backgroundImage: `url(${pjt.urlImage})`}"></div>
            
            <div class="bottom">
                <h1>{{pjt.title}}</h1>
            </div>
            </a>

        </div>
    </div>
</template>

<style scoped lang="scss">
@import 'styles';
@import 'projects-devices';

</style>