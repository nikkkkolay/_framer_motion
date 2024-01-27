import { useState } from "react";
import { motion, Reorder, useTransform, useScroll } from "framer-motion";

import Filter from "./components/Filter";
import MText from "./components/MText";
import Icon from "./components/Icon";

import logo from "./logo.webp";
import  img1979  from "./images/1979.webp";
import  img1986  from "./images/1986.webp";
import  img1986_2  from "./images/1986_2.webp";
import  img1992  from "./images/1992.webp";
import  img1997  from "./images/1997.webp";
import  img2004  from "./images/2004.webp";
import  img2007  from "./images/2007.webp";
import  img2012  from "./images/2012.webp";
import  img2017  from "./images/2017.webp";
import  img2017_2  from "./images/2017_2.webp";

import "./App.css";

const data = [
    {
        description: '"Чужой". Трутень, рост - 2,57 м.',
        image: img1979,
        year: "1979",
    },
    {
        description: '"Чужие". Солдат, рост - 2,18 м.',
        image: img1986,
        year: "1986",
    },
    {
        description: '"Чужие". Королева, рост - 4,33 м.',
        image: img1986_2,
        year: "1986",
    },
    {
        description: '"Чужой" 3. Бегун, рост - 1,95 м.',
        image: img1992,
        year: "1992",
    },
    {
        description: "«Чужой: Воскрешение». Новорождённый, рост - 2,41 м.",
        image: img1997,
        year: "1997",
    },
    {
        description: '"Чужой против Хищника" . Сеточный, рост 2,18 м.',
        image: img2004,
        year: "2004",
    },
    {
        description: '"Чужие против Хищника: Реквием". Чужехищник, рост - 3 м.',
        image: img2007,
        year: "2007",
    },
    {
        description: '"Прометей". Диакон 1,04 м.',
        image: img2012,
        year: "2012",
    },
    {
        description: "«Чужой: Завет». Неоморф, рост - 2,43 м.",
        image: img2017,
        year: "2017",
    },
    {
        description: "«Чужой: Завет». Протоморф, рост 2,57 м.",
        image: img2017_2,
        year: "2017",
    },
];

const headerText = `Появилась возможность увидеть Рипли рядом с каждым из представителей инопланетной расы. В верхнем левом углу рост, вес и название ксеноморфа, а справа год
выпуска фильма. Приятного просмотра.`;

const footerText = `Вот такой интересный ликбез получился. Надеюсь было познавательно. Подписка и лайк приветствуются. Этот классный контент был обнаружен на ютуб-канале
"FilmCore". Короткий ролик показывает всю эволюцию ксеноморфов в кино, начиная с 1979 по 2019 годы.`;

const variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
};

const App = () => {
    const [icons, setIcons] = useState(["red", "green", "blue"]);

    const { scrollY } = useScroll();

    const heightSizes = [270, 56];
    const imageSize = [300, 100];
    const offsetY = [0, 300];
    const backgroundHeader = ["#242424", "#fff", "rgb(36,36,36, 0)"];

    const marginTop = useTransform(scrollY, offsetY, offsetY);
    const height = useTransform(scrollY, offsetY, heightSizes);
    const imgWidth = useTransform(scrollY, offsetY, imageSize);
    const changeColor = useTransform(scrollY, [0, 150, 300], backgroundHeader);
    const opacity = useTransform(scrollY, [20, 150], [1, 0]);

    return (
        <div className="container">
            <motion.header style={{ height: height, backgroundColor: changeColor }}>
                <motion.img alt="" style={{ maxWidth: imgWidth }} src={logo} className="logo" whileHover={{ scale: 1.1 }} />
                <motion.div style={{ opacity: opacity }}>
                    <MText text={headerText} style={{ marginTop: "20px" }} />
                </motion.div>
            </motion.header>

            <motion.main style={{ marginTop: marginTop }}>
                <Filter data={data} />

                <Reorder.Group
                    as="ul"
                    axis="x"
                    values={icons}
                    onReorder={setIcons}
                    style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", margin: "20px" }}
                >
                    {icons.map((icon, index) => (
                        <Reorder.Item as="li" value={icon} key={index + 1} whileDrag={{ scale: 1.3 }} {...variants}>
                            <Icon color={icon} />
                        </Reorder.Item>
                    ))}
                </Reorder.Group>

                <MText text={footerText} />
            </motion.main>
        </div>
    );
};

export default App;
