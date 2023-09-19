import React from "react";
import {type DirectoryTypes } from "@/components/buttons/CategoryMenuButton";

export type DirectoryItemProps = {
    data: DirectoryTypes;
    setItem: (id: number) => void;
};

const CategoryList: React.FC<DirectoryItemProps> = ({ data, setItem }) => {
    return (
        <div key={data.id}>
            <div className="w-full bg-white drop-shadow-xl">
                <button
                    className={
                        "rounded-[5px] mt-1 hover:bg-secondary-50 hover:cursor-pointer w-56 " +
                        "flex items-center justify-left gap-3.5 px-5 py-3 " +
                        "transition ease-in-out hover:scale-105 "
                    }
                    onMouseEnter={() => {
                        setItem(data.id);
                    }}
                    onFocus={() => {
                        setItem(data.id);
                    }}
                >
                    <div className="w-6">{data.icon}</div>
                    <div className="sm:text-sm py-2 px-3">{data.rootName}</div>
                </button>
            </div>
        </div>
    );
};

export default CategoryList;