import React from 'react'

const MainBody = () => {
  return (
    <div className='flex flex-col  w-full h-full flex items-center justify-center pb-40 mt-30 gap-20 '>

        <div className='flex flex-row  w-[95%] justify-between'>


            <div><img src="\hero1.jpg" alt="" className='rounded-lg border-[5px] border-green-500 ' /></div>


            <div className='flex flex-col items-start justify-center w-[45%]' >
                <h1 className='font-bold text-3xl'>Experience Luxury Skincare with Livia</h1>
                <p>At Livia, we combine nature and science to create premium beauty products that rejuvenate and nourish your skin. Our range of lotions, soaps, and creams is crafted with the finest ingredients to bring out your natural glow.</p>
            </div>
        </div>







         <div className='flex flex-row  w-[95%] justify-between'>



             <div className='flex flex-col items-start justify-center w-[85%]' >
                <h1 className='font-bold text-3xl'>Pure, Natural, and Effective Ingredients</h1>
                <p>Our products are crafted with organic extracts, essential oils, and plant-based ingredients to provide the best care for your skin. We are committed to chemical-free beauty that hydrates, protects, and enhances your skin's health..</p>
            </div>


            <div><img src="\hero2.jpg" alt="" className='rounded-lg border-[5px] border-green-500 ' /></div>


           
        </div>







         <div className='flex flex-row  w-[95%] justify-between'>


            <div><img src="\hero3.jpg" alt="" className='rounded-lg border-[5px] border-green-500 ' /></div>


            <div className='flex flex-col items-start justify-center w-[45%]' >
                <h1 className='font-bold text-3xl'> Loved by Thousands of Happy Customers</h1>


                <p>With 5-star reviews and thousands of satisfied customers, Livia is the trusted brand for those who seek effective and safe skincare solutions. Our commitment to quality and innovation ensures you get only the best.</p>
            </div>
        </div>



        







        
    </div>
  )
}

export default MainBody