import { getServerSession } from "next-auth";

import { authOptions } from "../libs/authOptions";

export const getSession = async () => {
  return await getServerSession(authOptions);
};
