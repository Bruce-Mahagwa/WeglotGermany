import eye from "../../assets/eye.png";
import useEyeBallRotate from "../../hooks/useEyeBallRotate";
const Landing = () => {
    let [x, y] = useEyeBallRotate();
    x *= 100
    y *= 100
    const styles = {
        transform: `translate(${x}%, ${y}%)`
    }
    return (
        <div className = "w-full text-white mb-40 px-4 md:px-8 pt-12 first_page overflow-hidden">
            <h1 className = "mb-20"><span className = "font-bold">WEGLOT</span> for Germany</h1>
            <div className = "intro flex flex-col gap-8 md:gap-16 justify-center">
                <div className = "relative w-60 sm:w-max">
                    <img src = {eye} alt = "image of an eye" 
                    />
                    <div className = "absolute w-24 h-24 green_bg rounded-full center_absolute"
                        style={styles}
                    ></div> 
                </div>
                <div className = "w-3/4">
                    <p className = "text-4xl md:text-6xl lg:text-8xl">How does the world <span className = "green font-bold">see Germany</span>?</p>
                </div>
            </div>
        </div>
    )
}
export default Landing;
