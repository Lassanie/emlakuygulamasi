import { createStylesContext } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import {Text, Flex, Box, Button} from "@chakra-ui/react";
import {baseUrl, fetchApi} from '../utils/fetchApi.js';

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }: any ) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10" >
  <Image src={imageUrl} width={500} height={300} alt="banner"/>
  <Box p="5">
    <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
    <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
    <Text  fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br/>{desc2}</Text>
    <Button fontSize="xl" bg="blue.300" color="white">
      <Link href={linkName}>{buttonText}</Link>
    </Button>

  </Box>
  </Flex>
)

export default function Home({propertiesForRent, propertiesForSale}: any) {
  console.log(propertiesForRent, propertiesForSale)
  return (
   <Box>
<Banner
purpose="EV Kiralayın"
title1="Kiralık evler"
title2="Kolayca ev bulun"
desc1="Apartmanları, müstakil evleri, daireleri keşfedin"
desc2="Hemen üye olun"
buttonText="Keşfedin"
linkName="/search?purpose=for-rent"
imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
/>
<Flex flexWrap="wrap">
 {/* API'dan fetchlenecek şeyler */}

</Flex>
<Banner
 purpose="EV Satın Alın"
title1="Satılık Gayrimenkuller"
title2="Kolayca keşfedin, satın alın"
desc1="Apartmanları, müstakil evleri, daireleri keşfedin"
desc2="Hemen üye olun"
buttonText="Keşfedin"
linkName="/search?purpose=for-sale"
imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008" />
 <Flex flexWrap="wrap">
   {/* API'dan fetchlenecek şeyler */}
  </Flex>
   </Box>
  
  )
    };
   
    export async function getStaticProps() {
      
      const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
      const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

      return {
        props: {
          propertiesForSale: propertyForSale?.hits,
          propertiesForRent: propertyForRent?.hits,
        }
      }
    }
