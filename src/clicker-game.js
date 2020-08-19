class Esme {
  constructor() {
    this.craftingMaterials = 0;
    this.scytheEnabled = false;
    this.scythes = 0;
    this.retainers = 0;
    this.airships = 0;
  };

  getElements() {
    this.pointsString = document.getElementById("points")
    this.retainerString = document.getElementById("retainers")
    this.retainerCostString = document.getElementById("retainerCost")
    this.airshipString = document.getElementById("airships")
    this.airshipCostString = document.getElementById("airshipCost")
    this.scytheCostString = document.getElementById("eScytheCost")
    this.scytheButton = document.getElementById("scytheButton")
  };

  harvestPlants(num) {
    this.craftingMaterials += num;
    this.pointsString.innerHTML = this.craftingMaterials;
  };

  enableScythe() {
    var scytheCost = 50
    if(this.craftingMaterials >= scytheCost) {
      this.scythes = 1;
      this.craftingMaterials -= scytheCost;
      this.scytheCostString.innerHTML = "";
      this.scytheButton.outerHTML = '<button id="scytheButton">Bought!</button>'
    }

  }

  hireRetainer() {
    var retainerCost = Math.floor(10 * Math.pow(1.1, this.retainers));
    if(this.craftingMaterials >= retainerCost) {
      this.retainers += 1;
      this.craftingMaterials -= retainerCost;
      this.retainerCostString.innerHTML = retainerCost;
      this.retainerString.innerHTML = this.retainers;
      var html = document.getElementById("retainerspace")
      html.innerHTML += '<div id="retainerimg"></div>'
    };
    var nextRetainerCost = Math.floor(10 * Math.pow(1.1, this.retainers));
    this.retainerCostString.innerHTML = nextRetainerCost;
  };

  buyAirship() {
    var airshipCost = Math.floor(500 * Math.pow(1.1, this.airships));
    if(this.craftingMaterials >= airshipCost) {
      this.airships += 1;
      this.craftingMaterials -= airshipCost;
      this.airshipCostString.innerHTML = airshipCost;
      this.airshipString.innerHTML = this.airships;
    }
    var nextAirshipCost = Math.floor(500 * Math.pow(1.1, this.airships));
    this.airshipCostString.innerHTML = nextAirshipCost;
    };
};


const esme = new Esme();

window.setInterval(function() {
  esme.harvestPlants(esme.scythes)
  esme.harvestPlants(esme.retainers)
  esme.harvestPlants(esme.airships * 5)
}, 1000)