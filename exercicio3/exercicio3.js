const resposta = document.querySelector("#resultado")

calcular.addEventListener("click", () => {

	let nota = +(inputNota.value)

	if (nota < 38) {
		nota = `Você tirou ${nota}, portanto, está reprovado!`
	} else if (nota % 5 >= 3) {
		nota = nota + (5 - (nota % 5))
		nota = `Você foi aprovado e teve sua nota arredondada para ${nota}!`

	} else {
		nota = nota - (nota % 5)
		nota = `Você foi aprovado com a nota ${nota}!`
	}

	resposta.innerText = nota

})