<template>
    <div>
        <section class="container">
            <article>
                <form @submit.prevent="queryMonthlyPayment">
                    <label for="monthly_payment"><strong>PLACA</strong></label>
                    <br>
                    <div class="search">
                        <input type="text" name="monthly_payment" v-model="monthly_payment" placeholder=" Placa...">
                        <input type="submit" value="Buscar">
                    </div>
                </form>
                <section class="container-option">
                    <button @click="addMonthlyPayment()" class="option add">
                        <img src="agregar.PNG" alt="Agregar mensualidad">
                    </button>
                    <button class="option delete">
                        <img src="modificar.PNG" alt="Modificar mensualidad">
                    </button>
                </section>
            </article>
        </section>
        <AddMonthlyPayment v-show="add"/>
        <ViewMonthlyPaymentHistory v-show="view"/>
    </div>
</template>

<script>
import AddMonthlyPayment from '@/components/AddMonthlyPayment.vue';
import ViewMonthlyPaymentHistory from '@/components/ViewMonthlyPaymentHistory.vue';

export default {
    name: 'MonthlyPayment',

    components: {
        AddMonthlyPayment,
        ViewMonthlyPaymentHistory,
    },

    data: function () {
        return {
            add: false,
            view: false,
        }
    },

    methods: {

        // Metodo para habilitar el componente del historial de mensualidades: 
        queryMonthlyPayment(){

            // Condicionamos la visibilidad del componente: 
            if(this.view){
                this.view = false;
            }else if(!this.view){

                // Condicionamos la visibilidad de los otros componentes: 
                if(this.add){
                    this.add = false;
                }

                this.view = true;
            }
 
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
                }

                this.add = true;
            }
        }
    }
}
</script>

<style scoped>
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
    border-bottom: 0.20rem  solid #130999;
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
    width: 40%;
    height: 100%; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.option{
    width: 40%;
    height: 80%;
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
.option.delete{
    background-color: orange;
}
</style>
