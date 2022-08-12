<template>
    <div class="main-bg">
        <div class="content">
            <h1 class="dev-title-01">{{de}}</h1>
            
            <h1 class="dev-title-02">{{dev}}</h1>
        </div>
    </div>
</template>
<script>
import script from './scripts/mainbody.js'
export default script
</script>
<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital@0;1&family=Urbanist:wght@400;500;700;800&display=swap');

.main-bg {
    height: 100%;
    background-image: url("https://blog.bossabox.com/wp-content/uploads/2017/11/master.jpeg");
    background-repeat: no-repeat;
    background-color: rgb(241, 241, 241);
}

.content {
    padding: 0 14vw;
}

@media only screen and (max-width: 1200px) {
  .content {
    padding: 0 7vw;
  }
}


.dev-title-01 {

    padding: 0; margin: 0;

    font-family: 'Montserrat', 'Arial', sans-serif;
    font-size: clamp(7vw, 1em + 7vw, 10vw);
    color: rgb(255, 255, 255);
    font-weight: 900;
    font-stretch: ultra-expanded;
    letter-spacing: 3pt;
}

.dev-title-02 {

    padding: 0; margin: 0;
    font-family: 'Montserrat', 'Arial', sans-serif;
    font-size: clamp(6vw, 1em + 6vw, 9vw);
    color: #2c7cdf;
    font-style: italic;
    font-weight: 700;
}
</style>