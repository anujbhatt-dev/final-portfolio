import { Anton, Inter, Poppins, Geist_Mono } from "next/font/google";

export const anton = Anton({
    weight:"400",  
    subsets:["latin"]
  })

export const poppins = Poppins({
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900" ],
  subsets:["latin"]
})

export const inter = Inter({
  weight:"400",  
  subsets:["latin"]
})

export const geistMono = Geist_Mono({
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900" ],
  subsets:["latin"]
})