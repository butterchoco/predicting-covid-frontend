import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";

export default function DayPredictionInput({daysPredictInput, setDaysPredict, setDaysPredictInput}) {
    return <div style={{gridArea: "dayspredict", gap: "1rem", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <TextField
            style={{width: "50%"}}
            label="Hari yang ingin diprediksi"
            id="standard-size-small"
            onKeyUp={(e: any) => {
                if (e.keyCode === 13 && daysPredictInput <= 60) {
                    setDaysPredict(daysPredictInput);
                }
                else setDaysPredictInput(e.target.value)
            }}
            size="small"
            type="number"
            error={daysPredictInput > 60}
            helperText="Maksimal 60 hari prediksi"/>
        <Button
            onClick={() => {
                if (daysPredictInput <= 60) setDaysPredict(daysPredictInput)
            }}
            variant="contained"
            color="primary"
            disableElevation={true}>Prediksi!</Button>
        </div>
}