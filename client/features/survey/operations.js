import { clearTempAboutYou } from './actions'
import { v4 } from 'uuid'

var errorHandler = function(fileName, e) {
  var msg = ''

  switch (e.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = 'Storage quota exceeded'
      break
    case FileError.NOT_FOUND_ERR:
      msg = 'File not found'
      break
    case FileError.SECURITY_ERR:
      msg = 'Security error'
      break
    case FileError.INVALID_MODIFICATION_ERR:
      msg = 'Invalid modification'
      break
    case FileError.INVALID_STATE_ERR:
      msg = 'Invalid state'
      break
    default:
      msg = 'Unknown error'
      break
  }

  console.log('Error (' + fileName + '): ' + msg)
}

function writeToFile(fileName, data) {
  window.resolveLocalFileSystemURL(
    cordova.file.externalDataDirectory,
    function(directoryEntry) {
      directoryEntry.getFile(
        fileName,
        { create: true },
        function(fileEntry) {
          fileEntry.createWriter(function(fileWriter) {
            fileWriter.onwriteend = function(e) {
              // for real-world usage, you might consider passing a success callback
              console.log('Write of file "' + fileName + '"" completed.')
            }

            fileWriter.onerror = function(e) {
              // you could hook this up with our global error handler, or pass in an error callback
              console.log('Write failed: ' + e.toString())
            }

            var blob = new Blob([data], { type: 'text/plain' })
            fileWriter.seek(fileWriter.length)
            fileWriter.write(blob)
          }, errorHandler.bind(null, fileName))
        },
        errorHandler.bind(null, fileName)
      )
    },
    errorHandler.bind(null, fileName)
  )
}

const storeData = data => {
  writeToFile('survey-data.json', JSON.stringify(data, null, '\t') + ',')
}

export const submitAboutYou = about => dispatch => {
  dispatch(clearTempAboutYou())
  storeData({ [v4()]: { about } })
}
export const submitMessage = message => dispatch => {
  storeData({ [v4()]: { message } })
}
export const submitFeedback = feedback => dispatch => {
  storeData({ [v4()]: { feedback } })
}
