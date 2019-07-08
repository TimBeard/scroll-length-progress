const scroll = {

    // Compute max scroll height
    get maxScroll() {

        const { scrollHeight } = document.scrollingElement
        const { innerHeight } = window

        return scrollHeight - innerHeight
    },

    // Compute number of page (full screen height) scrolled
    get pages() {

      const { scrollY, innerHeight } = window

      return scrollY / innerHeight
    },

    // Compute scrolling progress
    get progress() {

        const { maxScroll } = scroll

        if (maxScroll) {

            const { scrollY } = window

            return scrollY / maxScroll * 100
        }

        return 100
    }
}

export default scroll
