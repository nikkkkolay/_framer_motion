import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import Collapsible from "./Collapsible";

interface Props {
    description: string;
    image: string;
    year: number;
}

const Filter: React.FC<{ data: Props[] }> = ({ data }): JSX.Element => {
    const [aliens, setAliens] = useState(data.filter((el) => el.year === 1979));
    const [active, setActive] = useState(1979);

    const buttons = data.reduce((acc: number[], el: Props) => {
        if (acc.includes(el.year)) return acc;
        return [...acc, el.year];
    }, []);

    const handleFilter = (selector: number): void => {
        setAliens(data.filter((el) => el.year === selector));
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
        <motion.div layout style={{minHeight: '380px', maxHeight: '980px'}}>
                {buttons.map((button: number) => (
                    <Button
                        key={button}
                        text={button}
                        handleFilter={handleFilter}
                        isSelected={active === button}
                        
                    ></Button>
                ))}

            <AnimatePresence>
                <ul style={{ marginTop: 20 }}>
                    {aliens &&
                        aliens.map((alien) => {
                            return (
                                <motion.li
                                    variants={listVariants}
                                    initial="hidden"
                                    whileInView={"visible"}
                                    key={alien.description}
                                >
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
                                        <figcaption>
                                            {alien.description}
                                        </figcaption>
                                    </figure>
                                </motion.li>
                            );
                        })}
                </ul>
            </AnimatePresence>
        </motion.div>
    );
};

export default Filter;
