<template>
    <div>
        <section>
            <form @submit.prevent="addMonthlyPayment">
                <div class="container-left">
                    <div class="container-input">
                        <label for="first_date" class="date">Fecha de inicio</label>
                        <input type="date" name="first_date" v-model="first_date">
                    </div>
                    <div class="container-input">
                        <label for="finish_date" class="date">Fecha de caducidad</label>
                        <input type="date" name="finish_date" v-model="finish_date">
                    </div>
                </div>
                <div class="container-right">
                    <h1><strong>INFORMACIÓN DEL DUEÑO</strong></h1>
                    <div class="container-input">
                            <div class="input">
                                <!-- <label for="cedula">Cedula</label> -->
                                <input type="text" name="identification" v-model="identification" placeholder=" cedula...">
                            </div>
                            <div class="input">
                                <!-- <label for="celular">Celular</label> -->
                                <input type="text" name="telephone" v-model="telephone" placeholder=" celular...">
                            </div>
                    </div>
                    <br>
                    <div class="container-input">
                            <div class="input">
                                <!-- <label for="nombre">Nombre</label> -->
                                <input type="text" name="name" v-model="name" placeholder=" nombre...">
                            </div>
                            <div class="input">
                                <!-- <label for="apellido">Apellido</label> -->
                                <input type="text" name="last_name" v-model="last_name" placeholder=" apellido...">
                            </div>
                    </div>
                    <br>
                    <h2><strong>INFORMACIÓN DEL VEHICULO</strong></h2>
                    <div class="container-input">
                            <div class="input">
                                <!-- <label for="placa">Placa</label> -->
                                <input type="text" name="card" v-model="card" placeholder=" placa...">
                            </div>
                            <div class="input">
                                <label for="type_of_vehicle">Tipo de vehiculo</label>
                                <select name="type_of_vehicle" v-model="type_of_vehicle">
                                    <option value="0">...</option>
                                </select>
                            </div>
                    </div>
                    <div class="container-input">
                        <div class="input">
                            <label for="type_of_vehicle">Tipo de tarifa</label>
                            <select name="type_of_vehicle" v-model="type_of_vehicle">
                                <option value="0">...</option>
                            </select>
                        </div>
                        <div class="input">
                            <input type="submit" value="Actualizar">
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </div>
</template>
<script> 
export default {

    name: 'UpdateMonthlyPayment',

    data: function () {
        return {
            identification: '',
            telephone: '',
            name: '',
            last_name: '',
            card: '',
            first_date: ''
        }
    }

}
</script>

<style scoped>
/* Para moviles */
@media screen and (max-width: 500px){
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
    /* Contenedor izquierdo */
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

    /* Contenedor derecho */
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
}

/* Para ordenadores pequeños */
@media screen and (min-width: 1232px){
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
        height: 80%;
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
        border-bottom: 0.20rem  solid #F04509;
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
        height: 50%;
        font-size: 120%;
        border-radius: 10rem;
        background-color: #F04509;;
    }
    .input input[type="submit"]:hover{
        background-color: #130999;
    }
}
</style>