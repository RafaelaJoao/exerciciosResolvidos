const resposta = document.querySelector("#resultado")

calcular.addEventListener("click", () => {

  const ladoA = faceA.value
  const ladoB = faceB.value
  const ladoC = faceC.value

  let resp

  if (ladoA === ladoB && ladoB === ladoC) {
    resp = "TRIÂNGULO EQUILÁTERO";
  } else if ((ladoA === ladoB && ladoB !== ladoC) || (ladoB === ladoC && ladoC !== ladoA) || (ladoA === ladoC && ladoC !== ladoB)) {
    resp = "TRIÂNGULO ISÓSCELES"
  } else if ((ladoA !== ladoB && ladoB !== ladoC) && (ladoB !== ladoC && ladoC !== ladoA) && (ladoA !== ladoC && ladoC !== ladoB)) {
    resp = "TRIÂGULO ESCALENO"
  }

  resposta.innerText = resp

})