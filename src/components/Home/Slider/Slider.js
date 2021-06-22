import React, { useEffect } from 'react';
import image from '../../../images/more_fun.png';
import image2 from '../../../images/more_fun_2.png';

const Slider = () => {
    const imagesArray = [image, image2]
    let i = 0;
    useEffect(() => {
        document.getElementById("slide_show").src = imagesArray[i]
    })
    function change_image_index() {
        if (i === 0) {
            document.getElementById("slide_show").src = imagesArray[i]
            i++
        } else {
            document.getElementById("slide_show").src = imagesArray[i]
            i = 0
        }
    }
    useEffect(() => {
        const sliderInterval = setInterval(change_image_index, 2000)

        return function cleanup() {
            clearInterval(sliderInterval)
        }
    }, [])

    return (
        <section className="slider" >
            <img id="slide_show" className="slider__image" alt="maskotki netii" />
        </section>
    );
}
export default Slider;


