var gallery = document.getElementById('gallery');

fetch("/assets/gallery.json")

.then(function(res) {

  res.json().then(function(json) {

    json.forEach(function(el) {
      var galleryItem = document.createElement('a');
    
      galleryItem.setAttribute('class', 'gallery-item');
      
      galleryItem.setAttribute('href', el.url);
      
      galleryItem.setAttribute('target', '_blank');
      
      var image = document.createElement('img');

      image.setAttribute('src', el.url);        
      image.setAttribute('alt', el.caption);   
      image.setAttribute('title', el.caption);  
      
      var caption = document.createElement('caption');
      
      caption.innerText = el.caption;

      galleryItem.appendChild(image);
      galleryItem.appendChild(caption);
      
      gallery.appendChild(galleryItem);
    });
  });
});
