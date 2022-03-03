fetch('../player.json')
  .then(response => response.json())
  .then(data => showData(data));

function showData(data){
    let html = ''
    data.map(element=>{
        html += `<div class="d-flex text-muted pt-3">
        <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
          <div class="d-flex justify-content-between">
            <strong class="text-light text-capitalize">${element.fullname}</strong>
            <a href="#" class="text-light">${element.JerseyNumber}</a>
          </div>
          <span class="d-block">${element.Role}</span>
          <span class="d-block">${element.Batting}</span>
          <span class="d-block">${element.Bowling}</span>
        </div>
      </div>`
    })

let playerList = document.getElementById('player-list').innerHTML = html
}