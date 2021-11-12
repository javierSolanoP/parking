<template>
    <div>
        <section>
            <form @submit.prevent="addMonthlyPayment">
                <label for=""></label>

            </form>
        </section>
    </div>
</template>
<script> 
export default {

    name: 'AddMonthlyPayment',

    data: function () {
        return {

        }
    }

}
</script>

<style scoped>
section{
    margin-left: 0;
    width: 80vw;
    height: 69.6vh;
    background-color: violet;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
form{
    width: 60%;
    height: 90%;
    border-bottom-left-radius: 1rem;
}
</style>