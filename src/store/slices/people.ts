import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../lib/axios";

export interface PersonState {
  people: Person[] | null;
  isLoading: boolean;
}

const initialState: PersonState = {
  people: null,
  isLoading: true,
};

export const loadPeople = createAsyncThunk("people/load", async () => {
  try {
    const response = await api.get("/person/people");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    // play: (state, action: PayloadAction<[number, number]>) => {
    //   state.currentModuleIndex = action.payload[0]
    //   state.currentLessonIndex = action.payload[1]
    // },
    // next: (state) => {
    //   const nextLessonIndex = state.currentLessonIndex + 1
    //   const nextLesson =
    //     state.course?.modules[state.currentModuleIndex].lessons[nextLessonIndex]
    //   if (nextLesson) {
    //     state.currentLessonIndex = nextLessonIndex
    //   } else {
    //     const nextModuleIndex = state.currentModuleIndex + 1
    //     const nextModule = state.course?.modules[nextModuleIndex]
    //     if (nextModule) {
    //       state.currentModuleIndex = nextModuleIndex
    //       state.currentLessonIndex = 0
    //     }
    //   }
    // },
  },
  extraReducers(builder) {
    builder.addCase(loadPeople.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(loadPeople.fulfilled, (state, action) => {
      state.people = action.payload;
      state.isLoading = false;
    });
  },
});

export const people = peopleSlice.reducer;
