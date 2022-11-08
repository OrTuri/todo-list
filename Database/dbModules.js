const { db } = require("./connection");

const insertToDB = (values, table, returnValue) => {
  return db(table).insert(values).returning(returnValue);
};

const updateRecord = (table, valuesToUpdate, where) => {
  return db(table)
    .where(where)
    .update(valuesToUpdate)
    .returning("*")
    .then((res) => {
      return res;
    });
};

const getDataFromDB = (table) => {
  return db(table).select("*").orderBy("todo_id", "desc");
};

const deleteFromDB = (table, where) => {
  return db(table).where(where).del().returning("*");
};

module.exports = { insertToDB, updateRecord, getDataFromDB, deleteFromDB };
