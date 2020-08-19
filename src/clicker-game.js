class Esme {
  constructor() {
    this.craftingMaterials = 0;
    this.retainers = 0;
    this.airships = 0;
  };

  getElements() {
    this.pointsString = document.getElementById("points")
    this.retainerString = document.getElementById("retainers")
    this.retainerCostString = document.getElementById("retainerCost")
    this.airshipString = document.getElementById("airships")
    this.airshipCostString = document.getElementById("airshipCost")
  };

  

  harvestPlants(num) {
    this.craftingMaterials += num;
    this.pointsString.innerHTML = this.craftingMaterials;
  };

  hireRetainer() {
    this.retainerCost = Math.floor(10 * Math.pow(1.1, this.retainers));
    if(this.craftingMaterials >= this.retainerCost) {
      this.retainers += 1;
      this.craftingMaterials -= this.retainerCost;
      this.retainerCostString.innerHTML = this.retainerCost;
      this.retainerString.innerHTML = this.retainers;
    };
    var nextRetainerCost = Math.floor(10 * Math.pow(1.1, this.retainers));
    this.retainerCostString.innerHTML = nextRetainerCost;
  };

  buyAirship() {
    this.airshipCost = Math.floor(500 * Math.pow(1.1, this.airships));
    if(this.craftingMaterials >= this.airshipCost) {
      this.airships += 1;
      this.craftingMaterials -= this.airshipCost;
      this.airshipCostString.innerHTML = this.airshipCost;
      this.airshipString.innerHTML = this.airships;
    }
    var nextAirshipCost = Math.floor(500 * Math.pow(1.1, this.airships));
    this.airshipCostString.innerHTML = nextAirshipCost;
    };
};


const esme = new Esme();

window.setInterval(function() {
  esme.harvestPlants(esme.retainers)
  esme.harvestPlants(esme.airships * 5)
}, 1000)