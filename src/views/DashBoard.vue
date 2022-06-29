<template>
    <div id="dashboard">
        <aside id="asideContainer">
            <div class="container-avatar">
                <img src="/logo.svg" alt="Avatar" class="avatar">
            </div>
            <div class="user-info">
                <p id="userName">Nombre del usuario</p>
                <br>
                <hr>
            </div>
            <button class="menu" @click="showMenu">
                <img src="/menu.PNG" alt="Menú de navegación">
            </button>
            <ul id="ul">
                <li class="exit">
                    <button @click="exitMenu">X</button>
                </li>
                <li>
                    <img src="/calendario.PNG" alt="" class="icon">
                    <button @click="changeView" class="route-link">Mensualidades</button>
                </li>
                <!-- <li>
                    <img src="/hour.PNG" alt="" class="icon">
                    <button @click="changeView" class="route-link">Horas</button>
                </li> -->
            </ul>
            <button class="logout" @click="redirect">
                <img src="/salida.PNG" alt="Icono de cerrar sesión" class="icon">
                <p>Cerrar sesión</p>
            </button>
        </aside>
        <router-view></router-view>
    </div>
</template>

<script>
import axios from "axios";

export default {

    name: 'DashBoard',

    data: function () {
        return {
            // Evento que controla la carga del documento y deshabilita la visibilidad del componente 'access':
            dom: document.addEventListener('DOMContentLoaded', () => {
                    const access = document.querySelector('.access');
                    access.style.display = 'none';
                    
                    // seleccionamos el parrafo
                    let p = document.getElementById('userName');

                    // insertamos el nombre del usuario que inicia sesión
                    p.innerText = localStorage.getItem('userName').toUpperCase();

            }),
            pathMonthlyPayment: '/dashboard/mensualidades'
        }
    },

    props: {
        msg: String
    },

    methods: {

        // Metodo para redirigir a la vista de inicio de sesión:  
        redirect(){

            // extraemos el nombre del usuario
            let userName = localStorage.getItem('userName')
            
            // realizamos la peticion para cerrar sesion
            axios.post('http://127.0.0.1:8080/api/users/logout/v1/' + userName)
                .then(function (){

                    // removemos el nombre del localstorage
                    localStorage.clear();

                    // Redireccionamos a la vista de inicio de sesion
                    location.href = '/'

                })
                .catch(function(error) {

                    console.log(error)
                })            

        },

        // Metodo para mostrar el menu de navegacion: 
        showMenu(){

            // Seleccionamos el elemento 'ul':
            const ul = document.querySelector('#ul'),

                // Seleccionamos un elemento de la vista hija, para saber si esta habilitada: 
                  monthlyPayment = document.querySelector('#monthlyPayment');

            // Si esta habilitada, entonces seleccionamos los demas elementos de la vista hija:  
            if(monthlyPayment){
                
                // Seleccionamos los elementos que deshabilitaremos:
                const monthlyPayment = document.querySelector('#monthlyPayment'), 
                    viewMonthlyPayment = document.querySelector('#viewMonthlyPayment'),
                    addMonthlyPayment = document.querySelector('#addMonthlyPayment'),
                    updateMonthlyPayment = document.querySelector('#updateMonthlyPayment');

                // Deshabilitamos la visibilidad de los demas elementos: 
                monthlyPayment.style.display = 'none';
                viewMonthlyPayment.style.display = 'none';
                addMonthlyPayment.style.display = 'none';
                updateMonthlyPayment.style.display = 'none';

            }          

            // Habilitamos la visibilidad del elemento 'ul': 
            ul.style.display = 'flex';

            // Metodo para para realizar la transicion del elemento:  
            function  transition(){
                // Modificamos el estilo del elemento 'ul':
                ul.style.transform = 'translateX(100vw)';
            }
            
            // Ejecutamos el metodo que realiza la transicion del elemento: 
            setTimeout(transition, 50);
        },

        // Metodo para no mostrar el menu de navegacion: 
        exitMenu(){

            // Seleccionamos el elemento 'ul':
            const ul = document.querySelector('#ul');

            // Modificamos el estilo del elemento 'ul':
            ul.style.transform = 'translateX(0vw)';

            // Metodo para deshabilitar el display del elemento:  
            function  hiddenDisplay(){

                // Deshabilitamos la visibilidad del elemento: 
                ul.style.display = 'none';

                // Seleccionamos un elemento de la vista hija, para saber si esta habilitada: 
                const  monthlyPayment = document.querySelector('#monthlyPayment');

                // Si esta habilitada, entonces seleccionamos los demas elementos de la vista hija:  
                if(monthlyPayment){
                    
                    // Seleccionamos los elementos que deshabilitaremos:
                    const monthlyPayment = document.querySelector('#monthlyPayment'), 
                        viewMonthlyPayment = document.querySelector('#viewMonthlyPayment'),
                        addMonthlyPayment = document.querySelector('#addMonthlyPayment'),
                        updateMonthlyPayment = document.querySelector('#updateMonthlyPayment');

                    // Deshabilitamos la visibilidad de los demas elementos: 
                    monthlyPayment.style.display = 'flex';
                    viewMonthlyPayment.style.display = 'flex';
                    addMonthlyPayment.style.display = 'flex';
                    updateMonthlyPayment.style.display = 'flex';

                }          
            }
            
            // Ejecutamos el metodo que deshabilita el display del elemento: 
            setTimeout(hiddenDisplay, 500);

        },

        // Metodo para habilitar la visibilidad de una vista: 
        changeView(){

            // Ejecutamos el metodo que deshabilita el menu de navegacion: 
            this.exitMenu();

            // Redireccionamos a la vista que se solicita: 
            location.href = this.pathMonthlyPayment; 

        }
    }
}
</script>

