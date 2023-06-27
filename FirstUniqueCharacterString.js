function firstUniqueCharacter(s) {
    // Create a hash map to store the characters and their frequencies.
    const charCounts = {};
    for (const char of s) {
      if (charCounts[char] === undefined) {
        charCounts[char] = 0;
      }
      charCounts[char]++;
    }
  
    // Initialize a pointer to the first non-repeating character.
    let i = 0;
  
    // Iterate through the hash map:
    for (const [char, count] of Object.entries(charCounts)) {
      if (count === 1) {
        return i;
      }
      i++;
    }

    return -1;
  }
  
  

  const s = "leetcode";
  const result = firstUniqueCharacter(s);
  console.log(result); 
  
  const s2 = "loveleetcode";
  const result2 = firstUniqueCharacter(s2);
  console.log(result2); 
  
  const s3 = "aabb";
  const result3 = firstUniqueCharacter(s3);
  console.log(result3); 
  