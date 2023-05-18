// Задание 1
// Вам дана заготовка и результат, который вы должны получить. Ваша задача — 
// написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list")
const stydentNode = listNode.querySelector("student")
const nameNode = stydentNode.querySelector("name")
const firstNameNode = nameNode.querySelector("first");
const lastNameNode = nameNode.querySelector("second");
const ageNode = stydentNode.querySelector("age");
const profNode = stydentNode.querySelector("prof");

const langAttr = nameNode.getAttribute("lang")

const result = {
    name: firstNameNode.textContent + ' ' + lastNameNode.textContent,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr,
};
console.log(result);
