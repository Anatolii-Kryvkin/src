const { reg } = require('../regex.js');

describe('Task1', function() {
    it('Найти строки ahb, acb, aeb', function() {
      assert.deepEqual(reg.regex1('ahb acb aeb aeeb adcb axeb'), [
        'ahb', 
        'acb', 
        'aeb'
      ]);
    });
});

describe('Task2', function() {
    it('Найти строки ahb, acb, aeb', function() {
      assert.deepEqual(reg.regex2('aba aca aea abba adca abea'), [
        'abba', 
        'adca', 
        'abea'
      ]);
    });
});

describe('Task3', function() {
    it('Найти строки abba и abea', function() {
      assert.deepEqual(reg.regex3('aba aca aea abba adca abea'), [
        'abba', 
        'abea'
      ]);
    });
});

describe('Task4', function() {
    it('Найти строки aba, abba, abbba', function() {
      assert.deepEqual(reg.regex4('aa aba abba abbba abca abea'), [
        'aba', 
        'abba',
        'abbba'
      ]);
    });
});

describe('Task5', function() {
    it('Найти строки aa, aba, abba, abbba', function() {
      assert.deepEqual(reg.regex5('aa aba abba abbba abca abea'), [
        'aa', 
        'aba',
        'abba',
        'abbba'
      ]);
    });
});

describe('Task6', function() {
    it('Найти строки aa, aba', function() {
      assert.deepEqual(reg.regex6('aa aba abba abbba abca abea'), [
        'aa', 
        'aba',
      ]);
    });
});

describe('Task7', function() {
    it('Найти строки aba, abba, abbba,', function() {
      assert.deepEqual(reg.regex7('aa aba abba abbba abca abea'), [
        'aa', 
        'aba', 
        'abba',
        'abbba'
      ]);
    });
});

describe('Task8', function() {
    it('строка ab повторяется 1 или более раз', function() {
      assert.deepEqual(reg.regex8('ab abab abab abababab abea'), [ 
        'abab',
        'abab',
        'abababab'
      ]);
    });
});

describe('Task9', function() {
    it('Найти строку a.a', function() {
      assert.deepEqual(reg.regex9('a.a aba aea'), [
        'a.a', 
      ]);
    });
});

describe('Task10', function() {
    it('Найти строку 2+3', function() {
      assert.deepEqual(reg.regex10('2+3 223 2223'), [
        '2+3', 
      ]);
    });
});

describe('Task11', function() {
    it('Найти строки 2+3, 2++3, 2+++3', function() {
      assert.deepEqual(reg.regex11('23 2+3 2++3 2+++3 345 567'), [
        '2+3', 
        '2++3', 
        '2+++3'
      ]);
    });
});

describe('Task12', function() {
    it('Найти строки 23, 2+3, 2++3, 2+++3', function() {
      assert.deepEqual(reg.regex12('23 2+3 2++3 2+++3 445 677'), [
        '23',
        '2+3', 
        '2++3', 
        '2+++3'
      ]);
    });
});

describe('Task13', function() {
    it('Найти строки *q+, *qq+, *qqq+', function() {
      assert.deepEqual(reg.regex13('*+ *q+ *qq+ *qqq+ *qqq qqq+'), [
        '*q+',
        '*qq+',
        '*qqq+'
      ]);
    });
});

describe('Task14', function() {
    it('Все строки по краям которых стоят буквы a, и заменит каждую из них на !', function() {
      assert.deepEqual(reg.regex14('aba accca azzza wwwwa'), '!b! !ccc! !zzz! wwww!');
    });
});

describe('Task15', function() {
  it('Найти строки abba, abbba, abbbba', function() {
    assert.deepEqual(reg.regex15('aa aba abba abbba abbbba abbbbba'), [
      'abba',
      'abbba',
      'abbbba'
    ]);
  });
});

describe('Task16', function() {
  it('Найти строки вида aba, в которых b встречается менее 3-х раз (включительно)', function() {
    assert.deepEqual(reg.regex16('aa aba abba abbba abbbba abbbbba'), [
      'aa',
      'aba',
      'abba',
      'abbba',
    ]);
  });
});


describe('Task17', function() {
  it('Найти строки вида aba, в которых b встречается менее 4-х раз (включительно)', function() {
    assert.deepEqual(reg.regex17('aa aba abba abbba abbbba abbbbba'), [
      'abbbba',
      'abbbbba'
    ]);
  });
});

