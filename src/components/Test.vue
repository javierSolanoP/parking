<template>
    
</template>

<script>
export default {
    name: 'Test',

    data: function(){
        return {
            
        }
    },

    props: {
        visibility: Boolean
    },

    methods: {

        cancelOption(){

            // Ocultamos la visibilidad del modal: 
            if(this.visibility){
                this.visibility = false;
            }

        },
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
    height: 20%;
    border: 0.25rem solid rgb(216, 216, 16);
    border-top: none;
    border-left: none;
    border-right: none;
    display: flex;
    align-items: center;
    justify-content: center;
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
    width: 20%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container-button .option{
    width: 40%;
    height: 40%;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
}

.option.yes{
    background-color: rgb(216, 216, 16);;
}

.option.no{
    background-color: red;
}
</style>