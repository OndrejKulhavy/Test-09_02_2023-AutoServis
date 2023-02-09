class Auto{
    constructor(rokVyroby, znacka, model, najetoKm){
        this.rokVyroby = rokVyroby;
        this.znacka = znacka;
        this.model = model;
        this.najetoKm = najetoKm;
    }
}

class AutoServis{
    constructor(nazev){
        this.auta = [];
        this.nazev = nazev;
        this.load();
    }
    pridejAuto(auto){
        this.auta.push(auto);
        this.save();
    }
    smazAuto(auto){
        this.auta.splice(this.auta.indexOf(auto), 1);
        this.save();
    }
    getAuta(){
        return this.auta;
    }
    save(){
        localStorage.setItem(this.nazev, JSON.stringify(this.auta));
    }
    load(){
        this.auta = JSON.parse(localStorage.getItem(this.nazev));
    }
}
 
let autoServis = new AutoServis("auta");
let auto1 = new Auto(2010, "Skoda", "Octavia", 100000);