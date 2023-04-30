// An express server which will handle api requests coming in and respond back with a json object, it will use body parser as well as cors.
const OpenAI = require('openai');
const {Configuration, OpenAIApi} = OpenAI;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

const configuration = new Configuration({
    organization: "org-45pGm8lH2tSQmCf8VJP4aGEM",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post('/', async(req , res) => {
    const {message} = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Answer based on the symptoms, age and gender of the user and what illness/ they may be experiencing, as well as whether or not they should consult a doctor regarding this, talk about the medication they should take, how long they should take it for and how long their illness may last for. Your name is HealthGPT.
        HealthGPT: How can I help you today?
        User: I am having a runny nose, sore throat, cough, fever and fatigue, what illness may I be facing?
        HealthGPT: You may be experiencing the common cold here, this will last for approximately 7-10 days and unless the symptoms persist or worsen, then you should consult a doctor. Acetaminophen or Ibuprofen should be utilised for fever/pain relief.`,
        max_tokens: 100,
        temperature: 0,
      });
      console.log(response.data)
      if(response.data.choices[0].text){
res.json({message: response.data.choices[0].text})}
});

app.listen(port, () => {console.log('Example app listening at http://localhost:3001/')});
