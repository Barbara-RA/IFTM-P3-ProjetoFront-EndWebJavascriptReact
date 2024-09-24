window.addEventListener('load', function () {
    document.getElementById('selecao').addEventListener('change', () => {

        let valor = document.getElementById('selecao').value;

        acaoSelecionada(valor);
    });
});

acaoSelecionada = (valor) => {
    fetch('alunos.json')
        .then(response => response.json())
        .then(conteudo => {
            document.getElementById("return").innerHTML = "";
            if (valor == "todos") {
                conteudo.alunos.forEach(aluno => {
                    document.getElementById("return").innerHTML += `<p>${aluno.nome}: ${aluno.notaBim1} (bimestre 1) e ${aluno.notaBim2} (bimestre 2) = ${aluno.notaBim1 + aluno.notaBim2};</p>`;
                });
            } else if (valor == "mulheres") {
                conteudo.alunos.filter(aluno => aluno.sexo === "F").forEach(aluno => {
                    document.getElementById("return").innerHTML += `<p>${aluno.nome}: ${aluno.notaBim1} (bimestre 1) e ${aluno.notaBim2} (bimestre 2) = ${aluno.notaBim1 + aluno.notaBim2};</p>`;
                });
            } else if (valor == "homens") {
                conteudo.alunos.filter(aluno => aluno.sexo === "M").forEach(aluno => {
                    document.getElementById("return").innerHTML += `<p>${aluno.nome}: ${aluno.notaBim1} (bimestre 1) e ${aluno.notaBim2} (bimestre 2) = ${aluno.notaBim1 + aluno.notaBim2};</p>`;
                });
            } else if (valor == "aprovados") {
                conteudo.alunos.filter(aluno => aluno.notaBim1 + aluno.notaBim2 >= 60).forEach(aluno => {
                    document.getElementById("return").innerHTML += `<p>${aluno.nome}: ${aluno.notaBim1} (bimestre 1) e ${aluno.notaBim2} (bimestre 2) = ${aluno.notaBim1 + aluno.notaBim2};</p>`;
                });
            } else if (valor == "reprovados") {
                conteudo.alunos.filter(aluno => aluno.notaBim1 + aluno.notaBim2 < 60).forEach(aluno => {
                    document.getElementById("return").innerHTML += `<p>${aluno.nome}: ${aluno.notaBim1} (bimestre 1) e ${aluno.notaBim2} (bimestre 2) = ${aluno.notaBim1 + aluno.notaBim2};</p>`;
                });
            } else if (valor == "todosAprovados") {
                document.getElementById("return").innerHTML += `<p>Todos aprovados? ${conteudo.alunos.every(aluno => (aluno.notaBim1+aluno.notaBim2) >= 60)}`
            } else if (valor == "media") {
                let mediaTurma = conteudo.alunos.reduce((notaTotal, aluno) => notaTotal + aluno.notaBim1 + aluno.notaBim2, 0) / (conteudo.alunos.length);
                document.getElementById("return").innerHTML += `<p>Nota média da turma: ${mediaTurma.toFixed(2)}</p>`;
            }
        })
}
