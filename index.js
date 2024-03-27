const TelegramBotAPI = require("node-telegram-bot-api/lib/telegram");

const token = "6795926287:AAH0K5u753ddf6GZYu7gfipdu3a3c1APYJ8";

const bot = new TelegramBotAPI(token, { polling: true });

const chats = {};
const questions = {};
answCount = 0;

const Ques1Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "а)",
          callback_data: "t1",
        },
        {
          text: "б)",
          callback_data: "f1",
        },
      ],
      [
        {
          text: "в)",
          callback_data: "f1",
        },
        {
          text: "г)",
          callback_data: "f1",
        },
      ],
    ],
  }),
};

const Ques2Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "а)",
          callback_data: "f2",
        },
        {
          text: "б)",
          callback_data: "t2",
        },
      ],
      [
        {
          text: "в)",
          callback_data: "f2",
        },
        {
          text: "г)",
          callback_data: "f2",
        },
      ],
    ],
  }),
};

const Ques3Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "а)",
          callback_data: "t3",
        },
        {
          text: "б)",
          callback_data: "f3",
        },
      ],
      [
        {
          text: "в)",
          callback_data: "f3",
        },
        {
          text: "г)",
          callback_data: "f3",
        },
      ],
    ],
  }),
};

const Ques4Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "а)",
          callback_data: "t4",
        },
      ],
      [
        {
          text: "б)",
          callback_data: "f4",
        },
      ],
      [
        {
          text: "в)",
          callback_data: "f4",
        },
      ],
    ],
  }),
};

const Ques5Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "а)",
          callback_data: "t5",
        },
        {
          text: "б)",
          callback_data: "f5",
        },
        {
          text: "в)",
          callback_data: "f5",
        },
      ],
      [
        {
          text: "г)",
          callback_data: "f5",
        },
        {
          text: "д)",
          callback_data: "f5",
        },
        {
          text: "е)",
          callback_data: "f5",
        },
      ],
    ],
  }),
};

const Ques6Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "а)",
          callback_data: "t6",
        },
      ],
      [
        {
          text: "б)",
          callback_data: "f6",
        },
      ],
      [
        {
          text: "в)",
          callback_data: "f6",
        },
      ],
    ],
  }),
};

const Ques7Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "а)",
          callback_data: "f7",
        },
      ],
      [
        {
          text: "б)",
          callback_data: "t7",
        },
      ],
      [
        {
          text: "в)",
          callback_data: "f7",
        },
      ],
    ],
  }),
};

const Ques8Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "а)",
          callback_data: "f8",
        },
        {
          text: "б)",
          callback_data: "f8",
        },
      ],
      [
        {
          text: "в)",
          callback_data: "t8",
        },
        {
          text: "г)",
          callback_data: "f8",
        },
      ],
    ],
  }),
};

const Ques9Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "а)",
          callback_data: "t9",
        },
        {
          text: "б)",
          callback_data: "f9",
        },
      ],
      [
        {
          text: "в)",
          callback_data: "f9",
        },
        {
          text: "г)",
          callback_data: "f9",
        },
      ],
    ],
  }),
};

const Ques10Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "а)",
          callback_data: "f10",
        },
        {
          text: "б)",
          callback_data: "f10",
        },
      ],
      [
        {
          text: "в)",
          callback_data: "t10",
        },
        {
          text: "г)",
          callback_data: "f10",
        },
      ],
    ],
  }),
};

const ItogOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [[{ text: "Подвести итоги", callback_data: "1" }]],
  }),
};

ResetTest = (ChatID) => {
  bot.sendMessage(ChatID, "Reset");
  questions[ChatID] = 1;
};

Question1 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "1.  Соотношение государственного управления и социального управления:\nа) первое является разновидностью второго\nб) второе является разновидностью первого\nв) эти понятия тождественны\nг) эти понятия вообще никак не соотносятся",
    Ques1Options
  );
  questions[ChatID] = 1;
};

Question2 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    " 2. Соотношение государственного управления и исполнительной власти\nа) первое является разновидностью второго\nб) второе является разновидностью первого\nв) эти понятия тождественны\nг) эти понятия вообще никак не соотносятся",
    Ques2Options
  );
  questions[ChatID] = 2;
};

Question3 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "3.В административном праве превалирует метод правового регулирования:\nа) императивного характера\nб) диспозитивного характера\nв) сочетающий в себе первый и второй методы\nг) ни один из вышеназванных методов к административному праву отношения не имеет",
    Ques3Options
  );
  questions[ChatID] = 3;
};

Question4 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "4. Каким  образом  вступают в силу Постановления Правительства РФ, не затрагивающие права, свободы и обязанности человека  гражданина и не предусматривающие особого порядка их вступления в силу:\nа) со дня подписания\nб) со дня официального опубликования\nв) через десять дней после официального опубликования",
    Ques4Options
  );
  questions[ChatID] = 4;
};

