'use client';

import React from 'react';

type Props = {
    color?: string;     // default: skyblue
};

export default function ArrowButton({ color = 'white' }: Props) {
    return (
        <button className="cursor-pointer" style={{ ['--color' as any]: color }}>
            <div className="chevrons">
                <div className="chevrondown" />
                <div className="chevrondown" />
                <div className="chevrondown" />
            </div>
        </button>
    );
}
