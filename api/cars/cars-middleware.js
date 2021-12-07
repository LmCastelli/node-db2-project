const Cars = require('./cars-model')


const checkCarId = async (req, res, next) => {
  try {
    const car = await Cars.getById(req.params.id)
    if (car) {
      req.car = car
      next();
    } else {
      next({status: 404, message: `car with id ${req.params.id} is not found`})
    } 
  } catch (err) {
      next(err)
    }
  }


const checkCarPayload = (req, res, next) => {
  if (!req.body.vin) {
    next({status: 400, message: "Vin is missing"})
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

const errorHandling = (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: `There was an error: ${err.message}`
  })
}

module.exports = {
  checkCarId, 
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
  errorHandling
}