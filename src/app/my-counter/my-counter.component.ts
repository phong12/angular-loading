import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';
import { start, stop } from '../loading.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent {
  count$: Observable<number>;
  loading$: Observable<boolean>;

  constructor(private store: Store<{ count: number; loading: boolean }>) {
    this.count$ = store.pipe(select('count'));
    this.loading$ = store.pipe(select('loading'));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
    this.store.dispatch(start());
  }

  reset() {
    this.store.dispatch(reset());
    this.store.dispatch(stop());
  }
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
