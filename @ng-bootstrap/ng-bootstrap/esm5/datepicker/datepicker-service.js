/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgbCalendar } from './ngb-calendar';
import { NgbDate } from './ngb-date';
import { Injectable } from '@angular/core';
import { isInteger, toInteger } from '../util/util';
import { Subject } from 'rxjs';
import { buildMonths, checkDateInRange, checkMinBeforeMax, isChangedDate, isChangedMonth, isDateSelectable, generateSelectBoxYears, generateSelectBoxMonths, prevMonthDisabled, nextMonthDisabled } from './datepicker-tools';
import { filter } from 'rxjs/operators';
import { NgbDatepickerI18n } from './datepicker-i18n';
var NgbDatepickerService = /** @class */ (function () {
    function NgbDatepickerService(_calendar, _i18n) {
        this._calendar = _calendar;
        this._i18n = _i18n;
        this._model$ = new Subject();
        this._select$ = new Subject();
        this._state = {
            disabled: false,
            displayMonths: 1,
            firstDayOfWeek: 1,
            focusVisible: false,
            months: [],
            navigation: 'select',
            outsideDays: 'visible',
            prevDisabled: false,
            nextDisabled: false,
            selectBoxes: { years: [], months: [] },
            selectedDate: null
        };
    }
    Object.defineProperty(NgbDatepickerService.prototype, "model$", {
        get: /**
         * @return {?}
         */
        function () { return this._model$.pipe(filter((/**
         * @param {?} model
         * @return {?}
         */
        function (model) { return model.months.length > 0; }))); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "select$", {
        get: /**
         * @return {?}
         */
        function () { return this._select$.pipe(filter((/**
         * @param {?} date
         * @return {?}
         */
        function (date) { return date !== null; }))); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "dayTemplateData", {
        set: /**
         * @param {?} dayTemplateData
         * @return {?}
         */
        function (dayTemplateData) {
            if (this._state.dayTemplateData !== dayTemplateData) {
                this._nextState({ dayTemplateData: dayTemplateData });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "disabled", {
        set: /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            if (this._state.disabled !== disabled) {
                this._nextState({ disabled: disabled });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "displayMonths", {
        set: /**
         * @param {?} displayMonths
         * @return {?}
         */
        function (displayMonths) {
            displayMonths = toInteger(displayMonths);
            if (isInteger(displayMonths) && displayMonths > 0 && this._state.displayMonths !== displayMonths) {
                this._nextState({ displayMonths: displayMonths });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "firstDayOfWeek", {
        set: /**
         * @param {?} firstDayOfWeek
         * @return {?}
         */
        function (firstDayOfWeek) {
            firstDayOfWeek = toInteger(firstDayOfWeek);
            if (isInteger(firstDayOfWeek) && firstDayOfWeek >= 0 && this._state.firstDayOfWeek !== firstDayOfWeek) {
                this._nextState({ firstDayOfWeek: firstDayOfWeek });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "focusVisible", {
        set: /**
         * @param {?} focusVisible
         * @return {?}
         */
        function (focusVisible) {
            if (this._state.focusVisible !== focusVisible && !this._state.disabled) {
                this._nextState({ focusVisible: focusVisible });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "maxDate", {
        set: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            /** @type {?} */
            var maxDate = this.toValidDate(date, null);
            if (isChangedDate(this._state.maxDate, maxDate)) {
                this._nextState({ maxDate: maxDate });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "markDisabled", {
        set: /**
         * @param {?} markDisabled
         * @return {?}
         */
        function (markDisabled) {
            if (this._state.markDisabled !== markDisabled) {
                this._nextState({ markDisabled: markDisabled });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "minDate", {
        set: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            /** @type {?} */
            var minDate = this.toValidDate(date, null);
            if (isChangedDate(this._state.minDate, minDate)) {
                this._nextState({ minDate: minDate });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "navigation", {
        set: /**
         * @param {?} navigation
         * @return {?}
         */
        function (navigation) {
            if (this._state.navigation !== navigation) {
                this._nextState({ navigation: navigation });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "outsideDays", {
        set: /**
         * @param {?} outsideDays
         * @return {?}
         */
        function (outsideDays) {
            if (this._state.outsideDays !== outsideDays) {
                this._nextState({ outsideDays: outsideDays });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} date
     * @return {?}
     */
    NgbDatepickerService.prototype.focus = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (!this._state.disabled && this._calendar.isValid(date) && isChangedDate(this._state.focusDate, date)) {
            this._nextState({ focusDate: date });
        }
    };
    /**
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    NgbDatepickerService.prototype.focusMove = /**
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */
    function (period, number) {
        this.focus(this._calendar.getNext(this._state.focusDate, period, number));
    };
    /**
     * @return {?}
     */
    NgbDatepickerService.prototype.focusSelect = /**
     * @return {?}
     */
    function () {
        if (isDateSelectable(this._state.focusDate, this._state)) {
            this.select(this._state.focusDate, { emitEvent: true });
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NgbDatepickerService.prototype.open = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var firstDate = this.toValidDate(date, this._calendar.getToday());
        if (!this._state.disabled && (!this._state.firstDate || isChangedMonth(this._state.firstDate, date))) {
            this._nextState({ firstDate: firstDate });
        }
    };
    /**
     * @param {?} date
     * @param {?=} options
     * @return {?}
     */
    NgbDatepickerService.prototype.select = /**
     * @param {?} date
     * @param {?=} options
     * @return {?}
     */
    function (date, options) {
        if (options === void 0) { options = {}; }
        /** @type {?} */
        var selectedDate = this.toValidDate(date, null);
        if (!this._state.disabled) {
            if (isChangedDate(this._state.selectedDate, selectedDate)) {
                this._nextState({ selectedDate: selectedDate });
            }
            if (options.emitEvent && isDateSelectable(selectedDate, this._state)) {
                this._select$.next(selectedDate);
            }
        }
    };
    /**
     * @param {?} date
     * @param {?=} defaultValue
     * @return {?}
     */
    NgbDatepickerService.prototype.toValidDate = /**
     * @param {?} date
     * @param {?=} defaultValue
     * @return {?}
     */
    function (date, defaultValue) {
        /** @type {?} */
        var ngbDate = NgbDate.from(date);
        if (defaultValue === undefined) {
            defaultValue = this._calendar.getToday();
        }
        return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
    };
    /**
     * @private
     * @param {?} patch
     * @return {?}
     */
    NgbDatepickerService.prototype._nextState = /**
     * @private
     * @param {?} patch
     * @return {?}
     */
    function (patch) {
        /** @type {?} */
        var newState = this._updateState(patch);
        this._patchContexts(newState);
        this._state = newState;
        this._model$.next(this._state);
    };
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    NgbDatepickerService.prototype._patchContexts = /**
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        var months = state.months, displayMonths = state.displayMonths, selectedDate = state.selectedDate, focusDate = state.focusDate, focusVisible = state.focusVisible, disabled = state.disabled, outsideDays = state.outsideDays;
        state.months.forEach((/**
         * @param {?} month
         * @return {?}
         */
        function (month) {
            month.weeks.forEach((/**
             * @param {?} week
             * @return {?}
             */
            function (week) {
                week.days.forEach((/**
                 * @param {?} day
                 * @return {?}
                 */
                function (day) {
                    // patch focus flag
                    if (focusDate) {
                        day.context.focused = focusDate.equals(day.date) && focusVisible;
                    }
                    // calculating tabindex
                    day.tabindex = !disabled && day.date.equals(focusDate) && focusDate.month === month.number ? 0 : -1;
                    // override context disabled
                    if (disabled === true) {
                        day.context.disabled = true;
                    }
                    // patch selection flag
                    if (selectedDate !== undefined) {
                        day.context.selected = selectedDate !== null && selectedDate.equals(day.date);
                    }
                    // visibility
                    if (month.number !== day.date.month) {
                        day.hidden = outsideDays === 'hidden' || outsideDays === 'collapsed' ||
                            (displayMonths > 1 && day.date.after(months[0].firstDate) &&
                                day.date.before(months[displayMonths - 1].lastDate));
                    }
                }));
            }));
        }));
    };
    /**
     * @private
     * @param {?} patch
     * @return {?}
     */
    NgbDatepickerService.prototype._updateState = /**
     * @private
     * @param {?} patch
     * @return {?}
     */
    function (patch) {
        // patching fields
        /** @type {?} */
        var state = Object.assign({}, this._state, patch);
        /** @type {?} */
        var startDate = state.firstDate;
        // min/max dates changed
        if ('minDate' in patch || 'maxDate' in patch) {
            checkMinBeforeMax(state.minDate, state.maxDate);
            state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
            state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
            startDate = state.focusDate;
        }
        // disabled
        if ('disabled' in patch) {
            state.focusVisible = false;
        }
        // initial rebuild via 'select()'
        if ('selectedDate' in patch && this._state.months.length === 0) {
            startDate = state.selectedDate;
        }
        // terminate early if only focus visibility was changed
        if ('focusVisible' in patch) {
            return state;
        }
        // focus date changed
        if ('focusDate' in patch) {
            state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
            startDate = state.focusDate;
            // nothing to rebuild if only focus changed and it is still visible
            if (state.months.length !== 0 && !state.focusDate.before(state.firstDate) &&
                !state.focusDate.after(state.lastDate)) {
                return state;
            }
        }
        // first date changed
        if ('firstDate' in patch) {
            state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
            startDate = state.firstDate;
        }
        // rebuilding months
        if (startDate) {
            /** @type {?} */
            var forceRebuild = 'dayTemplateData' in patch || 'firstDayOfWeek' in patch || 'markDisabled' in patch ||
                'minDate' in patch || 'maxDate' in patch || 'disabled' in patch || 'outsideDays' in patch;
            /** @type {?} */
            var months = buildMonths(this._calendar, startDate, state, this._i18n, forceRebuild);
            // updating months and boundary dates
            state.months = months;
            state.firstDate = months.length > 0 ? months[0].firstDate : undefined;
            state.lastDate = months.length > 0 ? months[months.length - 1].lastDate : undefined;
            // reset selected date if 'markDisabled' returns true
            if ('selectedDate' in patch && !isDateSelectable(state.selectedDate, state)) {
                state.selectedDate = null;
            }
            // adjusting focus after months were built
            if ('firstDate' in patch) {
                if (state.focusDate === undefined || state.focusDate.before(state.firstDate) ||
                    state.focusDate.after(state.lastDate)) {
                    state.focusDate = startDate;
                }
            }
            // adjusting months/years for the select box navigation
            /** @type {?} */
            var yearChanged = !this._state.firstDate || this._state.firstDate.year !== state.firstDate.year;
            /** @type {?} */
            var monthChanged = !this._state.firstDate || this._state.firstDate.month !== state.firstDate.month;
            if (state.navigation === 'select') {
                // years ->  boundaries (min/max were changed)
                if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.years.length === 0 || yearChanged) {
                    state.selectBoxes.years = generateSelectBoxYears(state.firstDate, state.minDate, state.maxDate);
                }
                // months -> when current year or boundaries change
                if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.months.length === 0 || yearChanged) {
                    state.selectBoxes.months =
                        generateSelectBoxMonths(this._calendar, state.firstDate, state.minDate, state.maxDate);
                }
            }
            else {
                state.selectBoxes = { years: [], months: [] };
            }
            // updating navigation arrows -> boundaries change (min/max) or month/year changes
            if ((state.navigation === 'arrows' || state.navigation === 'select') &&
                (monthChanged || yearChanged || 'minDate' in patch || 'maxDate' in patch || 'disabled' in patch)) {
                state.prevDisabled = state.disabled || prevMonthDisabled(this._calendar, state.firstDate, state.minDate);
                state.nextDisabled = state.disabled || nextMonthDisabled(this._calendar, state.lastDate, state.maxDate);
            }
        }
        return state;
    };
    NgbDatepickerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgbDatepickerService.ctorParameters = function () { return [
        { type: NgbCalendar },
        { type: NgbDatepickerI18n }
    ]; };
    return NgbDatepickerService;
}());
export { NgbDatepickerService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgbDatepickerService.prototype._model$;
    /**
     * @type {?}
     * @private
     */
    NgbDatepickerService.prototype._select$;
    /**
     * @type {?}
     * @private
     */
    NgbDatepickerService.prototype._state;
    /**
     * @type {?}
     * @private
     */
    NgbDatepickerService.prototype._calendar;
    /**
     * @type {?}
     * @private
     */
    NgbDatepickerService.prototype._i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAvIiwic291cmNlcyI6WyJkYXRlcGlja2VyL2RhdGVwaWNrZXItc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFdBQVcsRUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFHbkMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQWEsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixhQUFhLEVBQ2IsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixzQkFBc0IsRUFDdEIsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDbEIsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFcEQ7SUF3RkUsOEJBQW9CLFNBQXNCLEVBQVUsS0FBd0I7UUFBeEQsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBdEZwRSxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQXVCLENBQUM7UUFFN0MsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFFbEMsV0FBTSxHQUF3QjtZQUNwQyxRQUFRLEVBQUUsS0FBSztZQUNmLGFBQWEsRUFBRSxDQUFDO1lBQ2hCLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLFlBQVksRUFBRSxLQUFLO1lBQ25CLE1BQU0sRUFB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LEVBQUUsRUFBRSxFQUFDLENBQUM7YUFDN0M7WUFFRCxrRkFBa0Y7WUFDbEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxVQUFVLEtBQUssUUFBUSxDQUFDO2dCQUNoRSxDQUFDLFlBQVksSUFBSSxXQUFXLElBQUksU0FBUyxJQUFJLEtBQUssSUFBSSxTQUFTLElBQUksS0FBSyxJQUFJLFVBQVUsSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDcEcsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsUUFBUSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3pHLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFFBQVEsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3pHO1NBQ0Y7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQW5SRixVQUFVOzs7O2dCQXZCSCxXQUFXO2dCQXFCWCxpQkFBaUI7O0lBc1J6QiwyQkFBQztDQUFBLEFBcFJELElBb1JDO1NBblJZLG9CQUFvQjs7Ozs7O0lBQy9CLHVDQUFxRDs7Ozs7SUFFckQsd0NBQTBDOzs7OztJQUUxQyxzQ0FZRTs7Ozs7SUFzRVUseUNBQThCOzs7OztJQUFFLHFDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdiQ2FsZW5kYXIsIE5nYlBlcmlvZH0gZnJvbSAnLi9uZ2ItY2FsZW5kYXInO1xuaW1wb3J0IHtOZ2JEYXRlfSBmcm9tICcuL25nYi1kYXRlJztcbmltcG9ydCB7TmdiRGF0ZVN0cnVjdH0gZnJvbSAnLi9uZ2ItZGF0ZS1zdHJ1Y3QnO1xuaW1wb3J0IHtEYXRlcGlja2VyVmlld01vZGVsLCBOZ2JEYXlUZW1wbGF0ZURhdGEsIE5nYk1hcmtEaXNhYmxlZH0gZnJvbSAnLi9kYXRlcGlja2VyLXZpZXctbW9kZWwnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7aXNJbnRlZ2VyLCB0b0ludGVnZXJ9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgYnVpbGRNb250aHMsXG4gIGNoZWNrRGF0ZUluUmFuZ2UsXG4gIGNoZWNrTWluQmVmb3JlTWF4LFxuICBpc0NoYW5nZWREYXRlLFxuICBpc0NoYW5nZWRNb250aCxcbiAgaXNEYXRlU2VsZWN0YWJsZSxcbiAgZ2VuZXJhdGVTZWxlY3RCb3hZZWFycyxcbiAgZ2VuZXJhdGVTZWxlY3RCb3hNb250aHMsXG4gIHByZXZNb250aERpc2FibGVkLFxuICBuZXh0TW9udGhEaXNhYmxlZFxufSBmcm9tICcuL2RhdGVwaWNrZXItdG9vbHMnO1xuXG5pbXBvcnQge2ZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtOZ2JEYXRlcGlja2VySTE4bn0gZnJvbSAnLi9kYXRlcGlja2VyLWkxOG4nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmdiRGF0ZXBpY2tlclNlcnZpY2Uge1xuICBwcml2YXRlIF9tb2RlbCQgPSBuZXcgU3ViamVjdDxEYXRlcGlja2VyVmlld01vZGVsPigpO1xuXG4gIHByaXZhdGUgX3NlbGVjdCQgPSBuZXcgU3ViamVjdDxOZ2JEYXRlPigpO1xuXG4gIHByaXZhdGUgX3N0YXRlOiBEYXRlcGlja2VyVmlld01vZGVsID0ge1xuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBkaXNwbGF5TW9udGhzOiAxLFxuICAgIGZpcnN0RGF5T2ZXZWVrOiAxLFxuICAgIGZvY3VzVmlzaWJsZTogZmFsc2UsXG4gICAgbW9udGhzOiBbXSxcbiAgICBuYXZpZ2F0aW9uOiAnc2VsZWN0JyxcbiAgICBvdXRzaWRlRGF5czogJ3Zpc2libGUnLFxuICAgIHByZXZEaXNhYmxlZDogZmFsc2UsXG4gICAgbmV4dERpc2FibGVkOiBmYWxzZSxcbiAgICBzZWxlY3RCb3hlczoge3llYXJzOiBbXSwgbW9udGhzOiBbXX0sXG4gICAgc2VsZWN0ZWREYXRlOiBudWxsXG4gIH07XG5cbiAgZ2V0IG1vZGVsJCgpOiBPYnNlcnZhYmxlPERhdGVwaWNrZXJWaWV3TW9kZWw+IHsgcmV0dXJuIHRoaXMuX21vZGVsJC5waXBlKGZpbHRlcihtb2RlbCA9PiBtb2RlbC5tb250aHMubGVuZ3RoID4gMCkpOyB9XG5cbiAgZ2V0IHNlbGVjdCQoKTogT2JzZXJ2YWJsZTxOZ2JEYXRlPiB7IHJldHVybiB0aGlzLl9zZWxlY3QkLnBpcGUoZmlsdGVyKGRhdGUgPT4gZGF0ZSAhPT0gbnVsbCkpOyB9XG5cbiAgc2V0IGRheVRlbXBsYXRlRGF0YShkYXlUZW1wbGF0ZURhdGE6IE5nYkRheVRlbXBsYXRlRGF0YSkge1xuICAgIGlmICh0aGlzLl9zdGF0ZS5kYXlUZW1wbGF0ZURhdGEgIT09IGRheVRlbXBsYXRlRGF0YSkge1xuICAgICAgdGhpcy5fbmV4dFN0YXRlKHtkYXlUZW1wbGF0ZURhdGF9KTtcbiAgICB9XG4gIH1cblxuICBzZXQgZGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fc3RhdGUuZGlzYWJsZWQgIT09IGRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9uZXh0U3RhdGUoe2Rpc2FibGVkfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0IGRpc3BsYXlNb250aHMoZGlzcGxheU1vbnRoczogbnVtYmVyKSB7XG4gICAgZGlzcGxheU1vbnRocyA9IHRvSW50ZWdlcihkaXNwbGF5TW9udGhzKTtcbiAgICBpZiAoaXNJbnRlZ2VyKGRpc3BsYXlNb250aHMpICYmIGRpc3BsYXlNb250aHMgPiAwICYmIHRoaXMuX3N0YXRlLmRpc3BsYXlNb250aHMgIT09IGRpc3BsYXlNb250aHMpIHtcbiAgICAgIHRoaXMuX25leHRTdGF0ZSh7ZGlzcGxheU1vbnRoc30pO1xuICAgIH1cbiAgfVxuXG4gIHNldCBmaXJzdERheU9mV2VlayhmaXJzdERheU9mV2VlazogbnVtYmVyKSB7XG4gICAgZmlyc3REYXlPZldlZWsgPSB0b0ludGVnZXIoZmlyc3REYXlPZldlZWspO1xuICAgIGlmIChpc0ludGVnZXIoZmlyc3REYXlPZldlZWspICYmIGZpcnN0RGF5T2ZXZWVrID49IDAgJiYgdGhpcy5fc3RhdGUuZmlyc3REYXlPZldlZWsgIT09IGZpcnN0RGF5T2ZXZWVrKSB7XG4gICAgICB0aGlzLl9uZXh0U3RhdGUoe2ZpcnN0RGF5T2ZXZWVrfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0IGZvY3VzVmlzaWJsZShmb2N1c1Zpc2libGU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fc3RhdGUuZm9jdXNWaXNpYmxlICE9PSBmb2N1c1Zpc2libGUgJiYgIXRoaXMuX3N0YXRlLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9uZXh0U3RhdGUoe2ZvY3VzVmlzaWJsZX0pO1xuICAgIH1cbiAgfVxuXG4gIHNldCBtYXhEYXRlKGRhdGU6IE5nYkRhdGUpIHtcbiAgICBjb25zdCBtYXhEYXRlID0gdGhpcy50b1ZhbGlkRGF0ZShkYXRlLCBudWxsKTtcbiAgICBpZiAoaXNDaGFuZ2VkRGF0ZSh0aGlzLl9zdGF0ZS5tYXhEYXRlLCBtYXhEYXRlKSkge1xuICAgICAgdGhpcy5fbmV4dFN0YXRlKHttYXhEYXRlfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0IG1hcmtEaXNhYmxlZChtYXJrRGlzYWJsZWQ6IE5nYk1hcmtEaXNhYmxlZCkge1xuICAgIGlmICh0aGlzLl9zdGF0ZS5tYXJrRGlzYWJsZWQgIT09IG1hcmtEaXNhYmxlZCkge1xuICAgICAgdGhpcy5fbmV4dFN0YXRlKHttYXJrRGlzYWJsZWR9KTtcbiAgICB9XG4gIH1cblxuICBzZXQgbWluRGF0ZShkYXRlOiBOZ2JEYXRlKSB7XG4gICAgY29uc3QgbWluRGF0ZSA9IHRoaXMudG9WYWxpZERhdGUoZGF0ZSwgbnVsbCk7XG4gICAgaWYgKGlzQ2hhbmdlZERhdGUodGhpcy5fc3RhdGUubWluRGF0ZSwgbWluRGF0ZSkpIHtcbiAgICAgIHRoaXMuX25leHRTdGF0ZSh7bWluRGF0ZX0pO1xuICAgIH1cbiAgfVxuXG4gIHNldCBuYXZpZ2F0aW9uKG5hdmlnYXRpb246ICdzZWxlY3QnIHwgJ2Fycm93cycgfCAnbm9uZScpIHtcbiAgICBpZiAodGhpcy5fc3RhdGUubmF2aWdhdGlvbiAhPT0gbmF2aWdhdGlvbikge1xuICAgICAgdGhpcy5fbmV4dFN0YXRlKHtuYXZpZ2F0aW9ufSk7XG4gICAgfVxuICB9XG5cbiAgc2V0IG91dHNpZGVEYXlzKG91dHNpZGVEYXlzOiAndmlzaWJsZScgfCAnY29sbGFwc2VkJyB8ICdoaWRkZW4nKSB7XG4gICAgaWYgKHRoaXMuX3N0YXRlLm91dHNpZGVEYXlzICE9PSBvdXRzaWRlRGF5cykge1xuICAgICAgdGhpcy5fbmV4dFN0YXRlKHtvdXRzaWRlRGF5c30pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NhbGVuZGFyOiBOZ2JDYWxlbmRhciwgcHJpdmF0ZSBfaTE4bjogTmdiRGF0ZXBpY2tlckkxOG4pIHt9XG5cbiAgZm9jdXMoZGF0ZTogTmdiRGF0ZSkge1xuICAgIGlmICghdGhpcy5fc3RhdGUuZGlzYWJsZWQgJiYgdGhpcy5fY2FsZW5kYXIuaXNWYWxpZChkYXRlKSAmJiBpc0NoYW5nZWREYXRlKHRoaXMuX3N0YXRlLmZvY3VzRGF0ZSwgZGF0ZSkpIHtcbiAgICAgIHRoaXMuX25leHRTdGF0ZSh7Zm9jdXNEYXRlOiBkYXRlfSk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXNNb3ZlKHBlcmlvZD86IE5nYlBlcmlvZCwgbnVtYmVyPzogbnVtYmVyKSB7XG4gICAgdGhpcy5mb2N1cyh0aGlzLl9jYWxlbmRhci5nZXROZXh0KHRoaXMuX3N0YXRlLmZvY3VzRGF0ZSwgcGVyaW9kLCBudW1iZXIpKTtcbiAgfVxuXG4gIGZvY3VzU2VsZWN0KCkge1xuICAgIGlmIChpc0RhdGVTZWxlY3RhYmxlKHRoaXMuX3N0YXRlLmZvY3VzRGF0ZSwgdGhpcy5fc3RhdGUpKSB7XG4gICAgICB0aGlzLnNlbGVjdCh0aGlzLl9zdGF0ZS5mb2N1c0RhdGUsIHtlbWl0RXZlbnQ6IHRydWV9KTtcbiAgICB9XG4gIH1cblxuICBvcGVuKGRhdGU6IE5nYkRhdGUpIHtcbiAgICBjb25zdCBmaXJzdERhdGUgPSB0aGlzLnRvVmFsaWREYXRlKGRhdGUsIHRoaXMuX2NhbGVuZGFyLmdldFRvZGF5KCkpO1xuICAgIGlmICghdGhpcy5fc3RhdGUuZGlzYWJsZWQgJiYgKCF0aGlzLl9zdGF0ZS5maXJzdERhdGUgfHwgaXNDaGFuZ2VkTW9udGgodGhpcy5fc3RhdGUuZmlyc3REYXRlLCBkYXRlKSkpIHtcbiAgICAgIHRoaXMuX25leHRTdGF0ZSh7Zmlyc3REYXRlfSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0KGRhdGU6IE5nYkRhdGUsIG9wdGlvbnM6IHtlbWl0RXZlbnQ/OiBib29sZWFufSA9IHt9KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWREYXRlID0gdGhpcy50b1ZhbGlkRGF0ZShkYXRlLCBudWxsKTtcbiAgICBpZiAoIXRoaXMuX3N0YXRlLmRpc2FibGVkKSB7XG4gICAgICBpZiAoaXNDaGFuZ2VkRGF0ZSh0aGlzLl9zdGF0ZS5zZWxlY3RlZERhdGUsIHNlbGVjdGVkRGF0ZSkpIHtcbiAgICAgICAgdGhpcy5fbmV4dFN0YXRlKHtzZWxlY3RlZERhdGV9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuZW1pdEV2ZW50ICYmIGlzRGF0ZVNlbGVjdGFibGUoc2VsZWN0ZWREYXRlLCB0aGlzLl9zdGF0ZSkpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0JC5uZXh0KHNlbGVjdGVkRGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdG9WYWxpZERhdGUoZGF0ZTogTmdiRGF0ZVN0cnVjdCwgZGVmYXVsdFZhbHVlPzogTmdiRGF0ZSk6IE5nYkRhdGUge1xuICAgIGNvbnN0IG5nYkRhdGUgPSBOZ2JEYXRlLmZyb20oZGF0ZSk7XG4gICAgaWYgKGRlZmF1bHRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZWZhdWx0VmFsdWUgPSB0aGlzLl9jYWxlbmRhci5nZXRUb2RheSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY2FsZW5kYXIuaXNWYWxpZChuZ2JEYXRlKSA/IG5nYkRhdGUgOiBkZWZhdWx0VmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9uZXh0U3RhdGUocGF0Y2g6IFBhcnRpYWw8RGF0ZXBpY2tlclZpZXdNb2RlbD4pIHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHRoaXMuX3VwZGF0ZVN0YXRlKHBhdGNoKTtcbiAgICB0aGlzLl9wYXRjaENvbnRleHRzKG5ld1N0YXRlKTtcbiAgICB0aGlzLl9zdGF0ZSA9IG5ld1N0YXRlO1xuICAgIHRoaXMuX21vZGVsJC5uZXh0KHRoaXMuX3N0YXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3BhdGNoQ29udGV4dHMoc3RhdGU6IERhdGVwaWNrZXJWaWV3TW9kZWwpIHtcbiAgICBjb25zdCB7bW9udGhzLCBkaXNwbGF5TW9udGhzLCBzZWxlY3RlZERhdGUsIGZvY3VzRGF0ZSwgZm9jdXNWaXNpYmxlLCBkaXNhYmxlZCwgb3V0c2lkZURheXN9ID0gc3RhdGU7XG4gICAgc3RhdGUubW9udGhzLmZvckVhY2gobW9udGggPT4ge1xuICAgICAgbW9udGgud2Vla3MuZm9yRWFjaCh3ZWVrID0+IHtcbiAgICAgICAgd2Vlay5kYXlzLmZvckVhY2goZGF5ID0+IHtcblxuICAgICAgICAgIC8vIHBhdGNoIGZvY3VzIGZsYWdcbiAgICAgICAgICBpZiAoZm9jdXNEYXRlKSB7XG4gICAgICAgICAgICBkYXkuY29udGV4dC5mb2N1c2VkID0gZm9jdXNEYXRlLmVxdWFscyhkYXkuZGF0ZSkgJiYgZm9jdXNWaXNpYmxlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNhbGN1bGF0aW5nIHRhYmluZGV4XG4gICAgICAgICAgZGF5LnRhYmluZGV4ID0gIWRpc2FibGVkICYmIGRheS5kYXRlLmVxdWFscyhmb2N1c0RhdGUpICYmIGZvY3VzRGF0ZS5tb250aCA9PT0gbW9udGgubnVtYmVyID8gMCA6IC0xO1xuXG4gICAgICAgICAgLy8gb3ZlcnJpZGUgY29udGV4dCBkaXNhYmxlZFxuICAgICAgICAgIGlmIChkaXNhYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZGF5LmNvbnRleHQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHBhdGNoIHNlbGVjdGlvbiBmbGFnXG4gICAgICAgICAgaWYgKHNlbGVjdGVkRGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkYXkuY29udGV4dC5zZWxlY3RlZCA9IHNlbGVjdGVkRGF0ZSAhPT0gbnVsbCAmJiBzZWxlY3RlZERhdGUuZXF1YWxzKGRheS5kYXRlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB2aXNpYmlsaXR5XG4gICAgICAgICAgaWYgKG1vbnRoLm51bWJlciAhPT0gZGF5LmRhdGUubW9udGgpIHtcbiAgICAgICAgICAgIGRheS5oaWRkZW4gPSBvdXRzaWRlRGF5cyA9PT0gJ2hpZGRlbicgfHwgb3V0c2lkZURheXMgPT09ICdjb2xsYXBzZWQnIHx8XG4gICAgICAgICAgICAgICAgKGRpc3BsYXlNb250aHMgPiAxICYmIGRheS5kYXRlLmFmdGVyKG1vbnRoc1swXS5maXJzdERhdGUpICYmXG4gICAgICAgICAgICAgICAgIGRheS5kYXRlLmJlZm9yZShtb250aHNbZGlzcGxheU1vbnRocyAtIDFdLmxhc3REYXRlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU3RhdGUocGF0Y2g6IFBhcnRpYWw8RGF0ZXBpY2tlclZpZXdNb2RlbD4pOiBEYXRlcGlja2VyVmlld01vZGVsIHtcbiAgICAvLyBwYXRjaGluZyBmaWVsZHNcbiAgICBjb25zdCBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3N0YXRlLCBwYXRjaCk7XG5cbiAgICBsZXQgc3RhcnREYXRlID0gc3RhdGUuZmlyc3REYXRlO1xuXG4gICAgLy8gbWluL21heCBkYXRlcyBjaGFuZ2VkXG4gICAgaWYgKCdtaW5EYXRlJyBpbiBwYXRjaCB8fCAnbWF4RGF0ZScgaW4gcGF0Y2gpIHtcbiAgICAgIGNoZWNrTWluQmVmb3JlTWF4KHN0YXRlLm1pbkRhdGUsIHN0YXRlLm1heERhdGUpO1xuICAgICAgc3RhdGUuZm9jdXNEYXRlID0gY2hlY2tEYXRlSW5SYW5nZShzdGF0ZS5mb2N1c0RhdGUsIHN0YXRlLm1pbkRhdGUsIHN0YXRlLm1heERhdGUpO1xuICAgICAgc3RhdGUuZmlyc3REYXRlID0gY2hlY2tEYXRlSW5SYW5nZShzdGF0ZS5maXJzdERhdGUsIHN0YXRlLm1pbkRhdGUsIHN0YXRlLm1heERhdGUpO1xuICAgICAgc3RhcnREYXRlID0gc3RhdGUuZm9jdXNEYXRlO1xuICAgIH1cblxuICAgIC8vIGRpc2FibGVkXG4gICAgaWYgKCdkaXNhYmxlZCcgaW4gcGF0Y2gpIHtcbiAgICAgIHN0YXRlLmZvY3VzVmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGluaXRpYWwgcmVidWlsZCB2aWEgJ3NlbGVjdCgpJ1xuICAgIGlmICgnc2VsZWN0ZWREYXRlJyBpbiBwYXRjaCAmJiB0aGlzLl9zdGF0ZS5tb250aHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBzdGFydERhdGUgPSBzdGF0ZS5zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgLy8gdGVybWluYXRlIGVhcmx5IGlmIG9ubHkgZm9jdXMgdmlzaWJpbGl0eSB3YXMgY2hhbmdlZFxuICAgIGlmICgnZm9jdXNWaXNpYmxlJyBpbiBwYXRjaCkge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIC8vIGZvY3VzIGRhdGUgY2hhbmdlZFxuICAgIGlmICgnZm9jdXNEYXRlJyBpbiBwYXRjaCkge1xuICAgICAgc3RhdGUuZm9jdXNEYXRlID0gY2hlY2tEYXRlSW5SYW5nZShzdGF0ZS5mb2N1c0RhdGUsIHN0YXRlLm1pbkRhdGUsIHN0YXRlLm1heERhdGUpO1xuICAgICAgc3RhcnREYXRlID0gc3RhdGUuZm9jdXNEYXRlO1xuXG4gICAgICAvLyBub3RoaW5nIHRvIHJlYnVpbGQgaWYgb25seSBmb2N1cyBjaGFuZ2VkIGFuZCBpdCBpcyBzdGlsbCB2aXNpYmxlXG4gICAgICBpZiAoc3RhdGUubW9udGhzLmxlbmd0aCAhPT0gMCAmJiAhc3RhdGUuZm9jdXNEYXRlLmJlZm9yZShzdGF0ZS5maXJzdERhdGUpICYmXG4gICAgICAgICAgIXN0YXRlLmZvY3VzRGF0ZS5hZnRlcihzdGF0ZS5sYXN0RGF0ZSkpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZpcnN0IGRhdGUgY2hhbmdlZFxuICAgIGlmICgnZmlyc3REYXRlJyBpbiBwYXRjaCkge1xuICAgICAgc3RhdGUuZmlyc3REYXRlID0gY2hlY2tEYXRlSW5SYW5nZShzdGF0ZS5maXJzdERhdGUsIHN0YXRlLm1pbkRhdGUsIHN0YXRlLm1heERhdGUpO1xuICAgICAgc3RhcnREYXRlID0gc3RhdGUuZmlyc3REYXRlO1xuICAgIH1cblxuICAgIC8vIHJlYnVpbGRpbmcgbW9udGhzXG4gICAgaWYgKHN0YXJ0RGF0ZSkge1xuICAgICAgY29uc3QgZm9yY2VSZWJ1aWxkID0gJ2RheVRlbXBsYXRlRGF0YScgaW4gcGF0Y2ggfHwgJ2ZpcnN0RGF5T2ZXZWVrJyBpbiBwYXRjaCB8fCAnbWFya0Rpc2FibGVkJyBpbiBwYXRjaCB8fFxuICAgICAgICAgICdtaW5EYXRlJyBpbiBwYXRjaCB8fCAnbWF4RGF0ZScgaW4gcGF0Y2ggfHwgJ2Rpc2FibGVkJyBpbiBwYXRjaCB8fCAnb3V0c2lkZURheXMnIGluIHBhdGNoO1xuXG4gICAgICBjb25zdCBtb250aHMgPSBidWlsZE1vbnRocyh0aGlzLl9jYWxlbmRhciwgc3RhcnREYXRlLCBzdGF0ZSwgdGhpcy5faTE4biwgZm9yY2VSZWJ1aWxkKTtcblxuICAgICAgLy8gdXBkYXRpbmcgbW9udGhzIGFuZCBib3VuZGFyeSBkYXRlc1xuICAgICAgc3RhdGUubW9udGhzID0gbW9udGhzO1xuICAgICAgc3RhdGUuZmlyc3REYXRlID0gbW9udGhzLmxlbmd0aCA+IDAgPyBtb250aHNbMF0uZmlyc3REYXRlIDogdW5kZWZpbmVkO1xuICAgICAgc3RhdGUubGFzdERhdGUgPSBtb250aHMubGVuZ3RoID4gMCA/IG1vbnRoc1ttb250aHMubGVuZ3RoIC0gMV0ubGFzdERhdGUgOiB1bmRlZmluZWQ7XG5cbiAgICAgIC8vIHJlc2V0IHNlbGVjdGVkIGRhdGUgaWYgJ21hcmtEaXNhYmxlZCcgcmV0dXJucyB0cnVlXG4gICAgICBpZiAoJ3NlbGVjdGVkRGF0ZScgaW4gcGF0Y2ggJiYgIWlzRGF0ZVNlbGVjdGFibGUoc3RhdGUuc2VsZWN0ZWREYXRlLCBzdGF0ZSkpIHtcbiAgICAgICAgc3RhdGUuc2VsZWN0ZWREYXRlID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gYWRqdXN0aW5nIGZvY3VzIGFmdGVyIG1vbnRocyB3ZXJlIGJ1aWx0XG4gICAgICBpZiAoJ2ZpcnN0RGF0ZScgaW4gcGF0Y2gpIHtcbiAgICAgICAgaWYgKHN0YXRlLmZvY3VzRGF0ZSA9PT0gdW5kZWZpbmVkIHx8IHN0YXRlLmZvY3VzRGF0ZS5iZWZvcmUoc3RhdGUuZmlyc3REYXRlKSB8fFxuICAgICAgICAgICAgc3RhdGUuZm9jdXNEYXRlLmFmdGVyKHN0YXRlLmxhc3REYXRlKSkge1xuICAgICAgICAgIHN0YXRlLmZvY3VzRGF0ZSA9IHN0YXJ0RGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBhZGp1c3RpbmcgbW9udGhzL3llYXJzIGZvciB0aGUgc2VsZWN0IGJveCBuYXZpZ2F0aW9uXG4gICAgICBjb25zdCB5ZWFyQ2hhbmdlZCA9ICF0aGlzLl9zdGF0ZS5maXJzdERhdGUgfHwgdGhpcy5fc3RhdGUuZmlyc3REYXRlLnllYXIgIT09IHN0YXRlLmZpcnN0RGF0ZS55ZWFyO1xuICAgICAgY29uc3QgbW9udGhDaGFuZ2VkID0gIXRoaXMuX3N0YXRlLmZpcnN0RGF0ZSB8fCB0aGlzLl9zdGF0ZS5maXJzdERhdGUubW9udGggIT09IHN0YXRlLmZpcnN0RGF0ZS5tb250aDtcbiAgICAgIGlmIChzdGF0ZS5uYXZpZ2F0aW9uID09PSAnc2VsZWN0Jykge1xuICAgICAgICAvLyB5ZWFycyAtPiAgYm91bmRhcmllcyAobWluL21heCB3ZXJlIGNoYW5nZWQpXG4gICAgICAgIGlmICgnbWluRGF0ZScgaW4gcGF0Y2ggfHwgJ21heERhdGUnIGluIHBhdGNoIHx8IHN0YXRlLnNlbGVjdEJveGVzLnllYXJzLmxlbmd0aCA9PT0gMCB8fCB5ZWFyQ2hhbmdlZCkge1xuICAgICAgICAgIHN0YXRlLnNlbGVjdEJveGVzLnllYXJzID0gZ2VuZXJhdGVTZWxlY3RCb3hZZWFycyhzdGF0ZS5maXJzdERhdGUsIHN0YXRlLm1pbkRhdGUsIHN0YXRlLm1heERhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbW9udGhzIC0+IHdoZW4gY3VycmVudCB5ZWFyIG9yIGJvdW5kYXJpZXMgY2hhbmdlXG4gICAgICAgIGlmICgnbWluRGF0ZScgaW4gcGF0Y2ggfHwgJ21heERhdGUnIGluIHBhdGNoIHx8IHN0YXRlLnNlbGVjdEJveGVzLm1vbnRocy5sZW5ndGggPT09IDAgfHwgeWVhckNoYW5nZWQpIHtcbiAgICAgICAgICBzdGF0ZS5zZWxlY3RCb3hlcy5tb250aHMgPVxuICAgICAgICAgICAgICBnZW5lcmF0ZVNlbGVjdEJveE1vbnRocyh0aGlzLl9jYWxlbmRhciwgc3RhdGUuZmlyc3REYXRlLCBzdGF0ZS5taW5EYXRlLCBzdGF0ZS5tYXhEYXRlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUuc2VsZWN0Qm94ZXMgPSB7eWVhcnM6IFtdLCBtb250aHM6IFtdfTtcbiAgICAgIH1cblxuICAgICAgLy8gdXBkYXRpbmcgbmF2aWdhdGlvbiBhcnJvd3MgLT4gYm91bmRhcmllcyBjaGFuZ2UgKG1pbi9tYXgpIG9yIG1vbnRoL3llYXIgY2hhbmdlc1xuICAgICAgaWYgKChzdGF0ZS5uYXZpZ2F0aW9uID09PSAnYXJyb3dzJyB8fCBzdGF0ZS5uYXZpZ2F0aW9uID09PSAnc2VsZWN0JykgJiZcbiAgICAgICAgICAobW9udGhDaGFuZ2VkIHx8IHllYXJDaGFuZ2VkIHx8ICdtaW5EYXRlJyBpbiBwYXRjaCB8fCAnbWF4RGF0ZScgaW4gcGF0Y2ggfHwgJ2Rpc2FibGVkJyBpbiBwYXRjaCkpIHtcbiAgICAgICAgc3RhdGUucHJldkRpc2FibGVkID0gc3RhdGUuZGlzYWJsZWQgfHwgcHJldk1vbnRoRGlzYWJsZWQodGhpcy5fY2FsZW5kYXIsIHN0YXRlLmZpcnN0RGF0ZSwgc3RhdGUubWluRGF0ZSk7XG4gICAgICAgIHN0YXRlLm5leHREaXNhYmxlZCA9IHN0YXRlLmRpc2FibGVkIHx8IG5leHRNb250aERpc2FibGVkKHRoaXMuX2NhbGVuZGFyLCBzdGF0ZS5sYXN0RGF0ZSwgc3RhdGUubWF4RGF0ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXX0=