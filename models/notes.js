'use strict';
module.exports = (sequelize, DataTypes) => {
  var notes = sequelize.define('notes', {
    noteId: DataTypes.DATE,
    noteTitle: DataTypes.STRING,
    noteBody: DataTypes.STRING
  }, {});
  notes.associate = function(models) {
    // associations can be defined here
  };
  return notes;
};