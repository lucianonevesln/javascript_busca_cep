// atribui o comportamento do botao a uma variavel
var botaoProcurar = document.querySelector('#id-buscar-cep')

// funcao que escuta o comportamento do botao e e acionada quando ele e clicado
botaoProcurar.addEventListener('click', function (Event) {

    // funcao que previne o comportamento padrao
    Event.preventDefault();

    // variavel que armazena o valor digitado pelo usuario
    var cep = document.querySelector('#id-digite-cep').value;
    
    // variavel que concatena a url do cep ao cep digitado pelo usuario
    var url = 'https://viacep.com.br/ws/'+ cep + '/json/';
    
    // objeto que permite a troca de dados entre cliente e servidor
    var xhr = new XMLHttpRequest();

    // funcao que permite a inicializaco do pedido
    xhr.open('GET', url);

    // funcao que escuta o comportamento de resposta do servidor
    xhr.addEventListener('load', function () {

        if (xhr.status == 200) {

            // variaveis que armazenam uma resposta em texto e em seguida a transforma em objeto json
            var resposta = xhr.responseText;
            var endereco = JSON.parse(resposta);

            // invoca funcao que trata o endereco
            mostrarEndereco(endereco);

        } else {

            // retorna um eventual erro no console
            console.log(xhr.status);
            console.log(xhr.responseText);

        };

    });

    // funcao que envia a solicitacao
    xhr.send();

    // limpa o campo de cep para que seja digitado um novo valor
    document.querySelector('#id-digite-cep').value = '';

});

// funcao que recebe os valores obtidos do servidor
function mostrarEndereco (endereco) {

    // invoca-se funcao que mostra no HTML o resultado da consulta ao servidor
    mostrarNoHtml(document.querySelector('#id-cep').innerHTML = "<strong>CEP: </strong>" + endereco.cep);
    mostrarNoHtml(document.querySelector('#id-logradouro').innerHTML = "<strong>Logradouro: </strong>" + endereco.logradouro);
    mostrarNoHtml(document.querySelector('#id-complemento').innerHTML = "<strong>Complemento: </strong>" + endereco.complemento);
    mostrarNoHtml(document.querySelector('#id-bairro').innerHTML = "<strong>Bairro: </strong>" + endereco.bairro);
    mostrarNoHtml(document.querySelector('#id-localidade').innerHTML = "<strong>Localidade: </strong>" + endereco.localidade);
    mostrarNoHtml(document.querySelector('#id-uf').innerHTML = "<strong>UF: </strong>" + endereco.uf);
    mostrarNoHtml(document.querySelector('#id-ibge').innerHTML = "<strong>IBGE: </strong>" + endereco.ibge);
    mostrarNoHtml(document.querySelector('#id-gia').innerHTML = "<strong>GIA: </strong>" + endereco.gia);
    mostrarNoHtml(document.querySelector('#id-ddd').innerHTML = "<strong>DDD: </strong>" + endereco.ddd);
    mostrarNoHtml(document.querySelector('#id-siafi').innerHTML = "<strong>SIAFI: </strong>" + endereco.siafi);
    
};

// funcao que altera o style none para block, permitindo sua apresentacao no front-end
function mostrarNoHtml (elemento) {

    // atribuicao do block a cada display com none do front-end
    document.querySelector('#id-cep').style.display = 'block';
    document.querySelector('#id-logradouro').style.display = 'block';
    document.querySelector('#id-complemento').style.display = 'block';
    document.querySelector('#id-bairro').style.display = 'block';
    document.querySelector('#id-localidade').style.display = 'block';
    document.querySelector('#id-uf').style.display = 'block';
    document.querySelector('#id-ibge').style.display = 'block';
    document.querySelector('#id-gia').style.display = 'block';
    document.querySelector('#id-ddd').style.display = 'block';
    document.querySelector('#id-siafi').style.display = 'block';

};