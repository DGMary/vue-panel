import axios from "axios";
// Сюда лучше добавить option 
/* Для axios это будет выглядеть так

const options = {
  // В baseURL вставляем либо прямую строку сервер либо забираем из env
  baseURL: 'http://localhost:1234' // Это пример, теперь эта ссылка будет вставляться в каждый запрос
}

Все запросы instance должны выглядеть так:
instance.get('/result')...

*/
const instance = axios.create({});

export default instance;