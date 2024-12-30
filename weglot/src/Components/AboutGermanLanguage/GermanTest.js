import { motion } from "motion/react";
import SmallScreenTest from "./SmallScreenTest";
import { useDraggable, DndContext } from '@dnd-kit/core';
import LargeScreenTest from "./LargeScreenTest";
import { CSS } from "@dnd-kit/utilities"
import { useState } from "react";

const TitleDraggable = (props) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.children,
        data: { title: props.children }
    });
    const style = { transform: CSS.Translate.toString(transform) }
    return (
        <p className="px-4 py-2 cursor-grab border-2 border-gray-800 rounded-full w-max"
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={style}
        >{props.children}</p>
    )
}

function manageItemsBetweenDroppableContainers(seedItem1, seedItem2, setSeedItem1, setSeedItem2, title_id) {
    // check if other droppable components have the same element
    const existsIn1 = seedItem1.find((item) => {
        return item === title_id
    });
    if (existsIn1) {
        const idx = seedItem1.indexOf(existsIn1);
        setSeedItem1(() => {
            return [...seedItem1.slice(0, idx), ...seedItem1.slice(idx + 1)]
        })
    }
    const existsIn2 = seedItem2.find((item) => {
        return item === title_id
    });
    if (existsIn2) {
        const idx = seedItem2.indexOf(existsIn2);
        setSeedItem2(() => {
            return [...seedItem2.slice(0, idx), ...seedItem2.slice(idx + 1)]
        })
    }
}

const GermanTest = () => {
    const [titles, setTitles] = useState(["Krappel", "Puffel", "Krapfen", "Pfannkuchen", "Berliner", "Arbere", "Erbel", "Epei", "Häppöri", "Breschdling", "Arpel", "Erdapfel", "Grumbir", "Tuffel"])
    const [seed1Items, setSeed1Items] = useState([])
    const [seed2Items, setSeed2Items] = useState([])
    const [seed3Items, setSeed3Items] = useState([])
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);
    const total_answers = seed1Items.length + seed2Items.length + seed3Items.length;

    const handleDragEnd = (event) => {
        const { active, over } = event;
        const title_id = active.data.current?.title;
        const dropareaId = over?.id;
        if (!dropareaId) {
            return;
        }
        const indexOfTitle = titles.indexOf(title_id);
        if (indexOfTitle !== -1) {
            setTitles(() => {
                return [...titles.slice(0, indexOfTitle), ...titles.slice(indexOfTitle + 1)]
            })
        }
        if (dropareaId === "droppable-1") {
            const idx = seed1Items.find((item) => item === title_id);
            if (idx && seed1Items.length) {
                return;
            }
            setSeed1Items((prev) => {
                return [...prev, title_id]
            })
            manageItemsBetweenDroppableContainers(seed2Items, seed3Items, setSeed2Items, setSeed3Items, title_id)
        }
        else if (dropareaId === "droppable-2") {
            const idx = seed2Items.find((item) => item === title_id);
            if (idx && seed2Items.length) {
                return;
            }
            setSeed2Items((prev) => {
                return [...prev, title_id]
            })
            manageItemsBetweenDroppableContainers(seed1Items, seed3Items, setSeed1Items, setSeed3Items, title_id)
        }
        else if (dropareaId === "droppable-3") {
            const idx = seed3Items.find((item) => item === title_id);
            if (idx && seed3Items.length) {
                return;
            }
            setSeed3Items((prev) => {
                return [...prev, title_id]
            })
            manageItemsBetweenDroppableContainers(seed1Items, seed2Items, setSeed1Items, setSeed2Items, title_id)
        }
    }


    return (
        <DndContext
            onDragEnd={handleDragEnd}
        >
            <div className="text-white px-4 pt-40 md:px-8 w-full mt-12 sm:w-[80%] mx-auto">
                {/* intro */}
                <div className="lg:flex">
                    <motion.div
                        initial={{ opacity: 0, top: "15px" }}
                        whileInView={{ opacity: 1, top: "0px" }}
                        transition={{ duration: 0.8 }}
                        className="relative mb-4 lg:w-1/2"
                    >
                        <p className="text-xl md:text-left sm:text-2xl md:text-4xl lg:text-6xl">Sometimes even Germans <span className="red">don't understand</span> their own language</p>
                    </motion.div>

                    <div className="lg:w-1/2 border-2 border-gray-800 lg:text-center">

                        <div className = "lg:hidden">
                            <h4 className="font-bold mb-2">Up for a little test?</h4>
                            <p className="hidden lg:block">Drag and drop the correct word into the right field.</p>
                            <p className="lg:hidden">Click on the correct option that matches the word</p>
                            <div className="hidden lg:block lg:flex lg:flex-wrap lg:w-full lg:justify-center gap-2"
                            >
                                {titles.map((title) => {
                                    return (
                                        <TitleDraggable key={title}>
                                            {title}
                                        </TitleDraggable>
                                    )
                                })}
                            </div>
                        </div>

                        {!showResults &&
                            <div className="hidden lg:block">
                                <h4 className="font-bold mb-2">Up for a little test?</h4>
                                <p className="hidden lg:block">Drag and drop the correct word into the right field.</p>
                                <p className="lg:hidden">Click on the correct option that matches the word</p>
                                <div className="hidden lg:block lg:flex lg:flex-wrap lg:w-full lg:justify-center gap-2"
                                >
                                    {titles.map((title) => {
                                        return (
                                            <TitleDraggable key={title}>
                                                {title}
                                            </TitleDraggable>
                                        )
                                    })}
                                </div>
                            </div>}
                        {showResults &&
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="hidden lg:block"
                            >
                                <p className="font-bold red text-xl text-center sm:text-2xl md:text-4xl lg:text-6xl mb-12">My Expert Level</p>
                                <p className="text-white text-xl text-center sm:text-2xl md:text-4xl lg:text-6xl">{score}/{total_answers}</p>
                            </motion.div>
                        }
                    </div>



                </div>
                {/* intro */}


                <div className="lg:hidden">
                    <SmallScreenTest />
                </div>

                <div className="hidden lg:block">
                    <LargeScreenTest
                        seed1Items={seed1Items}
                        seed2Items={seed2Items}
                        seed3Items={seed3Items}
                        setShowResults={setShowResults}
                        setScore={setScore}
                        showResults={showResults}
                    />
                </div>
            </div>
        </DndContext>
    )
}
export default GermanTest;