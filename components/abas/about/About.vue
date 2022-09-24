<script>
export default {
    name: 'ok'
}    
</script>

<template>
<div class="container-about" >

    <div class="image" data-aos="fade-right">
        <img src="https://avatars.githubusercontent.com/u/52384586?v=4" alt="" width="250px">
    </div>
    <div class="content" data-aos="fade-left">
        <h1>Manoel Gomes L Júnior</h1>
        <p>Apaixonado por tecnológia e games, desdes os meus 8 anos estou nesse mundo e a curiosidade sempre esteve presente</p>
    </div>
</div>
</template>
<style lang="scss">
@import '~/assets/sass/theme';
.container-about, #about {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 6rem 0;
    grid-gap: 2rem;
    align-items: center ;

    .content {

        
        h1 {
            text-align: left;
            color: $color-primary;
        }
    }

    .image {
        justify-self: center;
        img {
            border-radius: 50%;
            width: 15rem; height: 15rem;
        }
    }
}
</style>