import React from 'react'
import SaleSlider from './SaleSlider'

const SaleSection = () => {
    return (
        <div className="py-16 px-4">
            <div className="text-center space-y-4">
                <h1 className="text-4xl">On Sale, only today</h1>
                <p className="text-xl">Get it while they last!</p>
            </div>

            <div>
                <SaleSlider />
            </div>
        </div>
    )
}

export default SaleSection
