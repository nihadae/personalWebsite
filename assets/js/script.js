window.onload = function() {
  Particles.init({
    selector: '.background',
    color: ['#fff','#fcd15c'],
    sizeVariations: 10
  });
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 2000);
};

function openNav(){
  document.getElementById("sideNav").style.width = "45%";
  document.getElementById("sideNav").style.right = "0%";
  document.getElementById("sideNav").style.transition = "0.3s ease-in-out";
}

function closeNav(){
  document.getElementById("sideNav").style.width = "0%";
  document.getElementById("sideNav").style.right = "-100%"
}

