function balikKata(kata) {
    if (kata === ""){
      return "";
    }
    else {
      return balikKata(kata.substr(1)) + kata.charAt(0);
    }
  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS