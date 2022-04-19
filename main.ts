import { Serie } from "./Serie";

import { series } from "./Data";

const seriesTbody: HTMLElement = document.getElementById('series')!;
const seasonsAveragedata: HTMLElement = document.getElementById("seasons-average")!; 
const serieimg: HTMLElement = document.getElementById("serieimg")!; 

renderSeriesInTable(series);

function renderSeriesInTable(series: Serie[]): void {
    series.forEach(s => {
        let trElement = document.createElement("tr");
        trElement.innerHTML =   `<td>${s.num}</td>
                                <td>${s.name}</td>
                                <td>${s.channel}</td>
                                <td>${s.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

function getAverageSeasons(series: Serie[]): number {
    let totalSeasons: number = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);

    let average:number = totalSeasons / series.length;
    return average;
  }

function getSeriesImg(serie: ): string {

}