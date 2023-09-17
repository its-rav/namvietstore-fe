import type { Story, StoryDefault } from "@ladle/react";
import React from "react";
import "regenerator-runtime/runtime";
import "@namviet-fe/core-ui/dist/style.css";

import { type CategoryProps, CategoryMenuButton } from "@namviet-fe/core-ui";
import { StripsIcon } from "@namviet-fe/core-ui";
import { KeyIcon } from "@namviet-fe/core-ui";

export default {
    title: "@nv-fe/core-ui/CategoryMenuButton",
} satisfies StoryDefault<typeof CategoryMenuButton>;

export const Default:Story<CategoryProps> = ({className,content,icon,directory}) => (
    <div style={
        {
            display: "block",
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "40px",
        }
    }>
        <div style={{width:"50px", height:"50px", background:"black"}}></div>
        <CategoryMenuButton
            className={className}
            content={content}
            icon={icon}
            directory={directory}
        />
        <div style={{width:"50px", height:"50px", background:"black"}}></div>
    </div>
)


Default.defaultProps = {
    className: "CategoryButton",
    content: "DANH MỤC SẢN PHẨM",
    icon: <StripsIcon/>,
    directory: [
        {
            id: 0,
            icon: <KeyIcon />,
            rootName: "ĐẦU ĐỐT",
            childrenDirectory: [
                {
                    folderTitle: "Đầu đốt theo hãng",
                    folderItems: [
                        {
                            itemTitle: "Madas",
                            itemLink: "",
                        },
                        {
                            itemTitle: "Blowtherm",
                            itemLink: "",
                        },
                        {
                            itemTitle: "Monarc",
                            itemLink: "",
                        },
                    ]
                },
                {
                    folderTitle: "Đầu đốt theo loại nhiên liệu",
                    folderItems: [
                        {
                            itemTitle: "Đầu đốt gas",
                            itemLink: "",
                        },
                        {
                            itemTitle: "Đầu đốt DO",
                            itemLink: "",
                        },
                        {
                            itemTitle: "Đầu đốt FO",
                            itemLink: "",
                        },
                    ]
                },
                {
                    folderTitle: "Đầu đốt theo lĩnh vực",
                    folderItems: [
                        {
                            itemTitle: "Bê tông nhựa nóng",
                            itemLink: "",
                        },
                        {
                            itemTitle: "Sản xuất",
                            itemLink: "",
                        },
                        {
                            itemTitle: "Trạm trộn",
                            itemLink: "",
                        },
                    ]
                },
                {
                    folderTitle: "Đầu đốt theo lĩnh vực",
                    folderItems: [
                        {
                            itemTitle: "Bê tông nhựa nóng",
                            itemLink: "",
                        },
                        {
                            itemTitle: "Sản xuất",
                            itemLink: "",
                        },
                        {
                            itemTitle: "Trạm trộn",
                            itemLink: "",
                        },
                    ]
                },
                {
                    folderTitle: "Đầu đốt theo lĩnh vực",
                    folderItems: [
                        {
                            itemTitle: "Bê tông nhựa nóng",
                            itemLink: "",
                        },
                        {
                            itemTitle: "Sản xuất",
                            itemLink: "",
                        },
                        {
                            itemTitle: "Trạm trộn",
                            itemLink: "",
                        },
                    ]
                },
            ]
        },
        {
            id: 1,
            icon: <KeyIcon />,
            rootName: "LAPTOP1",
            childrenDirectory: [
                {
                    folderTitle: "Cơ Khí1",
                    folderItems: [
                        {
                            itemTitle: "Bút chì",
                            itemLink: "",
                        },
                        {
                            itemTitle: "Bút chì",
                            itemLink: "",
                        },
                        {
                            itemTitle: "Bút chì",
                            itemLink: "",
                        },
                    ]
                },
                {
                    folderTitle: "Cơ Khí1",
                    folderItems: [
                        {
                            itemTitle: "Bút chì",
                            itemLink: "",
                        },
                    ]
                },
            ]
        },
        {
            id: 2,
            icon: <KeyIcon />,
            rootName: "LAPTOP2",
            childrenDirectory: [
                {
                    folderTitle: "Cơ Khí2",
                    folderItems: [
                        {
                            itemTitle: "Bút chì",
                            itemLink: "",
                        },
                    ]
                },
                {
                    folderTitle: "Cơ Khí2",
                    folderItems: [
                        {
                            itemTitle: "Bút chì",
                            itemLink: "",
                        },
                    ]
                },
            ]
        },
        {
            id : 3,
            icon: <KeyIcon />,
            rootName: "LAPTOP3",
            childrenDirectory: [
                {
                    folderTitle: "Cơ Khí3",
                    folderItems: [
                        {
                            itemTitle: "Bút chì",
                            itemLink: "",
                        },
                    ]
                },
                {
                    folderTitle: "Cơ Khí3",
                    folderItems: [
                        {
                            itemTitle: "Bút chì",
                            itemLink: "",
                        },
                    ]
                },
            ]
        },
    ]
}