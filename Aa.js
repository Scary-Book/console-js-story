const readline = require('readline');
require('colors');
const { stdin: input, stdout: output } = require('process');
const question = (text, correctOptions) => { // new
  const rl = readline.createInterface({ input, output });

  return new Promise((resolve) => {
    console.log("")
    rl.question(text + " ", (amogus) => {

      //if (correctOptions.includes(amogus)) { // new
      if (+amogus <= correctOptions.length) {
        resolve(amogus);

        steps.push(amogus) // new
      } else console.log('impossible command to execute.'.red); // new

      rl.close();
    });
  });
};

const startJone = async () => {
  await question('1 Hello! or 2 ...', ["1", "2"]);
  console.log("Dneire:How are you doing?")
  const at2 = await question(" 1 You're not my friend! or 2 ok", ["1", "2"]);
  if (at2 == 2) {
    console.log("Jone:How are you doing?")
    console.log("Dneire:Not very.")
    const at4 = await question(" 1 what happened? or 2 ...", ["1", "2"]);
    console.log("to be continued...")
  }
  if (at2 == 1) {
    console.log("Dneire:why?")
    const at3 = await question(" 1 you are $&%$@! or 2 I was joking:)", ["1", "2"]);
    if (at3 == 1) {
      console.log("Dneire:F*ck you!")
      console.log("to be continued...")
    }
    if (at3 == 2) {
      console.log("Dneire:ok")
      console.log("to be continued...")
    }
  }
};
const startDneire = async () => {

  console.log("Jone:Hello my friend")

  const at1 = await question(" 1 Hello! 2 come here &$#@%$% 3 How are you doing? ", ["1", "2", "3"]);

  if (at1 == 3) {
    console.log("Jone:Ok.")
    console.log("Jone:How are you doing?")
    const at2 = await question(" 1 Not very... 2 AMONGUS ", ["1", "2"]);

    if (at2 == 1) {
      console.log("Jone:what happened?")

      console.log("to be continued...")
    }

    if (at2 == 2) {

      console.log("Jone:AMONGUS")

      console.log("Dneire:AMONGUS")

      console.log("Jone:AMONGUS")

      console.log("Dneire:AMONGUS")

      console.log("Jone:AMONGUS")

      console.log("Dneire:AMONGUS")

      console.log("Jone:AMONGUS")

      console.log("Dneire:AMONGUS")

      console.log("Jone:AMONGUS")

      console.log("Dneire:AMONGUS")

    }

  }

  if (at1 == 2) {

    console.log("Jone:Come here, you bastard!!!")

    console.log("Jone:aaaaaaaaaaaaaaaaaaaaa!!!!!!!")

    console.log("Dneire:aaaaaaaaaaaaaaaaaaaaa!!!!!!!")

    console.log("to be continued...")
  }

  if (at1 == 1) {

    console.log("Jone:How are you doing?")

    const at3 = await question(" 1 Not very... 2 I'll kill you!!! ", ["1", "2"]);

    if (at3 == 2) {
      console.log("to be continued...")
    }
    if (at3 == 1) {
      console.log("Jone:what happened?")

      console.log("to be continued...")
    }
  }

};

const steps = []

const stotow = process.argv[3];
if (stotow == "none") {

  setTimeout(() => console.log("Dneire:Hello!"), 3000)
  setTimeout(() => console.log("Jone:Hello my friend!"), 6000)
  setTimeout(() => console.log("Dneire:How are you doing?"), 9000)
  setTimeout(() => console.log("Jone:Ok"), 12000)
  setTimeout(() => console.log("Jone:How are you doing?"), 15000)
  setTimeout(() => console.log("Dneire:Not very."), 18000)
  setTimeout(() => console.log("Jone:what happened?"), 21000)
  setTimeout(() => console.log("to be continued..."), 24000)


}

if (stotow == "Jone") {

  console.log("Dneire:Hello!")

  startJone();

  //rl.question(' Hello! or ...', (answer) => {
  //  console.log (answer)
  //if (answer=="Hello"||answer=="...")
  //{

  //}
  //else console.log("impossible command to execute.".red)
  //})


}

if (stotow == "Dneire") {


  startDneire();
}

//rl.question('stotow none, stotow Dneire, stotow Jone? ', (answer) => {
//console.log (answer)
//})


// console.log("Dneire:Hello!");
// setTimeout (()=>console.log("Jone:Hello my friend!"), 3000)
