import React from 'react'

const FloatingImageContentBlock = () => {
    return (
        <section className='container mx-auto py-10 flex flex-col md:flex-row items-center'>
        <div className='md:w-1/2 md:pr-10'>
        <h2 className='text-3xl font-bold mb-4 text-blue-400'>Delicious Burgers</h2>
        <p className='text-white mb-4'>Experience the juiciest burgers in town,made with fresh ingredients and grilled to perfection </p>
        <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200'>
            Order Now
        </button>
        <h3 className='text-2xl font-semibold mt-6 mb-2 text-center text-blue-400'>
            Coming Soon: Our New Burger Launches
        </h3>
<ul className='text-white'>
    <li><strong>Cheesy BBQ Bacon Burger:</strong>
    Cheesy BBQ Bacon Burger:A mouthwatering blend of cheddar cheese,crispy bacon, and BBQ
</li>
<br />

<li><strong>Spicy Jalapeno Burger:</strong>
    A fiery delight topped with fresh jalapeno and zesty chipotle mayo.
</li>
<br />

<li><strong>Mashroom Swiss Burger:</strong>
    Juicy beef patty melted swiss cheese for a rich,savory taste.
</li>
<br />
</ul>
</div>


<div className='md:w-1/2 mt-6 md:mt-0'>
<img src="https://th.bing.com/th/id/OIP.vvcwWCssANQwsfHktEUwjQHaHa?pid=ImgDet&w=474&h=474&rs=1"
alt="delicioius burger"
className='w-half h-auto rounded-lg shadow-lg transition-transform duration-500 ease-out transform hover:scale-105 mr-7'/>

</div>




 
        </section>
    )
}
export default FloatingImageContentBlock