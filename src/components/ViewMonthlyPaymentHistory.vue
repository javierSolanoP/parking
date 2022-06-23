<template>
    <div>
        <section id="viewMonthlyPayment">
            <article>
                <div class="container">
                    <div class="option">
                        <p v-if="status === 'PAGA'" class="data success">{{status}}</p>
                        <p v-if="status === 'NO PAGA'" class="data fail">{{status}}</p>
                    </div>
                    <div class="container-option-button">
                        <div class="option button">
                            <button class="pay" @click="openModalPay">
                                    <img src="/pagar.png" alt="Icono de pagar mensualidad">
                            </button>
                        </div>
                        <div class="option button">
                            <button class="renew" @click="openModalRenew">
                                <img src="/renovar.png" alt="Icono de renovar mensualidad">
                            </button>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="owner">
                        <p class="data"><strong>NOMBRE</strong></p>
                        <p class="data content">{{owner}}</p>
                    </div>
                    <div class="owner">
                        <p class="data"><strong>APELLIDO</strong></p>
                        <p class="data content">{{lastName}}</p>
                    </div>
                    <div class="owner">
                        <p class="data"><strong>TELEFONO</strong></p>
                        <p class="data content">{{telephone}}</p>
                    </div>
                </div>
                <div class="container">
                    <div class="date">
                        <p class="data"><strong class="date-strong">FECHA DE INICIO</strong></p>
                        <p class="data content">{{startDate}}</p>
                    </div>
                    <div class="date">
                        <p class="data"><strong class="date-strong">FECHA DE FIN</strong></p>
                        <p class="data content">{{expiryDate}}</p>
                    </div>
                </div>
            </article>
        </section>
        <div  class="container-modal pay">
            <div class="modal">
                    <div class="head pay">
                        <h1>PAGO DE MENSUALIDAD</h1>
                    </div>
                    <br>
                    <div class="body">
                        <h2>¿Quiere cambiar el estado de la mensualidad, como mensualidad paga?</h2>
                        <div class="container-button">
                            <button @click="validateOptionPay" class="option yes pay">Si</button>
                            <button @click="cancelOptionPay" class="option no">No</button> 
                        </div>
                    </div>
            </div>
        </div>
        <div class="container-modal renew">
            <div class="modal">
                    <div class="head renew">
                        <h1>RENOVACIÓN DE MENSUALIDAD</h1>
                    </div>
                    <br>
                    <div class="body">
                        <h2>¿Quiere renovar la mensualidad con el mismo rango de fecha?</h2>
                        <div class="container-button">
                            <button @click="validateOption" class="option yes renew">Si</button>
                            <button @click="cancelOptionRenew" class="option no">No</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ViewMonthlyPaymentHistory',
    data: function (){
        return {
            test: true
        }
    },
    props:{
        status:String,
        owner:String,
        lastName:String,
        telephone:String,
        startDate:String,
        expiryDate:String
    },
    methods: {

        // Metodo para visualizar el modal de pago:
        openModalPay(){

            // Selecccionamos la clase del elemento del modal: 
            const modal = document.querySelector('.container-modal.pay'); 

            // Cambiamos la visibilidad del elemento a visible:   
            modal.style.visibility = 'visible';

        },

        // Metodo para visualizar el modal de renovacion de mensualidad:
        openModalRenew(){

            // Selecccionamos la clase del elemento del modal: 
            const modal = document.querySelector('.container-modal.renew'); 

            // Cambiamos la visibilidad del elemento a visible:   
            modal.style.visibility = 'visible';

        },

        // Metodo para ocultar la visibilidad del modal de pago: 
        cancelOptionPay(){

            // Selecccionamos la clase del elemento del modal: 
            const modal = document.querySelector('.container-modal.pay'); 

            // Cambiamos la visibilidad del elemento a oculto:  
            modal.style.visibility = 'hidden';

        },

        // Metodo para ocultar la visibilidad del modal de renovacion de mensualidad: 
        cancelOptionRenew(){

            // Selecccionamos la clase del elemento del modal: 
            const modal = document.querySelector('.container-modal.renew'); 

            // Cambiamos la visibilidad del elemento a oculto:  
            modal.style.visibility = 'hidden';

        },

        validateOptionPay(){
            console.log('cambiar a paga');
        },

        validateOption(){
            console.log('renovar mensualidad');
        }
    }

    
}
</script>
<style scoped>

:root{
    --bg-color: #265281;
}


