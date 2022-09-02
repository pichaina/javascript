/*Verificando idade para votar*/
var idade = 56
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) { 
        console.log('Voto é opcional')    
    } else /*(idade >18 || idade<65)*/ { 
        console.log('Voto obrigatório') 
    }