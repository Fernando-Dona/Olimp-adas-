function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  const section = document.getElementById("resultados-pesquisa");

  // Obtém o valor do campo de pesquisa
  const campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Limpa os resultados anteriores
  section.innerHTML = '';

  // Verifica se há dados a serem pesquisados e se o campo de pesquisa não está vazio
  if (dados && campoPesquisa) {
    // Itera sobre cada dado da lista de dados
    for (const dado of dados) {
      // Se o título inclui o termo pesquisado
      if (dado.titulo.toLowerCase().includes(campoPesquisa.toLowerCase()) || dado.
    descricao.includes(campoPesquisa)) {
        // Cria um novo elemento div e seus filhos
        const div = document.createElement('div');
        div.classList.add('item-resultado');

        const h2 = document.createElement('h2');
        const a = document.createElement('a');
        a.href = dado.link;
        a.target = '_blank';
        a.textContent = dado.titulo;
        h2.appendChild(a);

        const p = document.createElement('p');
        p.classList.add('descricao-meta');
        p.textContent = dado.descricao;

        div.appendChild(h2);
        div.appendChild(p);

        // Adiciona o novo elemento à seção de resultados
        section.appendChild(div);
      }
    }
  } else {
    // Exibe uma mensagem caso não haja dados ou o campo de pesquisa esteja vazio
    section.textContent = 'Nenhum dado encontrado ou campo de pesquisa vazio.';
  }
}