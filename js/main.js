document.addEventListener('DOMContentLoaded', function(){
  
  var drop = document.getElementById('drop');
  var dropdown = document.getElementById('dropdown');
  var thumb = document.getElementById('thumb');
  var thumb1 = document.getElementById('thumb1');
  var image = document.getElementById('image');
  var image1 = document.getElementById('image1');
 
  drop.addEventListener('mouseover', function(){
    dropdown.classList.add('show');
  });
  drop.addEventListener('mouseout', function(){
    dropdown.classList.remove('show');
  });
  
    image.addEventListener('mouseover', function(){
    thumb.classList.add('hide');
  });
  
    image.addEventListener('mouseout', function(){
    thumb.classList.remove('hide');
  });
  
  image1.addEventListener('mouseover', function(){
    thumb1.classList.add('hide');
  });
  
    image1.addEventListener('mouseout', function(){
    thumb1.classList.remove('hide');
  });
  
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var images = document.querySelectorAll('.page-header img');
  
  var array = Array(images);
  var index = 0;
  console.log(array);
  
  images[index].classList.add('visible');
  
  prev.addEventListener('click', function(){
    images[index].classList.remove('visible');
  --index;
  if(index < 0){
    index = images.length -1;
  }
  images[index].classList.add('visible');
  });
  
  next.addEventListener('click', function(){
    images[index].classList.remove('visible');
    if(index >= images.length-1){
    index = 0; 
  }else{
    index++;
  }
  images[index].classList.add('visible');
  });
  
});