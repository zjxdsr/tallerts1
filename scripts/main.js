var seriesTbody = document.getElementById('series');
function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.num, "</td>\n                                <td>").concat(s.name, "</td>\n                                <td>").concat(s.channel, "</td>\n                                <td>").concat(s.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
export {};
