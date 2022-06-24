<template>

    <div>
        <div class="container">
            <div class="imgContainer">
                <!-- <img src="logo.PNG" alt=""> -->
            </div>
            <div class="titleContainer">
                <h1 class="title">Terminal de transportes Popayan s.a</h1>
            </div>
            <div class="textContainer">
                <h2>Comprobante. Reg Contributivo</h2>
                <p>NIT 95949191-9</p>
                <p>Dirección Transversal 9 #4N, Oficina 201</p>
            </div>
            <div class="tableDate">
                <table>
                    <tr>
                        <th>Fecha</th>
                        <th>Factura de venta</th>
                    </tr>
                    <tr>
                        <td>{{date}}</td>
                        <td>10101024545</td>
                    </tr>
                </table>
            </div>
            <div class="infoContainer">
                <div class="infoContainerTitles">
                    <h2>Tipo de vehiculo</h2>
                    <h2>Tarifa</h2>
                    <h2>Fecha Inicio</h2>
                    <h2>Fecha Fin</h2>
                </div>
                <div class="infoContainerData">
                    <p>{{tariff}}</p>
                    <p>Mensualidad</p>
                    <p>{{fechaInicio}}</p>
                    <p>{{fechaFin}}</p>
                </div>
            </div>
            <div class="totalContainer">
                <div class="plateContainer">
                    <h3>{{plate}}</h3>
                </div>
                <div class="priceContainer">
                    <div class="subtotal">
                        <h3>Sub total</h3>
                        <p>{{subTotal}}</p>
                    </div>
                    <div class="iva">
                        <h3>Iva</h3>
                        <p>{{iva}}</p>
                    </div>
                    <div class="total">
                        <h3>Total</h3>
                        <p><b>{{total}}</b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name:'TicketMonthlyPayment',

    props:{
        date:String,
        tariff:String,
        fechaInicio:String,
        fechaFin:String,
        plate:String,
        subTotal:Number,
        iva:Number,
        total:Number
    }
}
</script>

<style scoped>

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.container{
    width: 100%;
    margin: 0 auto;
    height: 70vh;
    /* border: 1px solid red; */
}

.imgContainer{
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
}

.imgContainer img{
    width: 30%;
    height: 100%;
    filter: grayscale();
}

.titleContainer{
    width: 90%;
    margin: 0 auto;
    margin-bottom: 15px;
}

.title{
    text-align: center;
    text-transform: capitalize;
    font-size: 20px;
}

.textContainer{
    width: 90%;
    margin: 0 auto;
}

.textContainer h2{
    text-align: center;
    font-size: 15px;
}

.textContainer p{
    text-align: center;
}

.tableDate{
    width: 80%;
    margin: 0 auto;
}

.tableDate table{
    width: 100%;
    text-align: center;
}

.infoContainer{
    border: 1px solid black;
    border-radius: 15px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    margin-top: 15px;
    justify-content: space-evenly;
    padding: 10px;
}

.infoContainerTitles{
    justify-content: center;
}

.infoContainer div h2{
    font-size: 15px;
}

.infoContainer div p{
    font-size: 15px;
}

.totalContainer{
    width: 80%;
    height: 30%;
    margin: 0 auto;
    margin-top: 15px;
    display: flex;
    justify-content: space-evenly;
}

.plateContainer{
    height: 40%;
    width: 50%;
}

.plateContainer h3{
    text-align: center;
    font-size: 35px;
    margin-top: 10px;
}

.priceContainer{
    width: 50%;
    height: 40%;
}

.priceContainer div{
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
}

.priceContainer div h3{
    font-size: 13px;
}

.total{
    border: 1px solid black;
    border-radius: 15px;
}



</style>