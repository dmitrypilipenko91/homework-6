const formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {caption:'Опубликовать',kind:'submit'},
];

const formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {caption:'Зарегистрироваться',kind:'submit'},
];


function buildForm(form, formDef) {
  form.setAttribute('action', 'https://fe.it-academy.by/TestForm.php');
  for (let i = 0; i < formDef.length; i++) {
    let element = formDef[i];
    let label = document.createElement('label');
    if (element.label)
      label.innerHTML = element.label;
    form.appendChild(label);

    let input;

    switch (element.kind) {
      case 'longtext':
        input = document.createElement('input');
        input.setAttribute('type', element.kind);
        input.setAttribute('name', element.name);
        input.setAttribute('size', '50');
        break;
      
      case 'shorttext':
        input = document.createElement('input');
        input.setAttribute('type', element.kind);
        input.setAttribute('name', element.name);
        input.setAttribute('size', '30');
        break;
        
      case 'number':
        input = document.createElement('input');
        input.setAttribute('type', element.kind);
        input.setAttribute('name', element.name);
        input.setAttribute('size', '15');
        break;
      
      case 'memo':
        input = document.createElement('textarea');
        input.setAttribute('name', element.name);
        break;
      
      case 'combo':
        input = document.createElement('select'); 
        input.setAttribute('name', element.name); 

        for (let j = 0; j < element.variants.length; j++) {
          let option = document.createElement('option'); 
          option.setAttribute('value', element.variants[j].value);
          option.innerHTML = element.variants[j].text; 
          input.appendChild(option); 
        }
        break;

      case 'radio':
        for (let j = 0; j < element.variants.length; j++) {
          let label = document.createElement('label'); 
          label.innerHTML = element.variants[j].text; 
          input = document.createElement('input'); 
          input.setAttribute('type', 'radio'); 
          input.setAttribute('name', element.name); 
          input.setAttribute('value', element.variants[j].value); 
          label.appendChild(input);
          form.appendChild(label);
        }
        break;

      case 'check':
        input = document.createElement('input'); 
        input.setAttribute('type', 'checkbox'); 
        input.setAttribute('name', element.name); 
        break;

      case 'submit':
        input = document.createElement('input'); 
        input.setAttribute('type', 'submit'); 
        input.setAttribute('value', element.caption);
        break;
    }

    if (input) {
      form.appendChild(input);
    }

    let br = document.createElement('br'); 
    form.appendChild(br);
  }
}

let form1 = document.createElement('form');
buildForm(form1, formDef1);
document.body.appendChild(form1);

form1.style.marginBottom = "50px";

let form2 = document.createElement('form'); 
buildForm(form2, formDef2); 
document.body.appendChild(form2);