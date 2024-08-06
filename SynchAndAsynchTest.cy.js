describe('template spec', () => {
    it('eg', () => {
        let a = 1;
        let b = 2;

        setTimeout(function () {
            console.log('Async')

        }, 100);


        console.log(a);
        console.log(b);
    })

})
