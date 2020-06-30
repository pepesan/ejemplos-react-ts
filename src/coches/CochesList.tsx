import React, { FunctionComponent } from "react";
import {Coche} from "./Coche";
import {CocheListItem} from "./CocheListItem";

interface Props {
    coches: Coche[];
    onDelete: (coche: Coche) => void;
}

export const CochesList: FunctionComponent<Props> = ({ coches, onDelete }) => (
    <ul>
        {coches.map(coche => (
            <CocheListItem key={coche.id} coche={coche}  onDelete={onDelete}/>
        ))}
    </ul>
);
