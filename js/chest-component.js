AFRAME.registerComponent('chest', {
  scheme: {
    contents: { type: 'array', default: [] }
  },
  init: function() {
    var data = this.data;
    var el = this.el;

    //console.log(this.el);

    this.geometry = new THREE.BoxBufferGeometry(1,1,1);
    this.material = new THREE.MeshStandardMaterial({color: 0xFFC65D});
    this.mesh = new THREE.Mesh(this.geometry, this.material);

    //this.el.setAttribute('material', { color: 0xff0000 });

    el.setObject3D('mesh', this.mesh);

    //console.log(el.object3D);
    this.setPosition(0, -3);
  },
  update: function(oldData) {
    var data = this.data;
    var el = this.el;

    if (Object.keys(oldData).length === 0) { return; }
  },
  remove: function() {
    this.el.removeObject3D('mesh');
  },
  open: function() {
    // spawn contents
    for (var i = 0; i < contents.length; i++) {

    }
  },
  setPosition: function(x,y) {
    this.el.object3D.position.set(x, 0.5, y);
  }
});