<template>
    <div>
        <section v-show="monthlyPaymentView" id="testV">
            <article>
                <div class="container">
                    <div class="option">
                        <p v-if="status === 'PAGA'" class="data success">{{status}}</p>
                        <p v-if="status === 'NO PAGA'" class="data fail">{{status}}</p>
                    </div>
                    <div class="container-option-button">
                        <div class="option button">
                            <button class="pay" @click="openModalPay">
                                    <img src="/hand.png" alt="Icono de pagar mensualidad">
                            </button>
                        </div>
                        <div class="option button">
                            <button class="renew" @click="openModalRenew">
                                <img src="/facturas.png" alt="Icono de renovar mensualidad">
                            </button>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="owner">
                        <p class="data"><strong>NOMBRE</strong></p>
                        <p class="data content usuario">{{owner}}</p>
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
                        <h1>GENERAR RECIBO</h1>
                    </div>
                    <br>
                    <div class="body">
                        <h2>¿Quiere generar el recibo de la mensualidad?</h2>
                        <div class="container-button">
                            <button @click="validateOption" class="option yes renew">Si</button>
                            <button @click="cancelOptionRenew" class="option no">No</button>
                        </div>
                    </div>
            </div>
        </div>

        <TicketMonthlyPayment 
            :date="date"
            :tariff="tariff"
            :fechaInicio="fechaInicio"
            :fechaFin="fechaFin"
            :plate="plate"
            :subTotal="subTotal"
            :iva="iva"
            :total="total"
        />
    </div>

</template>

<script>
import TicketMonthlyPayment from '@/components/TicketMonthlyPayment.vue';
import axios from "axios";


export default {
    name: 'ViewMonthlyPaymentHistory',
    data: function (){
        return {
            test: true,
            monthlyPaymentView:true,
            date:'',
            tariff:'',
            fechaInicio:'',
            fechaFin:'',
            plate:'',
            subTotal:0,
            iva:0,
            total:0
        }
    },

    components: {
        TicketMonthlyPayment
    },

    props:{
        status:String,
        owner:String,
        lastName:String,
        telephone:String,
        startDate:String,
        expiryDate:String,
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

        // metodo para actualizar el estado de pago y generar recibo
        validateOptionPay(){
            
            // obtenemos el nombre del usuario
            let userName = localStorage.getItem('userName');

            // obtenemos el id de la mensualidad
            let idMp = localStorage.getItem('idMp');
            
            // obtenemos la fecha actual
            let date = new Date();
            let paymentDate = date.toLocaleDateString().split("/").join("-")

            // concatenamos el url
            let url =  `${this.$urlServiceMonthlyPay}/monthly-payments/v1/${userName}/${idMp}/paid/${paymentDate}`

            // realizamos la peticion
            axios.put(url)
                .then((response) => {
                    
                    // almacenamos los datos del recibo
                    let ticketData = response.data.ticket;

                    // asignamos los datos para el recibo
                    this.tariff = ticketData.tariffName;
                    this.subTotal = ticketData.subTotal;
                    this.iva = ticketData.iva;
                    this.total = ticketData.total;
                    this.fechaInicio = ticketData.startDate.split("-").reverse().join("/");
                    this.fechaFin = ticketData.expiryDate.split("-").reverse().join("/");
                    this.date = paymentDate;
                    this.plate = ticketData.plate;

                    // ejecutamos la funcion de imprimir
                    setTimeout(() => {
                        print()
                    }, 500)

                    // deshabilitamos algunas vistas
                    this.cancelOptionRenew();
                    this.cancelOptionPay();

                    // llamamos a la funcion que consulta la mensualidad para recargar
                    this.$root.$refs.A.queryMonthlyPayment();

                })
                .catch((err) => {

                    // console.log(err.response.data.error)
                    alert(err.response.data.error)

                    this.cancelOptionPay();
                })
        },

        validateOption(){
            
            // obtenemos el nombre del usuario
            let userName = localStorage.getItem('userName');

            // obtenemos el id de la mensualidad
            let idMp = localStorage.getItem('idMp');

            // concatenamos el url
            let url =  `${this.$urlServiceMonthlyPay}/monthly-payments-ticket/v1/${userName}/${idMp}`

            // realizamos la peticion
            axios.get(url)
                .then((res) => {
                    
                    // almacenamos los datos del recibo
                    let ticketData = res.data.ticket;

                    // asignamos los datos para el recibo
                    this.tariff = ticketData.tariffName;
                    this.subTotal = ticketData.subTotal;
                    this.iva = ticketData.iva;
                    this.total = ticketData.total;
                    this.fechaInicio = ticketData.startDate.split("-").reverse().join("/");
                    this.fechaFin = ticketData.expiryDate.split("-").reverse().join("/");
                    this.date = ticketData.paymentDate;
                    this.plate = ticketData.plate;

                    // ejecutamos la funcion de imprimir
                    setTimeout(() => {
                        print()
                    }, 500)

                    // deshabilitamos algunas vistas
                    this.cancelOptionRenew();
                    this.cancelOptionPay();
                    
                })
                .catch((err) => {
                    alert(err.response.data.error)
                    this.cancelOptionRenew();

                })
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
        width: 90%;
        height: 30%;
        font-weight: normal;  
        font-style: normal;
        color: #fff;
        background-color: #32C77F;
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
        /* background-color: rgb(221, 221, 19); */
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
        /* background-color: rgb(216, 216, 16); */
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
        background-color: rgb(216, 216, 16);
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
        background-color: #32C77F;
        color: #fff;
        width: 90%;
        height: 30%;
        font-weight: normal;  
        font-style: normal;  
    }
    .data.fail{
        background-color: #D22121;
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
        /* background-color: rgb(216, 216, 16); */
        background-color: #fff;
    }

    .option.button .renew{
        margin-left: 50%;
        /* background-color: rgb(54, 230, 54); */
        background-color: #fff;
        /* border: 1px solid #265281; */
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
        border-bottom: 0.25rem solid #265281;
    }
    .head.renew{
        border-bottom: 0.25rem solid #32C77F;
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
        background-color: #265281;
        color: #fff;
    }

    .option.yes.renew{
        background-color: #32C77F;
        color: #fff;
    }

    .option.no{
        background-color: #fff;
        border: 1px solid #265281;
        color: #000;
    }
}
</style>