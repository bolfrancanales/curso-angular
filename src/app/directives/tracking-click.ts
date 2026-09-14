import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy
} from '@angular/core';

import { fromEvent, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { registrarTracking } from '../store/tracking.actions';

@Directive({
  selector: '[appTrackingClick]'
})
export class TrackingClick implements OnInit, OnDestroy {

  private suscripcion?: Subscription;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private store: Store
  ) {}

  ngOnInit(): void {

    this.suscripcion = fromEvent(
      this.elementRef.nativeElement,
      'click'
    ).subscribe(() => {

      const tag =
        this.elementRef.nativeElement.getAttribute(
          'data-tracking-tag'
        ) ?? 'sin-tag';

      this.store.dispatch(
        registrarTracking({ tag })
      );

    });
  }

  ngOnDestroy(): void {
    this.suscripcion?.unsubscribe();
  }
}
