import React, {ReactNode} from 'react';

export type TopBarProps = {
    className ?: string;
    contactIcon ?: ReactNode;
    languageButton?: ReactNode;
    linkContact1 ?: string;
    linkContact2 ?: string;
}

const TopBar: React.FC<TopBarProps> = ({
    className,
    contactIcon,
    languageButton,
    linkContact1,
    linkContact2,
}) => {
    return (
        <div className={`${className} container bg-primary flex flex-row items-center`}>
            {contactIcon &&
                <div className = {
                    "ContactIcon md:basis-8 " +
                    "md:ms-8 md:my-3 " +
                    "sm:basis-6 sm:ms-6 sm:my-2 "
                }>
                    {contactIcon}
                </div>
            }
            <div className = {
                "ContactInfo-1 sm:flex-2 sm:font-Roboto sm:text-slate-200 border-e-2 " +
                "md:text-sm " +
                "sm:text-xs sm:px-4 " +
                "hover:text-white " +
                "hover:drop-shadow-2xl "
            }>
                <a href={linkContact1}><span className={"sm:hidden md:contents"}>+91 9876543210 - </span>Mr. Duong</a>
            </div>
            <div className = {
                "ContactInfo-2 flex-3 font-Roboto text-slate-200 " +
                "md:text-sm  " +
                "sm:text-xs sm:px-4 " +
                "hover:text-white " +
                "hover:drop-shadow-2xl "
            }>
                <a href={linkContact2}><span className={"sm:hidden md:contents "}>+91 9876543210 - </span>Ms. Huynh</a>
            </div>
            <div className = {"LanguageButon flex-4 " +
                "sm:ml-auto md:me-8 sm:me-3"} >
                {languageButton}
            </div>
        </div>
    )
}
export default TopBar