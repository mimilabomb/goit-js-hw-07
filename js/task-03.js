const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');

const photo = images
  .map(image => `<li><img class="photo" src="${image.url}" width='500px' alt="${image.alt}"</img></li>` )
  .join('');

  gallery.insertAdjacentHTML('beforeend', photo);

 const photos = document.querySelectorAll('.photo');
//  const photos2 = document.querySelectorAll('.gallery');
 gallery.style.width='100%';
 gallery.style.margin='0 auto';
 gallery.style.justifyContent = 'center';
 gallery.style.display='grid';
 gallery.style.listStyle='none';
 
 photos.forEach(photo1);

 function photo1(i){
    i.style.boxShadow='5px 5px 10px #000';
    i.style.justifyContent = 'center';
    i.style.display='flex';
    // i.style.gap='20px';
    i.style.marginBottom='100px';
    i.style.flexWrap='column';
    i.style.alignItem='center';
    i.style.listStyleType='square';
    
 }
