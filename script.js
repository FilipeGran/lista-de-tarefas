const tarefas = [];
let countTarefas = tarefas.length;
let indexOptions;
const input = document.querySelector('#tarefa');
const ul = document.querySelector('ul');
const botaoAdd = document.querySelector('.btn-add');
const botaoEditar = document.querySelector('.editar');
const botaoExcluir = document.querySelector('.excluir');

function getListLi() {
  return document.querySelectorAll('li');
}

function tarefasCheck() {
  const liTarefas = getListLi();
  liTarefas.forEach((tarefa, index) => {
    tarefa.addEventListener('click', () => {
      input.value = tarefa.textContent;
      botaoEditar.disabled = false;
      botaoExcluir.disabled = false;
      botaoAdd.disabled = true;
      indexOptions = index;
    });
  });
}

function listarTarefas() {
  const tarefa = tarefas[countTarefas];
  const li = document.createElement('li');
  li.innerText = tarefa;
  ul.appendChild(li);
  countTarefas += 1;
  tarefasCheck();
}

function addTarefa() {
  if (input.value.length === 0 || input.value.length < 3) {
    // eslint-disable-next-line no-alert
    window.alert('Informe uma Tarefa!');
  } else {
    tarefas.push(input.value);
    input.value = '';
    listarTarefas();
  }
}

function limparCampos() {
  botaoEditar.disabled = true;
  botaoExcluir.disabled = true;
  input.value = '';
}

// eslint-disable-next-line no-unused-vars
function editar() {
  tarefas[indexOptions] = input.value;
  getListLi()[indexOptions].textContent = tarefas[indexOptions];
  botaoAdd.disabled = false;
  limparCampos();
}

// eslint-disable-next-line no-unused-vars
function excluir() {
  getListLi()[indexOptions].classList = 'disable';
  botaoAdd.disabled = false;
  limparCampos();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    limparCampos();
  }
});

botaoAdd.addEventListener('click', addTarefa);
