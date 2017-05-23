function LunchMenuController() {
  var controller = this;

  controller.setLunchMenuData = [
    {
      title: 'Menu 1',
      titleName: 'menu1',
      price: '£7.40',
      description: [
        '1.5 round of Sandwiches',
        'Fresh fruit Kebab',
        'Packet of Crisps'
      ]
    },
    {
      title: 'Menu 2',
      titleName: 'menu2',
      price: '£8.20',
      description: [
        '1 Mini Roll',
        'Crudities with dips',
        'Fresh Fruit Kebab',
        'Packet of Crisps'
      ]
    },
    {
      title: 'Menu 3',
      titleName: 'menu3',
      price: '£8.50',
      description: [
        '1 Wrap',
        '1 round of Sandwiches',
        'Fresh Fruit Kebab'
      ]
    },
    {
      title: 'Menu 4',
      titleName: 'menu4',
      price: '£8.70',
      description: [
        '1 Mini Roll',
        '1 Wrap',
        '1 Patisserie Cake',
        'Packet of Crisps'
      ]
    },
    {
      title: 'Menu 5',
      titleName: 'menu5',
      price: '£8.70',
      description: [
        '1 Wrap',
        'Cruidities with dips',
        'Fresh Fruit Kebab',
        'Packet of Crisps'
      ]
    },
    {
      title: 'Menu 6',
      titleName: 'menu6',
      price: '£9.00',
      description: [
        'something',
        'something else',
        'one more thing'
      ]
    }
  ];

  controller.fingerMenuData = [
    {
      title: 'Menu A',
      price: '£11.50',
      description: [
        'Assorted Sandwiches/Assorted wraps/Assorted Rolls (subject to availability)',
        'Chicken Tikka Skewers',
        'Breaded Torpedo Prawn',
        'Mini Vegetable Spring Roll',
        'Fresh Fruit Kebabs',
        'Patisserie Cake'
      ]
    },
    {
      title: 'Menu B',
      price: '£11.50',
      description: [
        'Assorted Sandwiches/Assorted wraps/Assorted Rolls (subject to availability)',
        'Mini Chunky Beef & Mushroom Pie',
        'Butterfly Breaded Prawn ',
        'Mini Vegetable Samosas',
        'Platter of Fresh Fruit',
        'Patisserie Cake'
      ]
    },
    {
      title: 'Menu C',
      price: '£11.50',
      description: [
        'Assorted Sandwiches/Assorted wraps/Assorted Rolls (subject to availability)',
        'Lemon Chicken Skewers with mixed herbs',
        'Marinated Tiger Prawns on Skewers',
        'Vegetarian Quiche',
        'Fresh Fruit Kebabs',
        'Patisserie Cake'
      ]
    },
    {
      title: 'Menu D',
      price: '£11.50',
      description: [
        'Assorted Sandwiches/Assorted wraps/Assorted Rolls (subject to availability)',
        'Mini Lamb & Mint with Rosemary Pie',
        'Sole Goujons',
        'Vegetarian Kebabs',
        'Fresh Fruit Platter',
        'Patisserie Cake'
      ]
    }
  ];

  controller.coldForkMenuData = [
    {
      title: 'Mains',
      price: '£18.50',
      description: [
        'Gammon Ham',
        'Roast Beef',
        'Grilled Breast of Chicken',
        'Roast Turkey',
        'Poached Salmon',
        'Quiche',
        'Goats Cheese and Baked Vegetables in Filo',
        'Ricotta Cheese with Spinach tart'
      ]
    },
    {
      title: 'Salads',
      price: '£18.50',
      description: [
        'Mixed Leaf Salad',
        'Greek Salad',
        'Cherry Tomato & Mozzarella',
        'Coleslaw',
        '3 Bean Salad',
        'Pasta salad with mozzarella balls',
        'New Potatoes with Red Onion and French dressing salad'
      ]
    },
    {
      title: 'Desserts',
      price: '£18.50',
      description: [
        'Apple & Blackberry Pie',
        'Pecan & Treacle Tart',
        'Banoffee Triple Decker Pie',
        'Carrot CakeRed Velvet Gateau'
      ]
    }
  ];

  controller.hotForkMenu = [
    {
      title: 'Mains',
      price: '£19.50',
      description: [
        'Roast Chicken',
        'Roast Beef with Yorkshire Pudding',
        'Meat Lasagna',
        'Shepherd\'s Pie and Baked Beans',
        'Bangers & Mash',
        'Chilli Con Carne with Rice',
        'Chicken KievBeef Bourguignon',
        'Poached SalmonFillets of Seabass',
        'Vegetable Lasagna',
        'Ricotta & Spinach Lasagna',
        'Pasta with Mozzarella basil and Napoli Sauce',
        'Veggie Mince Shepherd\'s pie'
      ]
    },
    {
      title: 'Desserts',
      price: '£19.50',
      description: [
        'Apple & Blackberry Pie',
        'Pecan & Treacle Tart',
        'Banoffee Triple Decker Pie',
        'Carrot Cake',
        'Red Velvet Gateau'
      ]
    }
  ];

  controller.platterMenu = [
    {
      title: 'Assorted Sandwiches',
      price: '£3.30'
    },
    {
      title: 'Assorted Rolls',
      price: '£3.00'
    },
    {
      title: 'Speciality Breads Carrot fine herb bread Sandwiches Walnut Bread Sandwiches Beetroot Bread Sandwiches',
      price: '£3.60',
      description: [
        'Minimum of 10 rounds'
      ]
    },
    {
      title: 'Crudities with Hummus/Taramaslata',
      price: '£2.60'
    },
    {
      title: 'Fresh Fruit Platter',
      price: '£2.10'
    },
    {
      title: 'Fresh Fruit Kebab',
      price: '£1.70'
    },
    {
      title: 'Mini Patisserie Cakes',
      price: '£1.30'
    },
    {
      title: '2x Mozzarella Ball with Cherry Tomato on Skewer',
      price: '£2.30'
    },
    {
      title: 'Cheese Board (selection of British and French cheeses)',
      price: '£4.00'
    },
    {
      title: 'Platter of Chacuterie with Ciabatta (Milano Salami,Spanish Chorizo, Parma Ham and Olives) ',
      price: '£7.50'
    },
    {
      title: 'Platter of Mozzarella Balls, Sundried Tomatoes, Marinated Artichokes, Sweet Bell Peppers, Olives and Rockette',
      price: '£6.00'
    },
    {
      title: 'Platter of Smoked Salmon with Cray Fish and Prawns',
      price: '£8.00'
    },
    {
      title: 'Chocolate Brownies/Rocky Road/Caramel Shortbread slice',
      price: '£1.80'
    },
    {
      title: '2x Cocktail Chorizo with Feta cheese and roasted vegetables on skewers',
      price: '£2.30'
    },
    {
      title: 'Mini Bagels',
      price: '£3.00'
    },
    {
      title: 'Vegetable Kebabs',
      price: '£1.50'
    },
    {
      title: 'Large pastry Sausage Roll',
      price: '£1.80'
    },
    {
      title: 'Greek Yoghurt with Honey, Granola and fresh mixed berries',
      price: '£3.00'
    }
  ];

  controller.drinksMenu = [
    {
      title: 'Bottled Water still/sparkling',
      price: '£2.20',
      description: [
        '750ml'
      ]
    },
    {
      title: 'Tropicana Fresh Orange Juice',
      price: '£1.60',
      description: [
        '300ml'
      ]
    },
    {
      title: 'Tropicana Fresh Orange Juice',
      price: '£1.60',
      description: [
        '300ml'
      ]
    },
  ];

}

angular
  .module('MastersApp')
  .controller('LunchMenuController', LunchMenuController);
