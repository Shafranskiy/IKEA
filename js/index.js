const btnMenu = document.querySelector('.btn-burger'),
    btnClose = document.querySelector('.btn-close'),
    overlay = document.querySelector('.overlay'),
    catalog = document.querySelector('.catalog'),
    catalogList = document.querySelector('.catalog-list'),
    subCatalog = document.querySelector('.subcatalog'),
    subcatalogHeader = document.querySelector('.subcatalog-header');

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
    const target = e.target;
    const itemList = target.closest('.catalog-list__item')

    if (itemList) {
        subcatalogHeader.innerHTML = itemList.innerHTML;
        subCatalog.classList.add('subopen');
    }

}

btnMenu.addEventListener('click', openMenu); 
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
        closeMenu()
    }
});
catalog.addEventListener('click', openSubMenu);