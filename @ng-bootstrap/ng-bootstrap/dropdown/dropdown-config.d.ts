import { PlacementArray } from '../util/positioning';
/**
 * A configuration service for the [`NgbDropdown`](#/components/dropdown/api#NgbDropdown) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the dropdowns used in the application.
 */
export declare class NgbDropdownConfig {
    autoClose: boolean | 'outside' | 'inside';
    placement: PlacementArray;
    container: null | 'body';
}
