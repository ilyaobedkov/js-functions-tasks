import get from 'lodash/get.js';
const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];
const getFreeDomainsCount = (emails) => {
  // Извлекаем домены из email'ов
  const domains = emails.map(email => email.split('@')[1]);
  // Фильтруем только бесплатные домены
  const freeDomains = domains.filter(domain => freeEmailDomains.includes(domain));
  // Подсчитываем количество каждого домена
  const result = {};
  for (const domain of freeDomains) {
    result[domain] = (result[domain] || 0) + 1;
  }
  return result;
};
export default getFreeDomainsCount;
