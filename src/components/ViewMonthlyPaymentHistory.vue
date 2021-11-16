<template>
    <div>
        <section>
            <article>
                <div class="container">
                    <div class="option">
                        <p class="data"><strong>ESTADO</strong></p>
                        <p class="data success">Paga</p>
                    </div>
                    <div class="option button">
                       <button class="pay">
                            <img src="pagar.png" alt="Icono de pagar mensualidad">
                       </button>
                    </div>
                    <div class="option button">
                        <button class="renew">
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
                        <p class="data"><strong>FECHA DE VENCIMIENTO</strong></p>
                        <p class="data">16/12/2021</p>
                    </div>
                </div>
            </article>
        </section>
    </div>
</template>

<script>
export default {
    name: 'ViewMonthlyPaymentHistory',
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

</style>