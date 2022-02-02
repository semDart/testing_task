export type MultiSelectorProps = {
    field: string;
    labelName: string;
    initialValues: string[];
    selectedValues: string[];
    handleChangeSelectedValues: (
        event: React.SyntheticEvent<Element, Event>,
        values: string[]
    ) => void;
}
