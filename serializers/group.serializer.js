const createGroupData = (req, res, next) => {
  let reciveData = res.data || {};
  let resultData = {};

  if (reciveData) {
    resultData = {
      id: reciveData.dataValues.id,
      name: reciveData.dataValues.name,
      category: reciveData.dataValues.category,
    };
  }
  res.data = resultData;
  next();
};

const addMemberData = (req, res, next) => {
  let reciveData = res.data || {};
  let resultData = {};

  if (reciveData) {
    let group = {
      id: reciveData[0].dataValues.group.id,
      name: reciveData[0].dataValues.group.name,
      category: reciveData[0].dataValues.group.category,
    };
    let users = [];
    reciveData.forEach((element) => {
      let name =
        element.dataValues.user.firstName + element.dataValues.user.lastName;
      let user = {
        id: element.dataValues.user.id,
        name: name,
        email: element.dataValues.user.email,
      };
      users.push(user);
    });
    group.users = users;
    resultData = {
      group,
    };
  }
  res.data = resultData;
  next();
};

const addExpenseData = (req, res, next) => {
  let reciveData = res.data || {};
  let resultData = {};

  if (reciveData) {
    let expense = {
      id: reciveData.expense.dataValues.id,
      name: reciveData.expense.dataValues.name,
      baseAmount: reciveData.expense.dataValues.baseAmount,
      splitType: reciveData.expense.dataValues.splitType,
      groupId: reciveData.expense.dataValues.groupId,
    };
    let transactions = [];
    reciveData.transactions.forEach((element) => {
      let transaction = {
        id: element.dataValues.id,
        payeeId: element.dataValues.payeeId,
        payerId: element.dataValues.payeeId,
        amountToPay: element.dataValues.amountToPay,
        isSettle: element.dataValues.isSettle,
      };
      transactions.push(transaction);
    });
    resultData = {
      expense,
      transactions,
    };
  }
  res.data = resultData;
  next();
};

module.exports = {
  createGroupData,
  addMemberData,
  addExpenseData,
};
