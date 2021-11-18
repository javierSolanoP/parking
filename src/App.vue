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
      let response = this.verifyAccount(this.user, this.password)

      return response;
    },

    verifyAccount(user, password){
      if((user === 'javiers') && (password === '123')){
        this.denied = false;
        location.href = 'dashboard'
      }else{
        alert("Access denied!");
      }
    }
  }

}
</script>

<style>
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
@media screen  and (max-width: 500px){
  .access{
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
    background-color: #130999;
  }

  /* Formulario */
  section{
    position: relative;
    margin-top: -40%;
    width: 80%;
    height: 60vh;
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
    background-color: #130999;
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
@media screen and (min-width: 1232px){
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
    background-color: #130999;
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
    border: 1px solid #130999;
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
    background-color: #130999;
    border-radius: 10rem;
    border: none;
    cursor: pointer;
    color: #fff;
  }

  input[type="submit"]:hover{
    background-color: #F04509;
  }
}
</style>
