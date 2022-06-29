<template>
    <div v-show="edit">
        <section id="updateMonthlyPayment">
            <form @submit.prevent="updateMonthlyPayment" id="updateMp">
                <div class="container-left">
                    <div class="container-input">
                        <label for="first_date" class="date">Fecha de inicio</label>
                        <!-- <input type="date" name="first_date" v-model="first_date"> -->
                        <p class="date-info">{{startDate}}</p>
                    </div>
                    <div class="container-input">
                        <label for="finish_date" class="date">Fecha de caducidad</label>
                        <!-- <input type="date" name="finish_date" v-model="finish_date"> -->
                        <p class="date-info">{{expiryDate}}</p>
                    </div>
                </div>
                <div class="container-right">
                    <h1><strong>EDITAR INFORMACIÓN DEL DUEÑO</strong></h1>
                    <div class="container-input">
                            <div class="input">
                                <!-- <label for="cedula">Cedula</label> -->
                                <input class="new-data" maxlength="10" type="text" name="dni" v-model="newIdentification" :placeholder="identification">
                            </div>
                            <div class="input">
                                <!-- <label for="celular">Celular</label> -->
                                <input class="new-data" maxlength="10" type="text" name="telephone" v-model="newTelephone" :placeholder="telephone">
                            </div>
                    </div>
                    <br>
                    <div class="container-input">
                            <div class="input">
                                <!-- <label for="nombre">Nombre</label> -->
                                <input class="new-data" maxlength="20" type="text" name="name" v-model="newOwner" :placeholder="owner">
                            </div>
                            <div class="input">
                                <!-- <label for="apellido">Apellido</label> -->
                                <input class="new-data" maxlength="30" type="text" name="lastName" v-model="newLastName" :placeholder="lastName">
                            </div>
                    </div>
                    <br>
                    <div class="container-input">
                        <div class="input center">
                            <input type="submit" value="Actualizar">
                        </div>
                    </div> 
                </div>
            </form>
        </section>
    </div>
</template>
<script> 
import axios from 'axios';
export default {

    name: 'UpdateMonthlyPayment',

    data: function () {
        return {
            newIdentification:'',
            newOwner:'',
            newLastName:'',
            newTelephone:'',
            edit:true
        }
    },

    props:{
        owner:String,
        lastName:String,
        telephone:String,
        startDate:String,
        expiryDate:String,
        identification:String
    },

    methods:{

        updateMonthlyPayment(){

            // extraemos el nombre del usuario conectado
            let userName = localStorage.getItem('userName');

            // extraemos el id de la mensualidad consultada
            let idMp = localStorage.getItem('idMp');

            // seleccionamos el formulario
            let form = document.getElementById('updateMp');
            
            // creamos un objeto
            let datos = new FormData(form);

            let objData = {
                'name':datos.get('name'),
                'lastName':datos.get('lastName'),
                'telephone':datos.get('telephone'),
                'dni':datos.get('dni')
            };

            // concatenamos la url
            let url = 'http://127.0.0.1:8000/api/system-admin/monthly-payments/v1/' + userName +'/' + idMp

            // realizamos la peticion
            axios.put(url, objData)
                .then((res) => {

                    // mostramos una alerta
                    alert(res.data.msg)

                    // limpiamos los compos
                    this.newOwner = ''
                    this.newLastName = ''
                    this.newIdentification = ''
                    this.newTelephone = ''

                    // llamamos a la funcion que consulta la mensualidad para recargar
                    this.$root.$refs.A.queryMonthlyPayment();
                    this.edit = false

                })
                .catch((err) => {

                    // retornamos el error
                    alert(err.response.data.error)
                })
        }

    },

    mounted(){

        
        
        // // limpiamos los datos anteriorimente ingresados
        // for (let i = 0; i < inputs.length; i++) {
        //     inputs[i].value = '';
        // }
        


    }
}
</script>

<style scoped>

