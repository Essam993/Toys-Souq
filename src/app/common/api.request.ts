const baseUrl : any = 'http://toys.itambition.com/rest/V1/' ;
export const Api: any = {
    baseUrl: 'http://toys.itambition.com/rest/v1/',
    common: {
        currency: 'V1/directory/currency',
        getAllCountries: "/V1/directory/countries",
        getCountry: "V1/directory/countries/",
        CreateAccount:"V1/customers",
        isResetTokenValid: "/V1/customers/",
        resetLink: "V1/customers/password",
        resetPassword: "V1/customers/resetPassword",
        isEmailAvailable:"V1/customers/isEmailAvailable",
        search: "V1/products/",
        productsRenderInfo:"V1/products-render-info",
        guestCarts:"V1/guest-carts/",
        guestCartsOrder : 'V1/guest-carts/',
        shippingMethods: "V1/guest-carts/"
    },
    user: {
        login: baseUrl + 'integration/customer/token',
        register : baseUrl + 'customers',
        resetPassword : baseUrl + 'customers/password',
        editProfile : baseUrl + 'customers/me',
    },
    dashboard: {
        getUserData: baseUrl + 'customers/me',
    },
    store: {
        getProductImage: baseUrl + 'getproductimage/',
    },
    search: {
        allProducts : baseUrl + 'products?searchCriteria',
        products : baseUrl + 'products?searchCriteria[filter_groups][0][filters][0][field]=name&searchCriteria[filter_groups][0][filters][0][value]=%25',
        likeCondition : '%25&searchCriteria[filter_groups][0][filters][0][condition_type]=like',
        byCategories : baseUrl + 'products?searchCriteria[filterGroups][0][filters][0][field]=category_id&searchCriteria[filterGroups][0][filters][0][value]=',
        eqCondition : baseUrl + '&searchCriteria[filterGroups][0][filters][0][conditionType]=eq',
    },
    cart: {
        createCart : baseUrl + 'carts/mine/',
        mineCart : baseUrl + 'carts/mine/',
        getCart : baseUrl + 'carts/',
        shippingInfo : baseUrl + 'carts/mine/shipping-information',
        paymentInfo : baseUrl + 'carts/mine/payment-information',
        cartItems : baseUrl + 'carts/mine/items/',
        cartTotals : baseUrl + 'carts/mine/totals/',
    },
    countries : {
        getCountries : baseUrl + 'directory/countries/',
    },
    categories : {
        getCategories : baseUrl + 'categories/list?searchCriteria[pageSize]=20',
        categories : baseUrl + 'categories'
    },
    orders: {
        getAllOrders : baseUrl + 'orders?searchCriteria[filter_groups][0][filters][0][field]=customer_id&searchCriteria[filter_groups][0][filters][0][value]=',
    },
    products:{
        images : baseUrl + 'products/',
        media : '/media',
        image : baseUrl + 'pub/media/catalog/product/'
    }
    

}
