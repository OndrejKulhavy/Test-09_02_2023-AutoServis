class Auto {
    constructor(rokVyroby, znacka, model, najetoKm) {
        this.id = Math.floor(Math.random() * 1000000000);
        this.rokVyroby = rokVyroby;
        this.znacka = znacka;
        this.model = model;
        this.najetoKm = najetoKm;
    }

    getHTML() {
        return `<div class="card m-4" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${this.model}</h5>
    <p class="card-text"></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Rok výroby: ${this.rokVyroby}</li>
    <li class="list-group-item">Značka: ${this.znacka}</li>
    <li class="list-group-item">Najetých KM: ${this.najetoKm}</li>
  </ul>
  <div class="card-body">
    <button kod="${this.id}" type="button" onClick="smazAuto(this);" class="btn btn-danger">Odebrat</button>
  </div>
</div>`
    }
}

class AutoServis {
    constructor(nazev) {
        this.auta = [];
        this.nazev = nazev;
    }
    pridejAuto(auto) {
        this.auta.push(auto);
        this.save();
    }
    smazAuto(auto) {
        this.auta.splice(this.auta.indexOf(auto), 1);
        this.save();
    }
    getAuta() {
        return this.auta;
    }
    updateAutaOnWeb() {
        let html = "";
        for (let auto of this.auta) {
            html += auto.getHTML();
        }
        document.getElementById("opravovane").innerHTML = html;
    }
    save() {
        localStorage.setItem(this.nazev, JSON.stringify(this.auta));
    }
    load() {
        this.auta = JSON.parse(localStorage.getItem(this.nazev));
        if (this.auta == null) this.auta = [];
    }
}

let autoServis = new AutoServis("auta");
let auto1 = new Auto(2010, "Skoda", "Octavia", 100000);
let auto2 = new Auto(2015, "Skoda", "Superb", 50000);
autoServis.pridejAuto(auto1);
autoServis.pridejAuto(auto2);
autoServis.updateAutaOnWeb();



function pridejAuto() {
    let rokVyroby = document.getElementById("rok-vyroby").value;
    let znacka = document.getElementById("znacka").value;
    let model = document.getElementById("model").value;
    let najetoKm = document.getElementById("najeto-km").value;

    document.getElementById("rok-vyroby").value = "";
    document.getElementById("znacka").value = "";
    document.getElementById("model").value = "";
    document.getElementById("najeto-km").value = "";

    let auto = new Auto(rokVyroby, znacka, model, najetoKm);
    autoServis.pridejAuto(auto);
    autoServis.updateAutaOnWeb();
}

function smazAuto(input) {
    let id = input.getAttribute("kod");

    for (let auto of autoServis.getAuta()) {
        if (auto.id == id) {
            autoServis.smazAuto(auto);
            autoServis.updateAutaOnWeb();
            break;
        }
    }
}