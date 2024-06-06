import Link from 'next/link'
import React from 'react'
import CardBrands from './CardBrands.jsx'


const AvailableCars = () => {
    const brands =[
        {id:1,model:"Toyota",imgUrl:"/assets/toyota-logo.png"},
        //{id:2,model:"Nissan",imgUrl:"./assets/toyota-logo.png"},
        {id:3,model:"Subaru",imgUrl:"/assets/subaru-logo.png"},
        {id:4,model:"Honda",imgUrl:"/assets/honda-logo.png"},
        {id:5,model:"Mazda",imgUrl:"/assets/mazda-logo.png"},
        {id:6,model:"Ford",imgUrl:"/assets/ford-logo.png"},
        {id:7,model:"Porsche",imgUrl:"/assets/porsche-logo.png"},
        {id:8,model:"Audi",imgUrl:"/assets/audi-logo.png"},
        //{id:9,model:"Mercedes-Benz",imgUrl:"./assets/toyota-logo.png"},
        {id:10,model:"BMW",imgUrl:"/assets/bmw-logo.webp"},
        
    ]
  return (
    <div className='mt-2 px-2 md:px-20 items-center'>
    
    <div className='flex flex-row items-center justify-center gap-10 cursor-pointer'>
        {
            brands.map((item,index)=>(
                <CardBrands id={item.id} model={item.model} key={index} imgUrl={item.imgUrl} />
            ))
        }
        
    </div>
    
</div>

  )
}

export default AvailableCars