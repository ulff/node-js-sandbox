tst = {
    init: () => {
        tst.test = () => {
            console.log('post init');
        };
    },
    test: () => {
        console.log('pre init');
    }
};

tst.test(); // expect: pre init
tst.init();
tst.test(); // would expect: post init