<style>
/* variable global para el background-color */
:root{
    --bg-color: #265281;
}


/* @media print and (width: 8cm) and (height: 12cm){ */
@media print{

  #asideContainer,
  #testV,
  #monthlyPayment,
  #formMp,
  img{
    display: none;
  }

  body{
    margin-top: 0;
    padding-top: 0;
  }

  #ticket{
    display: block;
  }

  @page{
    margin: 0cm;
    height: 0cm;
  }



  /* @page{
    width: 8cm;
    height: 12cm;    
  } */

  
}

</style>

<style scoped>

#dashboard{
    width: 100vw;
    height: 100vh;
    display: flex;
}

aside{
    top: 0;
    position: sticky;
    margin-left: 0;
    width: 18%;
    height: 100%;
    background-color: var(--bg-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.container-avatar{
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-bottom-left-radius: 10rem;
    border-right: 0.1rem solid rgba(107, 106, 106, 0.125);
}

.container-avatar .avatar{
    width: 80%;
    height: 100%;
}

.user-info{
    margin-top: 15px;
    width: 100%;
    height: 5%;
}

.user-info p{
    color: #fff;
    text-align: center;
    font-size: 25px;
}

.menu{
    display: none;
}

ul{
    width: 90%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
}

li{
    border-bottom: 1px solid #fff;
    width: 100%;
    height: 13%;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}

li .route-link{
    width: 75%;
    height: 40%;
    font-size: 150%;
    color: #fff;
    border: none;
    cursor: pointer;
    text-decoration: none;
    background-color: transparent;
}

li .route-link:hover{
    opacity: .3;
}

.exit{
    display: none;
}

li .icon{
    margin-left:7%;
    width: 15%;
    height: 70%;
    border-radius: 100%;
}

li a{
    width: 75%;
    height: 40%;
    font-size: 150%;
    color: #fff;
    border: none;
    cursor: pointer;
    text-decoration: none;
}

li a:hover{
    opacity: .7;
}

.logout{
    width: 100%;
    height: 10%;
    border: none;
    background-color: #fff;
    color: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
}

.logout:hover{
    cursor: pointer;
    opacity: .7;
}

.logout .icon{
    width: 20%;
    height: 80%;
}

.logout p{
    font-size: 20px;
    width: 70%;
}

/* Para moviles */
@media only screen and (max-width: 520px){

    #dashboard{
        flex-direction: column;
    }
    aside{
        border: 1px solid red;
        width: 100%;
    }

    .container-avatar,
    .user-info{
        display: none;
    }

    #ul{
        display: none;
    }


    /* aside{
        background-color: var(--bg-color);
        width: 100%;
        height: 25%;
        margin-left: 0;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
    }

    .container-avatar{
        width: 30%;
        height: 100%;
        margin-left: -3%;
        border: 1px solid red;
        float: left;
        display: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }

    .container-avatar .avatar{
        width: 90%;
        height: 60%;
        border-radius: 100%;
    }

    .container-avatar p{
        width: 100%;
        color: #fff;
    }

    .menu{
        width: 15%;
        height: 40%;
        margin-left: 8%;
        border: none;
        border-radius: 1rem;
        background-color: #F04509;
    }

    .menu img{
        width: 80%;
        height: 80%;
    }

    ul{
        position: relative;
        margin-top: 141%;
        width: 100vw;
        height: 100vh;
        margin-left: -225vw;
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0; 
        background-color: var(--bg-color); 
        transform: translateX(0vw);
        transition: transform 0.5s;
    }

    li{
        border-bottom: 1px solid #fff;
        width: 100%;
        height: 10%;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .exit{
        justify-content: flex-end;
    }

    .exit button{
        margin-right: 5%;
        width: 12%;
        height: 70%;
        border: none;
        border-radius: 100%;
        background-color: red;
        color: #fff;
        text-align: center;
    }

    li .icon{
        margin-left:7%;
        width: 15%;
        height: 70%;
        border-radius: 100%;
    }

    li .route-link{
        width: 75%;
        height: 40%;
        font-size: 150%;
        color: #fff;
        border: none;
        cursor: pointer;
        text-decoration: none;
        background-color: transparent;
    }

    li .route-link:hover{
        color: #F04509
    }

    .logout{
        width: 15%;
        height: 40%;
        margin-left: 10%;
        border: none;
        border-radius: 1rem;
        cursor: pointer;
        background-color: #fff;
        color:  var(--bg-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;  
    }

    .logout .icon{
        width: 80%;
        height: 80%;
    }

    .logout p{
        width: 100%;
        display:none
    } */

}

