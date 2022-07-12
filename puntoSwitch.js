const puntoSwitch = (str) => {
    const eng = {
        a: 'ф',
        b: "и",
        c: "с",
        d: "в",
        e: "у",
        f: "а",
        g: "п",
        h: "р",
        i: "ш",
        j: "о",
        k: "л",
        l: "ш",
        m: "ь",
        n: "т",
        o: "щ",
        p: "з",
        q: "й",
        r: "к",
        s: "ы",
        t: "е",
        u: "г",
        v: "м",
        w: "ц",
        x: "ч",
        y: "н",
        z: "я",
        ',': "б",
        '<':"б",
        '.': "ю",
        '>':"ю",
        ';': "ж",
        ':': "ж",
        '[': "х",
        '{':"х",
        '}':"ъ",
        ']': "ъ",
        "'":"э",
        '"':"э",
        '`':"ё",
        '~':"ё"
    }
    return str.toLowerCase().replace(/[a-z.\,\<\>\[\]\{\}\`\~\"\:]/g, function (alpha) {
        return eng[alpha];
    });
}
export default puntoSwitch;
