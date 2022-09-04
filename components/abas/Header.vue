<template>

    <!-- NAVBAR -->
    <nav class="navbar">

        <div class="menu">
            <span class="material-icons">menu</span>
        </div>

        <div class="painel">
            <ul>

                <li class="painel-item">
                    <span class="painel-item-text" @click="clickSkill('main')">início</span>
                </li>

                <li class="painel-item">
                    <span class="painel-item-text" @click="clickSkill('skill')">habilidades</span>
                </li>

                <li class="painel-item">
                    <span class="painel-item-text" @click="clickSkill('projects')">projetos</span>
                </li>

                <li class="painel-item item-sobre" @click="clickSkill('more')">
                    <span class="painel-item-text" >sobre</span>
                </li>

                <li :class="{'painel-item-contact-btn':true}" @click="contact = true">
                    contato
                </li>
                <div class="contact" v-if="contact">
                    <button class="btn" @click="contact = false">x</button>
                </div>
            </ul>
        </div>
    </nav>
</template>

<script>

import index from './scripts/header.js'

export default index
</script>

<style lang="scss" scoped>

@import '~assets/sass/theme';
@import '~assets/sass/app-sizes';
@import '~assets/sass/fonts';

.contact::before {
    content: " ";
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.412);
}
.contact::after {
    content: " ";
    position: fixed;
    right: 50%;
    width: 70vh;
    height: 70vh;
    background-color: rgb(255, 255, 255);
    
}

.btn {
    position: absolute;
}


.navbar {

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100%;
    height: 100%;
    align-items: center;
    background-color: redp;
}

.menu {

   justify-self: flex-start;
   font-size: 20pt;
   color: $color-primary;
}

/*  ul  */
.painel {
    
    justify-self: flex-end;
    padding: 0; margin: 0;
}

.painel > ul {
    display: flex;
}

/*  li  */
.painel-item {

    width: 100%;
    padding: 0 $navbar-item-spacing;
    align-self: center;

    list-style-type: none;
}

/*  span  */
.painel-item-text {


    font-family: $font-secundary;
    color: $color-primary;
    cursor: pointer;
    font-size: 12pt;

    transition: 150ms;

    border-bottom: 1px solid rgba(249, 249, 249, 0);
}

.painel-item-text:hover {
    color: $color-primary-dark;
    border-bottom: 1px solid $color-primary-dark;
    transition: 150ms;
}

.item-sobre {
    border-right: 1px solid $color-primary;
}


// BOTÃO DE CONTATO 

.painel-item-contact-btn {

    font-family: $font-secundary;

    transition: 150ms;

    width: 100%;
    padding: 0 15pt;
    font-size: 12pt;
    color: $color-primary;

    list-style-type: none;

    border: 1px solid $color-primary;
    border-radius: 10px;
    padding: 10px;
    margin-left: $navbar-item-spacing;

    cursor: pointer;
}

.painel-item-contact-btn>span {
    color: $white;
    width: 2px;
    height: 100%;
    display: block;
    position: relative;
}

.painel-item-contact-btn:hover {

    border: 1px solid $color-primary;
    background-color: $color-primary-dark;
    color: $gray-low;

    cursor: pointer;
}

</style>

