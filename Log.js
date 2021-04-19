class Log extends ParentClass {
    constructor(x, y,height,angle) {
      super(x,y,20,height,angle);
      this.image=loadImage("pic-main/wood2.png");
      Matter.Body.setAngle(this.body,angle);
  }
}