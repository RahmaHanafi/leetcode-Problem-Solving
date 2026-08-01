function minimumPushes(word: string): number {
  let n: number = word.length,
    total: number = 0;
  let chars: number[] = new Array(26).fill(0);

  for (let i = 0; i < n; i++) {
    chars[word.charCodeAt(i) - 97] = chars[word.charCodeAt(i) - 97] + 1;
  }

  let filteredChars: number[] = chars
    .filter((x) => x != 0)
    .sort((a, b) => b - a);

  for (let i = 0; i < filteredChars.length; i++) {
    if (i <= 7) {
      total += filteredChars[i];
    } else if (i >= 8 && i <= 15) {
      total += filteredChars[i] * 2;
    } else if (i >= 16 && i <= 23) {
      total += filteredChars[i] * 3;
    } else if (i >= 24) {
      total += filteredChars[i] * 4;
    }
  }

  return total;
}
