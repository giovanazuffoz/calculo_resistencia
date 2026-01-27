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
function principal(){
    let material = 'cobre'
    let resistencia = 0
    let L = 1000
    let A = 6

    let resposta = ''


    let mat = verTipoMaterial(material)
    console.log(mat)

    resistencia = calcularResistencia(L, A, mat)
    console.log(resistencia.toFixed(3))

    

}
principal()