export const cpfcnpj = (e: React.FormEvent<HTMLInputElement>) => {
  let v = e.currentTarget.value;
  v = v.replace(/\D/g, "");

  if (v.length <= 11) {
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  } else {
    v = v.substring(0, 14); // limita em 14 números
    v = v.replace(/^(\d{2})(\d)/, "$1.$2");
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
    v = v.replace(/(\d{4})(\d)/, "$1-$2");
  }

  e.currentTarget.value = v;
  return e;
};

export function cep(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 9;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  e.currentTarget.value = value;
  return e;
}

export const telefone = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 15;
  let value = e.currentTarget.value;
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  e.currentTarget.value = value;
  return e;
};

export function currency(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

  e.currentTarget.value = value;
  return e;
};

export function mascaraData(e: React.FormEvent<HTMLInputElement>) {
  let val = e.currentTarget.value;

  var pass = val;
  var expr = /[0123456789]/;

  for (var i = 0; i < pass.length; i++) {
// charAt -> retorna o caractere posicionado no índice especificado
let lchar = val.charAt(i);
let nchar = val.charAt(i + 1);

if (i == 0) {
  // search -> retorna um valor inteiro, indicando a posição do inicio da primeira
  // ocorrência de expReg dentro de instStr. Se nenhuma ocorrencia for encontrada o método retornara -1
  // instStr.search(expReg);
  if ((lchar.search(expr) != 0) || (lchar > "3")) {
    val = "";
  }

} else if (i == 1) {

  if (lchar.search(expr) != 0) {
    // substring(indice1,indice2)
    // indice1, indice2 -> será usado para delimitar a string
    var tst1 = val.substring(0, (i));
    val = tst1;
    continue;
  }

  if ((nchar != '/') && (nchar != '')) {
    var tst1 = val.substring(0, (i) + 1);

    if (nchar.search(expr) != 0)
      var tst2 = val.substring(i + 2, pass.length);
    else
      var tst2 = val.substring(i + 1, pass.length);

    val = tst1 + '/' + tst2;
  }

} else if (i == 4) {

  if (lchar.search(expr) != 0) {
    var tst1 = val.substring(0, (i));
    val = tst1;
    continue;
  }

  if ((nchar != '/') && (nchar != '')) {
    var tst1 = val.substring(0, (i) + 1);

    if (nchar.search(expr) != 0)
      var tst2 = val.substring(i + 2, pass.length);
    else
      var tst2 = val.substring(i + 1, pass.length);

    val = tst1 + '/' + tst2;
  }
}

if (i >= 6) {
  if (lchar.search(expr) != 0) {
    var tst1 = val.substring(0, (i));
    val = tst1;
  }
}
  }

  if (pass.length > 10)
    val = val.substring(0, 10);
    e.currentTarget.value = val;
    return e;
};
