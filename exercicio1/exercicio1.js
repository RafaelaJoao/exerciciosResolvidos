const resposta = document.querySelector("#resultado")

calcular.addEventListener("click", () => {

  const ladoA = faceA.value
  const ladoB = faceB.value
  const ladoC = faceC.value

  let resp

  if (ladoA === ladoB && ladoB === ladoC) {
    resp = "TRIANGULO EQUILATERO";
  } else if ((ladoA === ladoB && ladoB !== ladoC) || (ladoB === ladoC && ladoC !== ladoA) || (ladoA === ladoC && ladoC !== ladoB)) {
    resp = "TRIANGULO ISOSCELES"
  } else if ((ladoA !== ladoB && ladoB !== ladoC) && (ladoB !== ladoC && ladoC !== ladoA) && (ladoA !== ladoC && ladoC !== ladoB)) {
    resp = "TRIANGULO ESCALENO"
  }

  resposta.innerText = resp

})