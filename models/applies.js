/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applies', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    study_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'studies',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'applies'
  });
};
