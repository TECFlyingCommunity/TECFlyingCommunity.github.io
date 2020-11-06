window.onload = initPage;

function initPage() {
  var categoria = queryString("categoria");
  const $nome_categoria = $("#nome-categoria");
  $nome_categoria.append(categoria);
  listarCursos(categoria);
}

function paginaCurso(valor) {
  window.location = "curso.html?curso=" + valor;
}

function listarCursos(categoria) {
  const $list = $("#cursos-list");
  var requestURL = "https://tecflyingcommunity.github.io/json/cursos.json";
  var request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json"; 
  request.send();

  request.onload = function () {
    var cursos = request.response;

    for (let i = 0; i < cursos.length; i++) {
      const curso = cursos[i];
      if (curso.categoria == categoria) {
        const type_curso = `<div onclick="paginaCurso(\'${curso.nome_curso}\')">
        <div class="card card-curso card-curso column">
          <img src="${curso.avatar_url}" alt="" class="card card-curso img-fluid">
        </div>
        <h4>${curso.nome}</h4>
      </div>`;

        $list.append(type_curso);

        console.log(curso.nome_curso);
        console.log(curso);
      }
    }
  };
}
