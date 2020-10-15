const filter = (selectMenu, selectWrapper, selectNo) => {
    const menu = document.querySelector(selectMenu),
          wrapper = document.querySelector(selectWrapper),
          no = document.querySelector(selectNo);

    const typeFilter = (mark) => {
        wrapper.children.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        let checkMark = false;

        wrapper.children.forEach(item => {
            if (item.classList.contains(mark[0])) {
                item.style.display = 'block';
                item.classList.add('animated', 'fadeIn');
                checkMark = true;
            }
        });
        
        if (!checkMark) {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == 'LI') {
            menu.children.forEach(item => {
                item.classList.remove('active');
                target.classList.add('active');
            });
        }
        typeFilter(target.classList);
    });

};

export default filter;