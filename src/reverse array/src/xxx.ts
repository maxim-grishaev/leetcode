// interface

// type Rec<T> = Record<string, boolean>
// type Tree = ;

const dict: Record<string, unknown> = {};
const addWord = (word: string) => {
  word.split('').reduce(
    (branch, c) => {
      if (!branch[c]) {
      branch[c] = {};
      if (!branch['?']) {
        branch['?'] = {}
      }
      branch['?'] = {
        ...branch['?'],
        [c]: branch[c],
      };
    }
    return branch[c];
  }, dict);
}

function setup(input: string[]) {
  input.forEach(addWord);
}

function isInDict(word: string): boolean {
  let branch = dict;
  return word.split('').every(c => {
    if (c in branch) {
      branch
    }
  })
}

setup(["cat", "car", "bar"]);

console.log("cat", isInDict("c*t")); // true
console.log("bat", isInDict("b*t")); // false
