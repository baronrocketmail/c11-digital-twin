import "../app/globals.css"
import Links from "./Links";
import {myFont} from "../app/myFont.js";


export async function getStaticProps(){
    const name = await fetch("https://undefxx.com/api/info/name").then(x=> x.json());
    const unpaid = await fetch("https://undefxx.com/api/payments/unpaid").then(x=> x.json());
    const applicationsOpen =  await fetch("https://undefxx.com/api/info/applicationsOpen").then(x=> x.json());
    return{
        props:{name, unpaid, applicationsOpen},
        revalidate: 1
    }
}

export default function Page(props){


    let links = [{label: props.name, href: "/"}]
    let dynamicRoutes = []

    if (props.applicationsOpen) {
        links.push({label: "apply", href: "/apply"})
        links.push({label: "lease", href: "/lease"})
        links.push({label: "...", href: "/explainer"})

    } else {
        links.push({label: "settings", href: "/settings"})
        for(let elem in props.unpaid){
            links.push({label: props.unpaid[elem].name, href: props.unpaid[elem].url})
            dynamicRoutes.push("/" + props.unpaid[elem].url)
        }
        links.push({label: "...", href: "/log"})
    }


    return(
            <div className={myFont.className}>
                <Links links ={links} dynamicRoutes = {dynamicRoutes}/>
            </div>
            )
}