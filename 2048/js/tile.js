function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;
  
//  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together

//  window.data[this.x][this.y]=this.value;
  
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };


  window.data[this.x][this.y]=0;
 
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;


};