let contadorItem = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn_add");
let main = document.getElementById("areaLista");

function addTarefa() {
    // PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;

    // SE NAO FOR VAZIO, NULO OU INDEFINIDO
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contadorItem;

        let novoItem = `<div id="${contadorItem}" class="item">
        <div onclick="marcarTarefa(${contadorItem})" class="item-icone">
            <i id= "icone_${contadorItem}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contadorItem})" class="item-nome">${valorInput}</div>
        <div class="item-botao">
            <button onclick="deletar(${contadorItem})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
        </div>
    </div>`
        // ADICIONAR NOVO ITEM NO MAIN
        main.innerHTML += novoItem;

        //ZERAR OS CAMPINHOS
        input.value = "";
        input.onfocus();

    }

}


function deletar(id) {
    var tarefaDeletar = document.getElementById(id);
    tarefaDeletar.remove();

}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);
    
    if (classe == "item"){
        item.classList.add('clicado');

        var icone = document.getElementById("icone_" + id);

        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-check-circle");

        item.parentNode.appendChild(item);

    }else{
        item.classList.remove('clicado');

        var icone = document.getElementById("icone_" + id);

        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");
    }
}

// ENTER
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});
