// hooks
import { useEffect, useRef } from "react";
import { useInView } from "motion/react" 

const DummyComponent = ({value, setCountScrollPosition, scrollDistance, children, height, amount}) => {  
    const ref = useRef();
    const isInView = useInView(ref, {amount: amount ? amount : "some"});
   
    useEffect(() => {
        if (isInView) {
            setCountScrollPosition(value);
        }
    }, [isInView, setCountScrollPosition, value, scrollDistance])

    let dummyHeight = "100vh";
    if (height) {
        dummyHeight = height;
    }
    return (
        <div ref = {ref} className = "w-full text-center" style = {{height: dummyHeight}}>
            {children}
        </div>
    )
}
export default DummyComponent;