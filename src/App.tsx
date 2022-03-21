import { useState } from "react";
import logo from "./main.jpeg";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 600px;
  height: 600px;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Img = styled(motion.img)`
  width: 100px;
  height: 100px;
  border-radius: 30px;
`;

const BoxVarient = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const circleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
  hover: { scale: 5, rotateZ: 360, y: 130, x: 100 },
  click: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "rgb(46, 204, 113)", transition: { duration: 10 } },
};

const BBox = styled(motion.div)``;

function App() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);
  return (
    <Wrapper>
      <button onClick={toggleShowing}>게임 시작</button>
      {showing ? (
        <AnimatePresence>
          <Box variants={BoxVarient} initial="start" animate="end">
            <Img
              src={logo}
              variants={circleVariants}
              whileHover="hover"
              whileDrag="drag"
              whileTap="click"
              drag
            />
            <Img
              src={logo}
              variants={circleVariants}
              whileHover="hover"
              whileDrag="drag"
              whileTap="click"
              drag
            />
            <Img
              src={logo}
              variants={circleVariants}
              whileHover="hover"
              whileDrag="drag"
              whileTap="click"
              drag
            />
            <Img
              src={logo}
              variants={circleVariants}
              whileHover="hover"
              whileDrag="drag"
              whileTap="click"
              drag
            />
            <Img
              src={logo}
              variants={circleVariants}
              whileHover="hover"
              whileDrag="drag"
              whileTap="click"
              drag
            />
            <Img
              src={logo}
              variants={circleVariants}
              whileHover="hover"
              whileDrag="drag"
              whileTap="click"
              drag
            />
            <Img
              src={logo}
              variants={circleVariants}
              whileHover="hover"
              whileDrag="drag"
              whileTap="click"
              drag
            />
            <Img
              src={logo}
              variants={circleVariants}
              whileHover="hover"
              whileDrag="drag"
              whileTap="click"
              drag
            />
            <Img
              src={logo}
              variants={circleVariants}
              whileHover="hover"
              whileDrag="drag"
              whileTap="click"
              drag
            />
            <Img
              src={logo}
              variants={circleVariants}
              whileHover="hover"
              whileDrag="drag"
              whileTap="click"
              drag
            />
            <Img
              src={logo}
              variants={circleVariants}
              whileHover="hover"
              whileDrag="drag"
              whileTap="click"
              drag
            />
            <Img
              src={logo}
              variants={circleVariants}
              whileHover="hover"
              whileDrag="drag"
              whileTap="click"
              drag
            />
            <Img
              src={logo}
              variants={circleVariants}
              whileHover="hover"
              whileDrag="drag"
              whileTap="click"
              drag
            />
            <Img
              src={logo}
              variants={circleVariants}
              whileHover="hover"
              whileDrag="drag"
              whileTap="click"
              drag
            />
            <Img
              src={logo}
              variants={circleVariants}
              whileHover="hover"
              whileDrag="drag"
              whileTap="click"
              drag
            />
            <Img
              src={logo}
              variants={circleVariants}
              whileHover="hover"
              whileDrag="drag"
              whileTap="click"
              drag
            />
          </Box>
        </AnimatePresence>
      ) : null}
    </Wrapper>
  );
}

export default App;
