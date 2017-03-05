// WIP: see example at https://github.com/realm/realm-js/blob/master/examples/ReactExample/components/realm.js
import Realm from 'realm';

class Exercise extends Realm.object {}
Exercise.schema =  {
  name: 'Exercise',
  primaryKey: 'id',
  properties: {
    id: 'integer',
    createdOn: { type: 'date', default: new Date() },
    name: 'string',
    units: 'string', // e.g., miles, sets (count), seconds/minutes
    reps: 'bool' // whether the exercise involves reps for use by workouts
  },
};

class ExerciseSession extends Realm.object {}
ExerciseSession.schema =  {
  name: 'ExerciseSession',
  primaryKey: 'id',
  properties: {
    id: 'integer',
    createdOn: { type: 'date', default: new Date() },
    value: 'float',
    reps: { type: 'integer', optional: true }, // not required, e.g., for runs and bike rides
    exercise: 'Exercise', // relationship with exercise, 1:1
  },
};

class Workout extends Realm.object {} // collection of ExerciseSessions
Workout.schema =  {
  name: 'Workout',
  primaryKey: 'id',
  properties: {
    id: 'integer',
    createdOn: { type: 'date', default: new Date() },
    date: 'date',
    exercise_sessions: { type: 'list', objectType: 'Exercise' }, // foreign keys of exercise sessions, 1: many
  },
};

class User extends Realm.object {}
User.schema =  {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: 'integer',
    createdOn: { type: 'date', default: new Date() },
    name: 'string',
    email: 'string', // validate
    // password:
    workouts: { type: 'list', objectType: 'Workout' }, // foreign keys of workouts, 1: many
  },
};

export default new Realm({schema: [User, Workout, Exercise, ExerciseSession]});
