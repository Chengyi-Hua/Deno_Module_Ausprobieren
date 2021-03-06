import { NLP } from 'https://deno.land/x/nlp@1.2.1/nlp.ts'
import {exampleTrainingData} from 'https://deno.land/x/nlp@1.2.1/training-data.ts'


const languages = ['en']

const trainingResult = await NLP.train(exampleTrainingData.documents, exampleTrainingData.answers, languages)
console.log(`trainingResult: \n${JSON.stringify(trainingResult)}`)

const response = await NLP.getResponse('hi', languages[0], trainingResult.clientId)
console.log(`response: \n${JSON.stringify(response)}`)
console.log("hello")

// error sending request for url (https://fancy-chats.com:4443/train/)
// error invalide peer certificate: CertExpired 