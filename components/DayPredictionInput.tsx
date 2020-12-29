import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";

export default function DayPredictionInput({daysPredictInput, setDaysPredict, setDaysPredictInput}) {
    return <div style={{gridArea: "dayspredict", gap: "1rem", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <TextField
            style={{width: "50%"}}
            label="Hari yang ingin diprediksi"
            id="standard-size-small"
            onKeyUp={(e: any) => {
                if (e.keyCode === 13) setDaysPredict(daysPredictInput);
                else setDaysPredictInput(e.target.value)
            }}
            size="small"
            type="number"/>
        <Button
            onClick={() => setDaysPredict(daysPredictInput)}
            variant="contained"
            color="primary"
            disableElevation={true}>Prediksi!</Button>
        </div>
}