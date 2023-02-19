import React, { useState, useEffect, useRef } from 'react'
import './Recipe.css'

export default function Recipe() {

    const [loading, setLoading] = useState(true)
    const [mealDetails, setMealDetails] = useState({})

    const randomMealRef = useRef()

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
                .then(res => res.json())
                .then(json => json.meals)

            setLoading(false)
            randomMealRef.current = result[Math.floor(Math.random() * result.length)]
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchMealDetails = async () => {
            const result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomMealRef.current.idMeal}`)
                .then(res => res.json())
                .then(json => json.meals[0])
            setMealDetails(result)
        }

        if (randomMealRef.current) {
            fetchMealDetails()
        }
    }, [randomMealRef.current])



    return (
        <section className='recipe-page'>
            <div className='page-header'>
                <div className='h2-bg'>
                    <h2 className='recipe-h2'>Recipe</h2>
                </div>
                <p className='recipe-intro-text'>Make your own dessert with our best recipes!</p>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className='recipe-container'>
                    <h3 className='recipe-title'>{mealDetails.strMeal}</h3>
                    <div className='recipe-sub-container'>
                        <img className='recipe-img' src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
                        <div className='ingredient-container'>
                            <p className='recipe-sub-title ingredients-title'>Ingredients</p>
                            <ul className='ingredient-list'>
                                {Object.entries(mealDetails).filter(item => item[0].startsWith('strIngredient') && item[1]).map((ingredient, index) => (
                                    <li key={index}>
                                        {ingredient[1]} - {mealDetails[`strMeasure${index + 1}`]}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='method-container'>
                        <p className='recipe-sub-title method-title'>Method</p>
                        <p className='recipe-instructions'>
                            {mealDetails.strInstructions ? mealDetails.strInstructions.replace(/&#8232;/g, " ") : ''}
                        </p>
                    </div>
                </div>
            )}
        </section>
    )
}
