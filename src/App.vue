<template>
  <div id="app">
    <router-view></router-view>
    <div class="access"> 
      <aside></aside> 
      <section>
        <div class="logo">
          <img src="logo.png" alt="Logotipo">
        </div>
        <form @submit.prevent="access" method="POST">
          <label for="user">Usuario: </label>
          <input type="text" name="user" v-model="user" required placeholder=" usuario...">
          <br><br>
          <label for="password">Contraseña: </label>
          <input type="password" name="password" v-model="password" required placeholder=" contraseña...">
          <br><br>
          <input type="submit" value="Ingresar">
        </form>
      </section>
    </div>  
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'App',

  data: function(){
    return {
      user: '',
      password: ''
    }
  },

  methods: {

    access(){
      
      // creamos el objeto con la informacion
      let loginData = {
        "userName":this.user,
        "password":this.password
      };

      // realizamos la peticion
      axios.post(`${this.$urlServiceUser}users/login/v1`, loginData)
        .then(function (response){

          // almacenamos el nombre de usuario
          let userName = response.data.content.user.user;

          // almacenamos los servicios que tiene ese usuario
          let services = response.data.content.services

          // convertimos a string los servicios
          var test = JSON.stringify(Object.values(services));
          
          // creamos la palabra a buscar
          var find = 'Mensualidades';

          // buscamos la palabra
          var searchValidate = test.indexOf(find)

          // validamos si la encuentra
          if(searchValidate >= 0){
            
            // almacenamos el nombre de usuario
            localStorage.setItem('userName', userName);

            // redirigimos a la vista principal
            location.href = 'dashboard';
            
          }else{
            
            // retornamos el error
            alert('No tiene permmisos para acceder a este modulo')
          }
          
        })
        .catch(function (error){

          // mostramos el mensaje de error
          alert(error.response.data.error)

        })
    },

  }

}
</script>

<style>


:root{
    --bg-color: #265281;
}


@font-face {  
  font-family: 'Roboto', sans-serif;
  src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');  
  font-weight: normal;  
  font-style: normal;  
}

*{
  margin: 0;
 
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: visible;
}

/* Para moviles */
@media screen  and (max-width: 564px){
  .access{
    margin-top: -0%;
    width: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  aside {
    position: relative;
    margin-left: 0%;
    width: 100%;
    height: 50vh;
    background-color: var(--bg-color);
  }

  /* Formulario */
  section{
    position: relative;
    margin-top: -70%;
    width: 80%;
    height: 70vh;
    border-radius: 0.25rem;
    border: none;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .logo{
    width: 100%;
    height: 40%;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: none;
    border-top-right-radius: 50rem;
    border-top-left-radius: 10rem;
    border-right: none;
    overflow: auto;
  }
  img{
    width: 80%;
    height: 90%;
  }
  form{
    width: 100%;
    height: 60%;
    background-color: #fff;
    border: none;
    border-radius: 1rem;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    box-shadow: 0.5rem 0.5rem 1rem rgb(54, 54, 54);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  label{
    width: 80%;
    height: 10%;
    font-family:Arial, Helvetica, sans-serif
  }

  input[type="text"], input[type="password"]{
    width: 80%;
    height: 10%;
    border: 0.15rem  solid #ced4da;
    border-radius: 10rem;
  }

  input[type="text"]:focus, input[type="password"]:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }

  ::placeholder{
    font-style: italic;
  }

  input[type="submit"]{
    position:relative;
    width: 80%;
    height: 15%;
    background-color: var(--bg-color);
    border-radius: 10rem;
    border: none;
    cursor: pointer;
    color: #fff;
  }

  input[type="submit"]:hover{
    background-color: #F04509;
  }
}

/* Para ordenadores pequeños */
@media screen and (max-width: 2080px) {
  .access{
    width: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  aside {
    position: relative;
    margin-left: -20%;
    width: 50%;
    height: 100vh;
    background-color: var(--bg-color);
  }

  /* Formulario */
  section{
    position: relative;
    margin-left: -30%;
    width: 60%;
    height: 50vh;
    border-radius: 0.25rem;
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo{
    width: 50%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--bg-color);
    border-bottom-left-radius: 50rem;
    border-top-left-radius: 20rem;
    border-right: none;
    overflow: auto;
  }
  img{
    width: 90%;
    height: 90%;
  }
  form{
    width: 50%;
    height: 100%;
    background-color: #fff;
    border: none;
    border-radius: 1rem;
    border-bottom-left-radius: 0;
    box-shadow: 0.5rem 0.5rem 1rem rgb(54, 54, 54);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  label{
    width: 90%;
    height: 10%;
    font-family:Arial, Helvetica, sans-serif
  }

  input[type="text"], input[type="password"]{
    width: 80%;
    height: 10%;
    border: 0.15rem  solid #ced4da;
    border-radius: 10rem;
  }

  input[type="text"]:focus, input[type="password"]:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }

  ::placeholder{
    font-style: italic;
  }

  input[type="submit"]{
    position:relative;
    width: 80%;
    height: 10%;
    background-color: var(--bg-color);
    border-radius: 10rem;
    border: none;
    cursor: pointer;
    color: #fff;
  }

  input[type="submit"]:hover{
    background-color: var(--bg-color);
    opacity: .8;
  }
}

</style>
