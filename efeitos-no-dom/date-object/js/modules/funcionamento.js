export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataHoje = new Date();
  const diaHoje = dataHoje.getDay();
  const horarioHoje = dataHoje.getHours();

  const semanaAberto = diasSemana.indexOf(diaHoje) !== -1;
  const horarioAberto =
    horarioHoje >= horarioSemana[0] && horarioHoje < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}
