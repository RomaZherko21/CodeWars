class Block {
    constructor(data) {
        [this.width, this.length, this.height] = data;
    }
    getWidth(){
        return this.width;
    }
    getLength(){
        return this.length;
    }
    getHeight(){
        return this.height;
    }
    getVolume(){
        let {width,length,height} = this;
        return height*length*width;
    }
    getSurfaceArea(){
        let {width,length,height} = this;
        return 2*(length*width+length*height+width*height);
    }
  }
  
  let block = new Block([2, 4, 6]);
  
  console.log(block.getSurfaceArea());
  