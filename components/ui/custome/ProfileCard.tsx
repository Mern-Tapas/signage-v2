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
            variant="primary"
            padding="sm"
            className={`rounded-full flex gap-3 items-center ${isLeft ? "flex-row" : "flex-row-reverse"
                }`}
        >
            {/* Status dot placeholder */}
            <Container className="w-2">
                <span></span>
            </Container>

            {/* User info */}
            <Container
                className={`flex flex-col ${isLeft ? "justify-center items-end text-end" : "justify-center items-start text-start"
                    }`}
            >
                <Caption weight="medium" color="primary">
                    Tapas Gharami
                </Caption>
                <Caption color="muted" className="text-xs">
                    Senior Frontend Developer
                </Caption>
            </Container>

            {/* Avatar */}
            <Avatar
                src="https://i.pinimg.com/1200x/49/fe/06/49fe0694b2c87169b43c638bb89ae557.jpg"
                alt="User Avatar"
                size="sm"
                radius="full"
                className="border-white"
            />
        </Container>
    );
};