describe('Task18', function() {
  it('Найти строки, в которых по краям стоят буквы a, а между ними одна цифра.', function() {
    assert.deepEqual(reg.regex18('a1a a2a a3a a4a a5a aba aca'), [
      'a1a',
      'a2a',
      'a3a', 
      'a4a', 
      'a5a'
    ]);
  });
});

describe('Task19', function() {
  it('Найти строки, в которых по краям стоят буквы a, а между ними любое количество цифр.', function() {
    assert.deepEqual(reg.regex19('a1a a22a a333a a4444a a55555a aba aca'), [
      'a1a',
      'a22a',
      'a333a', 
      'a4444a', 
      'a55555a'
    ]);
  });
});

describe('Task20', function() {
  it('Найти строки, в которых по краям стоят буквы a, а между ними любое количество цифр (в том числе и ноль цифр, то есть строка aa', function() {
    assert.deepEqual(reg.regex20('aa a1a a22a a333a a4444a a55555a aba aca'), [
      'aa',
      'a1a',
      'a22a',
      'a333a', 
      'a4444a', 
      'a55555a'
    ]);
  });
});

describe('Task21', function() {
  it('Найти строки следующего вида: по краям стоят буквы a и b, а между ними - не число.', function() {
    assert.deepEqual(reg.regex21('avb a1b a2b a3b a4b a5b abb acb'), [
      'avb',
      'abb',
      'acb'
    ]);
  });
});

describe('Task22', function() {
  it('Найти строки следующего вида: по краям стоят буквы a и b, а между ними - не буква и не цифра', function() {
    assert.deepEqual(reg.regex22('ave a#b a2b a$b a4b a5b a-b acb '), [
      'a#b',
      'a$b',
      'a-b'
    ]);
  });
});

describe('Task23', function() {
  it('Заменит все пробелы на !', function() {
    assert.deepEqual(reg.regex23('ave a#b a2b a$b a4b a5b a-b acb '), 'ave!a#b!a2b!a$b!a4b!a5b!a-b!acb!');
  });
});

describe('Task24', function() {
  it('Найти строки aba, aea, axa, не затронув остальных', function() {
    assert.deepEqual(reg.regex24('aba aea aca aza axa'), [
      'aba',
      'aea',
      'axa'
    ]);
  });
});

describe('Task25', function() {
  it('Найдет строки aba, a.a, a+a, a*a, не затронув остальных.', function() {
    assert.deepEqual(reg.regex25('aba aea aca aza axa a.a a+a a*a'), [
      'aba',
      'a.a',
      'a+a',
      'a*a'
    ]);
  });
});

describe('Task26', function() {
  it('Найти строки следующего вида: по краям стоят буквы a, а между ними - цифра от 3-х до 7-ми.', function() {
    assert.deepEqual(reg.regex26('aba a2a a3a a5a a7a a10a a+a a*a'), [
      'a3a',
      'a5a',
      'a7a'
    ]);
  });
});

describe('Task27', function() {
  it('Найти строки следующего вида: по краям стоят буквы a, а между ними - буква от a до g.', function() {
    assert.deepEqual(reg.regex27('aa aba aga axa afa'), [
      'aba',
      'aga',
      'afa'
    ]);
  });
});

describe('Task28', function() {
  it('Найти строки следующего вида: по краям стоят буквы a, а между ними - буква от a до f и от j до z', function() {
    assert.deepEqual(reg.regex28('aa aba aga aZa afa aza aYa'), [
      'aba',
      'afa',
      'aza'
    ]);
  });
});

describe('Task29', function() {
  it('Найти строки следующего вида: по краям стоят буквы a, а между ними - буква от a до f и от A до Z', function() {
    assert.deepEqual(reg.regex29('aa aba aHa aZa afa aza aYa'), [
      'aba',
      'aHa',
      'aZa',
      'afa',
      'aYa'
    ]);
  });
});

describe('Task30', function() {
  it('Найти строки следующего вида: по краям стоят буквы a, а между ними - не e и не x', function() {
    assert.deepEqual(reg.regex30('aba aea aca aza axa a-a a#a'), [
      'aba',
      'aca',
      'aza',
      'a-a',
      'a#a'
    ]);
  });
});

