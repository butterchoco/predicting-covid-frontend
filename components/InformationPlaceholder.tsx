import Css from "../styles/common.module.css"

export default function InformationPlaceholder({style, title, description}) {
    return <div style={style} className={Css.verticalContainer}>
        <h1>{description}</h1>
        <p>{title}</p>
    </div>
}