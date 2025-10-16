"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    duration?: number;
    delay?: number;
    y?: number;
    x?: number;
    once?: boolean;
}

export const FadeIn = ({
    children,
    duration = 0.6,
    delay = 0,
    y = 0,
    x = 0,
    once = true,
}: FadeInProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x, y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration, delay, ease: "easeOut" }}
            viewport={{ once, amount: 0.3 }}
            className="will-change-transform"
        >
            {children}
        </motion.div>
    );
};
