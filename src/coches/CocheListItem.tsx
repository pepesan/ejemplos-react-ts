import React, { FunctionComponent } from "react";

import {Coche} from "./Coche";

interface Props {
    coche: Coche;
    onDelete: (coche: Coche) => void;
}

export const CocheListItem: FunctionComponent<Props> = ({ coche, onDelete }) => {
    const onClick = () => {
        onDelete(coche);
        //console.log(coche);
    };

    return (
        <li>
            {coche.nombre} <button onClick={onClick}>X</button>
        </li>
    );
};
