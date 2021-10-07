import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

export default class Photo extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Field not empty',
          },
        },

      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        notEmpty: {
          msg: 'Field not empty',
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/${this.getDataValue('filename')}`;
        },
      },
    }, {
      sequelize,
      tableName: 'photo',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id' });
  }
}
