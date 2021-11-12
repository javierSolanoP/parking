<template>
    <div id="dashboard">
        <aside>
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
    margin-left: 0;
    width: 20%;
    height: 100%;
    background-color: #130999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
ul{
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
}
li{
    border-bottom: 1px solid #fff;
    width: 100%;
    height: 7%;
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
</style>