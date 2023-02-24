import React, {FC} from 'react';

interface IProps {
    key:number;
    countrie: {iso_3166_1: string; name: string;}
}

const CountriesInDet:FC<IProps> = ({countrie}) => {

    const {name}= countrie

    return (
        <div>
            {name}
        </div>
    );
};

export {CountriesInDet};