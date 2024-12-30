import seed1 from "../../assets/seed1.png";
import seed2 from "../../assets/seed2.png";
import seed3 from "../../assets/seed3.png";
import { useState, useEffect } from "react";
import {motion} from "motion/react"
const SingleQuestion = ({ word, languageTestClicked }) => {
    const [choiceMade, setChoiceMade] = useState("");
    function handleClick(e) {
        const question = document.getElementById(word);
        const options = question.querySelectorAll(".option");
        options.forEach((option) => option.classList.remove("fruit"));
        e.currentTarget.classList.add("fruit");
        const choice_made = e.currentTarget.getAttribute('data-option');
        setChoiceMade(choice_made);
    }

    useEffect(() => {
        if (choiceMade) {
            languageTestClicked(choiceMade, word);
        }
    }, [choiceMade])
    return (
        <div className="flex justify-between">
            <p className="pt-[10px]">{word}</p>
            <div className="flex gap-2 cursor-pointer h-max" id={word}>
                <div className="p-[12px] opacity-40 rounded-full option" data-option="seed one" onClick={handleClick}>
                    <img src={seed1} alt="seed one" className="w-4 h-4 sm:w-8 sm:h-8" />
                </div>
                <div className="p-[12px] opacity-40 rounded-full option" data-option="seed two" onClick={handleClick}>
                    <img src={seed2} alt="seed two" className="w-4 h-4 sm:w-8 sm:h-8" />
                </div>
                <div className="p-[12px] opacity-40 rounded-full option" data-option="seed three" onClick={handleClick}>
                    <img src={seed3} alt="seed three" className="w-4 h-4 sm:w-8 sm:h-8" />
                </div>
            </div>
        </div>
    )
}

const SmallScreenTest = () => {
    const [answers, setAnswers] = useState({
    })
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);
    function languageTestClicked(choice, word) {
        if (choice) {
            setAnswers((prev) => {
                return {
                    ...prev,
                    [word]: choice
                }
            })
        }
        else {
            return;
        }
    }
    const questionLength = document.querySelector(".questions_parent")?.childNodes.length;
    useEffect(() => {
        if (Object.keys(answers).length === questionLength) {
            const real_answers = ["one", "one",  "one", "two", "three", "three", "one", "three", "one", "two", "two", "one", "one", "three", "one"];
            let score = 0;
            let iterator = 0;
            for (const key in answers) {
                let value = answers[key].split(" ")[1];
                let real_answer = real_answers[iterator];
                if (value === real_answer) {
                    score += 1;
                }
                iterator += 1;    
            }
            const timeout = setTimeout(() => {
                setShowResults(true);
            }, [500])
            setScore(score);
            return () => clearTimeout(timeout);
        }
    }, [answers, showResults])
    return (
        <>
            {!showResults && <motion.div className="text-white flex flex-col gap-4 questions_parent"
                animate = {Object.keys(answers).length === questionLength ? {opacity: 0} : {}}
                transition={{duration: 0.8}}
            >
                <SingleQuestion word={"Krappel"} languageTestClicked={languageTestClicked} />
                <SingleQuestion word={"Puffel"} languageTestClicked={languageTestClicked} />
                <SingleQuestion word={"Krapfen"} languageTestClicked={languageTestClicked} />
                <SingleQuestion word={"Pfannkuchen"} languageTestClicked={languageTestClicked} />
                <SingleQuestion word={"Berliner"} languageTestClicked={languageTestClicked} />
                <SingleQuestion word={"Ärbere"} languageTestClicked={languageTestClicked} />
                <SingleQuestion word={"Erbel"} languageTestClicked={languageTestClicked} />
                <SingleQuestion word={"Epei"} languageTestClicked={languageTestClicked} />
                <SingleQuestion word={"Häppöri"} languageTestClicked={languageTestClicked} />
                <SingleQuestion word={"Breschdling"} languageTestClicked={languageTestClicked} />
                <SingleQuestion word={"Ärpel"} languageTestClicked={languageTestClicked} />
                <SingleQuestion word={"Erdapfel"} languageTestClicked={languageTestClicked} />
                <SingleQuestion word={"Grumbir"} languageTestClicked={languageTestClicked} />
                <SingleQuestion word={"Tüffel"} languageTestClicked={languageTestClicked} />
            </motion.div>}
            {showResults && 
                <motion.div
                    initial = {{opacity: 0, top: "10px"}}
                    animate = {{opacity: 1, top: 0}}
                    transition = {{duration: 0.5}}
                    className = "relative mt-8"
                >
                    <p className="font-bold red text-xl text-center sm:text-2xl md:text-4xl lg:text-6xl mb-12">My Expert Level</p>
                    <p className="text-white text-xl text-center sm:text-2xl md:text-4xl lg:text-6xl">{score}/{questionLength}</p>
                </motion.div>
            }
        </>
    )
}
export default SmallScreenTest;