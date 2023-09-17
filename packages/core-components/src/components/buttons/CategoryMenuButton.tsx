import React, {useState, useEffect} from "react";
export interface ItemType{
    itemTitle: string;
    itemLink: string;
}
export interface FolderTypes{
    folderTitle: string;
    folderItems: ItemType[];
}
export interface DirectoryTypes {
    id: number;
    icon?: React.ReactNode;
    rootName: string;
    childrenDirectory: FolderTypes[];
}

export type CategoryProps = {
    className?: string;
    content?: string; //button name
    icon?: React.ReactNode;
    directory: DirectoryTypes[];
}

const CategoryMenuButton:React.FC<CategoryProps> = ({
        className,
        content,
        icon,
        directory
    }) => {
    const [isShow, setShow] = useState(false)
    const [indexItem, setItem] = useState(-1);
    //const [boardShow, setBoardShow] = useState(false)
    const handleMouseEnter = () => {
        setShow(true);
    };
    const handleMouseLeave = () => {
        setShow(false);
        setItem(-1);
    };
    const handleCLick = () => {
        setShow(!isShow);
        setItem(-1);
    };
    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setShow(false);
                setItem(-1);
            }
        }
        if (isShow) {
            document.addEventListener('keydown', handleEscapeKey);
            return () => {
                document.removeEventListener('keydown', handleEscapeKey);
            };
        }
    }, [isShow]);

    return (
        <div>
            <div className={`${className}`}>
                <button
                    className={"flex items-center justify-center gap-3.5 bg-secondary text-white px-5 py-7 w-56 " +
                        "transition ease-in hover:scale-105 hover:-translate-y-1 duration-300 hover:drop-shadow-2xl"}
                    onMouseEnter={handleMouseEnter}
                    onClick={handleCLick}
                    aria-haspopup="true"
                    aria-expanded={isShow}
                >
                    <div className={"w-7 p"}>{icon}</div>
                    <span className={"text-sm"}>{content}</span>
                </button>
            </div>
            {isShow && (
                <div className={`flex flex-row`} onMouseLeave={handleMouseLeave}>
                    <div>
                        {directory.map((data) => {
                            return ( // tao component moi
                                <div key={data.id}>
                                    <div
                                        className="w-full bg-white drop-shadow-xl"
                                    >
                                        <button
                                            className={
                                                "rounded-[5px] mt-1 hover:bg-secondary-50 hover:cursor-pointer w-56 "+
                                                "flex items-center justify-left gap-3.5 px-5 py-3 " +
                                                "transition ease-in-out hover:scale-105 "
                                            }
                                            onMouseEnter={() => {
                                                setItem(data.id);
                                                //setBoardShow(true)
                                            }}
                                            onFocus={() => {
                                                setItem(data.id);
                                            }}
                                            /*onMouseLeave={()=>{
                                                //setBoardShow(false)
                                            }}*/
                                        >
                                            <div className="w-6">{data.icon}</div>
                                            <div className="sm:text-sm py-2 px-3">{data.rootName}</div>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {(indexItem >= 0)&&( //component moi
                        <div
                            className={`left-auto w-4/5 min-h-60 max-h-max bg-white drop-shadow-xl `}
                        >
                            <div className="grid grid-cols-4 gap-4 p-4">
                                <div>{indexItem}</div>
                                {directory[indexItem].childrenDirectory.map((folder, index) => {
                                    console.log(folder)
                                    return (
                                        <div key={folder.folderTitle + index}>
                                            <div className="font-bold mb-2">{folder.folderTitle}</div>
                                            {folder.folderItems.map((item) => {
                                                return (
                                                    <div key={item.itemTitle}>
                                                        <a href={item.itemLink} className="font-sm hover:text-secondary hover:font-medium ">
                                                            {item.itemTitle}
                                                        </a>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default CategoryMenuButton