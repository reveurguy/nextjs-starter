import SplitType from 'split-type';
import { wrapLines } from './utils';
import { gsap } from 'gsap';

export class TextLinesReveal {
    private DOM: {
        animationElems: HTMLElement[];
    };
    private SplitTypeInstances: SplitType[];
    private lines: HTMLElement[][];
    private isVisible: boolean = false;

    constructor(animationElems: HTMLElement | HTMLElement[]) {
        this.DOM = {
            animationElems: Array.isArray(animationElems) ? animationElems : [animationElems]
        };

        this.SplitTypeInstances = [];
        this.lines = [];

        for (const el of this.DOM.animationElems) {
            const SplitTypeInstance = new SplitType(el, { types: 'lines' });

            // Ensure lines exist before wrapping
            if (SplitTypeInstance.lines) {
                wrapLines(SplitTypeInstance.lines as HTMLElement[], 'div', 'oh');
                this.lines.push(SplitTypeInstance.lines as HTMLElement[]);
            }

            this.SplitTypeInstances.push(SplitTypeInstance);
        }

        this.initEvents();
    }

    in(): gsap.core.Timeline {
        this.isVisible = true;

        gsap.killTweensOf(this.lines);
        return gsap.timeline({ defaults: { duration: 1.2, ease: 'expo' } })
            .set(this.lines, {
                y: '150%',
                rotate: 15
            })
            .to(this.lines, {
                y: '0%',
                rotate: 0,
                stagger: 0.04
            });
    }

    out(): gsap.core.Timeline {
        this.isVisible = false;

        gsap.killTweensOf(this.lines);
        return gsap.timeline({ defaults: { duration: 0.5, ease: 'expo.in' } })
            .to(this.lines, {
                y: '-150%',
                rotate: -5,
                stagger: 0.02
            });
    }

    private initEvents(): void {
        window.addEventListener('resize', () => {
            this.lines = [];

            for (const instance of this.SplitTypeInstances) {
                instance.split({ types: 'lines' });

                if (instance.lines) {
                    wrapLines(instance.lines as HTMLElement[], 'div', 'oh');
                    this.lines.push(instance.lines as HTMLElement[]);
                }
            }

            if (!this.isVisible) {
                gsap.set(this.lines, { y: '-150%' });
            }
        });
    }
}
