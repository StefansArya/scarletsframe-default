window.PaymentMethodList ??= {};

if(PaymentMethodList.wait == null){
    Object.defineProperty(PaymentMethodList, 'wait', {
        value: new Promise(resolve => {
            setTimeout(() => {
                PaymentMethodList.wait.resolve = resolve;
            }, 0);
        })
    });
}

$(async () => {
    let resolve = PaymentMethodList.wait.resolve;
    PaymentMethodList = JSON.parse(await $.postJSON('https://akemizu.com/api/v1/getPaymentMethods'));
    resolve?.();
});