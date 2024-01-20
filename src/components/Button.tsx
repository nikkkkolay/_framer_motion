import { motion } from "framer-motion";

type Props = {
    text: number;
    handleFilter: (selector: number) => void;
};

const Button = ({text, handleFilter}: Props) => {

    return (
        <motion.button onClick={()=> handleFilter(text)} initial={{ background: "#2b2a33"}} whileHover={{ background: "red" }}>
            {text}
        </motion.button>
    );
};

export default Button;
