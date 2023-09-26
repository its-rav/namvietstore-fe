import React, { PropsWithChildren } from "react";
import "./section-wrapper.css";
export type SectionWrapperProps = PropsWithChildren<{
  background?: string;
  isFullWidth?: boolean;
}>;

const SectionWrapper = ({
  isFullWidth = false,
  background,
  children,
}: SectionWrapperProps) => {
  return (
    <div
      className={`section-wrapper ${isFullWidth && "full-width"}`}
      style={{ background }}
    >
      <section>{children}</section>
    </div>
  );
};

export default SectionWrapper;