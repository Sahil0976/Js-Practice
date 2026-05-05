function isPalindrome(word) {
    word = word.toLowerCase()
    let newword = "";
    for (let i = word.length - 1; i >= 0; i--) {
        newword += word[i];
    }

    if (newword === word) {
        return true;
    }
    else {
        return false;
    }
}

isPalindrome("moonlight") // Return false;
