<template>
    <div>
        <section class="container" id="monthlyPayment">
            <article>
                <form @submit.prevent="queryMonthlyPayment">
                    <label for="monthly_payment"><strong>PLACA</strong></label>
                    <br>
                    <div class="search">
                        <input maxlength="6" class="uppercase" type="text" v-model="monthly_payment" placeholder=" Placa..." required>
                        <input type="submit" value="Buscar">
                    </div>
                </form>
                <section class="container-option">
                    <button @click="addMonthlyPayment()" class="option add" title="Añadir mensualidad">
                        <img src="/agregar.svg" alt="Agregar mensualidad">
                    </button>
                    <button @click="updateMonthlyPayment()" class="option update" title="Modificar mensualidad">
                        <img src="/modificar.svg" alt="Modificar mensualidad">
                    </button>
                </section>
            </article>
        </section>
        <ViewMonthlyPaymentHistory 
            :owner="owner" 
            :lastName="lastName"
            :telephone="telephone"
            :startDate="startDate"
            :expiryDate="expiryDate"
            :status="status"
            v-show="view"
        />
        <AddMonthlyPayment v-show="add"/>
        <UpdateMonthlyPayment v-show="update"/>
    </div>
</template>

<script>
import ViewMonthlyPaymentHistory from '@/components/ViewMonthlyPaymentHistory.vue';
import AddMonthlyPayment from '@/components/AddMonthlyPayment.vue';
import UpdateMonthlyPayment from '@/components/UpdateMonthlyPayment.vue';
import axios from "axios";

export default {
    name: 'MonthlyPayment',

    components: {
        ViewMonthlyPaymentHistory,
        AddMonthlyPayment,
        UpdateMonthlyPayment
    },

    data: function () {
        return {
            monthly_payment:'',
            view: false,
            add: false,
            update: false,
            owner:'',
            lastName:'',
            telephone:'',
            startDate:'',
            expiryDate:'',
            status:''
        }
    },

    methods: {

        // Metodo para habilitar el componente del historial de mensualidades: 
        queryMonthlyPayment(){
            
            // extraemos el nombre del usuario conectado
            let userName = localStorage.getItem('userName');

            // concatenamos la url 
            let url = 'http://127.0.0.1:8000/api/system-admin/monthly-payments/v1/' + userName + '/' + this.monthly_payment
            
            // realizamos la peticion
            axios.get(url)
                .then((response) => {
                    
                    // almacenamos la mensualidad
                    var monthlyPayData = response.data.monthlyPayment[0];
                    
                    // asiganamos los datos
                    this.owner = monthlyPayData.name.toUpperCase();
                    this.lastName = monthlyPayData.lastName.toUpperCase();
                    this.telephone = monthlyPayData.telephone;
                    this.startDate = monthlyPayData.startDate;
                    this.expiryDate = monthlyPayData.expiryDate;
                    this.status = monthlyPayData.status;

                    //  Condicionamos la visibilidad del componente: 
                    if(this.view){
                        this.view = false;
                    }else if(!this.view){

                        // Condicionamos la visibilidad de los otros componentes: 
                        if(this.add){
                            this.add = false;
                        }else if(this.update){
                            this.update = false;
                        }

                        this.view = true;
                    }
                   
                })
                .catch((error) => {
                    
                    console.log(error)
                })
        },

        // Metodo para habilitar el componente que agreaga mensualidades: 
        addMonthlyPayment() {  

            // Condicionamos la visibilidad del componente: 
            if(this.add){
                this.add = false;
            }else if(!this.add){

                // Condicionamos la visibilidad de los otros componentes: 
                if(this.view){
                    this.view = false;
                }else if(this.update){
                    this.update = false;
                }

                this.add = true;
            }
        }, 

        // Metodo para habilitar el componente que actualiza mensualidades: 
        updateMonthlyPayment() {  

            // Condicionamos la visibilidad del componente: 
            if(this.update){
                this.update = false;
            }else if(!this.update){

                // Condicionamos la visibilidad de los otros componentes: 
                if(this.view){
                    this.view = false;
                }else if(this.add){
                    this.add = false;
                }

                this.update = true;
            }
        }

    }
}
</script>

