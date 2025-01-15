'use strict';

const centerSpider = () => {
  // Получаем элемент стены
  const wall = document.querySelector('.wall');
  // Получаем элемент паука
  const spider = document.querySelector('.spider');

  // Получаем размеры стены, исключая бордеры
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  // Получаем размеры паука
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  // Рассчитываем верхнюю и левую позицию для центрирования паука
  const spiderTop = (wallHeight - spiderHeight) / 2;
  const spiderLeft = (wallWidth - spiderWidth) / 2;

  // Устанавливаем позицию паука
  spider.style.top = `${spiderTop}px`;
  spider.style.left = `${spiderLeft}px`;
};

// Вызываем функцию для центрирования паука
centerSpider();
