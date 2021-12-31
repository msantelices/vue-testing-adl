<template>
  <div class="about">
    <h1>Página de opiniones</h1>

    <div class="dejar-opinion">
      <h3>Deja una opinión</h3>
      <input id="nombre" type="text" placeholder="Nombre" v-model="nombre">
      <textarea id="opinion" cols="30" rows="10" placeholder="Escribe tu opinión" v-model="opinion"></textarea>
      <button id="btn" @click="enviarOpinion">Enviar</button>
    </div>

    <div class="opiniones">
      <p class="msg" v-if="opiniones.length === 0">No hay opiniones para mostrar</p>
      <ul v-else>
        <li v-for="(opinion, index) in opiniones" :key="index">
          <small>{{ opinion.nombre }}</small>
          <p>{{ opinion.opinion }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      opinion: '',
      opiniones: []
    }
  },

  methods: {
    enviarOpinion() {
      this.opiniones.push({
        nombre: this.nombre,
        opinion: this.opinion
      })

      this.nombre = ''
      this.opinion = ''
    }
  }
}
</script>


<style scoped>
.dejar-opinion {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  margin: 3rem auto 6rem auto;
}

input, textarea {
  margin-bottom: 1rem;
  padding: 0.25rem;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

button {
  width: 150px;
  padding: 0.5rem;
  font-weight: bold;
  cursor: pointer;
}

.opiniones {
  text-align: left;
  width: 50%;
  margin: 3rem auto;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
}

li small {
  font-weight: bold
}

li p {
  margin: 0.25rem 0;
}
</style>