import { gsap } from 'gsap';

export class TextReveal {
    private DOM: {
        outer: HTMLElement | HTMLElement[];
        inner: HTMLElement | HTMLElement[];
    };
    private inTimeline?: gsap.core.Timeline;
    private outTimeline?: gsap.core.Timeline;

    constructor(el: HTMLElement | HTMLElement[]) {
        this.DOM = {
            outer: el,
            inner: Array.isArray(el)
                ? el.map(outer => outer.querySelector('.oh__inner') as HTMLElement)
                : el.querySelector('.oh__inner') as HTMLElement
        };
    }

    in(): gsap.core.Timeline {
        if (this.outTimeline && this.outTimeline.isActive()) {
            this.outTimeline.kill();
        }

        this.inTimeline = gsap.timeline({ defaults: { duration: 1.2, ease: 'expo' } })
            .set(this.DOM.inner, {
                y: '120%',
                rotate: 15
            })
            .to(this.DOM.inner, {
                y: '0%',
                rotate: 0,
                stagger: 0.03
            });

        return this.inTimeline;
    }

    out(): gsap.core.Timeline {
        if (this.inTimeline && this.inTimeline.isActive()) {
            this.inTimeline.kill();
        }

        this.outTimeline = gsap.timeline({ defaults: { duration: 0.5, ease: 'expo.in' } })
            .to(this.DOM.inner, {
                y: '-120%',
                rotate: -5,
                stagger: 0.03
            });

        return this.outTimeline;
    }
}
