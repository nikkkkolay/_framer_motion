import { motion } from "framer-motion";

type Props = {
    text: number;
    handleFilter: (selector: number) => void;
};

const Button = ({text, handleFilter}: Props) => {

    return (
        <motion.button onClick={()=> handleFilter(text)}>
            {text}
        </motion.button>
    );
};

export default Button;
