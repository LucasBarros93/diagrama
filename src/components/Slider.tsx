import Slider, { SliderValueLabelProps } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

function ValueLabelComponent(props: SliderValueLabelProps) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const SliderComponent = styled(Slider)({
  color: "#4100bc",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#4100bc",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&::before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

export default function CustomizedSlider() {
  return (
    <Box sx={{ width: 320 }}>
      <Box sx={{ m: 3 }} />
      <Typography gutterBottom>Risco</Typography>
      <SliderComponent
        valueLabelDisplay="auto"
        aria-label="Risco"
        defaultValue={20}
      />
      <Box sx={{ m: 3 }} />
      <Typography gutterBottom>Tempo</Typography>
      <SliderComponent
        valueLabelDisplay="auto"
        aria-label="Risco"
        defaultValue={20}
      />
      <Box sx={{ m: 3 }} />
      <Typography gutterBottom>Energia</Typography>
      <SliderComponent
        valueLabelDisplay="auto"
        aria-label="Risco"
        defaultValue={20}
      />
      <Box sx={{ m: 3 }} />
      <Typography gutterBottom>Complexidade</Typography>
      <SliderComponent
        valueLabelDisplay="auto"
        aria-label="Risco"
        defaultValue={20}
      />
      <Box sx={{ m: 3 }} />
      <Typography gutterBottom>Inmpacto</Typography>
      <SliderComponent
        valueLabelDisplay="auto"
        aria-label="Risco"
        defaultValue={20}
      />
    </Box>
  );
}
