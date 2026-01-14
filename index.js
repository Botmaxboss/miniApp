import { Bot } from '@maxhub/max-bot-api';
import dotenv from 'dotenv';

dotenv.config();

const bot = new Bot(process.env.BOT_TOKEN);

bot.command('start', (ctx) => {
  ctx.reply('Привет, я чат-бот с полной информацией о городской инфраструктуре Омска.\nСодержит подробные данные о достопримечательностях, культурных объектах, парках, зонах отдыха, ресторанах и кафе.');
});

bot.start();
console.log('Бот запущен...');