function calcular() {
    
    let horaIni = parseInt(document.getElementById('horaIni').value);
    let minIni = parseInt(document.getElementById('minIni').value);
    let horaFim = parseInt(document.getElementById('horaFim').value);
    let minFim = parseInt(document.getElementById('minFim').value);

    let inicioMinutos = (horaIni * 60) + minIni;
    let fimMinutos = (horaFim * 60) + minFim;

    let duracaoEmMinutos = fimMinutos - inicioMinutos;

    let horas = Math.floor(duracaoEmMinutos / 60);
    let minutos = duracaoEmMinutos % 60;
    
    if (horas < 10) {
        document.getElementById('horas').innerText = "0" + horas;
    } else {
        document.getElementById('horas').innerText = horas;
    }
    
    if (minutos < 10) {
        document.getElementById('minutos').innerText = "0" + minutos;
    } else {
        document.getElementById('minutos').innerText = minutos;
    }
}
