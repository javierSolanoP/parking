<template>
    <div>
        <section id="addMonthlyPayment">
            <form id="formMp" @submit.prevent="addMonthlyPayment">
                <div class="container-left">
                    <div class="container-input">
                        <label for="dateStart" class="date">Fecha de inicio</label>
                        <input required type="date" name="dateStart" v-model="datos.dateStart">
                    </div>
                </div>
                <div class="container-right">
                    <h1><strong>INFORMACIÓN DEL DUEÑO</strong></h1>
                    <div class="container-input">
                            <div class="input">
                                <!-- <label for="cedula">Cedula</label> -->
                                <input maxlength="10" type="text" name="dni" v-model="datos.dni" required placeholder=" Cedula...">
                            </div>
                            <div class="input">
                                <!-- <label for="celular">Celular</label> -->
                                <input maxlength="10" type="text" name="telephone" v-model="datos.telephone" required placeholder=" Celular...">
                            </div>
                    </div>
                    <br>
                    <div class="container-input">
                            <div class="input">
                                <!-- <label for="nombre">Nombre</label> -->
                                <input maxlength="20" type="text" name="name" v-model="datos.name" required placeholder=" Nombre...">
                            </div>
                            <div class="input">
                                <!-- <label for="apellido">Apellido</label> -->
                                <input maxlength="30" type="text" name="lastName" v-model="datos.lastName" required placeholder=" Apellido...">
                            </div>
                    </div>
                    <br>
                    <h2><strong>INFORMACIÓN DEL VEHICULO</strong></h2>
                    <div class="container-input">
                        <div class="input plate">
                            <!-- <label for="placa">Placa</label> -->
                            <input class="uppercase" maxlength="6" type="text" name="plate" v-model="datos.plate" required placeholder=" Placa...">
                        </div>
                        <div class="input ">
                            <!-- <label for="type_of_vehicle">Tipo de vehiculo</label> -->
                            <select required class="tariff" name="tariff" v-model="datos.tariff" >
                                <option label="Tarifa"></option>
                                <option class="uppercase" v-for="tariffa in tariffs" :key="tariffa" :value="tariffa">{{tariffa}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="container-input">
                        <!-- <div class="input plate">
                            <label for="type_of_vehicle">Tipo de tarifa</label>
                            <select name="type_of_vehicle" v-model="type_of_vehicle">
                                <option value="0">...</option>
                            </select>
                        </div> -->
                        <div class="input plate">
                            <input type="submit" value="Registrar">
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </div>
</template>
<script> 
import axios from "axios";

export default {

    name: 'AddMonthlyPayment',

    data: function () {
        return {

            datos:{
                dni: '',
                telephone: '',
                name: '',
                lastName: '',
                plate: '',
                dateStart: '',
                tariff: ''
            },

            tariffs: [
                
            ]
            
        }
    },

    methods: {

        // funcion para renderizar las tarifas
        tariffRender(){

            // obtenemos el nombre del usuario conectado
            let userName = localStorage.getItem('userName');

            // realizmos la peticion
            axios.get(`${this.$urlServiceMonthlyPay}/tariffs/v1/${userName}`)
                .then((res) => {

                    // almacenamos los tipos de tarifas
                    let tariffsType = res.data.tariffs;
                    
                    // iteramos el objeto
                    for (const key in tariffsType) {
                        
                        // gaurdamos en un array los datos
                        let arr = Object.values(tariffsType[key]);

                        // las agregamos al arreglo
                        this.tariffs.push(arr[0].toUpperCase());

                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        addMonthlyPayment(){
            
            // obtenemos el nombre del usuario conectado
            let userName = localStorage.getItem('userName');

            // seleccionamos el formulario
            let form = document.getElementById('formMp');
            
            // extraemos los datos
            let data = new FormData(form);
            
            // cambaimos el formato de la fecha
            let dateStart = data.get('dateStart').split("-").reverse().join("/")
            
            // añaidmos la fehca formateada al arreglo
            data.append('dateStart', dateStart);

            // realizamos la peticion
            axios.post(`${this.$urlServiceMonthlyPay}/monthly-payments/v1/${userName}`, data)
                .then((res) => {

                    if(res.status == 201){

                        alert('Mensualidad Creada Exitosamente!');
                    }
                })
                .catch((err) => {

                    
                    alert(err.response.data.error);
                })
        }

    },

    created:function(){

        this.tariffRender()
        
    }

}
</script>

<style scoped>
/* variable global para el background-color */
:root{
    --bg-color: #265281;
}

/* Convertir texto a mayuyscula */
.uppercase{
    text-transform: uppercase;
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
        border-bottom: 0.20rem  solid #F04509;
    }
    .input{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }
    .plate{
        justify-content: flex-end
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
        border-bottom: 0.20rem  solid #F04509;
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
        background-color: #F04509;;
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
        border-bottom: 0.20rem  solid #2196F3;
    }

    strong, .date{
        color: #2196F3;
    }

    .tariff option{
        /* background: red; */
        width: 90%; 
        height: 80%;
        /* font-size: 120%; */
        /* /* border-radius: 1rem; */
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
    }

    form h2{
        height: 10%;
        width: 90%;
        border-bottom: 0.20rem  solid #2196F3;
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
        background-color: #2196F3;
        transition: .3s;
    }
    .input input[type="submit"]:hover{
        background-color: #fff;
        border: 1px solid #2196F3;
        color: #2196F3;
        transition: .3s;
    }
/* } */
</style>