describe('Task31', function() {
  it('Найти строки следующего вида: по краям стоят буквы w, а между ними - буква кириллицы', function() {
    assert.deepEqual(reg.regex31('wйw wяw wёw wqw'), [
      'wйw',
      'wяw',
      'wёw'
    ]);
  });
});

describe('Task32', function() {
  it('Найти строки следующего вида: по краям стоят буквы a, а между ними - маленькие латинские буквы, не затронув остальных.', function() {
    assert.deepEqual(reg.regex32('aAXa aeffa aGha aza ax23a a3sSa'), [
      'aeffa',
      'aza'
    ]);
  });
});

describe('Task33', function() {
  it('Найти строки следующего вида: по краям стоят буквы w, а между ними - маленькие и большие латинские буквы, не затронув остальных', function() {
    assert.deepEqual(reg.regex33('aAXa aeffa aGha aza ax23a a3sSa'), [
      'aAXa'
    ]);
  });
});

describe('Task34', function() {
  it('Найти строки следующего вида: по краям стоят буквы w, а между ними - маленькие латинские буквы и цифры, не затронув остальных.', function() {
    assert.deepEqual(reg.regex34('aAXa aeffa aGha aza ax23a a3sSa'), [
      'aeffa',
      'aza',
      'ax23a'
    ]);
  });
});

describe('Task35', function() {
  it('Найти все слова по шаблону: любая кириллическая буква любое количество раз.', function() {
    assert.deepEqual(reg.regex35('аааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ'), [
      'аааа', 'ббб', 'ёёё', 'ззз', 'ййй', 'ААА', 'БББ', 'ЁЁЁ', 'ЗЗЗ', 'ЙЙЙ'
    ]);
  });
});

describe('Task36', function() {
  it('Pаменить первое aa на !', function() {
    assert.deepEqual(reg.regex36('aaa aaa aaa'), '! aaa aaa');
  });
});

describe('Task37', function() {
  it('Pаменить последнее aa на !', function() {
    assert.deepEqual(reg.regex37('aaa aaa aaa'), 'aaa aaa !');
  });
});

describe('Task38', function() {
  it('Найти следующего вида: по краям стоят буквы a, а между ними - или буква e любое количество раз или по краям стоят буквы a, а между ними - буква x любое количество раз.', function() {
    assert.deepEqual(reg.regex38('aeeea aeea aea axa axxa axxxa'), [
      'aeeea', 'aeea', 'aea', 'axa', 'axxa', 'axxxa'
    ]);
  });
});

describe('Task39', function() {
  it('Найти строки следующего вида: по краям стоят буквы a, а между ними - или буква e два раза или буква x любое количество раз.', function() {
    assert.deepEqual(reg.regex39('aeeea aeea aea axa axxa axxxa'), [
     'aeea','axa', 'axxa', 'axxxa'
    ]);
  });
});

describe('Task40', function() {
  it('Заменить строку a\\a на !', function() {
    assert.deepEqual(reg.regex40('a\\a abc'), '! abc');
  });
});

describe('Task41', function() {
  it('Заменить строку a\\\\a на !', function() {
    assert.deepEqual(reg.regex41('a\\a a\\\\a a\\\\\\a'), 'a\\a a\\\\a !');
  }); 
});

describe('Task42', function() {
  it('Найти содержимое всех конструкций /...\\\ и заменит их на !.', function() {
    assert.deepEqual(reg.regex42('bbb /aaa\\ bbb /ccc\\'), 'bbb ! bbb !');
  }); 
});

describe('Task43', function() {
  it('Найти строки по шаблону: любое количество букв и цифр, символ @, любое количество букв и цифр и поменяет местами то, что стоит до @ на то, что стоит после нее. Например, aaa@bbb должно превратиться в bbb@aaa.', function() {
    assert.deepEqual(reg.regex43('aaa@bbb eee7@kkk'), 'bbb@aaa kkk@eee7');
  }); 
});

describe('Task44', function() {
  it('Найти все цифры и удвоить их количество', function() {
    assert.deepEqual(reg.regex44('a1b2c3'), 'a11b22c33');
  }); 
});

