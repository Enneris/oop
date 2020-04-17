class Rectangle{
	constructor(width, height){
		this.elem = document.createElement('div');
		this.setWidth(width);
        this.setHeight(height);
        this.elem.style.border = '1px solid red';
		document.body.appendChild(this.elem);
	}
	
	setWidth(width){
		this.elem.style.width = width + 'px';
	}
	setHeight(height){
		this.elem.style.height = height + 'px';
	}
	
	getWidth(){
		return parseInt(this.elem.style.width);
	}
	getHeight(){
		return parseInt(this.elem.style.height);
	}
}
var elem = new Rectangle(100,150);
elem.setWidth(300);
alert(elem.getWidth());

