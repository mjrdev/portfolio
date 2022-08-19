function superScroll(win=window, datas, callback) {

    const eventScrool = (a,b) => {
        console.log(b)

        const scroll = { x: win.scrollX, y: win.scrollY }

        const state = {
            observers: []
        }
        
        function subscribeObserver(observer) {
            state.observer.push[observer]
        }

        function notifyAndRunObserver() {
            log(`Foram notificados ${state.observers.length} observers`)

            for(functionObserver of state.observers) {
                log(functionObserver)
            }
        }

        callback(scroll)
    }

    const event = document.addEventListener("scroll", eventScrool(null, 3))

    const setScroll = (x, y) => {
        window.scroll(x, y)
    }

    return {
        setScroll
    }
}
