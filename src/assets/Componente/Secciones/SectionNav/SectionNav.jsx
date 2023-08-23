import { Logo } from "./Logo/Logo"
import imgLogo from "../../../imgs/logo.png";
import { ContainerIconText } from "./Nav/ContainerIcoNText";
 

export const SectionNav = () =>{

    return(
        <>
         <div>
            <Logo logo={imgLogo} nombre={'ovsbrian'} url={'https://ovsbrian.github.io/'}/>
            <ContainerIconText/>
         </div>
        </>
    )
}