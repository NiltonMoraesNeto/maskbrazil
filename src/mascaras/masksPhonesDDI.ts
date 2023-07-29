export const telefoneBR = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 19;
  let value = e.currentTarget.value;
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "+$1 $2");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");
  value = value.replace(/(-\d{4})(\d+?)$/, "$1");

  e.currentTarget.value = value;
  return e;
};

export const telefoneAmericaNorte = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 17;
  let value = e.currentTarget.value;
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{1})(\d)/, "+$1 $2");
  value = value.replace(/(\d{3})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  e.currentTarget.value = value;
  return e;
};

export const telefoneDE = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 17;
  let value = e.currentTarget.value;
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "+$1 $2");
  value = value.replace(/(\d{5})(\d)/, "$1 $2");
  e.currentTarget.value = value;
  return e;
};

export const telefoneGB = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 16;
  let value = e.currentTarget.value;
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "+$1 $2");
  value = value.replace(/(\d{5})(\d)/, "$1 $2");
  e.currentTarget.value = value;
  return e;
};

export const telefoneAL = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 17;
  let value = e.currentTarget.value;
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d)/, "+$1 $2");
  value = value.replace(/(\d{3})(\d)/, "$1 $2");
  value = value.replace(/(\d{3})(\d)/, "$1 $2");
  value = value.replace(/(\d{4})(\d)/, "$1 $2");
  e.currentTarget.value = value;
  return e;
};

export const telefoneAD = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 12;
  let value = e.currentTarget.value;
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d)/, "+$1 $2");
  value = value.replace(/(\d{3})(\d)/, "$1 $2");
  value = value.replace(/(\d{3})(\d)/, "$1 $2");
  e.currentTarget.value = value;
  return e;
};

export const telefoneAO = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 16;
  let value = e.currentTarget.value;
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d)/, "+$1 $2");
  value = value.replace(/(\d{3})(\d)/, "$1 $2");
  value = value.replace(/(\d{3})(\d)/, "$1 $2");
  value = value.replace(/(\d{3})(\d)/, "$1 $2");
  e.currentTarget.value = value;
  return e;
};

export const telefoneAN = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 13;
  let value = e.currentTarget.value;
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d)/, "+$1 $2");
  value = value.replace(/(\d{3})(\d)/, "$1 $2");
  value = value.replace(/(\d{4})(\d)/, "$1 $2");
  e.currentTarget.value = value;
  return e;
};

export const telefoneAR = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 21;
  let value = e.currentTarget.value;
  if (!value) return "";
  // ^\+\d{2}\ \d{3}\ \d{2}\-\d{4}\-\d{4}$ - esse é o regex que eu quero
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "+$1 $2");
  value = value.replace(/(\d{3})(\d)/, "$1 $2");
  value = value.replace(/(\d{2})(\d)/, "$1-$2");
  value = value.replace(/(\d{4})(\d)/, "$1-$2");
  value = value.replace(/(\d{4})(\d)/, "$1-$2");
  // value = value.replace(/+\d{2}/, '+$1 $2')
  // value = value.replace(/d{3}/, '$1 $2')
  // value = value.replace(/d{2}/, '$1-$2')
  // value = value.replace(/d{4}/, '$1-$2')
  // value = value.replace(/d{4}/, '$1-$2')
  e.currentTarget.value = value;
  return e;
};

export const telefoneDZ = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 18;
  let value = e.currentTarget.value;
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d)/, "+$1 $2");
  // value = value.replace(/(\d{4})(\d)/, '$1 $2')
  // value = value.replace(/(\d)(\d{2})$/, '$1-$2')
  // value = value.replace(/(\d)(\d{2})$/, '$1-$2')
  value = value.replace(/(\d)(\d{2})$/, "$1-$2");
  e.currentTarget.value = value;
  return e;
};

export const telefoneGeralDdi02 = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 16;
  let value = e.currentTarget.value;
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "+$1 $2");
  value = value.replace(/(\d{3})(\d)/, "$1 $2");
  value = value.replace(/(\d{3})(\d)/, "$1 $2");
  value = value.replace(/(\d{4})(\d)/, "$1 $2");
  e.currentTarget.value = value;
  return e;
};
