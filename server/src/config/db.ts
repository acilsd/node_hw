export const dbOpts = {
  string: `
  mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@gql-pp-bfkg4.mongodb.net/test?retryWrites=true
`,
  opts: { useNewUrlParser: true },
};
