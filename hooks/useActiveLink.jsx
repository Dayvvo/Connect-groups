import { useRouter } from "next/dist/client/router"


const useActiveLink  = ()=>{
    const router = useRouter();

    const determineActive = (path)=>{
        const route = router.pathname ===path?'activeLink':'';
        
        return route;
    }


    return determineActive
}


export default useActiveLink