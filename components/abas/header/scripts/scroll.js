export default function (win, element) {
    const el = win.document.querySelectorAll('[data-container-item]')
    el.forEach(container => {

        const NAVBAR_TOPSCROLL_HEIGHT = 95

        const containerName = container.dataset.containerItem
        const position = container.offsetTop

        if(containerName == element) {
            win.scroll({ top: element == 'main' || position - NAVBAR_TOPSCROLL_HEIGHT , behavior: 'smooth'})
        }
    });
}