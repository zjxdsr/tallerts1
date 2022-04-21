import { Serie } from "./Serie.js";

import { data } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById('series')!;
const seasonsAveragedata: HTMLElement = document.getElementById("seasons-average")!; 

renderSeriesInTable(data);
seasonsAveragedata.innerHTML = `${getAverageSeasons(data)}`

function renderSeriesInTable(series: Serie[]): void {
    var i = 0;
    series.forEach((s) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML =  `<td><b>${s.num}</b></td>
                                <td numserie="${i}"><a href="#">${s.name}</a></td>
                                <td>${s.channel}</td>
                                <td>${s.seasons}</td>`;
        seriesTbody.appendChild(trElement);
        let c : HTMLElement = trElement.cells[1];
        c.addEventListener("click", loadSeries);                           
        i++;
    });
}

function getAverageSeasons(series: Serie[]): number {
    let totalSeasons: number = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);

    let average:number = totalSeasons / series.length;
    return average;
  }


function loadSeries(this:HTMLElement, ev:MouseEvent){
    var nserie = this.getAttribute("numserie");
    if (nserie == null) 
        return;
    else 
        var num:number = parseInt(nserie);
    
    let photo:HTMLImageElement = document.getElementById('sphoto')! as HTMLImageElement;
    let name:HTMLElement = document.getElementById('sname')!;
    let desc:HTMLElement = document.getElementById('sdesc')!;
    let btnlink:HTMLButtonElement = document.getElementById('slink')! as HTMLButtonElement;

    photo.src = data[num].photo;
    name.innerHTML = data[num].name;
    desc.innerHTML = data[num].desc;
    btnlink.innerText = 'Go watch';
    btnlink.setAttribute('onclick', "window.location.href='"+data[num].link+"';");
}
