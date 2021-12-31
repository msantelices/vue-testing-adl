<template>
    <div>
        <h1>Vista para probar clases condicionales</h1>

        <button id="btn" @click="mostrarMensaje">Mostrar mensaje</button>

        <h3 :class="{show}">Este es un mensaje mostrado condicionalmente</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },

    methods: {
        mostrarMensaje() {
            this.show = !this.show
        }
    }
}
</script>

<style scoped>
h1 {
    margin-bottom: 6rem;
}

h3 {
    display: none;
    margin: 2rem 0;
}

h3.show {
    display: block;
}
</style>
