describe('Esme', function(){
  beforeEach(function(){
    esme = new Esme();
  })
  it('should be able to harvest a plant for crafting materials', function(){
    esme.harvestPlants(1)
    expect(esme.craftingMaterials).toEqual(1)
  })
})