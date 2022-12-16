<script>
export default {
    name: 'ok',
    data() {
        return {
            form: {
                name: '', email: '',body: '',
            },
            messageConf: false
        }
    },
    methods: {
        sendMail(e) {
            e.preventDefault();
            
            let regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i;

            if(this.form.name.length === 0 || this.form.email.length === 0 || this.form.body.length == 0 || regex.test(this.form.email)) {
                return
            }
            fetch("https://formsubmit.co/ajax/jrgomesdev@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: this.form.name,
                    email: this.form.email,
                    message: this.form.body
                })
            })
            .then(response => response.json())
            .then(data => {
                this.messageConf = true;
                setTimeout(() => {
                    this.messageConf = false
                } ,5000)
            })
            .catch(error => {
              console.error(error)
            });
            }
    }
}    
</script>

<template>
<div class="container-about" >
    <div class="content" data-aos="fade-up">
        <h1 align="center" class="title-name">Manoel Gomes Lindoso Júnior</h1>
        <img class="img" src="me.jpeg" alt="" width="250px">
        <p class="text">
            <h3>Sobre</h3>
            <p>Olá, meu nome é Manoel Júnior tenho 21 anos de idade sou apaixonado por tecnologia e games. <br/>
            Meu primeiro contato com programação e servidores foi aos 14 anos de idade com Java, PHP e Javascript.
            Especialista em desenvolvimento Web FullStack com as melhores e atuais tecnologias do mercado e padrões de desenvolvimento e atualmente trabalho no desenvolvimento e manutenção de projetos Freelancer.
            <a href="https://www.linkedin.com/in/mjrdev/">linkedIn</a>
            </p>
        </p>
    </div>

    <form class="contact" v-on:submit="sendMail" data-aos="fade-up">
        <h2>Me enviei um email: </h2>
        <input class="input-email" type="name" name="name" placeholder="Seu Nome" required v-model="form.name">
        <input class="input-email" type="email" name="email" placeholder="Email" required v-model="form.email">
        <textarea class="input-text" name="message" col="15" rows="10" placeholder="Fale comigo" required v-model="form.body"></textarea>
        <button type="submit" class="btn-send">Enviar</button>
        <div class="message" v-if="messageConf">Messagem enviada com sucesso</div>
    </form> 

    <div class="more" data-aos="fade-up">
        <a class="download" href="/curriculo.pdf" download>
        Currículo
        <span class="material-symbols-outlined">picture_as_pdf</span>
        </a>
    </div>
</div>
</template>
<style lang="scss">
@import 'style';
@import 'header-devices';
</style>