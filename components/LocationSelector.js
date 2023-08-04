"use client";
import { useState } from 'react'

const style = {
    wrapper: 'pt-2',
    searchHeader: `w-full font-bold text-left flex items-center text-3xl p-4 overflow-hidden`,
    inputBoxes: `flex flex-col mb-4 relative`,
}

const LocationSelector = () => {
    const [inFocus, setInFocus] = useState('from')
    return (
        <div className = {style.wrapper}>
            <div className={style.searchHeader}>
                {inFocus === 'from' ? 'Pick-up point' : "Drop-off point"}
            </div>
        </div>
    )
}

export default LocationSelector