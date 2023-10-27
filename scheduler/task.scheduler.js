import TelegramBot from "node-telegram-bot-api";
import Task from "../models/task.js";

const minuteForSendReminder = 1;
const token = "6882209271:AAHeOwFX_v6R5NDjvGeoGWZJ5gZLz9Lisiw";
const chatBot = new TelegramBot(token, { polling: true });

export const taskScheduler = {
  reminderDeadline: async () => {
    const timeNow = Date.now();
    const tasks = await Task.findAll({
      where: {
        status: ["Todo", "Doing"],
      },
    });

    tasks.forEach((task) => {
      if (!task.deadline) {
        return;
      }

      const deadline = task.deadline.getTime();
      const diff = deadline - timeNow;
      const differentMinute = new Date(diff).getMinutes();

      if (differentMinute == minuteForSendReminder) {
        console.log(task);
      }
    });
  },
};
