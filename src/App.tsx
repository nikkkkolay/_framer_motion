import { motion } from "framer-motion";
import "./App.css";
import logo from "./newsimg117208.webp";
import Collapsible from "./components/Collapsible";

const App = () => {
    const aliens = [
        { description: '"Чужой". Трутень, рост - 2,57 м.', image: "/src/images/1979.webp" },
        { description: '"Чужие". Солдат, рост - 2,18 м.', image: "/src/images/1986.webp" },
        { description: '"Чужие". Королева, рост - 4,33 м.', image: "/src/images/1986_2.webp" },
        { description: '"Чужой" 3. Бегун, рост - 1,95 м.', image: "/src/images/1992.webp" },
        { description: "«Чужой: Воскрешение». Новорождённый, рост - 2,41 м.", image: "/src/images/1997.webp" },
        { description: '"Чужой против Хищника" . Сеточный, рост 2,18 м.', image: "/src/images/2004.webp" },
        { description: '"Чужие против Хищника: Реквием". Чужехищник, рост - 3 м.', image: "/src/images/2007.webp" },
        { description: '"Прометей". Диакон 1,04 м.', image: "/src/images/2012.webp" },
        { description: "«Чужой: Завет». Неоморф, рост - 2,43 м.", image: "/src/images/2017.webp" },
        { description: "«Чужой: Завет». Протоморф, рост 2,57 м.", image: "/src/images/2017_2.webp" },
    ];

    const listVariants = {
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1 },
        }),
        hidden: { opacity: 0, y: 100 },
    };

    return (
        <>
            <motion.img alt="" src={logo} className="logo" whileHover={{ scale: 1.1 }} animate={{ rotate: 360 }} />
            <motion.a whileHover={{ scale: 1.2, color: "red" }}>ALIEN</motion.a>

            <div className="container">
                <motion.p initial={{ opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                    Появилась возможность увидеть Рипли рядом с каждым из представителей инопланетной расы. В верхнем левом углу рост, вес и название ксеноморфа, а справа год
                    выпуска фильма. Приятного просмотра, обязательно делитесь своим мнением в комментариях.
                </motion.p>
                <ul>
                    {aliens &&
                        aliens.map((alien, i) => {
                            return (
                                <motion.li variants={listVariants} initial="hidden" whileInView={"visible"} custom={i} key={alien.description}>
                                    <figure>
                                        <motion.img className="image" src={alien.image} alt={alien.description} whileTap={{ scale: 1.3, outline: "2px solid blue" }} />
                                        <Collapsible />
                                        <figcaption>{alien.description}</figcaption>
                                    </figure>
                                </motion.li>
                            );
                        })}
                </ul>
                <motion.p initial={{ opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                    Вот такой интересный ликбез получился. Надеюсь было познавательно. Подписка и лайк приветствуются. Этот классный контент был обнаружен на ютуб-канале
                    "FilmCore". Короткий ролик показывает всю эволюцию ксеноморфов в кино, начиная с 1979 по 2019 годы.
                </motion.p>
            </div>
        </>
    );
};

export default App;
