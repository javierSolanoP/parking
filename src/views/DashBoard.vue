<template>
    <div id="app">
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
    </div>
</template>

<script>

export default {
    name: 'DashBoard',

    data: function () {
        return {
            view: true
        }
    },

    props: {
        msg: String
    },

    methods: {

        // Metodo para redirigir a la vista de inicio de sesión:  
        redirect(){

            // Condicionamos la visibilidad del componente: 
            if(this.view){
                this.view = false;
                
                // Redireccionamos a la vista: 
                location.href = '/'
            }
        },

        // Metodo para mostrar el menu de navegacion: 
        showMenu(){

            // Seleccionamos la clase del elemento 'ul':
            const ul = document.querySelector('#ul');

            // Activamos la visibilidad del elemento: 
            ul.style.display = 'flex';
        }
    
    }
}
</script>

<style scoped>
#dashboard{
    width: 100vw;
    height: 100vh;
    display: flex;
}

/* Para moviles */
@media screen  and (max-width: 500px){
    .access{
        display: none    
    }
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
        float: left;;
        margin-top: 40%;
        width: 100vw;
        height: 60vh;
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0; 
        background-color: #130999; 
        transform: translateX(200px);
        transform:rotateX(200px)
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