/* Para moviles */
@media screen and (max-width: 500px){
    section{
        margin-left: 0;
        margin-top: 0;
        width: 100vw;
        height: 200vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    article{
        width: 90%;
        height: 90%;
        border: 0.15rem  solid #ced4da;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        box-shadow: 0.5rem 0.5rem 1rem rgb(54, 54, 54);
    }

    article .container{
        width: 90%;
        height: 33.33%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    /* Opciones a realizar */
    .container .option{
        width: 100%;
        height: 33.33%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .container .container-option-button {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .option .data{
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 140%;
        border-radius: 1rem;
    }
    .data.success{
        background-color: rgb(54, 230, 54);
        width: 90%;
        height: 30%;
        font-weight: normal;  
        font-style: normal;  
    }
    .data.fail{
        background-color: rgb(219, 10, 10);
        width: 90%;
        height: 30%;
        color: #fff;
        font-weight: normal;  
        font-style: normal;
    }
    .option .data strong{
        border-bottom: 0;
    }
    .container-option-button .option.button {
        width: 100%;
        height: 50%;
        flex-direction: row;
    }
    .option.button button{
        background-color: rgb(221, 221, 19);
        width: 60%;
        height: 90%;
        cursor: pointer;
        border: none;
        border-radius: 1rem;
        box-shadow: 0.5rem 0.5rem 0.5rem rgb(78, 77, 77);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .option.button button:hover{
        transform: scale(110%, 110%);
    }
    button img{
        width: 70%;
        height: 70%;
    }

    .option.button .pay{
        background-color: rgb(216, 216, 16);
    }

    .option.button .renew{
        background-color: rgb(54, 230, 54);
    }
    /* Datos del dueño del vehiculo */
    .container .owner{
        width: 33%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .owner .data{
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 120%; 
    }
    .data strong{
        width: 100%;
        height: 40%;
        border-bottom: 0.20rem  solid var(--bg-color);
    }
    .data.content{
        font-size: 150%;
    }

    /* Fechas de la mensualidad registrada */
    .container .date{
        width: 50%;
        height: 100%;
    }

    .date .data{
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 150%;
    }

    strong {
        font-size: 100%;
    }

    /* Modal */
    .container-modal{
        position: fixed;
        top: 0;
        width: 100%;
        height: 200vh;
        background-color: rgba(0, 0, 0, 0.5);;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container-modal.pay{
        visibility: hidden;
    }
    .container-modal.renew{
        visibility: hidden;
    }
    .container-modal .modal{
        top: 40;
        width: 90%;
        height: 20%;
        margin-top: -200%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border: none;
        border-radius: 1rem;
        box-shadow: 0.5rem 0.5rem 1rem rgb(54, 54, 54);
    }
    .modal .head{
        width: 90%;
        height: 30%;
        border-top: none;
        border-left: none;
        border-right: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .head.pay{
        border-bottom: 0.25rem solid rgb(216, 216, 16);
    }
    .head.renew{
        border-bottom: 0.25rem solid rgb(54, 230, 54);
    }
    .modal .body{
        width: 70%;
        height: 75%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .body .container-button{
        width: 40%;
        height: 40%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .container-button .option{
        width: 40%;
        height: 50%;
        border: none;
        border-radius: 1rem;
        cursor: pointer;
        font-size: 110%;
    }

    .option.yes.pay{
        background-color: rgb(216, 216, 16);;
    }

    .option.yes.renew{
        background-color: rgb(54, 230, 54);
    }

    .option.no{
        background-color: red;
        color: #000;
    }
}

/* Para ordenadores pequeños */
@media screen and (max-width: 2080px){
    section{
        margin-left: 0;
        width: 80vw;
        height: 69.6vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    article{
        width: 90%;
        height: 85%;
        border: 0.15rem  solid #ced4da;
        border-radius: 1rem;
        box-shadow: 0.5rem 0.5rem 1rem rgb(54, 54, 54);
    }

    article .container{
        width: 100%;
        height: 33.33%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* Opciones a realizar */
    .container .option{
        width: 33%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .container .container-option-button {
        width: 66%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .option .data{
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 140%;
        border-radius: 1rem;
    }
    .data.success{
        background-color: rgb(54, 230, 54);
        width: 90%;
        height: 30%;
        font-weight: normal;  
        font-style: normal;  
    }
    .data.fail{
        background-color: rgb(219, 10, 10);
        width: 90%;
        height: 30%;
        color: #fff;
        font-weight: normal;  
        font-style: normal;
    }
    .option .data strong{
        border-bottom: 0;
    }
    .option.button {
        flex-direction: row
    }
    .option.button button{
        background-color: rgb(221, 221, 19);
        width: 50%;
        height: 60%;
        cursor: pointer;
        border: none;
        border-radius: 1rem;
        box-shadow: 0.5rem 0.5rem 0.5rem rgb(78, 77, 77);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .option.button button:hover{
        transform: scale(110%, 110%);
    }
    button img{
        width: 70%;
        height: 70%;
    }

    .option.button .pay{
        margin-left: -50%;
        background-color: rgb(216, 216, 16);
    }

    .option.button .renew{
        margin-left: 50%;
        background-color: rgb(54, 230, 54);
    }
    /* Datos del dueño del vehiculo */
    .container .owner{
        width: 33%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .owner .data{
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 140%; 
    }
    .data strong{
        width: 90%;
        height: 40%;
        border-bottom: 0.20rem  solid var(--bg-color);
    }
    .data.content{
        font-size: 180%;
    }

    /* Fechas de la mensualidad registrada */
    .container .date{
        width: 50%;
        height: 100%;
    }

    .date .data{
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 110%;
    }

    .data .data-strong{
        font-size: 110%;
    }

    /* Modal */
    .container-modal{
        position: fixed;
        top: 0;
        margin-left: -30%;
        width: 130%;
        height: 101vh;
        background-color: rgba(0, 0, 0, 0.5);;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container-modal.pay{
        visibility: hidden;
    }
    .container-modal.renew{
        visibility: hidden;
    }
    .container-modal .modal{
        width: 50%;
        height: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border: none;
        border-radius: 1rem;
        box-shadow: 0.5rem 0.5rem 1rem rgb(54, 54, 54);
    }
    .modal .head{
        width: 90%;
        height: 20%;
        border-top: none;
        border-left: none;
        border-right: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .head.pay{
        border-bottom: 0.25rem solid rgb(216, 216, 16);
    }
    .head.renew{
        border-bottom: 0.25rem solid rgb(54, 230, 54);
    }
    .modal .body{
        width: 90%;
        height: 75%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .body .container-button{
        width: 30%;
        height: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .container-button .option{
        width: 40%;
        height: 50%;
        border: none;
        border-radius: 1rem;
        cursor: pointer;
        font-size: 120%;
    }

    .option.yes.pay{
        background-color: rgb(216, 216, 16);;
    }

    .option.yes.renew{
        background-color: rgb(54, 230, 54);
    }

    .option.no{
        background-color: red;
        color: #000;
    }
}
</style>