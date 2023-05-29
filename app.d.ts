// app.d.ts
/// <reference types="lucia-auth" />
declare namespace Lucia {
  type Auth = import("./lucia.js").Auth;
  type UserAttributes = {
    name?: String;
  };
  type User = {
    userId: String;
    name: String;
  };
}
