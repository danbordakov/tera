var carousel = document.querySelector('.content');
console.log(carousel);

var indicator = document.querySelector('#navbar');
var elements = document.querySelectorAll('.content > *');
var currentIndex = 0;

function renderIndicator() {
  // this is just an example indicator; you can probably do better
  indicator.innerHTML = '';
  for (var i = 0; i < elements.length; i++) {
    var button = document.createElement('button');
    button.innerHTML = (i === currentIndex ? '\u2022' : '\u25e6');
    (function(i) {
      button.onclick = function() {
        elements[i].scrollIntoView();
      }
    })(i);
    indicator.appendChild(button);
  }
}

var observer = new IntersectionObserver(function(entries, observer) {
  // find the entry with the largest intersection ratio
  var activated = entries.reduce(function (max, entry) {
    return (entry.intersectionRatio > max.intersectionRatio) ? entry : max;
  });
  if (activated.intersectionRatio > 0) {
    currentIndex = elementIndices[activated.target.getAttribute("id")];
    console.log(currentIndex);
    
    renderIndicator();
  }
}, {
  root:carousel, threshold:0.5
});
var elementIndices = {};
for (var i = 0; i < elements.length; i++) {
  elementIndices[elements[i].getAttribute("id")] = i;
  observer.observe(elements[i]);
}