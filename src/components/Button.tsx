import { motion } from "framer-motion";

type Props = {
    text: number;
    handleFilter: (selector: number) => void;
    isSelected: boolean;
};

const Button = ({ text, handleFilter, isSelected, ...props }: Props) => {
    return (
        <motion.button
            layout
            {...props}
            initial={{ background: "#2b2a33" }}
            animate={{ background: isSelected ? "#ff0000" : "#2b2a33" }}
            onClick={() => handleFilter(text)}
        >
            {text}
            {isSelected && (
                <motion.div
                    layoutId={"line"}
                    style={{
                        position: "absolute",
                        bottom: "-6px",
                        left: 0,
                        width: "100%",
                        height: "2px",
                        background: "#ff0000",
                    }}
                ></motion.div>
            )}
        </motion.button>
    );
};

export default Button;
