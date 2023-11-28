
//calcular peso ideal
//peso ideal homens 22 *(altura)² 
//peso ideal mulheres 21 * (altura)² 


const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("clicou")

    //entrada
    let altura = Number(inAltura.value)
    let sexo_feminino = inFeminino.checked
    let sexo_masculino = inMasculino.checked
    let nome = inNome.value
    //fim entrada

    console.log("valor de nome: " + nome )
    console.log("valor de altura: " + altura )
    console.log("valor de sexo_feminino: " + sexo_feminino )
    console.log("valor de sexo_masculino: " + sexo_masculino )

    let peso_ideal = 0                      
    if (sexo_masculino) {
        peso_ideal = 22 * Math.pow(altura, 2)
    } else {
        peso_ideal = 21 * Math.pow(altura, 2)
    }

    console.log("valor de peso_ideal: " + peso_ideal )

    resp.innerText = `${nome}: Seu peso ideal é ${peso_ideal.toFixed(3)} kg`
})