describe('Task45', function() {
  it('С помощью метода test определит, что mymail@mail.ru является емэйлом', function() {
    assert.deepEqual(reg.regex45('mymail@mail.ru'), true);
  });
  it('С помощью метода test определит, что mymail@mail.ru является емэйлом', function() {
    assert.deepEqual(reg.regex45('mymail@mail.23a'), false);
  }); 
});

describe('Task46', function() {
  it('С помощью match найдите все емэйлы в виде массива', function() {
    assert.deepEqual(reg.regex46('mymail@mail.ru, my.mailmail.ru, my-mail@mail.ru, 3.ru, mail@mail, mail@, mail@yandex.ru'), [
      'mymail@mail.ru',
      'my-mail@mail.ru',
      'mail@yandex.ru'
    ]);
  }); 
});

describe('Task47', function() {
  it('С помощью метода test определит, что site.ru является доменом.', function() {
    assert.deepEqual(reg.regex47('site.ru'), true);
  });
  it('С помощью метода test определит, что mymail@mail.ru не является доменом', function() {
    assert.deepEqual(reg.regex47('mymail@mail.23a'), false);
  }); 
});

describe('Task48', function() {
  it('С помощью метода test определит, что site.ru является доменом.', function() {
    assert.deepEqual(reg.regex48('http://site.ru'), true);
  });
  it('С помощью метода test определит, что mymail@mail.ru не является доменом', function() {
    assert.deepEqual(reg.regex48('mymail@mail.23a'), false);
  }); 
});

describe('Task49', function() {
  it('С помощью метода test определит, что site.ru является доменом.', function() {
    assert.deepEqual(reg.regex49('http://site.ru'), true);
  });
  it('С помощью метода test определит, что потокол может быть как http, так и https', function() {
    assert.deepEqual(reg.regex49('https://site.ru'), true);
  }); 
});

describe('Task50', function() {
  it('С помощью метода test определит, что переданная строка начинается с http или с https', function() {
    assert.deepEqual(reg.regex50('http://google.com'), true);
  });
  it('С помощью метода test определит, что переданная строка начинается с http или с https', function() {
    assert.deepEqual(reg.regex50('httpa://site.ru'), false);
  }); 
});

describe('Task51', function() {
  it('С помощью метода test определит, что переданная строка заканчивается расширением txt, html или php.', function() {
    assert.deepEqual(reg.regex51('index.html'), true);
  });
  it('С помощью метода test определит, что переданная строка заканчивается не расширением txt, html или php.', function() {
    assert.deepEqual(reg.regex51('style.css'), false);
  }); 
});

describe('Task52', function() {
  it('С помощью метода test определит, что переданная строка заканчивается расширением jpg или jpeg.', function() {
    assert.deepEqual(reg.regex52('echo.jpg'), true);
  });
  it('С помощью метода test определит, что переданная строка заканчивается не расширением jpg или jpeg.', function() {
    assert.deepEqual(reg.regex52('pool.png'), false);
  }); 
});

describe('Task53', function() {
  it('Является ли строка числом, длиной до 12 цифр', function() {
    assert.deepEqual(reg.regex53('458754125896'), true);
  });
  it('Не является ли строка числом, длиной до 12 цифр', function() {
    assert.deepEqual(reg.regex53('1515444845211544845121'), false);
  }); 
});

describe('Task54', function() {
  it('Cтрока с буквами, пробелами и цифрами. Найдите сумму всех чисел из данной строки.', function() {
    assert.deepEqual(reg.regex54('2sds 30sdsd'), 32);
  }); 
});

describe('Task55', function() {
  it('Заменить в строке домены вида http://site.ru на <a href="http://site.ru">http://site.ru</a>', function() {
    assert.deepEqual(reg.regex55('http://site.ru'), '<a href="http://site.ru">http://site.ru</a>');
  }); 
  it('Заменить в строке домены вида http://site.com на <a href="http://site.com">http://site.com</a>', function() {
    assert.deepEqual(reg.regex55('http://site.com'), '<a href="http://site.com">http://site.com</a>');
  }); 
});

describe('Task56', function() {
  it('С помощью replace замените все повторяющиеся пробелы на один.', function() {
    assert.deepEqual(reg.regex56('dsdsdd    wsdsdsd    dsd     dsds'), 'dsdsdd wsdsdsd dsd dsds');
  }); 
});

describe('Task57', function() {
  it('Найдите и удалите все комментарии CSS.', function() {
    assert.deepEqual(reg.regex57('dsdsdd/*wsdsdsd*/dsd dsds'), 'dsdsdd wsdsdsd dsd dsds');
  }); 
});

