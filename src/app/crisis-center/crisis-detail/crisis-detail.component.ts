import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Crisis} from '../../heroes/crisis';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {CrisisService} from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  crisis$: Observable<Crisis>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) {}

  ngOnInit() {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCrisis(params.get('id')))
    );
  }
  gotoCrises(crisis: Crisis) {
    const heroId = crisis ? crisis.id : null;
    // Pass along the crisis id if available
    // so that the HeroList component can select that crisis.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/crises', { id: heroId, foo: 'foo' }]);
  }
}
