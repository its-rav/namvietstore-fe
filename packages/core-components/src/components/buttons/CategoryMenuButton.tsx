import React, {useState, useEffect} from "react";
import CategoryList from "@/components/buttons/CategoryList";
import CategoryBoard from "@/components/buttons/CategoryBoard";
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
                <div className={`flex flex-row relative z-10`} onMouseLeave={handleMouseLeave}>
                    <div className="absolute left-0 top-0">
                        {directory.map((data) => {
                            return (
                                <CategoryList key={data.id} data={data} setItem={setItem} />
                            );
                        })}
                    </div>
                    {indexItem >= 0 && (
                        <div className="absolute left-56 top-0 w-4/6">
                            <CategoryBoard folderData={directory[indexItem]} indexItem={indexItem} />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default CategoryMenuButton