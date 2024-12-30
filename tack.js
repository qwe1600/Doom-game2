const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 150;

const tileSize = 40;
let level = 0;
let score = 0;

const levels = [
         // level 1
         [
    "WWWWWWWWWWWWWWWWWWWW",
    "W     W            W",
    "W W W W WWWWWWWW W W",
    "W W W W          W W",
    "W W W W WWWWWWWW W W",
    "W W W            W W",
    "W   W W WWWWWWWW   W",
    "WWWWWWWW          W W",
    "W               W W W",
    "W WWWWWWWWWWWWWWW W W",
    "W W                ",
    "W W  WWWWWWWWWWWWW  ",
    "W                 W E",
    "WWWWWWWWWWWWWWWWWWW",
  ],
  // level 2
  [
    "WWWWWWWWWWWWWWWWWWWW",
    "W  WE               W",
    "W WWWWWWWWWWWWWWW  W",
    "W W              W W",
    "W W WWWWWWWWWWW  W W",
    "W W W        W   W W",
    "W W W WWWWW  WWWWW W",
    "W W W              W",
    "W WWWWWWWWWWWW WWWWW",
    "W                   W",
    "WWWWWWWWWWWWWWWWWWWWW",
  ],
  // level 3 
  [
    "WWWWWWWWWWWWWWWWWWWW",
    "W   W            E W",
    "W W W WWWWWWWWWW W W",
    "W W W W          W W",
    "W W   W WWWWWWWW W W",
    "W   W W          W W",
    "WWWWWWWW WWWWWWWWWWW",
    "W                  W",
    "W WWWWWWWWWWWWWWW  W",
    "W W              W W",
    "W W WWWWWWWWWWWWW W ",
    "W W               W W",
    "WWWWWWWWWWWWWWWWWWWW",
  ],
  // level 4
  [
    "WWWWWWWWWWWWWWWWWWWW",
    "W                  W",
    "W WWWWWWWWWWWWWWWW W",
    "W W              W W",
    "W W WWWWWWWWWWW  W W",
    "W W W          W W W",
    "W W W WWWWWWW  W W W",
    "W   W          W W W",
    "W WWWWWWWWWWWWWW W W",
    "W           WE   W W",
    "WWWWWWWWWWWWWWWWWWWW",
  ],
  // level 5
  [
    "WWWWWWWWWWWWWWWWWWWW",
    "W   W     W       EW",
    "W W W W W W WWWWWWWW",
    "W W W W W W W       ",
    "W W W W W W W WWWWWWW",
    "W W W W            W",
    "W W W W WWWWWWWWWWWWW",
    "W W W W             W",
    "W W WWWWWWWWWWWW  W W",
    "W W              W W ",
    "W WWWWWWWWWWWWWWWW W ",
    "W        H        W W",
    "WWWWWWWWWWWWWWWWWWWW ",
   ],
   // level 6
   [
    "WWWWWWWWWWWWWWWWWWWW",
    "W                  W",
    "W W WWWWWWWWWWWWWW W",
    "W W W            W W",
    "W W W WWWWWWWWWW W W",
    "W W W          W W W",
    "W W W WWWWWWWWWW W W",
    "W W              W W",
    "W WWWWWWWW WWWWWWWWW",
    "W       WE         W",
    "WWWWWWWWWWWWWWWWWWWW",
  ],
  // level 7
  [
    "WWWWWWWWWWWWWWWWWWWW",
    "W W W            E W",
    "W W W WWWWWWWWWW W W",
    "W W W W          W W",
    "W W W  W WWWWWWWW W W",
    "W   W W          W W",
    "WW  WWWWW WWWWWWWWWWW",
    "W                  W",
    "W WWWWWWWWWWWWWWW  W",
    "W W              W W",
    "W W WWWWWWWWWWWWW W ",
    "W W               W W",
    "WWWWWWWWWWWWWWWWWWWW",
  ],
  // level 8
  [
    "WWWWWWWWWWWWWWWWWWWW",
    "W   W   W        WEW",
    "W W W W WWWWWWWWWW  ",
    "W W W W            W",
    "W W W WWWWWWWWWWW  W",
    "W W   W          W W",
    "W WWWWWWWWWWWWWWWW W",
    "W                  W",
    "W WWWWWWWWWWWWWWW  W",
    "W W              W W",
    "W W WWWWWWWWWWWWW W ",
    "W W               W ",
    "W   W W WWWWWWWWWWW ",
    "W W   W          W W",
    "WWWWWWWWWWWWWWWWWWWW",
  ],
  // level 9
  [
    "WWWWWWWWWWWWWWWWWWWWWW",
    "W                    W",
    "W WWWWWW W WWWWWWWW WW",
    "W W    W   W        WW",
    "W W WWWWWWWW WWWWWW WW",
    "W W        W        WW",
    "W WWWWWWWWWW WWWWWW WW",
    "W W                 WW",
    "W WWWWWWWWWW WWWWWW WW",
    "W        W           W",
    "W WWWWWWWWWWWWWW WWW W",
    "W W                  W",
    "W W WWWWWWWWWW WWWWWW W",
    "W W          EW       W",
    "W WWWWWWWWWWWWWWWWWWWW",
  ],
  // level 10
  [
    "WWWWWWWWWWWWWWWWWWWW",
    "W         W       EW",
    "W WWWWWWW W WWWWWWWW",
    "W W   W   W       W ",
    "W W W WWWWWWWWWWW W ",
    "W W W           W W ",
    "W W WWWWWWWWWWW W W ",
    "W W       W     W W ",
    "W WWWWWWW W WWWWW W ",
    "W     W   W     W W ",
    "WWWW  W WWWWWWW W W ",
    "W     W         W W ",
    "W WWWWWWWWWWWWWWW W ",
    "W                  W",
    "WWWWWWWWWWWWWWWWWWWW",
],
// level 11
[
  "WWWWWWWWWWWWWWWWWWWW",
  "W                  W",
  "W W W W W WWWWWWWW W",
  "W W W W W          W",
  "W W W W W WWWWWWWW W",
  "W W   W            W",
  "W WWWWWWWW WWWWWWW W",
  "W                  W",
  "W WWWWWWWWWWWWWWWWW ",
  "W                 EW",
  "WWWWWWWWWWWWWWWWWWWW",
],
// level 12
[
  "WWWWWWWWWWWWWWWWWWWW",
  "W     W            W",
  "W W W W WWWWWWWW W W",
  "W W W W          W W",
  "W W W W WWWWWWWW W W",
  "W W W            W W",
  "W   W W WWWWWWWW   W",
  "WWWWWWWW          W W",
  "W               W W W",
  "W WWWWWWWWWWWWWWW W W",
  "W W                W ",
  "W W  WWWWWWWWWWWWWWW ",
  "W                   E",
  "WWWWWWWWWWWWWWWWWWWWW",
],
// level 13
[
  "WWWWWWWWWWWWWWWWWWWW",
  "W                  W",
  "W WWWWWW WWWWWWWWW W",
  "W W               W W",
  "W W WWWWWWWWWWWWW W W",
  "W W               W W",
  "W WWWWWWWWWWWWWWW   W",
  "WWWWWWWW          W W",
  "W                  W W",
  "W WWWWWWWWWWWWWWWWWW W",
  "W                   W ",
  "W WWWWWWWWWWWWWWWWWWW ",
  "W                    E",
  "WWWWWWWWWWWWWWWWWWWWWW",
],
// level 14 
[
  "WWWWWWWWWWWWWWWWWWWW",
  "W  W            W  W",
  "W W W WWWWWWWWW W W ",
  "W W W        W  W W ",
  "W W WWWWWWWWWW W W W",
  "W     W        W   W",
  "WWWW W WWWWWWWWWWWWW",
  "W     W   W        W",
  "W WWWWW W WWWWWWWW W",
  "W       W        W W",
  "W WWWWWWWWWWWWWW W W",
  "W W              W W",
  "W W WWWWWWWWWWWWWWW W",
  "W                  EW",
  "WWWWWWWWWWWWWWWWWWWW"
],
];

