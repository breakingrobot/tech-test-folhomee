import { body, validationResult } from 'express-validator'

const saveUrlRequest = [
  body('url')
    .not()
    .isEmpty()
    .withMessage('URL can not be empty!')
    .bail()
    .isURL()
    .withMessage('URL must be a valid URL!')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    next()
  }
]

export default saveUrlRequest
