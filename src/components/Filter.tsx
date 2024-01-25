import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Collapsible from "./Collapsible";

interface Props {
    description: string;
    image: string;
    year: string;
}

const Filter: React.FC<{ data: Props[] }> = ({ data }): JSX.Element => {
    const [aliens, setAliens] = useState(data);
    const [active, setActive] = useState("все");

    const buttons = data.reduce(
        (acc: string[], el: Props) => {
            if (acc.includes(el.year)) return acc;
            return [...acc, el.year];
        },
        ["все"]
    );

    const handleFilter = (selector: string): void => {
        if (selector === "все") {
            setAliens(data);
        } else {
            setAliens(data.filter((el) => el.year === selector));
        }
        setActive(selector);
    };

    const listVariants = {
        visible: () => ({
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
        }),
        hidden: { opacity: 0, y: 100 },
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: "10px" }}
            >
                {buttons.map((button: string) => (
                    <Button key={button} text={button} handleFilter={handleFilter} isSelected={active === button}></Button>
                ))}
            </motion.div>

            <motion.ul style={{ marginTop: 20 }}>
                {aliens &&
                    aliens.map((alien) => {
                        return (
                            <motion.li variants={listVariants} initial="hidden" whileInView={"visible"} viewport={{ once: true }} key={alien.description}>
                                <figure>
                                    <motion.img
                                        className="image"
                                        src={alien.image}
                                        alt={alien.description}
                                        whileTap={{
                                            scale: 1.3,
                                            outline: "2px solid blue",
                                        }}
                                    />
                                    <Collapsible />
                                    <figcaption>{alien.description}</figcaption>
                                </figure>
                            </motion.li>
                        );
                    })}
            </motion.ul>
        </>
    );
};

export default Filter;
