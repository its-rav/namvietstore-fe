import React from "react";

import clsxm from "@/lib/clsxm";

export type VariantType = {
  [key: string]: string[];
};

type SectionType = {
  variant?: keyof VariantType;
  children: React.ReactNode;
};

const VariantArr: VariantType = {
  statistic: ["h-96 bg-[#850000]"],
  hero: ["h-96 bg-[#850000]"],
  businessArea: ["h-96 bg-[#850000]"],
};

/**
 * @WIP This component will be updated later.
 * @param variant - section variant,
 * @param children - section content
 * @returns Section component that acts as higher order component.
 */
const Section: React.FC<SectionType> = ({ variant, children }) => {
  return (
    <>
      <section
        className={clsxm(
          //#region  //*=========== Variants ===========
          [variant === "statistic" && [VariantArr.statistic]]
          //#endregion  //*======== Variants ===========
        )}
      >
        <div className="flex h-full items-center justify-between p-36">
          {children}
        </div>
      </section>
    </>
  );
};

export default Section;
