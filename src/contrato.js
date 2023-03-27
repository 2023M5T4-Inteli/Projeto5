function exibirDados() {
    var nome = document.getElementById("nome_grupo").value;
    var max = document.getElementById("max_pessoas").value;
    var min = document.getElementById("min_pessoas").value;
  
    document.getElementById("nome-placeholder").innerHTML = nome;
    document.getElementById("max-placeholder").innerHTML = max;
    document.getElementById("min-placeholder").innerHTML = min;
  
    document.getElementById("dados-pessoais").style.display = "block";
}