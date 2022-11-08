const val = [
  {
    Id: "0010l00001PnA4eAAF",
    Name: "Retail Full Name 1000",
    attributes: {
      type: "Account",
      url: "/services/data/v55.0/sobjects/Account/0010l00001PnA4eAAF",
    },
  },
  {
    Id: "0010l00001PnA4eAAF",
    Name: "Retail Full Name 9999",
    attributes: {
      type: "Customer",
      url: "/services/data/v55.0/sobjects/Account/0010l00001PnA4eAAF",
    },
  },
];

const newVal = val.map(function (p) {
  for (const key in p) {
    console.log(p[key]);
  }
});
