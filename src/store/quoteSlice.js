import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quotes: [
    {
      text: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
      author: "Matthew 7:7",
      color: "green",
    },
    {
      text: "We must balance conspicuous consumption with conscious capitalism.",
      author: "Kevin Kruse",
      color: "blue",
    },
    {
      text: "Life shrinks or expands in proportion to one’s courage.",
      author: "Anais Nin",
      color: "yellow",
    },
    {
      text: "Remember no one can make you feel inferior without your consent.",
      author: "Eleanor Roosevelt",
      color: "red",
    },
  ],
  currentQuoteIndex: 0,
};

const quoteSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    randomQuote: (state) => {
      state.currentQuoteIndex = Math.floor(Math.random() * state.quotes.length);
    },
  },
});
export const { randomQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
