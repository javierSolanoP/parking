<template>
    <div id="dashboard">
        <aside>
            <div class="container-avatar">
                <img src="man.PNG" alt="Avatar" class="avatar">
                <br>
                <p>Javier Solano</p>
            </div>
            <ul>
                <li>
                    <img src="hour.PNG" alt="" class="icon">
                    <router-link to="/horas">Horas</router-link>
                </li>
                <li>
                    <img src="calendario.PNG" alt="" class="icon">
                    <router-link to="/mensualidades">Mensualidades</router-link>
                <li>
                    
                </li>
                <li></li>
                <li></li>
            </ul>
            <button class="logout">
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

            
        }
    },

    props: {
        msg: String
    },

    methods: {

    
    }
}
</script>

<style scoped>

#dashboard{
    width: 100vw;
    height: 100vh;
    display: flex;
}
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
    height: 90%;
}
.logout p{
    width: 70%;
}
</style>