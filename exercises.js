const input =
  "123123";

const ejercicio1 = () => {
  const inputArr = input.split("");
  let sum = 0
  /* const sum = inputArr.reduce((acc, curr, index) => {
    if (curr === inputArr[index + 1]) {
      return parseInt(acc) + parseInt(curr);
    } else if (index + 1 === inputArr.length && curr === inputArr[0]) {
      return parseInt(acc) + parseInt(curr);
    } else {
      return acc;
    }
  }, 0);

  console.log(sum); */


  for (let i = 0; i < inputArr.length; i++) {
    const current = inputArr[i];
    //esto hace circulaar la lista x_x
    const nextIndex = (i + 1) % inputArr.length;
  
    if (current === inputArr[nextIndex]) sum += parseInt(current);
  }

  console.log(sum)
};

const ejercicio2 = () => {
  const inputArr = input.split("");
  const numSaltos = inputArr.length / 2;
  let sum = 0

  /* const sum = inputArr.reduce((acc, curr, index) => {
    const restante = index + numSaltos - inputArr.length;

    const nuevoIndice = restante < 0 ? numSaltos + index : restante;

    if (curr === inputArr[nuevoIndice]) {
      return parseInt(acc) + parseInt(curr);
    } else {
      return acc;
    }
  }, 0);

  console.log(sum); */

  for (let i = 0; i < inputArr.length; i++) {
    const current = inputArr[i];
    const restante = i + numSaltos - inputArr.length;
    const nuevoIndice = restante < 0 ? numSaltos + i : restante;
  
    if (current === inputArr[nuevoIndice]) sum += parseInt(current);
  }
  console.log(sum);
};

ejercicio2();
