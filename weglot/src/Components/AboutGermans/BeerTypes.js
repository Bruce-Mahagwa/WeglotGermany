import BeerSVGs from "./BeersSVG";
const BeerTypes = () => {
    return (
        <div className = "text-white px-4 pt-40 md:px-8 w-full mt-12 sm:w-[80%] mx-auto">
            <div>
                <p className = "text-xl text-center lg:text-left sm:text-2xl md:text-4xl lg:text-6xl">Fussy, us? Why? Just because we use a <span className = "orange">special glass</span> for each type of beer?</p>
            </div>
            <div className = "beer_svgs h-screen text-black">
                <BeerSVGs />

            </div>
        </div>
    )
}
export default BeerTypes;