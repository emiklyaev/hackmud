function (c, a)
{
    const lvl = a.lvl;

    const ss = #fs.scripts.trust();
    let lst = [];
    for(let i = 0; i < ss.length; i++){
        const name = ss[i];
        lst.push({name: name, lvl: #fs.scripts.get_level({name})})
    }

    const lvl_map =
        {
            "full": 4,
            "high": 3,
            "mid" : 2,
            "low": 1,
            "null": 0
        };

    const lvl_filter = (el) => el.lvl === lvl_map[lvl];
    lst = lst.filter(lvl_filter);

    if (a.v && a.v == true ){
        return lst;
    }

    return lst.reduce((acc, el) => `${acc}\n${el.name}`, "")

}
