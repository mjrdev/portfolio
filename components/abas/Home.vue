<template>
    <div class="main-bg">
        <div class="content app-padding">
            <div class="container-text-static">
                <h1 class="dev-title-01">{{de}}</h1>
            
                <h1 class="dev-title-02">{{dev}}</h1>
            </div>

            <div class="container-text-mod">
                <h1 class="text-carrosel">JavaScript|</h1>
            </div>
        </div>
    </div>
</template>
<script>
import script from './scripts/mainbody.js'
export default script
</script>
<style lang="scss" scoped>

@import '~assets/sass/theme';
@import '~assets/sass/app-sizes';

.main-bg {
    height: $home-height;
    //background-image: url("https://blog.bossabox.com/wp-content/uploads/2017/11/master.jpeg");
    background-repeat: no-repeat;
    background-color: rgb(250, 250, 250);
    
}

.content {

    border-top: 1px solid rgb(205, 205, 205);
    
    display: flex;
    flex-direction: column;

}

.content h1 {
    
    //text-shadow: 2pt 2pt 6pt rgba(0, 0, 0, 0.434);
    letter-spacing: -4pt;
}

.container-text-static {
    height: 40vh;
    display: flex;
    align-content: flex-end;
    justify-content: flex-end;
    flex-direction: column;
}
.container-text-mod {
    height: 40vh;
    display: flex;
    justify-content: center;
}

.text-carrosel {

    padding: 0; margin: 0;

    font-family: 'Montserrat', 'Arial', sans-serif;
    font-size: clamp(7vw, 1em + 7vw, 10vw);
    color: rgb(42, 42, 42);
    font-weight: 900;
    font-stretch: ultra-expanded;
    letter-spacing: 3pt;
    align-self: center;
    justify-self: center;
}

.dev-title-01 {

    padding: 0; margin: 0;

    font-family: 'Montserrat', 'Arial', sans-serif;
    font-size: clamp(7vw, 1em + 7vw, 10vw);
    color: rgb(42, 42, 42);
    font-weight: 900;
    font-stretch: ultra-expanded;
    letter-spacing: 3pt;
}

.dev-title-02 {

    padding: 0; margin: 0;
    font-family: 'Montserrat', 'Arial', sans-serif;
    font-size: clamp(6vw, 1em + 6vw, 9vw);
    color: $color-primary;
    font-style: italic;
    font-weight: 700;
}









@media only screen and (max-width: 1200px) {
  .content {
    padding: 0 7vw;
    
  }
}

</style>