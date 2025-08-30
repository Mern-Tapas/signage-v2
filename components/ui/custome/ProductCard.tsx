import React from "react";

import Container from "@/components/layout/Container";
import { Typography } from "@/components/typography/typography";

interface ProductCardProps {
    image: string;
    title: string;
    description: string;
    price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    image,
    title,
    description,
    price,
}) => {
    return (
        <Container
            variant="primary"
            radius="2xl"
            shadow="none"
            padding="md"
            className="max-w-sm w-full flex flex-col items-center gap-4 hover:shadow-lg transition-shadow"
        >
            {/* Image */}
            <Container radius="md" variant="secondary" className="bg-black w-full h-48  overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
            </Container>

            {/* Title */}
            <Typography variant="h5" align="center" weight="semibold">
                {title}
            </Typography>

            {/* Description */}
            <Typography
                variant="body2"
                color="muted"
                align="center"
                className="line-clamp-2"
            >
                {description}
            </Typography>

            {/* Price */}
            <Typography
                variant="metric-md"
                color="primary"
                align="center"
                className="mt-2"
            >
                {price}
            </Typography>

            {/* Button */}
            <button className="mt-4 w-full rounded-lg bg-blue-600 text-white font-medium py-2 hover:bg-blue-700 transition-colors">
                Add to Cart
            </button>
        </Container>
    );
};

export default ProductCard;
