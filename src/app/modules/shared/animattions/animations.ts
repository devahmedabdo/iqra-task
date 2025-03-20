import { trigger, transition, style, animate } from '@angular/animations';

const uReveal = trigger('uReveal', [
  transition(':enter', [
    style({ transform: 'translateY(30%)', opacity: 0 }),
    animate('300ms ease', style({ transform: 'translateY(0%)', opacity: 1 })),
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0%)', opacity: 1 }),
    animate('300ms ease', style({ transform: 'translateY(30%)', opacity: 0 })),
  ]),
]);
const dReveal = trigger('dReveal', [
  transition(':enter', [
    style({ transform: 'translateY(-30%)', opacity: 0 }),
    animate('300ms ease', style({ transform: 'translateY(0%)', opacity: 1 })),
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0%)', opacity: 1 }),
    animate('300ms ease', style({ transform: 'translateY(-30%)', opacity: 0 })),
  ]),
]);
const sReveal = trigger('sReveal', [
  transition(':enter', [
    style({ transform: 'scale(0)', opacity: 0 }),
    animate('300ms ease', style({ transform: 'scale(1)', opacity: 1 })),
  ]),
  transition(':leave', [
    style({ transform: 'scale(1)', opacity: 1 }),
    animate('300ms ease', style({ transform: 'scale(0)', opacity: 0 })),
  ]),
]);
const fade = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms ease', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('300ms ease', style({ opacity: 0 })),
  ]),
]);

export { uReveal, dReveal, sReveal, fade };
