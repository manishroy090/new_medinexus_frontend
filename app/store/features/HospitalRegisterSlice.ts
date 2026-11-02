
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { hoshpitalOnBoarding } from "../../services/Auth";
import { Ionboarding } from "../../interface/Ionboarding";
import axios from "axios";

interface HospitalRegisterState {
  hospitalRegister: any;
  loading: boolean;
  error: string | null;
}

const initialState: HospitalRegisterState = {
  hospitalRegister: {},
  loading: false,
  error: null,
};

// Async thunk for hospital registration
export const registerHospitalData = createAsyncThunk(
  "hospital/register",
  async (registerData: Ionboarding, thunkAPI) => {
    try {
      const updatedData = {
        ...registerData,
        role: "hospital",
        role_type: "hospital",
      };

      const response = await hoshpitalOnBoarding(updatedData);

      if (response.data.success) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data.message);
      }

    } catch (error: unknown) {

      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message || error.message
        );
      }

      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

// Hospital Registration Slice
const HospitalRegisterSlice = createSlice({
  name: "hospitalRegister",
  initialState,

  reducers: {
    clearHospitalRegister: (state) => {
      state.hospitalRegister = {};
      state.loading = false;
      state.error = null;
    },
  

    logout: () => {
      // This action can be used by the root reducer
      // to clear the authentication state.
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(registerHospitalData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(registerHospitalData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.hospitalRegister = action.payload;
      })

      .addCase(registerHospitalData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || "Registration failed";
      });
  },
});

export const { clearHospitalRegister, logout } =
  HospitalRegisterSlice.actions;

export default HospitalRegisterSlice.reducer;