Question5 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "5. Какое из перечисленных видов обращений граждан в органы государственной власти и местного самоуправления не может носить коллективный характер:\nа) ходатайство\nб) предложение\nв) петиция\nг) заявление\nд) жалоба\nе) любое может носить как индивидуальный, так и коллективный характер",
    Ques5Options
  );
  questions[ChatID] = 5;
};

Question6 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "6. Являются ли иностранные граждане  и лица без гражданства субъектами административного права:\nа) да, являются\nб) нет, не являются\nв) являются, но с ограничениями",
    Ques6Options
  );
  questions[ChatID] = 6;
};

Question7 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "7. Координационное совещание руководителей правоохранительных органов региона является:\nа) правовой формой управления\nб) неправовой формой управления\nв) к управленческой деятельности вообще отношения не имеет",
    Ques7Options
  );
  questions[ChatID] = 7;
};

Question8 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "8. Дипломатических представителей РФ в иностранных государствах назначает и отзывает:\nа) Председатель Правительства РФ\nб) Министр иностранных дел РФ\nв) Президент РФ\nг) Совет Федерации",
    Ques8Options
  );
  questions[ChatID] = 8;
};

Question9 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "9. Совокупность правил въезда  (прихода), временного пребывания лиц и транспортных средств в пограничной полосе; осуществление  в её пределах хозяйственной, промысловой и иной деятельности именуется как: \nа) пограничный режим\nб) режим государственной границы\nв) таможенный режим\nг) режим в пунктах пропуска через государственную границу",
    Ques9Options
  );
  questions[ChatID] = 9;
};

Question10 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "10. Документ, на основе положений которого можно сделать вывод, что та или иная должность относится к категории государственных должностей, именуется как:\nа) должностная инструкция\nб) личное дело\nв) реестр\nг) положение о государственном органе или его структурном подразделении",
    Ques10Options
  );
  questions[ChatID] = 10;
};

Q11 = (ChatID) => {
  bot.sendMessage(ChatID, "Поздравляю,можно подвести итоги", ItogOptions);
  questions[ChatID] = 11;
};

Itog = (ChatID) => {
  bot.sendMessage(
    ChatID,
    `Поздравляем с проходением теста. Ваш результат ${chats[ChatID]} баллов из 20`
  );
};
bot.setMyCommands([
  { command: "/start", description: "Начальное приветсвие" },
  {
    command: "/test",
    description: "Запустить тест по административному праву",
  },
]);

bot.on("message", async (msg) => {
  const text = msg.text;
  const ChatID = msg.chat.id;
  if (text == "/start") {
    return bot.sendMessage(
      ChatID,
      `Здравствуйте, ${msg.from.first_name}. Добро пожаловать в бот-тест по Административному праву.`
    );
  }
  if (text == "/test") {
    return Question1(ChatID);
  }

  if (text == "/reset") {
    return ResetTest(ChatID);
  }
});

bot.on("callback_query", async (msg) => {
  const data = msg.data;
  const ChatID = msg.message.chat.id;
  if (questions[ChatID] == 1) {
    if (data == "t1") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - а");
      chats[ChatID] = 2;
      return setTimeout(() => {
        Question2(ChatID);
      }, 2000);
    } else if (data == "f1") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      chats[ChatID] = 0;
      return setTimeout(() => {
        Question2(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 2) {
    if (data == "t2") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - б");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question3(ChatID);
      }, 2000);
    } else if (data == "f2") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question3(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 3) {
    if (data == "t3") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - а");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question4(ChatID);
      }, 2000);
    } else if (data == "f3") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question4(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 4) {
    if (data == "t4") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - а");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question5(ChatID);
      }, 2000);
    } else if (data == "f4") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question5(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 5) {
    if (data == "t5") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - а");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question6(ChatID);
      }, 2000);
    } else if (data == "f5") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question6(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 6) {
    if (data == "t6") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - а");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question7(ChatID);
      }, 2000);
    } else if (data == "f6") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question7(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 7) {
    if (data == "t7") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - б");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question8(ChatID);
      }, 2000);
    } else if (data == "f7") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question8(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 8) {
    if (data == "t8") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - в");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question9(ChatID);
      }, 2000);
    } else if (data == "f8") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question9(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 9) {
    if (data == "t9") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - а");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question10(ChatID);
      }, 2000);
    } else if (data == "f9") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question10(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 10) {
    if (data == "t10") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - в");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Q11(ChatID);
      }, 2000);
    } else if (data == "f10") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");

      return setTimeout(() => {
        Q11(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 11 && data == 1) {
    return Itog(ChatID);
  }
});
