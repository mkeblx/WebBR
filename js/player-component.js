AFRAME.registerComponent('player', {
  scheme: {
    name: { type: 'string', default: 'null' },
    health: { type: 'int', default: 100 },
    shield: { type: 'int', default: 0 },
    inventory: { type: 'array', default: [] }
  },
  init: function() {

  },
  update: function(oldData) {

  },
  takeDamage: function(amount) {
    this.data.health = Math.max(this.data.health - amount, 0);
  },
  healDamage: function(amount) {
    this.data.health = Math.min(this.data.health + amount, 100);
  },
  addToInventory: function(item) {
    this.data.inventory.push(item);
  }
});