// function hit(b1,b2){
//     if(b1.x-b2.x<b1.width/2+b2.width/2
//         &&b2.x-b1.x<b1.width/2+b2.width/2
//         &&b1.y-b2.y<b1.height/2+b2.height/2
//         &&b2.y-b1.y<b1.height/2+b2.height/2){

//         Matter.Body.setStatic(b2,false)
//     }
// }


// function collide(lstone,lmango){

//     var pos =lstone.body.position;
//     var pos2 = lmango.body.position;
  
//     var right = pos.x + lstone.body.width/2;
//     var left = pos2.x - lmango.body.diameter/2;
  
//     if(right >= left ){
//       Matter.Body.setStatic(lmango.body,false);
//     }
//   }

function detectollision(lstone,lmango){

stoneBodyPosition=lstone.body.position
  mangoBodyPosition=lmango.body.position
  
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }