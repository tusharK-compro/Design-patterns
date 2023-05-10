class Component { 
    constructor(props) {
          this.props = props;
      }
  }
  
class Cart extends Component {
}

class ItemsManager extends Component{
}

class VariationManager extends Component{
}

class CountryManager extends Component{
}

class ShippingManager extends Component{
}

class ShippingAddOnManager extends Component{
}

class TaxesManager extends Component{
}

class DiscountManager extends Component{
}

class PromoCodeManager extends Component{
}

class SpecialDealsManager extends Component{
}
  
//leaves
const variationManager = new VariationManager();
const shippingAddOnManager = new ShippingAddOnManager();
const promoCodeManager = new PromoCodeManager();
const specialDealsManager = new SpecialDealsManager();
const taxesManager = new TaxesManager();

//composite branches
const itemsManager = new ItemsManager({
children: [variationManager]
})
const taxManager = new CountryManager({
children: [taxesManager]
})
const shippingManager = new CountryManager({
children: [ shippingAddOnManager]
})
const discountManager = new DiscountManager({
children: [promoCodeManager, specialDealsManager]
})

//form the tree
const cart = new Cart({
children:[
    itemsManager, 
    taxManager,
    shippingManager,
    discountManager]
})

console.log(cart);