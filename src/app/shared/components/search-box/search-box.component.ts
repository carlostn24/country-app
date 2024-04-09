import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();
  private deboucerSubscription?: Subscription;

  @Input()
  public initialValue: string = '';

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter<string>();

  public ngOnInit(): void {
    this.deboucerSubscription = this.debouncer
      .pipe(
        debounceTime( 300 )
      )
      .subscribe( value => {
        this.onDebounce.emit( value );
      } );
  }

  public ngOnDestroy(): void {
    this.deboucerSubscription?.unsubscribe();
  }

  public emitValue( value: string ): void{
    this.onValue.emit(value);
  }

  public onKeyPress( searchTerm: string ): void {
    this.debouncer.next( searchTerm );
  }


}
