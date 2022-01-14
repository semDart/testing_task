// Table interfaces
export interface ITravel {
  [key: string]: string;
}

export interface ITravelsState {
  status: "idle" | "loading" | "failed";
  // Can't pick typing for List(), so here use type 'any'
  travelsData: any;
}

// Form interfaces
export interface ITravelsFormState {
  regions?: string[];
  countries: string[];
  currencies: string[];
  selectedRegion: string;
  selectedCountries: string[];
  selectedCurrencies: string[];
  selectedDataConfirmed: boolean;
}

export interface IGlobalState {
  travelsTable: ITravelsState;
  travelsForm: ITravelsFormState;
}

export interface ISeparateArrayByProperty {
  [key: string]: string[];
}

export interface ISaveSelectedData {
  selectedRegion: string;
  selectedCountries: string[];
  selectedCurrencies: string[];
}

// MultiSelector interfaces
export interface IMultiSelectorProps {
  field: string;
  labelName: string;
  initialValues: string[];
  selectedValues: string[];
  handleChangeSelectedValues: (
    event: React.SyntheticEvent<Element, Event>,
    values: string[]
  ) => void;
}