const player = {
  x: 1,
  y: 1,
  color: 'red',
  bullets: [],
  health: 100,
};

const enemies = [];

function loadLevel(levelIndex) {
  enemies.length = 0;
  player.x = 1;
  player.y = 1;
  player.bullets = [];

  const levelMap = levels[levelIndex];
  for (let y = 0; y < levelMap.length; y++) {
    for (let x = 0; x < levelMap[y].length; x++) {
      if (Math.random() < 0.1 && levelMap[y][x] === ' ') {
        enemies.push({ x, y, direction: getRandomDirection() });
      }
    }
  }
}

function getRandomDirection() {
  const directions = [
    { x: 1, y: 0 }, // вправо
    { x: -1, y: 0 }, // влево
    { x: 0, y: 1 }, // вниз
    { x: 0, y: -1 }, // вверх
  ];
  return directions[Math.floor(Math.random() * directions.length)];
}

function drawMaze() {
  const levelMap = levels[level];
  for (let y = 0; y < levelMap.length; y++) {
    for (let x = 0; x < levelMap[y].length; x++) {
      if (levelMap[y][x] === 'W') {
        ctx.fillStyle = 'gray';
        ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
      } else if (levelMap[y][x] === 'E') {
        ctx.fillStyle = 'blue';
        ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
      }
    }
  }
}

