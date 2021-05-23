const mongoose = require('mongoose')

const feelingSchema = new mongoose.Schema({

  greeting: String,
  howFeeling: String,
  Why: String,   

})

const Feeling = mongoose.model('Feeling', feelingSchema);

exports.createFeeling = (greeting, howFeeling, Why) => {
    var feeling = new Feeling({
      greeting: greeting,
      howFeeling: howFeeling,
      Why: Why,
     
    })

    return feeling
}

exports.getFeeling = async() => {
    var feeling = await Feeling.find({});

    return feeling
}