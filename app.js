// const express = require('express')
// const app = express();
// const bodyParser = require("body-parser");
// // const { GoogleGenerativeAI } = require("@google/generative-ai")
// // const { GoogleGenAI } = require("@google/genai");
// import { GoogleGenAI } from "@google/genai";



// app.use(bodyParser.json());

// app.post('/getResponse', async(req,res,next)=>{
//     console.log(req.body.question)

// const ai = new GoogleGenAI({ apiKey: 'AIzaSyByztXojXXFAf5A13X5U7uhf47hiBwTLMA' });
// const model = genAi.getGenerativeModel({model: "gemini-2.0-flash"})

// model.generativeContent(req.body.question).then(result=>{
//     console.log(result.response.text());
//     const response = result.response.text()
//     res.status(200).json({
//         response: response
//     })
// })
// .catch(err=>{
//     console.log(err);
//     res.status(500).json({
//         error:err
//     })
// })


// })






// module.exports = app;




import express from 'express';
import bodyParser from 'body-parser';
import { GoogleGenerativeAI } from '@google/generative-ai';

const app = express();
app.use(bodyParser.json());

const ai = new GoogleGenerativeAI('AIzaSyByztXojXXFAf5A13X5U7uhf47hiBwTLMA');

app.post('/getResponse', async (req, res) => {
  try {
    const model = ai.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const result = await model.generateContent(req.body.question);
    const response = await result.response.text();

    console.log(response);
    res.status(200).json({ response });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.toString() });
  }
});

app.get('*', (req, res) => {
  res.status(404).json({
    msg: "bad request"
  });
});


export default app;
