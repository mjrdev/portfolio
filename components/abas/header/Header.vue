<script>
import index from './headerScript.js'

export default index
</script>

<template>

    <!-- NAVBAR -->
    <nav>
        <Menu class="menu" :abas="abas"/>

        <div class="painel">
            <ul>
                <li class="item" v-for="aba in abas">
                    <span class="item-text" @click="clickSkill(aba.action)">{{aba.content}}</span>
                </li>

                <li :class="{'painel-item-contact-btn':true}" @click="contact = true">
                    contato
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@import 'styles/header.scss';
@import 'styles/header-devices.scss';
</style>

