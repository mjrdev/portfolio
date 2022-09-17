<script>
import index from './header.js'

export default index
</script>

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

<style lang="scss" scoped> @import 'header.scss' </style>

