const resposta = document.querySelector("#resultado")

calcular.addEventListener("click", () => {

    let a = valorA.value
    let b = valorB.value
    let c = valorC.value

    let delta = (b * b) - 4 * a * c

    let resp

    if (a == 0) {
      resp = `Impossível calcular`
    } else {
        if (delta > 0) {
            r1 = +((-b + Math.pow(delta, 0.5)) / (2 * a)).toFixed(2)
            r2 = +((-b - Math.pow(delta, 0.5)) / (2 * a)).toFixed(2)
            resp = [r1, r2]
        } else {
            resp = "Delta é negativo"
        }
    }

    resposta.innerText = resp

})