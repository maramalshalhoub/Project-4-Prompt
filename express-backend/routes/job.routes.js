const Job = require('../models/job')
const express = require('express')
const router = express.Router()


router.get('/', (request, response)=>{
  Job.find({})
  .then(jobs => {
   if(jobs.length < 1){
    return response.json({ jobs : jobs, message : 'nothing found'})
   }
   response.status(200).json({ jobs : jobs})
  })
  .catch(err => {
   response.send({ message : err})
  })
  
})


router.post('/', (request, response)=>{
    console.log(request.body)
  let data = {
    name : request.body.name,
    category_field:request.body.category_field,
    skills:request.body.skills,
    start: request.body.start,
    end:request.body.end,
    description: request.body.description
  }

  let job = new Job(data)

  job.save()
  .then((j)=> {
   console.log(j)
   response.status(200).json({ job : job, message: "saved"})
  })
  .catch(err => {
      console.log(err)
   response.status(201).json({ message : err})
  })
  
})

module.exports = router
