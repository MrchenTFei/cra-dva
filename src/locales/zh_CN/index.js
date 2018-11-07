import App from './app.json'
import Aaa from './aaa.json'
import Bbb from './bbb.json'
 
const document = {
  ...App,
  ...Aaa,
  ...Bbb,
}
 
export default document;