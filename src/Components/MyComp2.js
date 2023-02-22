//1.Import Area
import MyComp3 from "./MyComp3"


//2.Function Defination Area
export let MyComp2 = ()=>{
    //Every function return something
    return (
            <>
                <span> MyComp2 </span>
                <MyComp3 />
            </> 
           )
}


//3.Export Area
//There are 2 ways you can export in NodeJS

//3.1 Default Export

//3.2 Named Export
