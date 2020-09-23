const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
        
        // input.addEventListener('change' , () => {
        //     if (input.value.split('').filter(item => item.match(/[^а-яё 0-9]/ig)).length) {
        //         input.value = '';
        //     }        
        // });

        input.addEventListener('change' , () => {
            try {
                if (input.value.match(/[^а-яё 0-9]/ig).length) {
                    input.value = '';
                } 
            } catch (e) {console.log(e);}       
        });
    });
};

export default checkTextInputs;