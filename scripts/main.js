import { data } from "./data.js";
var seriesTbody = document.getElementById('series');
var seasonsAveragedata = document.getElementById("seasons-average");
renderSeriesInTable(data);
seasonsAveragedata.innerHTML = "".concat(getAverageSeasons(data));
function renderSeriesInTable(series) {
    var i = 0;
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td><b>".concat(s.num, "</b></td>\n                                <td numserie=\"").concat(i, "\"><a href=\"#\">").concat(s.name, "</a></td>\n                                <td>").concat(s.channel, "</td>\n                                <td>").concat(s.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        var c = trElement.cells[1];
        c.addEventListener("click", loadSeries);
        i++;
    });
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    var average = totalSeasons / series.length;
    return average;
}
function loadSeries(ev) {
    var nserie = this.getAttribute("numserie");
    if (nserie == null)
        return;
    else
        var num = parseInt(nserie);
    var photo = document.getElementById('sphoto');
    var name = document.getElementById('sname');
    var desc = document.getElementById('sdesc');
    var btnlink = document.getElementById('slink');
    photo.src = data[num].photo;
    name.innerHTML = data[num].name;
    desc.innerHTML = data[num].desc;
    btnlink.innerText = 'Go watch';
    btnlink.setAttribute('onclick', "window.location.href='" + data[num].link + "';");
}
