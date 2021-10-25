import React, { useState, useEffect } from 'react'
import { IconButton, Paper, Typography, Box } from '@mui/material'

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import PropTypes from 'prop-types'

const styles = {
  calenderTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrowIcon: {
    margin: "0 16px"
  },
  weekDays: {
    listStyleType: "none",
    padding: 0,
    marginBottom: 0
  },
  date: {
    display: "inline-block",
    width: "14.2%",
    textAlign: "center",
    marginBottom: "8px",
  },
  dateText: {
    display: "inline-block",
    width: "14.2%",
    textAlign: "center",
    marginBottom: "8px",
    cursor: "pointer"
  },
  selected: {
    background: "yellow"
  },
  graySelected: {
    background: "lightgray"
  }
}

Calender.propTypes = {
  width: PropTypes.number,
  getDate: PropTypes.func
}

Calender.defaultProps = {
  width: 300,
}


export default function Calender({ width, getDate, preSelectedDate }) {
  const [weekStartDay, setWeekStartDay] = useState()
  const [date, setDate] = useState(new Date())
  const [month, setMonth] = useState(date.getMonth())
  const [year, setYear] = useState(date.getFullYear())
  const [daysInMonth, setDaysInMonth] = useState(new Date(year, month + 1, 0))

  useEffect(() => {
    if (preSelectedDate) {
      setDate(preSelectedDate)
    }
  }, [])

  useEffect(() => {
    let temp = new Date(year, parseInt(month) + 1, 0)
    setDaysInMonth(temp.getDate())
    setYear(temp.getFullYear())
  }, [month])

  useEffect(() => {
    let temp = new Date(year, parseInt(month), 1)
    setWeekStartDay(temp.getDay())
  }, [month])

  const monthName = () => {
    let dd = new Date(year, month + 1, 0)
    let mm = dd.toLocaleString('default', { month: 'long' })
    return mm
  }

  const onLeftArrowClick = () => {
    let mm = parseInt(month)
    if (mm === 0) setYear(year - 1)
    mm = (mm + 12 - 1) % 12
    setMonth(mm)
  }
  const onRightArrowClick = () => {
    let mm = parseInt(month)
    if (mm === 11) setYear(year + 1)
    mm = (mm + 12 + 1) % 12
    setMonth(mm)
  }

  const handleDateSelection = (e) => {
    let dd = parseInt(e.target.textContent)
    setDate(new Date(year, month, dd))
    // after date selection , send date value to parent
    getDate(new Date(year, month, dd))
  }

  return (
    <div>
      <Paper
        elevation={10}
        style={width ? { width } : { width: "350px" }}>
        <Box sx={{ p: 2 }}>
          <div style={styles.calenderTitle}>
            <IconButton
              style={styles.arrowIcon}
              size="small"
              onClick={onLeftArrowClick}>
              <ArrowLeftIcon />
            </IconButton>
            <h4 style={{ textAlign: "center", margin: "0px" }}>
              {monthName()}, {year}
            </h4>
            <IconButton
              style={styles.arrowIcon}
              size="small"
              onClick={onRightArrowClick}>
              <ArrowRightIcon />
            </IconButton>
          </div>


          <ul style={styles.weekDays}>
            {
              ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map((day, i) => (
                <li key={i} style={styles.date}>
                  <Typography variant="caption">
                    {day.toUpperCase()}
                  </Typography>
                </li>
              ))
            }
            {
              [...new Array(weekStartDay)].map((elem, i) => (
                <li style={styles.date} key={i}></li>
              ))
            }
            {
              [...new Array(daysInMonth)].map((elem, i) => (
                <li
                  style={styles.date}
                  key={i}
                  onClick={handleDateSelection}>
                  <Typography variant="caption" style={{ cursor: "pointer" }}>
                    {i + 1}
                  </Typography>
                </li>
              ))
            }
          </ul>
        </Box>
      </Paper>
    </div>
  )
}