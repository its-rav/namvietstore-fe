import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import "regenerator-runtime/runtime";
import "@namviet-fe/core-ui/dist/style.css";

import {TopBar, type TopBarProps } from "@namviet-fe/core-ui";
import {ContactIcon} from "@namviet-fe/core-ui";
import {Button, type ButtonProps} from "@namviet-fe/core-ui";

export default {
title: "@nv-fe/core-ui/topbar/TopBar",
} satisfies StoryDefault<typeof TopBar>;

export let Default: Story;
Default = () => (
    <TopBar
        className="TopBar"
        contactIcon={<ContactIcon/>}
        languageButton = {<Button children="Đọc thêm" isLoading={true} />}
        linkContact1={""}
        linkContact2={""}
    ></TopBar>
);
