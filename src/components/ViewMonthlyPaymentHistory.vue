<template>
    <div>
        <section>
            <article>
                <div class="container">
                    <div class="option">
                        <p class="data"><strong>ESTADO</strong></p>
                        <p class="data fail">No paga</p>
                    </div>
                    <div class="option button">
                       <button class="pay" @click="openModalPay">
                            <img src="pagar.png" alt="Icono de pagar mensualidad">
                       </button>
                    </div>
                    <div class="option button">
                        <button class="renew" @click="openModalRenew">
                            <img src="renovar.png" alt="Icono de renovar mensualidad">
                        </button>
                    </div>
                </div>
                <div class="container">
                    <div class="owner">
                        <p class="data"><strong>NOMBRE</strong></p>
                        <p class="data">Javier</p>
                    </div>
                    <div class="owner">
                        <p class="data"><strong>APELLIDO</strong></p>
                        <p class="data">Solano</p>
                    </div>
                    <div class="owner">
                        <p class="data"><strong>TELEFONO</strong></p>
                        <p class="data">324589678</p>
                    </div>
                </div>
                <div class="container">
                    <div class="date">
                        <p class="data"><strong>FECHA DE INICIO</strong></p>
                        <p class="data">16/11/2021</p>
                    </div>
                    <div class="date">
                        <p class="data"><strong>FECHA DE CADUCIDAD</strong></p>
                        <p class="data">16/12/2021</p>
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
                            <button @click="validateOption" class="option yes pay">Si</button>
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
                        <h2>¿Quiere renovar la mensualidad con el mismo rango de fechas?</h2>
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
    }
}
</script>
<style scoped>
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
}
.data.fail{
    background-color: rgb(219, 10, 10);
    width: 90%;
    height: 30%;
    color: #fff
}
.option .data strong{
    border-bottom: 0;
}
.option.button {
    flex-direction: row
}
.option.button button{
    background-color: rgb(221, 221, 19);
    width: 40%;
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
    font-size: 140%;
}
.data strong{
    width: 90%;
    height: 40%;
    border-bottom: 0.20rem  solid #130999;
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
    font-size: 140%;
}

/* Modal */
.container-modal{
    position: relative;
    margin-top: -87%;
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
    margin-left: 4%;
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
}

.option.yes.pay{
    background-color: rgb(216, 216, 16);;
}

.option.yes.renew{
    background-color: rgb(54, 230, 54);
}

.option.no{
    background-color: red;
}
</style>