/* variable global para el background-color */
:root{
    --bg-color: #073762;
}
/* Para moviles */
/* @media screen and (max-width: 500px){
    section{
        margin-top: 0%;
        margin-left: 0;
        width: 100vw;
        height: 150vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    form{
        width: 90%;
        height: 90%;
        border: 0.15rem  solid #ced4da;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    Contenedor izquierdo
    .container-left{
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .container-left .container-input{
        width: 100%;
        height: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .container-input .date{
        flex-direction: column;
        width: 90%;
        height: 20%;
        text-align: center;
        font-size: 120%;
    }
    .container-input input[type="date"]{
        width: 80%;
        height: 20%;
        border: 0.15rem  solid #ced4da; 
        border-radius: 10rem;
        font-style: italic;
        font-size: 120%;
        border-radius: 1rem;
    }

    Contenedor derecho
    .container-right{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .container-right .container-input{
        width: 90%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        height: 15%;
    }
    form h1{
        height: 10%;
        width: 90%;
        border-bottom: 0.20rem  solid orange;
    }
    .input{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: flex-end;
    }
    .input label {
        width: 90%;
        height: 30%;
        font-size: 100%;
    }
    .input input[type="text"]{
        width: 90%;
        height: 35%;
        font-size: 120%;
        border-radius: 1rem;
    }
    form h2{
        height: 10%;
        width: 90%;
        border-bottom: 0.20rem  solid orange;
    }
    .input select{
        width: 90%;
        height: 40%;
        font-size: 120%;
        border-radius: 1rem;
        border: 0.15rem  solid #ced4da;
    }
    .input select:focus{
        color: #212529;
        background-color: #fff;
        border-color: #86b7fe;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }
    .input input[type="submit"]{
        width: 90%;
        height: 40%;
        font-size: 120%;
        border-radius: 10rem;
        background-color: orange;
    }
    .input input[type="submit"]:hover{
        background-color: #130999;
    }
} */

/* Para ordenadores pequeños */
/* @media screen and (min-width: 1232px){ */
    section{
        margin-left: 0;
        width: 80vw;
        height: 69.6vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    form{
        width: 90%;
        height: 85%;
        border: 0.15rem  solid #ced4da;
        border-bottom-left-radius: 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    /* Contenedor izquierdo */
    .container-left{
        width: 50%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .container-left .container-input{
        width: 90%;
        height: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .container-input .date{
        flex-direction: column;
        width: 100%;
        height: 20%;
        text-align: center;
        font-size: 150%;
    }
    .container-input input[type="date"]{
        width: 85%;
        height: 20%;
        border: 0.15rem  solid #ced4da; 
        border-radius: 10rem;
        font-style: italic;
        font-size: 120%;
        border-radius: 1rem;
    }

    /* Contenedor derecho */
    .container-right{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .container-right .container-input{
        width: 90%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        height: 15%;
    }
    form h1{
        height: 10%;
        width: 90%;
        border-bottom: 0.20rem  solid var(--bg-color);
    }
    .input{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: flex-end;
    }
    .input label {
        width: 90%;
        height: 30%;
        font-size: 120%;
    }
    .input input[type="text"]{
        width: 90%;
        height: 40%;
        font-size: 120%;
        border-radius: 1rem;
        text-transform: capitalize;
    }
    form h2{
        height: 10%;
        width: 90%;
        border-bottom: 0.20rem  solid var(--bg-color);
    }
    .input select{
        width: 90%;
        height: 40%;
        font-size: 120%;
        border-radius: 1rem;
        border: 0.15rem  solid #ced4da;
    }
    .input select:focus{
        color: #212529;
        background-color: #fff;
        border-color: #86b7fe;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }
    .input input[type="submit"]{
        width: 90%;
        height: 50%;
        font-size: 120%;
        border-radius: 10rem;
        background-color: var(--bg-color);
        transition: .3s;
    }

    .date{
        margin-bottom: 15px;
    }

    .date-info{
        color: var(--bg-color);
        font-size: 25px;
        text-decoration: underline;
    }

    .center{        
        margin: 0 auto;
    }

    .input input[type="submit"]:hover{
        background-color: #fff;
        color: var(--bg-color);
        border: 1px solid var(--bg-color);
        transition: .3s;
    }
/* } */
</style>