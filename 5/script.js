class Pet{
	constructor(hapiness, hunger, hp){
		this.hapiness = hapiness;
		this.hunger = hunger;
		this.hp = hp;
	}
	play(x){
		this.hapiness += x;
        if(this.hapiness>100){
            this.hapiness=100;
        }
	}
	feed(x){
		this.hunger+=x;
        if(this.hunger>100){
            this.hunger=100;
        }
	}
	heal(x){
		this.hp +=x;
        if(this.hp>100){
            this.hp=100;
        }
	}
}

let inp = document.getElementById('inp');
let start_but=document.getElementById('start_but');
let pet;
let startover=false;

start_but.addEventListener('click', function(){
    //log(1, '');
    pet = new Pet(100, 100, 100);
		pet.play(100);
		pet.feed(100);
		pet.heal(100);
    console.log(pet);
    if(startover==false){
        mess=document.createElement('div');
    mess.innerHTML="Счастье:"+pet.hapiness+", Голод:"+pet.hunger+", Здоровье:"+pet.hp;
    document.body.appendChild(mess);
    
    play_but=document.createElement('button');
    play_but.innerHTML="Поиграть";
    document.body.appendChild(play_but);
    play_but.addEventListener('mousedown',function(){
        pet.play(80);
        pet.feed(-18);
        pet.heal(-25);
        mess.innerHTML="Счастье:"+pet.hapiness+", Голод:"+pet.hunger+", Здоровье:"+pet.hp;
        isdead();
    });
    
    feed_but=document.createElement('button');
    feed_but.innerHTML="Покормить";
    document.body.appendChild(feed_but);
    feed_but.addEventListener('click',function(){
        pet.feed(77);
        pet.play(-5);
        pet.heal(-23);
        mess.innerHTML="Счастье:"+pet.hapiness+", Голод:"+pet.hunger+", Здоровье:"+pet.hp;
    });
    
    heal_but=document.createElement('button');
    heal_but.innerHTML="Лечить";
    document.body.appendChild(heal_but);
    heal_but.addEventListener('click',function(){
        pet.heal(59);
    pet.play(-18);
    pet.feed(-22);
    mess.innerHTML="Счастье:"+pet.hapiness+", Голод:"+pet.hunger+", Здоровье:"+pet.hp;
    });
        startover=true;
    }else{
        mess.innerHTML="Счастье:"+pet.hapiness+", Голод:"+pet.hunger+", Здоровье:"+pet.hp;
    }
});
function isdead(){
    if(pet.hapiness==0||pet.hunger==0||pet.hp==0){
        alert("Вы проиграли");
        
    }
}
