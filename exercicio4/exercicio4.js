const resposta = document.querySelector("#resultado")

calcular.addEventListener("click", () => {

    let input = array.value

    let string = []

    for(i=1; i <= input; i++){
        if((i % 5 || i % 9) === 0){
            string.push('LuidyMoura')
            continue
        }
        if((i % 5) === 0){
            string.push('Luydi')
            continue
        }else if((i % 9) === 0){
            string.push('Moura')
            continue
        }
        string.push(i)
    }

   resposta.innerText = string

})
