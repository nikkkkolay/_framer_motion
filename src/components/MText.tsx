import React from "react";
import { motion } from "framer-motion";

const textAnimation = {
    hidden: {
        y: -10,
        opacity: 0,
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.1 },
    }),
};

type Props = { text: string; style?: React.CSSProperties };

const MText = ({ text, ...props }: Props) => {
    return (
        <motion.div {...props} initial="hidden" animate="visible">
            {text &&
                text.split(" ").map((p, i) => (
                    <motion.span key={p + i} custom={i} variants={textAnimation} transition={{ delay: 0.5 }}>
                        {p + " "}
                    </motion.span>
                ))}
        </motion.div>
    );
};

export default MText;
