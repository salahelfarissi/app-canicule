import L from "leaflet";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
  Tooltip,
} from "react-leaflet";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";

import TrainIcon from "@mui/icons-material/Train";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";

import { useState } from "react";

import { polyligne } from "./polyligne.js";
import { before } from "./before.js";
import { after } from "./after.js";

import redPin from "./pin-red.svg";
import orangePin from "./pin-orange.svg";
import { ThunderstormOutlined } from "@mui/icons-material";

const orangeIcon = new L.Icon({
  iconUrl: orangePin,
  iconSize: [42, 42],
});

const redIcon = new L.Icon({
  iconUrl: redPin,
  iconSize: [42, 42],
});

const beforeOptions = { color: "#949495", weight: 2 };
const afterOptions = { color: "#949495", weight: 2 };
const limeOptions = { color: "black" };

function App() {
  const [danger, setDanger] = useState(60);
  const [addValue, setAddValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setDanger((prev) => prev - 5);
      setAddValue((prev) => prev - 5);
    } else {
      setDanger((prev) => prev + 5);
      setAddValue(0);
    }
  };

  const handleMediumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setDanger((prev) => prev + 5);
      setAddValue(5);
    } else {
      setDanger((prev) => prev - 5);
      setAddValue(0);
    }
  };
  return (
    <>
      <Box
        p={1}
        height={49}
        sx={{
          backgroundColor: "#cad122",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <TrainIcon />
        <Typography
          variant="h5"
          sx={{
            color: "#black",
          }}
        >
          PrédiRail ⛈️
        </Typography>
      </Box>
      <Grid container>
        {/* Left Side */}
        <Grid container size={6} direction="column" gap={1} p={2}>
          <Grid container justifyContent="center" alignItems="center" gap={4}>
            <Typography fontStyle="italic">27-05-2025, 14h à 17h</Typography>
            <Grid minWidth="380px">
              <Alert severity="warning">
                <AlertTitle>Alerte 322</AlertTitle>
                <Grid container justifyContent="space-between" gap={2}>
                  <Grid>
                    <Typography>
                      Orage / Vent / Affaissement caténaire
                    </Typography>
                  </Grid>
                </Grid>
              </Alert>
            </Grid>
            <Grid>
              <Box
                sx={{
                  borderRadius: "50%",
                  boxShadow: "0 0 5px 1px #ef7918",
                  height: 40,
                  width: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography>{danger}%</Typography>
              </Box>
            </Grid>
            <Grid>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {addValue !== 0 && <Typography>{addValue}%</Typography>}
              </Box>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" gap={4}>
            <Typography fontStyle="italic">29-05-2025, 4h à 7h</Typography>
            <Grid minWidth="380px">
              <Alert severity="warning">
                <AlertTitle>Alerte 323</AlertTitle>
                <Grid container justifyContent="space-between" gap={2}>
                  <Grid>
                    <Typography>Orage / Précipitations / Obstacle</Typography>
                  </Grid>
                </Grid>
              </Alert>
            </Grid>
            <Grid>
              <Box
                sx={{
                  borderRadius: "50%",
                  boxShadow: "0 0 5px 1px #ef7918",
                  height: 40,
                  width: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography>{danger}%</Typography>
              </Box>
            </Grid>
            <Grid>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {addValue !== 0 && <Typography>{addValue}%</Typography>}
              </Box>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" gap={4}>
            <Typography fontStyle="italic">30-05-2025, 13h à 22h</Typography>
            <Grid minWidth="360px">
              <Alert severity="error">
                <AlertTitle>Alerte 324</AlertTitle>
                <Grid container justifyContent="space-between" gap={2}>
                  <Grid>
                    <Typography>
                      Canicule / Forte chaleur / Rupture caténaire
                    </Typography>
                  </Grid>
                </Grid>
              </Alert>
            </Grid>
            <Grid>
              <Box
                sx={{
                  borderRadius: "50%",
                  boxShadow: "0 0 5px 1px #d74242 ",
                  height: 40,
                  width: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography>{danger + 10}%</Typography>
              </Box>
            </Grid>
            <Grid>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {addValue !== 0 && <Typography>{addValue}%</Typography>}
              </Box>
            </Grid>
          </Grid>
          <Grid container size={12} gap={1} justifyContent="center" pt={2}>
            <Grid>
              <TextField
                label="Saisissez votre lieu"
                variant="outlined"
                defaultValue="Angoulême"
                size="small"
              />
            </Grid>
            <Grid>
              <TextField
                label="PK de début"
                variant="outlined"
                size="small"
                defaultValue="447,4"
              />
            </Grid>
            <Grid>
              <TextField
                label="PK de fin"
                variant="outlined"
                size="small"
                defaultValue="452.4"
              />
            </Grid>
          </Grid>
          <Paper
            elevation={1}
            sx={{
              mt: 3,
            }}
          >
            <Grid container size={12} gap={1} justifyContent="center" p={2}>
              <Typography variant="h5" mb={2}>
                Caractérisation locale
              </Typography>
              <Grid size={12} container justifyContent="center" gap={4}>
                <Grid>
                  <Typography fontWeight="bold">Caténaire</Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox size="small" onChange={handleChange} />
                      }
                      label="Satisfaisant"
                    />
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      label="Acceptable"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox size="small" onChange={handleMediumChange} />
                      }
                      label="Moyen"
                    />
                  </FormGroup>
                </Grid>
                <Grid>
                  <Typography fontWeight="bold">Voie</Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox size="small" onChange={handleChange} />
                      }
                      label="Satisfaisant"
                    />
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      label="Acceptable"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox size="small" onChange={handleMediumChange} />
                      }
                      label="Moyen"
                    />
                  </FormGroup>
                </Grid>
                <Grid>
                  <Typography fontWeight="bold">Signalement</Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox size="small" onChange={handleChange} />
                      }
                      label="Satisfaisant"
                    />
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      label="Acceptable"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox size="small" onChange={handleMediumChange} />
                      }
                      label="Moyen"
                    />
                  </FormGroup>
                </Grid>
              </Grid>
            </Grid>
          </Paper>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h5">Actions à réaliser</Typography>
            </AccordionSummary>
            <Paper>
              <Grid container justifyContent="center" p={2}>
                <Grid container gap={2}>
                  <Grid container size={12}>
                    <Typography
                      fontWeight="bold"
                      sx={{
                        color: "#d74242",
                      }}
                    >
                      Alerte 234 : Rupture caténaire
                    </Typography>
                  </Grid>
                  <Grid container>
                    <Card sx={{ p: 2 }}>
                      <Grid container size={12}>
                        <Typography>Alerte GMAO</Typography>
                      </Grid>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox size="small" defaultChecked />}
                          label="Plan de maintenance"
                        />
                        <FormControlLabel
                          control={<Checkbox size="small" />}
                          label="Stock"
                        />
                      </FormGroup>
                    </Card>
                  </Grid>
                  <Grid>
                    <Card sx={{ p: 2 }}>
                      <Grid container size={12}>
                        <Typography>Humain</Typography>
                      </Grid>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox size="small" defaultChecked />}
                          label="Prévisionnel équipe"
                        />
                        <FormControlLabel
                          control={<Checkbox size="small" />}
                          label="Tournée terrain"
                        />
                      </FormGroup>
                    </Card>
                  </Grid>
                  <Grid>
                    <Card sx={{ p: 2 }}>
                      <Grid container size={12}>
                        <Typography>Communication</Typography>
                      </Grid>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox size="small" defaultChecked />}
                          label="Alerte Equipe GI / ET"
                        />
                        <FormControlLabel
                          control={<Checkbox size="small" defaultChecked />}
                          label="Autres EF / GI / EPSF / DSR / Gestionnaire Voirie"
                        />
                      </FormGroup>
                    </Card>
                  </Grid>
                  <Grid>
                    <Card sx={{ p: 2 }}>
                      <Grid container size={12}>
                        <Typography>Opérationnel</Typography>
                      </Grid>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox size="small" defaultChecked />}
                          label="Mise en place d'une LTV"
                        />
                        <FormControlLabel
                          control={<Checkbox size="small" defaultChecked />}
                          label="Ordre baissez panto (COGC)"
                        />
                      </FormGroup>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Accordion>
        </Grid>
        {/* Map */}
        <Grid size={6}>
          <MapContainer
            center={[45.6512351921228, 0.160380979387813]}
            zoom={13}
            scrollWheelZoom={false}
            style={{
              height: "calc(50vh - 49px)",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            <Polyline pathOptions={limeOptions} positions={polyligne}>
              <Tooltip>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>ID Tronçon</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          570000-3472
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Tooltip>
            </Polyline>
            <Polyline pathOptions={beforeOptions} positions={before} />
            <Polyline pathOptions={afterOptions} positions={after} />

            <Marker
              position={[45.6624566501422, 0.171504528005951]}
              icon={orangeIcon}
            >
              <Popup>
                <Typography>
                  <span
                    style={{
                      color: "#ef7918",
                      fontWeight: "bold",
                    }}
                  >
                    Alerte 322 :
                  </span>{" "}
                  Orage / Foudre / Affaissement caténaire
                </Typography>
              </Popup>
            </Marker>

            <Marker
              position={[45.647116183027, 0.149063480514462]}
              icon={orangeIcon}
            >
              <Popup>
                <Typography>
                  <span
                    style={{
                      color: "#ef7918",
                      fontWeight: "bold",
                    }}
                  >
                    Alerte 323 :
                  </span>{" "}
                  Orage / Précipitations / Obstacle
                </Typography>
              </Popup>
            </Marker>

            <Marker
              position={[45.6417393955014, 0.135624106078359]}
              icon={redIcon}
            >
              <Popup>
                <Typography>
                  <span
                    style={{
                      color: "#d74242 ",
                      fontWeight: "bold",
                    }}
                  >
                    Alerte 324 :
                  </span>{" "}
                  Canicule / Forte chaleur / Rupture caténaire
                </Typography>
              </Popup>
            </Marker>
          </MapContainer>
          <Grid container justifyContent="center">
            <Card
              sx={{
                backgroundColor: "#108fde",
                p: 2,
                mt: 2,
              }}
            >
              <Typography color="white">Angoulême, Charent</Typography>
              <Typography color="white" variant="caption">
                Mise à jout il y a quelques minutes
              </Typography>
              <Grid container alignItems="center" gap={2}>
                <WbSunnyOutlinedIcon
                  sx={{
                    fontSize: 80,
                    color: "white",
                  }}
                />
                <Typography color="white" fontSize={62}>
                  31
                </Typography>
                <Grid container flexGrow={1}>
                  <Typography color="white">°C</Typography>
                </Grid>
                <Grid>
                  <Typography color="white">Vent : 8 km/h</Typography>
                </Grid>
              </Grid>
              <Grid container gap={1}>
                <Box
                  sx={{
                    backgroundColor: "#ffffff90",
                    borderTop: "solid",
                    borderColor: "#ffffff",
                    display: "flex",
                    justifyContent: "center",
                    p: 1,
                  }}
                >
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    gap={1}
                  >
                    jeu. 22
                    <CloudOutlinedIcon />
                    21 °
                  </Grid>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#ffffff90",
                    borderTop: "solid",
                    borderColor: "#ffffff",
                    display: "flex",
                    justifyContent: "center",
                    p: 1,
                  }}
                >
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    gap={1}
                  >
                    ven. 23
                    <WbSunnyOutlinedIcon />
                    21 °
                  </Grid>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#ffffff90",
                    borderTop: "solid",
                    borderColor: "#ffffff",
                    display: "flex",
                    justifyContent: "center",
                    p: 1,
                  }}
                >
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    gap={1}
                  >
                    sam. 24
                    <ThunderstormOutlined />
                    21 °
                  </Grid>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#ffffff90",
                    borderTop: "solid",
                    borderColor: "#ffffff",
                    display: "flex",
                    justifyContent: "center",
                    p: 1,
                  }}
                >
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    gap={1}
                  >
                    dim. 25
                    <CloudOutlinedIcon />
                    21 °
                  </Grid>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#ffffff90",
                    borderTop: "solid",
                    borderColor: "#ffffff",
                    display: "flex",
                    justifyContent: "center",
                    p: 1,
                  }}
                >
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    gap={1}
                  >
                    lun. 26
                    <WbSunnyOutlinedIcon />
                    21 °
                  </Grid>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#ffffff90",
                    borderTop: "solid",
                    borderColor: "#ffffff",
                    display: "flex",
                    justifyContent: "center",
                    p: 1,
                  }}
                >
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    gap={1}
                  >
                    mar. 27
                    <WbSunnyOutlinedIcon />
                    21 °
                  </Grid>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#ffffff90",
                    borderTop: "solid",
                    borderColor: "#ffffff",
                    display: "flex",
                    justifyContent: "center",
                    p: 1,
                  }}
                >
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    gap={1}
                  >
                    mer. 28
                    <CloudOutlinedIcon />
                    21 °
                  </Grid>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#ffffff90",
                    borderTop: "solid",
                    borderColor: "#ffffff",
                    display: "flex",
                    justifyContent: "center",
                    p: 1,
                  }}
                >
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    gap={1}
                  >
                    jeu. 29
                    <WbSunnyOutlinedIcon />
                    21 °
                  </Grid>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderTop: "solid",
                    display: "flex",
                    justifyContent: "center",
                    borderColor: "yellow",
                    p: 1,
                  }}
                >
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    gap={1}
                  >
                    ven. 30
                    <WbSunnyOutlinedIcon />
                    21 °
                  </Grid>
                </Box>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
