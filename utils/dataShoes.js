import { create } from "zustand";

// import img
import iconShoes1 from '@/assets/images/shoes_1.svg'
import iconShoes2 from '@/assets/images/shoes_2.svg'
import iconShoes3 from '@/assets/images/shoes_3.svg'
import iconShoes4 from '@/assets/images/shoes_4.svg'
import iconShoes5 from '@/assets/images/shoes_5.svg'

const useShoes = create((set,get)=>({
    daftarSepatu:[
        {
            id:1,
            title:'Off-White',
            description:`Out Of Office "Ooo" sneakers`,
            price:775,
            poster:iconShoes1
        },
        {
            id:2,
            title:'Nike',
            description:`Nike Air Force Premium`,
            price:200,
            poster:iconShoes2
        },
        {
            id:3,
            title:'Nike',
            description:`Nike Air Force Premium`,
            price:98.23,
            poster:iconShoes3
        },
        {
            id:4,
            title:'adidas',
            description:`DAILY 3.0 SHOES`,
            price:98.99,
            poster:iconShoes4
        }
    ]
}))