describe('Task58', function() {
  it('Найдите и удалите все комментарии HTML.', function() {
    assert.deepEqual(reg.regex58('dsdsdd<!-- wsdsdsd -->dsd dsds'), 'dsdsdd wsdsdsd dsd dsds');
  }); 
});

describe('Task59', function() {
  it('Найдите все строки по шаблону 3 буквы a, затем буква b и поменяйте 3 буквы a на знак !. То есть из aaab нужно сделать !b.', function() {
    assert.deepEqual(reg.regex59('aabb ab aaab aaax'), 'aabb ab !b aaax');
  }); 
});

describe('Task60', function() {
  it('Найдите все строки по шаблону 3 буквы a, затем любая буква, но не b и поменяйте 3 буквы a на знак !. То есть из, к примеру, aaaw нужно сделать !w, а aaab не поменяется.', function() {
    assert.deepEqual(reg.regex60('aaax aaab'), '!x aaab');
  }); 
});

describe('Task61', function() {
  it('Преобразование строки так, чтобы вместо чисел стояли их квадраты.', function() {
    assert.deepEqual(reg.regex61('5 1 5 6 92 7'), '25 1 25 36 8464 49');
  }); 
});

describe('Task62', function() {
  it('Найди числа, стоящие в кавычках и увеличьте их в два раза.', function() {
    assert.deepEqual(reg.regex62("2aaa'3'bbb'4'"), "2aaa'6'bbb'8'");
  }); 
});

describe('Task63', function() {
  it('Найдите все такие вставки {{текст}} и поменяйте в них порядок букв на обратный.', function() {
    assert.deepEqual(reg.regex63('2aaa 3 {{текст}} 4'), '2aaa 3 {{тскет}} 4');
  }); 
}); 

describe('Task64', function() {
  it('Числа могут быть любыми. Выведите на экран результат операции в виде 23 + 35 = 58.', function() {
    assert.deepEqual(reg.regex64('23 + 35 ='), '23 + 35 = 58');
  }); 
}); 

describe('Task65', function() {
  it('Определить, что год находится в интервале от 1900 до 2100 с помощью одного только регулярного выражения', function() {
    assert.deepEqual(reg.regex65('1900, 1950, 2100, 1850, 2150, 2050, 2101, 1996, 2050, 1899, 1999'), [
    '1900',
    '1950', 
    '2100', 
    '2050', 
    '1996', 
    '2050', 
    '1999'
  ]);
  }); 
}); 

describe('Task66', function() {
  it('Переданная строка является корректным временем вида 12:59, 23:41, 00:12, 00:00, 09:15.', function() {
    assert.deepEqual(reg.regex66('12:59, 23:41, 00:12, 00:00, 09:15'), true);
  });
  it('Время 24.00, 25.00, 12.60, 12.93, 41.93 является некорректным.', function() {
    assert.deepEqual(reg.regex66('4.00, 25.00, 12.60, 12.93, 41.93'), false);
  }); 
}); 

describe('Task67', function() {
  it('Переданная строка является корректным временем вида 9.59 am, 12.30 pm', function() {
    assert.deepEqual(reg.regex67('9.59 am 12.30 pm'), true);
  });
  it('Переданная строка не является корректным временем вида 9.59 am, 12.30 pm.', function() {
    assert.deepEqual(reg.regex67('9.59 rm 12.65 pm'), false);
  }); 
}); 

describe('Task68', function() {
  it('Удаление одной регуляркой все слова из предложения, содержащие две одинаковые следующие друг за другом буквы.', function() {
    assert.deepEqual(reg.regex68('aeeea aeea aea axa axxa axxxa'), 'aea axa');
  }); 
}); 

describe('Task69', function() {
  it('Удалите одной регуляркой все повторяющиеся слова из строки.', function() {
    assert.deepEqual(reg.regex69('dsf xxx xxx sd'), 'dsf xxx sd');
  }); 
}); 

describe('Task70', function() {
  it('Предыдущая задача с учетом того, что слово может повторяться много раз', function() {
    assert.deepEqual(reg.regex70('dsf xxx xxx xxx xxx xxx xxx xxx sd'), 'dsf xxx sd');
  }); 
}); 