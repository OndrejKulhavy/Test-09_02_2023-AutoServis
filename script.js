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
    }

    pridejAuto(auto){
        this.auta.push(auto);
    }
    smazAuto(auto){
        this.auta.splice(this.auta.indexOf(auto), 1);
    }
    getAuta(){
        return this.auta;
    }
}