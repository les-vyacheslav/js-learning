import image from '../img/ms.png'

export const model = [
  {
    type: "title",
    value: "Конструктор сайтов на JavaScript",
    options: {
      tag: 'h2',
      styles: {
        background: '#333',
        color: '#fff'
      }
    }
  },
  {
    type: "text",
    value: "here we go with some text",
    options: {
      styles: {
        'font-size': '18px'
      }
    }
  },
  {
    type: "columns",
    value: ["111111", "222222", "333333", "444"],
    options: {
      styles: {
        border: '1px solid #000'
      }
    }
  },
  {
    type: "image",
    value: image,
    options: {
      styles: {},
      imageStyles: {
        'max-width': '600px'
      },
      alt: 'Это картинка'
    }
  },
];
