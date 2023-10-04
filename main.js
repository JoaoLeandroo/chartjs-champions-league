const dadosJson = './dados.json'
const clube = []
const titulos = []
fetch(dadosJson)
.then((response) => response.json())
.then((json) => {

    const x = json.titulos
    x.map((todo) => {
        clube.push(todo.nome)
        titulos.push(todo.numero_titulos)
    })

    const ctx = document.getElementById('grafico')

new Chart(ctx, {
  type: 'line',
  data: {
    labels: clube,
    datasets: [{
      label: 'Times com mais titulos da Champios League',
      data: titulos,
      borderWidth: 1,
      backgroundColor: "#08088A"
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})
})


