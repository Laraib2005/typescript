'use client'
import React from 'react'
type deals = {
    title :string;
    description: string;
}
const Specialdeals: React.FC= () => {
const offers:deals[] =[
    {
        title:"Happy Hour",
        description:"5pm se 7pm tk tamam drinks per 50% off hasil kren"
            },

            {
             title:"Family Meal",
                description:"order 2 main courses and avail family meal coupon"
                    },

                    {
                        title:"Weekly Brunch",
                        description:"Enjoy 1 free complimentary drink"
                            },
]

const handledealclick = (description:string) => {
    alert(description);
}

return (
    <section className='py-10'>
        <div className='container mx-auto text-center'>
<h2 className='text-4xl font-bold mb-6 text-white'>Special Offers</h2>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
    {offers.map((offer,index) =>(
        <button key={index}
        onClick={()=>handledealclick(offer.description)}
        className='bg-white shadow-lg rounded-lg text-center hover:bg-gray-300 transition duration-300 transform hover:scale-105'>
<h3 className='text-2xl font-semibold text-red-700'>{offer.title}</h3>
<p className='text-slate-700 mt-3'>{offer.description}</p>
        </button>
    ))}


</div>
        </div> 
</section>
)


}
export default Specialdeals