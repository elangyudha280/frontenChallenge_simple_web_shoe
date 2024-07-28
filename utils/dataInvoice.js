import { create } from "zustand";

const useInvoice = create((set,get)=>({
    dataInvoice:[],
    setDataInvoice:(data,totalOrder)=>{
        // filter data invoice cari yg sama 
        let findShoesSame = get().dataInvoice?.find(el => el.idShoes === data[0]?.id);

        // check jika datanya udh ada di invoice atau update data
        if(findShoesSame !== undefined){
            // find data
            let findData = get().dataInvoice?.find(el => el.idShoes === data[0]?.id);
           
            // merge data
            const mergeData = {
                ...findData,
                totalPrice:(data[0].price * totalOrder) + findData?.price,
                totalOrder:findData?.totalOrder + totalOrder
            }
            // handle duplikat
            const handleDuplikat = get().dataInvoice?.find(el => el.idShoes !== data[0]?.id) || []

            console.log(handleDuplikat)
            return handleDuplikat?.length !== 0 ? set({dataInvoice:[handleDuplikat,mergeData]}) :  set({dataInvoice:[mergeData]})
        }
       let mapingData = data?.map((el,i) => {
        return {
            idShoes:el.id,
            title:el.title,
            description:el.description,
            totalPrice:el.price * totalOrder,
            normalPrice:el.price,
            poster:el.poster,
            totalOrder:totalOrder
        }
       })

        return set({dataInvoice:[...get().dataInvoice,mapingData].flat()})
    }
}))

export default useInvoice