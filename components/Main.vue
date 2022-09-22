<script>
    import index from './mainScript.js'
    
    export default index
</script>

<template>
<div id="portfolio">
    <div class="header-container">
        <Header id="header"/>
    </div>

    <div class="home-container">
        <Home id="home"/>
    </div>
    
    <div class="skill-container">
        <Skills id="skill"/>
    </div>

    <div class="projects-container">
        <Projects id="projects"/>
    </div>

    <div class="more-container">
        <div id="more" data-container-item="more"></div>
    </div>
</div>
</template>

<style lang="scss"> @import 'Main.scss' </style>