function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x * tileSize, player.y * tileSize, tileSize, tileSize);
}

function drawBullets() {
  player.bullets.forEach(bullet => {
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, 5, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawEnemies() {
  enemies.forEach(enemy => {
    ctx.fillStyle = 'green';
    ctx.fillRect(enemy.x * tileSize, enemy.y * tileSize, tileSize, tileSize);
  });
}

function movePlayer(dx, dy) {
  const newX = player.x + dx;
  const newY = player.y + dy;

  if (levels[level][newY]?.[newX] !== 'W') {
    player.x = newX;
    player.y = newY;

    if (levels[level][newY]?.[newX] === 'E') {
      level++;
      if (level < levels.length) {
        loadLevel(level);
      } else {
        alert('Поздравляем, вы прошли все уровни!');
        document.location.reload();
      }
    }
  }
}

function moveBullets() {
  player.bullets.forEach((bullet, index) => {
    bullet.x += bullet.direction.x * bullet.speed;
    bullet.y += bullet.direction.y * bullet.speed;

    if (
      bullet.x < 0 || bullet.x > canvas.width ||
      bullet.y < 0 || bullet.y > canvas.height
    ) {
      player.bullets.splice(index, 1);
    }
  });
}

function checkCollisions() {
  player.bullets.forEach((bullet, bulletIndex) => {
    enemies.forEach((enemy, enemyIndex) => {
      const bulletGridX = Math.floor(bullet.x / tileSize);
      const bulletGridY = Math.floor(bullet.y / tileSize);

      if (bulletGridX === enemy.x && bulletGridY === enemy.y) {
        enemies.splice(enemyIndex, 1);
        player.bullets.splice(bulletIndex, 1);
        score += 10;
      }
    });
  });
}

function shootBullets() {
  const directions = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 },
  ];

  directions.forEach(direction => {
    player.bullets.push({
      x: player.x * tileSize + tileSize / 2,
      y: player.y * tileSize + tileSize / 2,
      direction,
      speed: 5,
    });
  });
}

function updateStatus() {
  document.getElementById('levelDisplay').textContent = `Level: ${level + 1}`;
  document.getElementById('scoreDisplay').textContent = `Score: ${score}`;
  document.getElementById('healthDisplay').textContent = `Health: ${player.health}`;
}

function moveEnemies() {
enemies.forEach(enemy => {
// Вероятность того, что враг "зависнет"
const shouldFreeze = Math.random() < 0.3; // 30% вероятность зависания

if (shouldFreeze) {
  return; // Враг не движется
}

// Если враг готов двигаться, проверяем текущее состояние
if (!enemy.isMoving) {
  enemy.direction = getRandomDirection(); // Получаем случайное направление
  enemy.isMoving = true;
}

// Двигаем врага с задержкой
setTimeout(() => {
  const newX = enemy.x + enemy.direction.x;
  const newY = enemy.y + enemy.direction.y;

  // Проверяем, можно ли двигаться в новом направлении
  if (levels[level][newY]?.[newX] !== 'W') {
    enemy.x = newX;
    enemy.y = newY;
  } else {
    // Если враг сталкивается с препятствием, меняем направление
    enemy.direction = getRandomDirection();
  }

  enemy.isMoving = false; // Готовность к следующему движению
}, Math.random() * 3000 + 2000); // Задержка от 2 до 5 секунд
});
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawMaze();
  drawPlayer();
  drawEnemies();
  drawBullets();

  moveBullets();
  moveEnemies();
  checkCollisions();
  updateStatus();

  requestAnimationFrame(gameLoop);
}

// Сенсорные кнопки управления
document.getElementById('moveUp').addEventListener('click', () => movePlayer(0, -1));
document.getElementById('moveDown').addEventListener('click', () => movePlayer(0, 1));
document.getElementById('moveLeft').addEventListener('click', () => movePlayer(-1, 0));
document.getElementById('moveRight').addEventListener('click', () => movePlayer(1, 0));
document.getElementById('shootButton').addEventListener('click', shootBullets);

loadLevel(level);
gameLoop();