"use client";

import { createContext, useContext, useState } from "react";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {

    const [timeline, setTimeline] = useState([]);

    const addTimeline = (data) => {
        setTimeline(prev => [...prev, data]);
    };

    return (
        <TimelineContext.Provider value={{ timeline, addTimeline }}>
            {children}
        </TimelineContext.Provider>
    );
};

export const useTimeline = () => {
    return useContext(TimelineContext);
};