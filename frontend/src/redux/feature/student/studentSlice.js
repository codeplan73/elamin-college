import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import studentService from './studentService'

const initialState = {
  students: [],
  student: {},
  error: false,
  loading: false,
  success: false,
  message: '',
}

export const getStudents = createAsyncThunk('admin/records', async (_i, thunkAPI) => {
  try {
    return await studentService.getStudents()
  } catch (error) {
    const message = error.response.data.error
    return thunkAPI.rejectWithValue(message)
  }
})

export const studentsSlice = createSlice({
  name: 'students',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getStudents.pending, (state) => {
        state.loading = true
      })
      .addCase(getStudents.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.error = false
        state.students = action.payload
      })
      .addCase(getStudents.rejected, (state, action) => {
        state.error = true
        state.loading = false
        state.message = action.payload
      })
  },
})

export default studentsSlice.reducer