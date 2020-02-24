import * as mongoose from 'mongoose'

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
  mongoose.connect('mongodb://127.0.0.1:27019/nest', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  }
];
