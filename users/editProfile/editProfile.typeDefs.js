import { gql } from "apollo-server-core";

export default gql`
  type EditProfioleResut {
    ok: Boolean!
    error: String
  }
  type Mutation {
    editProfile(
      firstName: String
      lastName: String
      userName: String
      email: String
      password: String
    ): EditProfioleResut!
  }
`;