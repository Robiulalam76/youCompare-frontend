import React from 'react'
import { useForm } from '../../components/customHooks/useForm';
import { Box, Typography, Button } from '@mui/material';
import { SelectInput, InputBox, CustomInput as Input } from './utils';

import styles from './styles.module.css'

export default function CarDetailsForm({ handleStepChange }) {
  const [car, handleChange] = useForm({
    brand: "Brand Three", model: "", year: "", carNo: "", chassisNo: "",
    idv: "490000"
  })
  const [ownershipChanged, setOwnershipChanged] = React.useState("No")
  const [externalKit, setExternalKit] = React.useState("No")
  const [owner, setOwner] = React.useState("individual")
  const [carRegDate, handleCarRegDate] = useForm({ date: "", month: "", year: "" })
  const [policyExpireDate, handlePolicyExpireDate] = useForm({ date: "", month: "", year: "" })

  return (
    <div>
      {/* ******** BRAND NAME & MODEL ************ */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <InputBox label="Brand Name" style={{ width: "50%", marginRight: "16px" }}>
          <SelectInput
            name="brand"
            value={car.brand}
            onChange={handleChange}
          >
            {['Brand One', 'Brand Two', 'Brand Three'].map((elem) => (
              <option key={elem} value={elem}>
                {elem}
              </option>
            ))}
          </SelectInput>
        </InputBox>

        <InputBox label="Model" style={{ width: "50%" }}>
          <SelectInput
            name="model"
            value={car.model}
            onChange={handleChange}
          >
            {['M345', 'G879', 'K343'].map((elem) => (
              <option key={elem} value={elem}>
                {elem}
              </option>
            ))}
          </SelectInput>
        </InputBox>
      </Box>

      {/* *********** YEAR & CAR NO ***************** */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <InputBox label="Year" style={{ width: "50%", marginRight: "16px" }}>
          <SelectInput
            name="year"
            value={car.year}
            onChange={handleChange}
          >
            {['2021', '2020', '2019', '2018', '2017', '2016'].map((elem) => (
              <option key={elem} value={elem}>
                {elem}
              </option>
            ))}
          </SelectInput>
        </InputBox>

        <InputBox label="Car Number" style={{ width: "50%" }}>
          <Input
            type="text"
            value={car.carNo}
            name="carNo"
            onChange={handleChange}
            placeholder="E.g. HR26DQ555"
          />
        </InputBox>
      </Box>

      {/* *************** CHASSIS NO & VALUE ******************* */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <InputBox label="Chassis No" style={{ width: "50%", marginRight: "16px" }}>
          <Input
            type="text"
            name="chassisNo"
            value={car.chassisNo}
            onChange={handleChange}
            placeholder="E.g. HR26DQ555"
          />
        </InputBox>
        <InputBox label="IDV" style={{ width: "50%" }}>
          <Input
            type="text"
            value={car.idv}
            name="idv"
          />
        </InputBox>
      </Box>

      {/*****************  POLICY EXPIRE DATE ****************** */}
      <InputBox label="Existing Third Party Policy Expire Date">
        <Box sx={{ display: "flex" }}>
          <SelectInput
            name="year"
            value={policyExpireDate.year}
            onChange={handlePolicyExpireDate}
            style={{ marginRight: 8, width: "25%" }}
          >
            {['2021', '2020', '2019', '2018'].map((elem) => (
              <option key={elem} value={elem}>
                {elem}
              </option>
            ))}
          </SelectInput>

          <SelectInput
            name="month"
            value={policyExpireDate.month}
            onChange={handlePolicyExpireDate}
            style={{ marginRight: 8, width: "50%" }}
          >
            {['January', 'February', 'March'].map((elem) => (
              <option key={elem} value={elem}>
                {elem}
              </option>
            ))}
          </SelectInput>

          <SelectInput
            name="date"
            value={policyExpireDate.date}
            onChange={handlePolicyExpireDate}
            style={{ width: "25%" }}
          >
            {['1', '2', '3', '4', '5', '6', '7'].map((elem) => (
              <option key={elem} value={elem}>
                {elem}
              </option>
            ))}
          </SelectInput>
        </Box>
      </InputBox>

      {/*****************  CAR REGISTRATION DATE ****************** */}
      <InputBox label="Car Registration Date">
        <Box sx={{ display: "flex" }}>
          <SelectInput
            name="year"
            value={carRegDate.year}
            onChange={handleCarRegDate}
            style={{ marginRight: 8, width: "25%" }}
          >
            {['2021', '2020', '2019', '2018'].map((elem) => (
              <option key={elem} value={elem}>
                {elem}
              </option>
            ))}
          </SelectInput>

          <SelectInput
            name="month"
            value={carRegDate.month}
            onChange={handleCarRegDate}
            style={{ marginRight: 8, width: "50%" }}
          >
            {['January', 'February', 'March'].map((elem) => (
              <option key={elem} value={elem}>
                {elem}
              </option>
            ))}
          </SelectInput>

          <SelectInput
            name="date"
            value={carRegDate.date}
            onChange={handleCarRegDate}
            style={{ width: "25%" }}
          >
            {['1', '2', '3', '4', '5', '6', '7'].map((elem) => (
              <option key={elem} value={elem}>
                {elem}
              </option>
            ))}
          </SelectInput>
        </Box>
      </InputBox>

      {/* *********8 QUESTION'S SECTION ***************** */}
      <InputBox label="Did Car's ownership change in the last 12 months?">
        <Box className={styles.questionContainer}>
          <input
            type="radio"
            checked={ownershipChanged === "Yes"}
            onChange={(e) => setOwnershipChanged(e.target.value)}
            value="Yes"
            style={{ cursor: "pointer" }}
          />
          <RadioButtonLabel>Yes</RadioButtonLabel>
          <input
            type="radio"
            checked={ownershipChanged === "No"}
            onChange={(e) => setOwnershipChanged(e.target.value)}
            value="No"
            style={{ cursor: "pointer", marginLeft: "16px" }}
          />
          <RadioButtonLabel>No</RadioButtonLabel>
        </Box>
      </InputBox>

      <InputBox label="Does this car has an external CNG/LPG kit?">
        <Box className={styles.questionContainer}>
          <input
            type="radio"
            checked={externalKit === "Yes"}
            onChange={(e) => setExternalKit(e.target.value)}
            value="Yes"
            style={{ cursor: "pointer" }}
          />
          <RadioButtonLabel>Yes</RadioButtonLabel>
          <input
            type="radio"
            checked={externalKit === "No"}
            onChange={(e) => setExternalKit(e.target.value)}
            value="No"
            style={{ cursor: "pointer", marginLeft: "16px" }}
          />
          <RadioButtonLabel>No</RadioButtonLabel>
        </Box>
      </InputBox>

      <InputBox label="Car is owned by">
        <Box className={styles.questionContainer}>
          <input
            type="radio"
            checked={owner === "individual"}
            onChange={(e) => setOwner(e.target.value)}
            value="individual"
            style={{ cursor: "pointer" }}
          />
          <RadioButtonLabel>Individual</RadioButtonLabel>
          <input
            type="radio"
            checked={owner === "commercial"}
            onChange={(e) => setOwner(e.target.value)}
            value="commercial"
            style={{ cursor: "pointer", marginLeft: "16px" }}
          />
          <RadioButtonLabel>Company</RadioButtonLabel>
        </Box>
      </InputBox>

      <Button
        variant="contained"
        onClick={() => handleStepChange('stepUp')}
        sx={{ mt: 2 }}>Next</Button>
    </div >
  )
}

const RadioButtonLabel = (props) =>
  <Typography
    {...props}
    sx={{ ml: .5 }}
    variant="body2"
    color="text.secondary">
  </Typography>