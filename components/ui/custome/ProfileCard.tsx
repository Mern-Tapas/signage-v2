import React from "react";
import Container from "@/components/layout/Container";
import { Caption } from "@/components/typography/typography";
import Avatar from "@/components/ui/custome/Avatar";

type ProfileCardProps = {
    variant?: "left" | "right";
};

export const ProfileCard: React.FC<ProfileCardProps> = ({ variant = "left" }) => {
    const isLeft = variant === "left";

    return (
        <Container
            variant="default"
            className={`rounded-full flex gap-3 items-center ${isLeft ? "flex-row" : "flex-row-reverse"
                }`}
        >
            {/* Status dot placeholder */}
            <Container className="w-2 lg:block hidden">
                <span></span>
            </Container>

            {/* User info */}
            <Container
                className={`lg:flex flex-col hidden  ${isLeft ? "justify-center items-end text-end" : "justify-center items-start text-start"
                    }`}
            >
                <Caption weight="medium" color="primary" className="text-xs">
                    Tapas Gharami
                </Caption>
                <Caption color="muted" className="text-xs">
                    Senior Frontend Developer
                </Caption>
            </Container>

            {/* Avatar */}
            <Avatar
                src="https://i.pinimg.com/736x/6f/a3/6a/6fa36aa2c367da06b2a4c8ae1cf9ee02.jpg"
                alt="User Avatar"
                size="sm"
                radius="full"
                className="border-white"
            />
        </Container>
    );
};
