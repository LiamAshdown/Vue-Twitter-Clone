export default {
  install: (app, options) => {
    app.config.globalProperties.$serverValidation = {
      parse: (errors, $validation) => {
        console.log(errors)
        const errorFields = Object.keys(errors)
        for (let i = 0; i < errorFields.length; i++) {
          const field = errorFields[i]

          console.log(field)

          const errorString = errors[field].join(', ')
          $validation[field].serverError = errorString
        }

        console.log($validation)
      },
      reset ($validation) {
        for (const field in $validation) {
          const validationField = $validation[field]

          if (validationField.serverError) {
            validationField.serverError = ''
          }
        }
      }
    }
  }
}
