function validar(){

    // define as variaveis com os valores dos elementos do formulario
    var nome=document.getElementById("nome2").value;  
    var email=document.getElementById("email2").value;                
    var numero=document.getElementById("numero2").value; 
    var viatura=document.getElementById("viatura2").value;
    var GPS= document.getElementById("GPS");
    var CDB= document.getElementById("CDB");  
    var price= document.getElementById("price")
//regex para cada caixa

    // validações 
    if(nome==''||email==''||numero=='')
    {  
        alert("Introduza os campos obrigatórios!");  
    }  
                
        // aqui vamos fazer os calculos
                        
        
        var total =  numero * viatura ;  
        //fazemos os "if" para caso selecione os extras//  
        if(GPS.checked)
        {
            total = total + 10 ;
        }
         if(CDB.checked)
        {
            total = total + 15 ;
        }
        price.innerHTML= total + '€';
        document.getElementById("total").value = total ;
}