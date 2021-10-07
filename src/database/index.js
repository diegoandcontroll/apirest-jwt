import Sequelize from 'sequelize';
import dbconfig from '../config/database';
import Student from '../models/Student';
import User from '../models/User';
import Photo from '../models/Photo';

const models = [Student, User, Photo];

const connection = new Sequelize(dbconfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