<style scoped>
/* variable global para el background-color */
:root{
    --bg-color: #265281;
}


/* Para moviles */
/* @media screen and (max-width: 500px){
    section{
        margin-left: 0;
        display: flex;
        justify-content: center;
    }
    .container{
        margin-top: 0%;
        width: 100vw;
        height: 60vh;
        align-items: center;
        border-radius: 0;
        border-bottom: 0.20rem  solid #130999;
    }
    article{
        width: 90%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    form{
        width: 100%;
        height: 40%;
        border: 0.15rem  solid #ced4da;
        border-radius: 1rem;
    }
    label{
        width: 90%;
        height: 30%;
        text-align: center;
        text-justify: center;
        font-size: 180%;

    }
    .search{
        width: 90%;
        height: 30%;
        display: flex;
        justify-content: space-between;
    }
    input[type="text"]{
        width: 50%;
        height: 100%;
        background-color: #fff;
        border-bottom: 0.20rem  solid #130999;
        border-top: none;
        border-left: none;
        border-right: none;
        border-radius: 0;
        font-size: 150%;
    }
    input[type="text"]:focus{
        color: #212529;
        background-color: #fff;
        border: 0;
        border-color: none;
        outline: #fff;
        box-shadow:0;
        border-bottom: 0.20rem  solid #F04509;
    }
    input[type="submit"]{
        width: 40%;
        height: 100%;
        font-size: 150%;
    }
    .container-option{
        width: 100%;
        height: 50%; 
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .option{
        width: 30%;
        height: 60%;
        background-color: thistle;
        border-radius: 1rem;
        border: 0;
        box-shadow: 0.5rem 0.5rem 0.5rem rgb(78, 77, 77);
    }
    .option:hover{
        transform: scale(110%, 110%);
        cursor: pointer;
    }
    .option img{
        width: 90%;
        height: 90%;
    }
    .option.add{
        background-color: #F04509;
    }
    .option.update{
        margin-left: 20%;
        background-color: orange;
    }
} */

/* Para ordenadores pequeños */
@media screen and (max-width: 2080px){
    section{
        margin-left: 0;
        width: 80vw;
        height: 30vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .container{
        border-radius: 0;
        border-bottom: 0.20rem  solid var(--bg-color);
    }
    article{
        width: 90%;
        height: 70%;
        display: flex;
        justify-content: space-between;
    }
    form{
        width: 50%;
        height: 100%;
        border: 0.15rem  solid #ced4da;
        border-radius: 1rem;
    }
    label{
        width: 90%;
        height: 30%;
        text-align: center;
        text-justify: center;
        font-size: 180%;

    }
    .search{
        width: 90%;
        height: 30%;
        display: flex;
        justify-content: space-between;
    }
    input[type="text"]{
        width: 50%;
        height: 100%;
        background-color: #fff;
        border: none;
        border-bottom: 0.20rem  solid var(--bg-color);
        outline-style: none;
        border-radius: 0;
        font-size: 150%;
    }

    input[type="text"]:focus{
        color: #212529;
        background-color: #fff;
        border: none;
        border-color: transparent;
        outline-style: none;
        box-shadow:0;
        border-bottom: 0.20rem  solid var(--bg-color);
    }
    
    input[type="submit"]{
        width: 40%;
        height: 100%;
        font-size: 150%;
        background-color: var(--bg-color);
        transition: .5s;
    }

    input[type="submit"]:hover{
        border: 1px solid var(--bg-color);
        color: var(--bg-color);
        background-color: #fff;
        transition: .5s;
    }

    .uppercase{
        text-transform: uppercase;
    }

    .container-option{
        width: 40%;
        height: 100%; 
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .option{
        width: 80%;
        height: 80%;
        background-color: thistle;
        margin-left: 50px;
        border-radius: 1rem;
        border: 0;
        box-shadow: 0.5rem 0.5rem 0.5rem rgb(78, 77, 77);
        transition: .4s;
    }
    .option:hover{
        transform: scale(110%, 110%);
        cursor: pointer;
        transition: .4s;
    }
    .option img{
        width: 100%;
        height: 100%;
    }
    .option.add{
        background-color: #2196F3;
    }
    .option.update{
        background-color: #fff;
    }
}
</style>
