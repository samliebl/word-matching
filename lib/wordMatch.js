export function wordMatch(wordlista, wordlistb, floor, ceiling) {
    let matches = [];

    const isValidMatch = (worda, wordb) => {
        const wordaLength = worda.length;
        const minLength = wordaLength - floor;
        const maxLength = wordaLength + ceiling;
        return wordb.length >= minLength && wordb.length <= maxLength;
    };

    wordlista.forEach((worda) => {
        const match = wordlistb.find((wordb) => isValidMatch(worda, wordb));
        if (match) {
            matches.push({
                [worda]: match });
            wordlistb = wordlistb.filter((wordb) => wordb !== match); // Remove matched word
        } else {
            matches.push({
                [worda]: null }); // No match found
        }
    });

    return matches;
}