function tryCatch(codeBlock) {
    return async (req, res, next) => {
      try {
        await codeBlock(req, res, next)
      } catch (error) {
        return res.status(500).json({status:'Failure',message:error.message})
      }
    }
  }
  
module.exports = tryCatch;