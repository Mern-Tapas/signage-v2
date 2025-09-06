import React from "react";
import Container from "@/components/layout/Container";
import IconBox from "./IconBox";
import { Typography } from "@/components/typography/typography";
import { ScreenShare } from "lucide-react";
import ImageBox from "./ImageBox";

export default function Sidebar() {
    return <Container className=" h-full bg-white w-[270px] xl:flex flex-col hidden gap-8" padding="md">
        <Container className='flex items-center justify-center gap-2'>
            <ImageBox src="https://cdn.dribbble.com/userupload/14906809/file/original-2a2a97fb303244180a928ecbe40b4e7a.png?resize=1024x768&vertical=center" size="xs" radius="full" />
            <Typography variant='h4' weight='extrabold'>Screen </Typography>
        </Container>
        <Container>
            d
        </Container>
    </Container>
};