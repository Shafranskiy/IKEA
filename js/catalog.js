export const catalog = () => {
    const btnMenu = document.querySelector('.btn-burger'),
        btnClose = document.querySelector('.btn-close'),
        catalog = document.querySelector('.catalog'),
        subCatalog = document.querySelector('.subcatalog'),
        subcatalogHeader = document.querySelector('.subcatalog-header'),
        btnReturn = document.querySelector('.btn-return');

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.append(overlay)

    const openMenu = () => {
        catalog.classList.add('open');
        overlay.classList.add('active');
    };

    const closeMenu = () => {
        catalog.classList.remove('open');
        overlay.classList.remove('active');
    };

    const openSubMenu = e => {
        e.preventDefault();
        const itemList = e.target.closest('.catalog-list__item')

        if (itemList) {
            subcatalogHeader.innerHTML = itemList.innerHTML;
            subCatalog.classList.add('subopen');
        };

    };

    const closeSubMenu = () => {
        subCatalog.classList.remove('subopen');
    };

    btnMenu.addEventListener('click', openMenu); 
    btnClose.addEventListener('click', closeMenu);
    btnReturn.addEventListener('click', closeSubMenu);
    overlay.addEventListener('click', closeMenu);
    document.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
            closeMenu()
            closeSubMenu();
        }
    });
    catalog.addEventListener('click', openSubMenu);
};