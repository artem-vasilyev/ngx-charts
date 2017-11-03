import { ElementRef, NgZone, ChangeDetectorRef, EventEmitter, AfterViewInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import { VisibilityObserver } from '../utils';
export declare class BaseChartComponent implements OnChanges, AfterViewInit, OnDestroy {
    protected chartElement: ElementRef;
    protected zone: NgZone;
    protected cd: ChangeDetectorRef;
    results: any;
    view: number[];
    scheme: any;
    schemeType: string;
    customColors: any;
    animations: boolean;
    select: EventEmitter<{}>;
    domainChanged: EventEmitter<{}>;
    width: number;
    height: number;
    resizeSubscription: any;
    visibilityObserver: VisibilityObserver;
    domainObserver: Subject<any>;
    constructor(chartElement: ElementRef, zone: NgZone, cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    getContainerDims(): any;
    /**
     * Converts all date objects that appear as name
     * into formatted date strings
     */
    formatDates(): void;
    protected unbindEvents(): void;
    private bindWindowResizeEvent();
    /**
     * Clones the data into a new object
     *
     * @private
     * @param {any} data
     * @returns {*}
     *
     * @memberOf BaseChart
     */
    private cloneData(data);
}
