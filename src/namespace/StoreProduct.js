window.StoreProductCategoryList ??= [];
window.StoreProductCategorys ??= {};
window.StoreProductCategoryList.wait ??= new Promise(resolve => {
    window.StoreProductCategoryList.resolve = resolve;
});

$(async () => {
    let resolve = StoreProductCategoryList.resolve;
    StoreProductCategoryList = JSON.parse(await $.postJSON('https://akemizu.com/api/v1/getServiceCategories', {category: 'Genshin Impact'}));
    for (let i=0; i < StoreProductCategoryList.length; i++) {
        let ref = StoreProductCategoryList[i];
        ref.urlName = ref.name.replace(/[^a-zA-Z0-9-_]/g, '_');
        StoreProductCategorys[ref.urlName] = ref;
    }

    resolve?.();
});