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

}

angular
  .module('MastersApp')
  .controller('LunchMenuController', LunchMenuController);
