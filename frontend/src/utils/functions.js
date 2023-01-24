export const camelCase = (param) => {
    let titleSplit = param.split("");
    if (param !== "") titleSplit[0] = titleSplit[0].toUpperCase();

    return titleSplit.join("");
  };