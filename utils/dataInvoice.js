import { create } from "zustand";

const useInvoice = create((set,get)=>({
    dataInvoice:[],
    setDataInvoice:(data)=>{
        console.log(data)
    }
}))

export default useInvoice