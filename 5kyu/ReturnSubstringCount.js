function searchSubstr (text, search, overlap = false) {
    if (text == '' || search == '' ) return 0;
    let s = overlap ? `(?=(${search}))` : search;
    let regex = new RegExp(s, 'g');
    return text.match(regex).length;
}