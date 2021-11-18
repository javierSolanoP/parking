<template>
    <div id="dashboard">
        <aside>
            <div class="container-avatar">
                <img src="man.PNG" alt="Avatar" class="avatar">
                <br>
                <p>Javier Solano</p>
            </div>
            <button class="menu" @click="showMenu">
                <img src="menu.PNG" alt="Menú de navegación">
            </button>
            <ul id="ul">
                <li class="exit">
                    <button @click="exitMenu">X</button>
                </li>
                <li>
                    <img src="hour.PNG" alt="" class="icon">
                    <router-link to="/">Horas</router-link>
                </li>
                <li>
                    <img src="calendario.PNG" alt="" class="icon">
                    <router-link to="/dashboard/mensualidades">Mensualidades</router-link>
                </li>
                <li></li>
                <li></li>
            </ul>
            <button class="logout" @click="redirect">
                <img src="salida.PNG" alt="Icono de cerrar sesión" class="icon">
                <p>Cerrar sesión</p>
            </button>
        </aside>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

    name: 'DashBoard',

    data: function () {
        return {
            // Evento que controla la carga del documento y deshabilita la visibilidad del componente 'access':
            dom: document.addEventListener('DOMContentLoaded', () => {
                    const access = document.querySelector('.access');
                    access.style.display = 'none';
                })
        }
    },

    props: {
        msg: String
    },

    methods: {

        // Metodo para redirigir a la vista de inicio de sesión:  
        redirect(){
            // Redireccionamos a la vista: 
            location.href = '/'
        },

        // Metodo para mostrar el menu de navegacion: 
        showMenu(){

            // Seleccionamos la clase del elemento 'ul':
            const ul = document.querySelector('#ul');
            

            // Activamos la visibilidad del elemento: 
            ul.style.display = 'flex';

            // Metodo para para realizar la transicion del elemento:  
            function  transition(){
                // Seleccionamos la clase del elemento 'ul':
                ul.style.transform = 'translateX(100vw)';
            }
            
            // Ejecutamos el metodo que realiza la transicion del elemento: 
            setTimeout(transition, 50);
        },

        // Metodo para no mostrar el menu de navegacion: 
        exitMenu(){

            // Seleccionamos la clase del elemento 'ul':
            const ul = document.querySelector('#ul');

            // Seleccionamos la clase del elemento 'ul':
            ul.style.transform = 'translateX(0vw)';

            // Metodo para deshabilitar el display del elemento:  
            function  hiddenDisplay(){
                // Desactivamos la visibilidad del elemento: 
                ul.style.display = 'none';
            }
            
            // Ejecutamos el metodo que deshabilita el display del elemento: 
            setTimeout(hiddenDisplay, 500);

        }
    }
}
</script>

<style>
/* Para moviles */
@media screen and (max-width: 500px){
    #app{
        display: flex;
        flex-direction: column;
    }
    .access{
        display: flex;
    }
}
/* Para ordenadores pequeños */
@media screen and (min-width: 1232px){
    #app{
        display: flex;
        flex-direction: column;
    }
}
</style>

<style scoped>
#dashboard{
    width: 100vw;
    height: 100vh;
    display: flex;
}
/* Para moviles */
@media screen and (max-width: 500px){
   
    #dashboard{
        flex-direction: column;
    }
    aside{
        background-color: #130999;
        width: 100%;
        height: 25%;
        margin-left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .container-avatar{
        width: 30%;
        height: 100%;
        margin-left: -3%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .container-avatar .avatar{
        width: 90%;
        height: 60%;
        border-radius: 100%;
    }
    .container-avatar p{
        width: 100%;
        color: #fff;
    }
    .menu{
        width: 15%;
        height: 40%;
        margin-left: 8%;
        border: none;
        border-radius: 1rem;
        background-color: #F04509;
    }
    .menu img{
        width: 80%;
        height: 80%;
    }
    ul{
        position: relative;
        margin-top: 141%;
        width: 100vw;
        height: 100vh;
        margin-left: -225vw;
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0; 
        background-color: #130999; 
        transform: translateX(0vw);
        transition: transform 0.5s;
    }
    li{
        border-bottom: 1px solid #fff;
        width: 100%;
        height: 10%;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .exit{
        justify-content: flex-end;
    }
    .exit button{
        margin-right: 5%;
        width: 12%;
        height: 70%;
        border: none;
        border-radius: 100%;
        background-color: red;
        color: #fff;
        text-align: center;
    }
    li .icon{
        margin-left:7%;
        width: 15%;
        height: 70%;
        border-radius: 100%;
    }
    li a{
        width: 75%;
        height: 40%;
        font-size: 150%;
        color: #fff;
        border: none;
        cursor: pointer;
        text-decoration: none;
    }
    li a:hover{
        color: #F04509
    }
    .logout{
        width: 15%;
        height: 40%;
        margin-left: 10%;
        border: none;
        border-radius: 1rem;
        cursor: pointer;
        background-color: #F04509;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }
    .logout .icon{
        width: 80%;
        height: 80%;
    }
    .logout p{
        width: 100%;
        display:none
    }
}
/* Para ordenadores pequeños */
@media screen and (min-width: 1232px){
    aside{
        top: 0;
        position: sticky;
        margin-left: 0;
        width: 20%;
        height: 100%;
        background-color: #130999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .container-avatar{
        width: 100%;
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .container-avatar .avatar{
        width: 80%;
        height: 80%;
        border-radius: 100%;
    }
    .container-avatar p{
        width: 100%;
        color: #fff;
    }
    .menu{
        display: none;
    }
    ul{
        width: 90%;
        height: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0;
    }
    li{
        border-bottom: 1px solid #fff;
        width: 100%;
        height: 13%;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .exit{
        display: none;
    }
    li .icon{
        margin-left:7%;
        width: 15%;
        height: 70%;
        border-radius: 100%;
    }
    li a{
        width: 75%;
        height: 40%;
        font-size: 150%;
        color: #fff;
        border: none;
        cursor: pointer;
        text-decoration: none;
    }
    li a:hover{
        color: #F04509
    }
    .logout{
        width: 80%;
        height: 5%;
        border: none;
        border-radius: 10rem;
        cursor: pointer;
        background-color: #F04509;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .logout .icon{
        width: 20%;
        height: 80%;
    }
    .logout p{
        width: 70%;
    }
}

</style>