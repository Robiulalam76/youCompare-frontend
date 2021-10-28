import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
// import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { Title } from '../../../../components/customStyledComponents/texts'


import { styled } from '@mui/system';

const BorderedDiv = styled(Box)(({ theme }) => ({
	borderColor: "#eeeeee",
	borderWidth: "1px",
	borderStyle: "solid",
	borderRadius: "10px",
	padding: theme.spacing(2),
	marginBottom: theme.spacing(2)
}))


export default function Filters() {
	return (
		<div>
			<Title>Filter</Title>
			<BorderedDiv>
				<Typography color="text.hover">All Filters</Typography>
				{/* Cover */}
				<Autocomplete
					options={['Cover Option 1', 'Cover Option 2', 'Cover Option 3']}
					autoSelect={true}
					renderOption={(props, option) => (
						<Typography
							{...props}
							variant="body2"
							color="text.secondary">
							{option}
						</Typography>
					)}
					sx={{ mt: 2 }}
					renderInput={(params) => (
						<TextField {...params}
							size="small"
							placeholder="Cover"
							inputProps={{
								...params.inputProps,
								sx: { fontSize: ".9rem" },
								autoComplete: 'new-password', // disable autocomplete and autofill
							}} />
					)} />

				{/* No room rent Limit */}
				<TextField
					size="small"
					fullWidth
					placeholder="No room rent limit"
					sx={{ mt: 2 }}
				/>


				{/* Plan Type */}
				<Autocomplete
					options={['Type One', 'Type Two', 'Type Three']}
					autoSelect={true}
					renderOption={(props, option) => (
						<Typography
							{...props}
							variant="body2"
							color="text.secondary">
							{option}
						</Typography>
					)}
					sx={{ mt: 2 }}
					renderInput={(params) => (
						<TextField {...params}
							size="small"
							placeholder="Plan Type"
							inputProps={{
								...params.inputProps,
								sx: { fontSize: ".9rem" },
								autoComplete: 'new-password', // disable autocomplete and autofill
							}} />
					)} />

				{/**Insurer */}
				<Autocomplete
					options={['Insurer One', 'Insurer Two', 'Insurer Three']}
					autoSelect={true}
					renderOption={(props, option) => (
						<Typography
							{...props}
							variant="body2"
							color="text.secondary">
							{option}
						</Typography>
					)}
					sx={{ mt: 2 }}
					renderInput={(params) => (
						<TextField {...params}
							size="small"
							placeholder="Insurer"
							inputProps={{
								...params.inputProps,
								sx: { fontSize: ".9rem" },
								autoComplete: 'new-password', // disable autocomplete and autofill
							}} />
					)} />
			</BorderedDiv>
		</div>
	)
}