/* @media only screen and (min-width: 500px){

    #app{
        display: flex;
        flex-direction: column;
    }
    .access{
        display: flex;
    }

} */
/* Para ordenadores pequeños */
/* @media screen and (min-width: 1232px){
    aside{
        top: 0;
        position: sticky;
        margin-left: 0;
        width: 18%;
        height: 100%;
        background-color: var(--bg-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .container-avatar{
        width: 100%;
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-bottom-left-radius: 10rem;
        border-right: 0.1rem solid rgba(107, 106, 106, 0.125);
    }
    .container-avatar .avatar{
        width: 80%;
        height: 100%;
    }

    .user-info{
        margin-top: 15px;
        width: 100%;
        height: 5%;
    }

    .user-info p{
        color: #fff;
        text-align: center;
        font-size: 25px;
    }

    .menu{
        display: none;
    }
    ul{
        width: 90%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0;
    }
    
    li{
        border-bottom: 1px solid #fff;
        width: 100%;
        height: 13%;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
    }
    li .route-link{
        width: 75%;
        height: 40%;
        font-size: 150%;
        color: #fff;
        border: none;
        cursor: pointer;
        text-decoration: none;
        background-color: transparent;
    }
    li .route-link:hover{
        opacity: .3;
    }
    .exit{
        display: none;
    }
    li .icon{
        margin-left:7%;
        width: 15%;
        height: 70%;
        border-radius: 100%;
    }
    li a{
        width: 75%;
        height: 40%;
        font-size: 150%;
        color: #fff;
        border: none;
        cursor: pointer;
        text-decoration: none;
    }

    li a:hover{
        opacity: .7;
    }
    .logout{
        width: 100%;
        height: 10%;
        border: none;
        background-color: #fff;
        color: var(--bg-color);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logout:hover{
        cursor: pointer;
        opacity: .7;
    }

    .logout .icon{
        width: 20%;
        height: 80%;
    }
    .logout p{
        font-size: 20px;
        width: 70%;
    }
}
} */




</style>

