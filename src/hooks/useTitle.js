import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title}-Doctor G`
    }
    ,[title])
}

export default useTitle;