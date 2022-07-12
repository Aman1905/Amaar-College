import React, {useState} from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from '@mui/material';
import './styles.css'

const List = () => {
  const [type, setType] = useState('colleges');
  const [ranking, setRanking] = useState('');

  return (
    <div className = "container">
      <Typography variant="h4">Colleges in West Bengal</Typography>

      <FormControl className="myForms">
        <InputLabel>Name of College</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="colleges">Engineering Colleges</MenuItem>
          <MenuItem value="colleges">Non Engineering Colleges</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="myForms">
        <InputLabel>Ranking</InputLabel>
        <Select value={type} onChange={(e) => setRanking(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={20}>Top 20</MenuItem>
          <MenuItem value={50}>Top 50</MenuItem>
          <MenuItem value={50}>Top 100</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
export default List;