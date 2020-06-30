import React, { FunctionComponent } from "react";
import {Coche} from "./Coche";


interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
    coche: Coche;
}

export const AddCocheForm: FunctionComponent<Props> = ({
    onChange,
    onAdd,
    coche
}) => (
    <form onSubmit={onAdd}>
        <input onChange={onChange} value={coche.nombre} />
        <button type="submit">Add a car</button>
    </form>
);
