const storeItems = [
  {
      name: 'TV',
      price: 800.00,
      inStock: true,
      details: '4K Ultra HD'
  },
  {
      name: 'Phone',
      price: 700.00,
      inStock: false,
      details: '5G'
  },
  {
      name: 'Game Console',
      price: 300.00,
      inStock: true,
      details: 'The latest and greatest'
  },
  {
      name: 'Laptop',
      price: 1200.00,
      inStock: true,
      details: '16GB RAM 1TB SSD'
  },
  {
      name: 'Smart Watch',
      price: 200.00,
      inStock: false,
      details: 'Counts your steps'
  },
  {
      name: 'Headphones',
      price: 100.00,
      inStock: true,
      details: 'Clearest music to be heard'
  },
  {
      name: 'Keyboard',
      price: 100.00,
      inStock: true,
      details: 'Types for you'
  },
  {
      name: 'HDMI Cord',
      price: 100.00,
      inStock: true,
      details: 'HDMI to USB type C'
  },
  {
      name: 'Monitor',
      price: 300.00,
      inStock: true,
      details: '4K Ultra HD'
  },
  {
      name: 'Speaker',
      price: 200.00,
      inStock: true,
      details: 'Clearest music to be heard'
  },
  {
      name: 'Video Game',
      price: 60.00,
      inStock: true,
      details: 'Enjoy for hours'
  },
];


for (let item of storeItems) {
  if (item.inStock){
    let product = $('<li class="product"></li>').appendTo("ul");
    product.append('<p class="price text"></p>');
    product.append('<p class="name text"></p>');
    product.append('<p class="description text"></p>');
    $(product).children().eq(0).text("$" + item.price);
    $(product).children().eq(1).text(item.name);
    $(product).children().eq(2).text(item.details);
  }
}

$("#dark-toggle").click(() => {
    $("*").toggleClass("dark");
});
