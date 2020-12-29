import Skeleton from "@material-ui/lab/Skeleton"
import Css from "../styles/common.module.css"

const LoadingState = {
    marginTop: "10px",
    fontWeight: "bold" as "bold",
    fontSize: "14px",
}

export default function Placeholder({state}) {
    return <div className={Css.verticalContainer}>
        <Skeleton variant="circle" width={32} height={32}/>
        <p style={LoadingState}>{state}</p>
    </div>
}