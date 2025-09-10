function generateImage() {
  const query = document.querySelector('.searchInput').value;        //Reads the search input
  const clientId = 'tiPGSSsgw9JBOq3x-dxdjpUKpApceJ7xqjHcua9bGGY';    // Replaced with owned Unsplash API key
  const url = `https://api.unsplash.com/photos/random?query=${query}&count=4&client_id=${clientId}`;  //Calls the Unsplash API

  fetch(url)
  .then(response => response.json())
  .then(data => {
      const images = document.querySelectorAll('.image-gallery img');     // Clear old images


      data.forEach((item, index) => {
          images[index].src = item.urls.regular;                   //Replaces the first 4 <img> tags inside .image-gallery with the results:
          images[index].alt = item.alt_description;
      });
  })
  .catch(error => console.error('Error fetching images:', error));
}



//1.Error cause: Not enough <img> tags
/*Your code assumes there are at least 4 <img> elements inside .image-gallery.
If there are fewer, it will throw an error.*/

//2.API Limitations
/*Unsplash free API has a rate limit of 50 requests/hour.
If you exceed it, you’ll see 403 Forbidden.*/

//3.Empty Query
/*If user doesn’t type anything, Unsplash might return unexpected results.*/