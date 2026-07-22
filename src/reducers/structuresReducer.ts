import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { structureI } from "../types/dataTypes";

const initialState: structureI[] = [];

const structuresReducer = createSlice({
  name: "structures",
  initialState: initialState,
  reducers: {
    addStruct: (state, action: PayloadAction<structureI>) => {
      state.push(action.payload);
    },
    delStruct: (state, action: PayloadAction<number>) => {
      return state.filter(({ id }) => id !== action.payload);
    },
    updateStruct: (
      state,
      action: PayloadAction<{ id: number; str: structureI }>,
    ) => {
      return state.map((str) =>
        str.id === action.payload.id ? action.payload.str : str,
      );
    },
  },
});

export default structuresReducer.reducer;
export const { addStruct, delStruct, updateStruct } = structuresReducer.actions;
