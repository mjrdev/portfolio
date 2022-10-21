<script>
    import index from './mainScript.js'
    
    export default index
</script>

<template>
<div id="portfolio">
    <div class="header-container" data-container-item="header"
    :class="animation">
      <h1></h1>
        <Header id="header"/>
    </div>

    <div class="home-container" data-container-item="home">
        <Home id="home"/>
    </div>
    
    <div class="skill-container" data-container-item="skill">
        <Skills id="skill"/>
    </div>

    <div class="projects-container" data-container-item="projects">
        <Projects id="projects"/>
    </div>

    <div class="about-container" data-container-item="about">
        <About id="about"/>
    </div>
</div>
</template>

<style lang="scss"> @import 'Main.scss'; </style>