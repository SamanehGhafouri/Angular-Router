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
    const crisisId = crisis ? crisis.id : null;
    // Relative navigation back to the crises
    this.router.navigate(['../', {id: crisisId, foo: 'foo'}], {relativeTo: this.route});
  }
}
