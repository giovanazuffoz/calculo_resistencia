// L = comprimento do condutor [m]
// A = área de Seção Transversal [mm²]
// mat = material => resistividade do material [ro]
// cobre = 0.017
// aluminio = 0.028


function calcularResistencia(L, A, mat){
    return (mat * L) / A
}
// Atribui o valor do material
function verTipoMaterial(material){
    const aluminio = 0.0028
    const cobre = 0.017
    
    if(material === 'cobre'){
        return cobre
    }else if(material === 'aluminio'){
        return aluminio
    }else{
        return 'material inválido'
    }
}

    l
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    = document.getElementById('resposta')
    let calcular = document.getElementById('calcular')

    calcular.addEventListener('click', ()=>{

        let material = document.getElementById('material').value
        let L = Number(document.getElementById('L').value)
        let A = Number(document.getElementById('A').value)
        
        let resistencia = 0
    
    
    
    
        let mat = verTipoMaterial(material)
    
        resistencia = calcularResistencia(L, A, mat)
        console.log(`A resistência do condutor é ${resistencia.toFixed(3)}Ω`)

        resposta.innerHTML = ``
        resposta.innerHTML += `A resistência do condutor é ${resistencia.toFixed(3)}Ω`
        resposta.style.fontSize = '1rem'
        resposta.style.fontWeight = 'bold'
        resposta.style.fontFamily = 'Verdana'
        resposta.innerHTML += '<br>'

    })

        //a função principal foi substituida pelo arrow function ()=>
        
