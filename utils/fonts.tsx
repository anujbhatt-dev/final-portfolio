import { Anton, Inter, Poppins } from "next/font/google";

export const anton = Anton({
    weight:"400",  
    subsets:["latin"]
  })

export const poppins = Poppins({
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900" ]
})

export const inter = Inter({
  weight:"400",  
  subsets:["latin"]
})