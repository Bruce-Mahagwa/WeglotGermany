import seed1 from "../../assets/seed1.png"
import seed2 from "../../assets/seed2.png"
import seed3 from "../../assets/seed3.png"
import { useDroppable, useDraggable } from '@dnd-kit/core';
import { CSS } from "@dnd-kit/utilities"
import {useEffect, useState } from "react";
import { motion } from "motion/react"

const TitleDraggable = (props) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.children,
        data: { title: props.children }
    });
    const style = { transform: CSS.Translate.toString(transform) }
    return (
        <p className="px-4 py-2 cursor-grab border-2 border-gray-800 rounded-full w-max h-max"
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={style}
        >{props.children}</p>
    )
}

const LargeScreenTest = ({ seed1Items, seed2Items, seed3Items, setShowResults, setScore, showResults }) => {

    const { setNodeRef: setNodeRefFirst } = useDroppable({
        id: 'droppable-1',
    });
    const { setNodeRef: setNodeRefSecond } = useDroppable({
        id: 'droppable-2',
    });
    const { setNodeRef: setNodeRefThird } = useDroppable({
        id: 'droppable-3',
    });

    const total_answers = seed1Items.length + seed2Items.length + seed3Items.length;

    useEffect(() => {
        // real answers from left to right
        if (total_answers === 14) {
            const real_answers = [["Krappel", "Puffel", "Krapfen", "Pfannkuchen", "Berliner"], ["Arbere", "Erbel", "Epei", "Häppöri"], ["Breschdling", "Arpel", "Erdapfel", "Grumbir", "Tuffel"]]
            const user_answers = [seed1Items, seed2Items, seed3Items];
            let score = 0;
            for (let value = 0; value < user_answers.length; value++) {
                let arr_user_answers = user_answers[value];
                let arr_real_answers = real_answers[value];
                for (let ans of arr_user_answers) {
                    if (arr_real_answers.includes(ans)) {                        
                        score += 1;

                    }
                }                
            }
            const timeout = setTimeout(() => {
                setShowResults(true);
            }, [800])
            setScore(score);
            return () => clearTimeout(timeout);
        }
    }, [seed1Items, seed2Items, seed3Items, showResults])
    return (
        <div>
            <div className="flex justify-between pt-12 gap-2">
                <div className="w-1/3 border-2 border-gray-800" ref={setNodeRefFirst}>
                    <img src={seed1} alt="seed 1" className="w-20 mx-auto" />
                    <div className="min-h-48 flex flex-wrap text-center gap-2">
                        {seed1Items.map((item) => {
                            return (
                                <TitleDraggable key={item}>{item}</TitleDraggable>
                            )
                        })}
                    </div>
                </div>
                <div className="w-1/3 border-2 border-gray-800" ref={setNodeRefSecond}>
                    <img src={seed2} alt="seed 2" className="w-20 mx-auto" />
                    <div className="min-h-48 flex flex-wrap text-center gap-2">
                        {seed2Items.map((item) => {
                            return (
                                <TitleDraggable key={item}>{item}</TitleDraggable>
                            )
                        })}
                    </div>
                </div>
                <div className="w-1/3 border-2 border-gray-800" ref={setNodeRefThird}>
                    <img src={seed3} alt="seed 3" className="w-20 mx-auto" />
                    <div className="min-h-48 flex flex-wrap text-center gap-2">
                        {seed3Items.map((item) => {
                            return (
                                <TitleDraggable key={item}>{item}</TitleDraggable>
                            )
                        })}
                    </div>
                </div>
            </div>            
        </div>
    )
}
export default LargeScreenTest;