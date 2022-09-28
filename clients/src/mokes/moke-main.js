const mokeNavigation = {
   img:{
      src: './img/farmer-logo.svg',
      width: 44,
      height: 44
   }
};
const mokeInfo = {
   img:{
      src: './img/farmer-main.svg',
      width: 446,
      height: 627
   }
};
const mokeCards= {
   farmer: {
      imgSrc:["img/eat-1.svg","img/sprout-1.svg"],
      imgWidth:["52","56"],
      imgHeight:["52","56"],
      titleStatus:"Фермерские продукты",
      title:["Еда намного вкуснее","Натуральные продукты"],
      description: ["Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники",
      "Поставляем местные органические продукты выращенные без пестицидов и химических удобрений."]
   },
   shop:{
      imgSrc:["img/garbage-1.svg","img/no-meat-1.svg"],
      imgWidth:["56","56"],
      imgHeight:["56","56"],
      titleStatus: "Магазинные продукты",
      title:["Просроченные продукты","Некачественное мясо"],
      description:["Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара",
      "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов"]
   }
}

export {mokeNavigation,mokeInfo,mokeCards}