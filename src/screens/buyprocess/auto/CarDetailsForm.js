import React from 'react'
import { useForm } from '../../../components/customHooks/useForm';
import { Box, Typography, Button } from '@mui/material';
import { SelectInput, InputBox } from './utils';

import {
  CustomTextField as Input,
  CustomAutocomplete as Autocomplete
} from '../../../components/customStyledComponents/inputs'

import styles from './styles.module.css'

export default function CarDetailsForm({ handleStepChange }) {

  const [brand, setBrand] = React.useState("")
  const [model, setModel] = React.useState("")
  const [year, setYear] = React.useState("")
  const [carNo, setCarNo] = React.useState("")
  const [chassisNo, setChassisNo] = React.useState("")
  const [idv, setIdv] = React.useState("45000")
  const [ownershipChanged, setOwnershipChanged] = React.useState("No")
  const [externalKit, setExternalKit] = React.useState("No")
  const [owner, setOwner] = React.useState("individual")
  const [carRegDate, handleCarRegDate] = useForm({ date: "", month: "", year: "" })
  const [policyExpireDate, handlePolicyExpireDate] = useForm({ date: "", month: "", year: "" })

  const handleChange = (e) => {

  }

  console.log(brand)

  return (
    <div>
      {/* ******** BRAND NAME & MODEL ************ */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <InputBox label="Brand Name" style={{ width: "50%", marginRight: "16px" }}>

          <Autocomplete
            fullWidth
            options={['BMW', 'Honda', 'Tesla']}
            autoHighlight
            onChange={(e, value) => setBrand(value)}
            getOptionLabel={option => option}
            renderOption={(props, option) => (
              <Typography
                {...props}
                variant="body2"
                color="text.secondary">
                {option}
              </Typography>
            )}
            renderInput={(params) => (
              <Input {...params}
                placeholder="Brand Name"
                inputProps={{
                  ...params.inputProps,
                  style: { padding: ".75rem 1rem" },
                  autoComplete: 'new-password',
                }} />
            )} />

        </InputBox>

        <InputBox label="Model" style={{ width: "50%" }}>
          <Autocomplete
            fullWidth
            options={['M34', 'U76', 'T56']}
            autoHighlight
            onChange={(e, value) => setModel(value)}
            getOptionLabel={option => option}
            renderOption={(props, option) => (
              <Typography
                {...props}
                variant="body2"
                color="text.secondary">
                {option}
              </Typography>
            )}
            renderInput={(params) => (
              <Input {...params}
                placeholder="Car Model"
                inputProps={{
                  ...params.inputProps,
                  style: { padding: ".75rem 1rem" },
                  autoComplete: 'new-password',
                }} />
            )} />
        </InputBox>
      </Box>

      {/* *********** YEAR & CAR NO ***************** */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <InputBox label="Year" style={{ width: "50%", marginRight: "16px" }}>

          <Autocomplete
            fullWidth
            options={['2021', '2020', '2019', '2018', '2017', '2016']}
            autoHighlight
            onChange={(e, value) => setYear(value)}
            getOptionLabel={option => option}
            renderOption={(props, option) => (
              <Typography
                {...props}
                variant="body2"
                color="text.secondary">
                {option}
              </Typography>
            )}
            renderInput={(params) => (
              <Input {...params}
                placeholder="Launch Year"
                inputProps={{
                  ...params.inputProps,
                  style: { padding: ".75rem 1rem" },
                  autoComplete: 'new-password',
                }} />
            )} />
        </InputBox>

        <InputBox label="Car Number" style={{ width: "50%" }}>
          <Input
            type="text"
            value={carNo}
            onChange={(e) => setCarNo(e.target.value)}
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
            value={chassisNo}
            onChange={(e) => setChassisNo(e.target.value)}
            placeholder="E.g. HR26DQ555"
          />
        </InputBox>
        <InputBox label="IDV" style={{ width: "50%" }}>
          <Input
            type="text"
            value={idv}
            onChange={(e) => setIdv(e.target.value)}
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