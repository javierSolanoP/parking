<template>
    <div v-show="visibility" class="container">
        <section>
           <div class="modal">
                <div class="head">
                    <button class="exit">X</button>
                </div>
                <br>
                <div class="body">
                    <h1>¿Quiere cambiar el estado de la mensualidad como pagada?</h1>
                    <button class="option yes">Si</button>
                    <button class="option no">No</button>
                </div>
           </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Test',

    data: function(){
        return {
            visibility: true
        }
    }
}
</script>

<style scoped>
.container{
    position: relative;
    margin-left: -30%;
    margin-top: -30%;
    width: 130%;
    height: 104%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
section{
    width: 130%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal{
    width: 40%;
    height: 30%;
    margin-left: 30%;
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
    height: 15%;
    border: 0.25rem solid rgb(216, 216, 16);
    border-top: none;
    border-left: none;
    border-right: none;
}
.modal .body{
    width: 90%;
    height: 80%;
}
</style>