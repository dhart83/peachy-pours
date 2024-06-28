import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const childrenFadeIn = (element) => {
    gsap.fromTo(
        element.value.children,
        {
            opacity: 0,
            y: 50
        },
        {
            scrollTrigger: element.value,
            stagger: 0.5,
            opacity: 1,
            duration: 1,
            y: 0,
            ease: 'power2.out'
        }
    )
}
